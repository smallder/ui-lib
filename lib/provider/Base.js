/**
 * Base data provider
 */

lib.ns('lib.provider');

lib.provider.Base = lib.extends(lib.Object, {
	data: [],
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		lib.override(this, config);
	},
	load: function() {
		var def = new lib.Deferred();
		def.resolve(true);
		return def;
	},
	save: function() {
		var def = new lib.Deferred();
		def.resolve(true);
		return def;
	},
	getData: function() {
		return this.data;
	},
	setData: function(data) {
		this.data = data;
	}
});
