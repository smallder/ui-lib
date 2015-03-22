/**
 * Applicaton
 */
lib.Application = lib.extends(lib.Object, {
	/**
	 * @property {lib.Manager} models
	 * Models registered
	 */
	models: null,
	
	/**
	 * @property {lib.Manager} components
	 * Components registered
	 */
	components: null,
	
	/**
	 * Application constructor
	 */
	constructor: function() {
		this.callParent('constructor', arguments);
		
		this.observableInit();
		
		this.models = new lib.Manager();
		this.components = new lib.Manager();
		
		var app = this;
		$(function() {
			app.fire('ready');
		});
	}
});

lib.mixin(lib.Application, lib.mixins.Observable);

/**
 * Returns the singleton Application instance
 * @return {lib.Application}
 */
lib.Application.getInstance = (function() {
	var instance = null;
	
	return function() {
		if (instance === null) {
			instance = new lib.Application();
		}
		return instance;
	};
})();
