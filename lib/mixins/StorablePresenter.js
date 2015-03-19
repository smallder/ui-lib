/**
 * Storable Presenter mixin
 */

lib.ns('lib.mixins');

lib.mixins.StorablePresenter = function(name) {
	this.connectors[name] = function() {
		var def = new lib.Deferred();
		var self = this;
		
		lib.when(
			this.store && this.store.load()
		).then(function(success, message) {
			def.resolve(success, message);
		})
		
		return def;
	}
};

lib.mixins.StorablePresenter.mixinId = 'StorablePresenter';

lib.apply(lib.mixins.StorablePresenter.prototype, {
	store: null,
	setStore: function(store) {
		this.store = store;
		this.store.on('update', this.sync, this);
	}
});
