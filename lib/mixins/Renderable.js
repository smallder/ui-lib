/**
 * Renderable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Renderable = function(name) {};

lib.mixins.Renderable.mixinId = 'Renderable';

lib.apply(lib.mixins.Renderable.prototype, {
	renderer: null,
	setRenderer: function(renderer, args, prepend) {
		var prevRenderer = this.renderer || function() {};
		this.renderer = function() {
			if (!prepend) {
				prevRenderer.apply(this, arguments);
			}
			
			renderer.apply(this, args || []);
			
			if (prepend) {
				prevRenderer.apply(this, arguments);
			}
		};
	},
	render: function() {
		this.renderer.apply(this, arguments)
	}
});
