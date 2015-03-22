/**
 * Base data provider
 */

lib.ns('lib.provider');

lib.provider.Base = lib.extends(lib.Object, {
	/**
	 * @property {Object/Array} data
	 * Prodider data
	 */
	data: {},
	
	/**
	 * Provider constructor
	 * @param {Object} config Provider config
	 */
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		this.data = {};
		
		lib.override(this, config);
	},
	
	/**
	 * Loads provider data
	 * @return {lib.Deferred}
	 */
	load: function() {
		throw 'An abstract method must be overwritten';
	},
	
	/**
	 * Saves provider data
	 * @return {lib.Deferred}
	 */
	save: function() {
		throw 'An abstract method must be overwritten';
	},
	
	/**
	 * Returns provider data
	 * @return {Object/Array}
	 */
	getData: function() {
		return this.data;
	},
	
	/**
	 * Sets provider data
	 * @param {Object/Array} data
	 */
	setData: function(data) {
		this.data = data;
	}
});
