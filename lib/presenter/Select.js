/**
 * Select presenter
 */

lib.ns('lib.presenter');

lib.presenter.Select = lib.extends(lib.presenter.Field, {
	constructor: function(view) {
		this.setDataBuilder(this.getStoreData);
		
		this.callParent('constructor', arguments);
	},
	sync: function() {
		this.view.setItems(this.dataBuilder());
		
		this.callParent('sync', arguments);
	},
	getStoreData: function() {
		return this.store.getData();
	}
});

lib.mixin(
	lib.presenter.Select,
	lib.mixins.Buildable,
	lib.mixins.StorablePresenter
);
