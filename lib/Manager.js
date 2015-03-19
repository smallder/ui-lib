/**
 * Objects manager with lazy initializtion
 */
lib.Manager = lib.extends(lib.Object, {
	items: {},
	register: function(id, constructorClass, constructorArguments) {
		if (this.items[id] !== undefined) {
			throw 'Item "' + id + '" is already registered';
		}
		
		this.items[id] = {
			constructor: constructorClass,
			arguments: constructorArguments,
			instance: null
		};
	},
	getInstance: function(id) {
		if (this.items[id] === undefined) {
			throw 'Item "' + id + '" is not registered';
		}
		var item = this.items[id];
		if (item.instance === null) {
			item.instance = new item.constructor(item.arguments);
		}
		
		return item.instance;
	}
});
