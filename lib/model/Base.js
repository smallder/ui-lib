/**
 * Base model
 */

lib.ns('lib.model');

lib.model.Base = lib.extends(lib.Object, {
	/**
	 * @property {String[]} fields
	 * Fields used
	 */
	fields: [],
	
	/**
	 * @property {Object/Array} data
	 * Models data
	 */
	data: [],
	
	/**
	 * @property {lib.provider.Base} provider
	 * Data provider
	 */
	provider: null,
	
	/**
	 * Base model constructor
	 * @param {Object} config Model config
	 */
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		lib.override(this, config);
		
		if (!this.provider) {
			throw 'Data provider is undefined';
		}
	},
	
	/**
	 * Loads data through provider
	 * @return {lib.Deferred}
	 */
	load: function() {
		var def = new lib.Deferred();
		var self = this;
		lib.when(
			this.provider.load()
		).then(function(success) {
			self.data = self.convertData(self.provider.getData());
			self.fire('load', self);
			def.resolve(success);
		})
		return def;
	},
	
	/**
	 * Saves data through provider
	 * @return {lib.Deferred}
	 */
	save: function() {
		var def = new lib.Deferred();
		var self = this;
		lib.when(
			this.provider.save()
		).then(function(success) {
			self.fire('save', self);
			def.resolve(success);
		})
		return def;
	},
	
	/**
	 * Returns model data
	 * @return {Object/Array}
	 */
	getData: function() {
		//this.data = this.convertData(this.provider.getData());
		this.fire('getData', this);
		return this.data;
	},
	
	/**
	 * Sets model data
	 * @param {Object/Array} data Model data
	 */
	setData: function(data) {
		this.data = data;
		this.fire('setData', this);
		this.provider.setData(data);
		this.fire('update', this);
	},
	
	/**
	 * Convert data to the inner format
	 * @param {Object/Array} data Data that received from provider
	 */
	convertData: function(rawData) {
		throw 'An abstract method must be overwritten';
	}
});

lib.mixin(lib.model.Base, lib.mixins.Observable);
