/**
 * @var {Object} Root namespace of framework
 */
var lib = (function() {
	var id = 0;
	
	return {
		/**
		 * Extends child with a parent
		 * @param {Function} child Child constructor
		 * @param {Function} parent Parent constructor
		 * @param {Object} override Child members to override/add 
		 * @return {Function} Child constructor
		 */
		extends: function(child, parent, override) {
			// for .extends(parent, override)
			if (arguments.length == 2 && typeof parent == 'object') {
				override = parent;
				parent = child;
				child = undefined;
			}
			
			if (typeof override != 'object') {
				override = {};
			}
			
			if (child === undefined) {
				child = override.hasOwnProperty('constructor')
					? override.constructor
					: function() {
						this.callParent('constructor', arguments);
					};
			}
			
			var donor = function() {};
			donor.prototype = parent.prototype;
			child.superClass = parent.prototype;
			child.prototype = new donor();
			child.prototype.constructor = child;
			
			child.prototype.callParent = function(method, args) {
				var prototype = this.constructor.prototype;
				var caller = this.callParent.caller;
				var context = this.constructor.prototype;
				do {
					var stop = context.hasOwnProperty(method) && context[method] === caller;
					context = context.constructor.superClass;
				} while(context && !stop);
				
				return context ? context[method].apply(this, args || []) : undefined;
			};
			
			for (var key in override) {
				if (key == 'constructor') {
					continue;
				}
				if (override.hasOwnProperty(key)) {
					child.prototype[key] = override[key];
				}
			}
			
			return child;
		},
		
		/**
		 * Extends child with a parent
		 * @param {Function} target Target constructor
		 * @param {Function} mixin[] Mixin constructors
		 */
		mixin: function(target) {
			var mixins = Array.prototype.slice.call(arguments, 1);
			
			target.prototype.mixins = {};
			for (var i = 0, len = mixins.length; i < len; i++) {
				var mixin = mixins[i];
				for (var key in mixin.prototype) {
					if (key == 'constructor') {
						continue;
					}
					if (key == 'mixins') {
						continue;
					}
					if (target.prototype[key] === undefined) {
						target.prototype[key] = mixin.prototype[key];
					}
				}
				target.prototype.mixins[mixin.mixinId] = mixin;
			}
		},
		
		/**
		 * Apply properties from source to target
		 * @param {Object} target Target object
		 * @param {Object} source Source object
		 * @param {Object} defaults Default values
		 * @return {Object}
		 */
		apply: function(target, source, defaults) {
			if (target === undefined) {
				target = {};
			}
			
			if (typeof defaults == 'object') {
				this.apply(target, defaults);
			}
			
			if (typeof target == 'object' && typeof source == 'object') {
				for (var key in source) {
					if (source.hasOwnProperty(key)) {
						target[key] = source[key];
					}
				}
			}
			
			return target;
		},
		
		/**
		 * Override properties from source to target
		 * @param {Object} target Target object
		 * @param {Object} source Source object
		 * @param {Object} defaults Default values
		 * @return {Object}
		 */
		override: function(target, source, defaults) {
			if (typeof defaults == 'object') {
				this.override(target, defaults);
			}
			
			if (typeof target == 'object' && typeof source == 'object') {
				for (var key in source) {
					if (source.hasOwnProperty(key)
						&& typeof target[key] !== 'undefined'
					) {
						target[key] = source[key];
					}
				}
			}
			
			return target;
		},
		
		/**
		* Initialize namespace
		* @param {String} Namespace
		* @return {Object}
		*/
		ns: function(namespace) {
			var obj = window;
			var parts = namespace.split('.');
			for (var i = 0, length = parts.length; i < length; i++) {
				var name = parts[i];
				obj = obj[name] = obj[name] || {};
			};
			
			return obj;
		},
		
		/**
		* Deferred constructor
		* @return {jQuery.Deferred}
		*/
		Deferred: $.Deferred,
		
		/**
		* Deferred callback
		* @return {Function}
		*/
		when: $.when,
		
		/**
		 * Return unique id
		 * @param {String} Prefix
		 * @return {String}
		 */
		getId: function(prefix) {
			return prefix + id++;
		}
	};
})();
