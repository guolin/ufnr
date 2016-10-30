#!/usr/bin/env node

var async = require('async');
var request = require('request');
var registries = require('./registries.json');
var npm = require('npm');
var _ = require('lodash');

function exit(err) {
    console.error(err);
    process.exit(1);
}

function getFastest(rs) {
	var avalable = rs.filter(function(r) {return !r.error});
	if(!avalable || avalable.length < 1) {
		return exit('no avalable registry.');
	}
	return _.orderBy(avalable, 'time')[0];
}

function useRegistry(registry) {
	if(!registry) return exit('no avalable registry.');
	npm.load(function(err) {
		if (err) return exit(err);
		npm.commands.config(['set', 'registry', registry.registry], function(err, data) {
			if (err) return exit(err);
			var newR = npm.config.get('registry');
			console.log('Registry has been set to: ' + newR)
		})
	});
}

async.map(
	Object.keys(registries),
	function(key, cbk) {
		var registry = registries[key];
		var start = +new Date();
		request(registry.registry + 'pedding', {timeout: 1500},function(error, res) {
			cbk(null, {
				name: key,
				registry: registry.registry,
				time: (+new Date() - start),
				error: error || res.statusCode !== 200 ? true : false
			});
		});
	},
	function(err, rs) {
		if (err) return exit(err);
		try{
			useRegistry(getFastest(rs));
		} catch(e){
			return exit('error', e);
		};
	});