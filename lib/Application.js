/**
 * Applicaton
 */
lib.Application = lib.extends(lib.Object, {
	constructor: function() {
		this.callParent('constructor', arguments);
		
		this.models = new lib.Manager();
		this.components = new lib.Manager();
		
		var app = this;
		$(function() {
			app.fire('ready');
		});
	},
	models: null,
	components: null
});

lib.mixin(lib.Application, lib.mixins.Observable);

lib.Application.getInstance = (function() {
	var instance = null;
	
	return function() {
		if (instance === null) {
			instance = new lib.Application();
		}
		return instance;
	};
})();
