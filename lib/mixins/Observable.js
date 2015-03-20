/**
 * Observable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Observable = function() {
	this.listeners = [];
};

lib.mixins.Observable.mixinId = 'Observable';

lib.apply(lib.mixins.Observable.prototype, {
	listeners: [],
	on: function(event, handler, scope) {
		if (this.listeners[event] === undefined) {
			this.listeners[event] = [];
		}
		
		this.listeners[event].push({
			handler: handler,
			scope: scope
		})
	},
	un: function(event, handler) {
		if (this.listeners[event] === undefined) {
			return;
		}
		
		for (var i = 0, len = this.listeners[event].length; i < len; i++) {
			if (this.listeners[event][i].handler === handler) {
				this.listeners[event][i] = {};
			}
		}
	},
	fire: function(event) {
		if (this.listeners[event] === undefined) {
			return;
		}
		
		for (var i = 0, len = this.listeners[event].length; i < len; i++) {
			if (this.listeners[event][i].handler) {
				this.listeners[event][i].handler.apply(
					this.listeners[event][i].scope || this,
					arguments
				);
			}
		}
	}
});
