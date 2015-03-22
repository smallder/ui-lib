/**
 * Array data provider
 */

lib.ns('lib.provider');

lib.provider.Array = lib.extends(lib.provider.Base, {
	/**
	 * Loads provider data
	 * @return {lib.Deferred}
	 */
	load: function() {
		var def = new lib.Deferred();
		def.resolve(true);
		return def;
	},
	
	/**
	 * Saves provider data
	 * @return {lib.Deferred}
	 */
	save: function() {
		var def = new lib.Deferred();
		def.resolve(true);
		return def;
	}
});
