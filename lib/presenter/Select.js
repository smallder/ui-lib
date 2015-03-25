/**
 * Select presenter
 */

lib.ns('lib.presenter');

lib.presenter.Select = lib.extends(lib.presenter.Field, {
	/**
	 * @property {lib.view.Select} view
	 * View instance
	 */
	
	/**
	 * Presenter constructor
	 * @param {lib.view.Select} view View instance
	 */
	constructor: function(view) {
		this.callParent('constructor', arguments);
		
		this.setDataBuilder(this.getStoreData);
		
		this.storablePresenterInit();
	},
	
	/**
	 * Sets presenter to actual state
	 */
	sync: function() {
		this.view.setItems(this.dataBuilder());
		
		this.callParent('sync', arguments);
	},
	
	/**
	 * Returns store data
	 * @return {Array}
	 */
	getStoreData: function() {
		return this.store.getData();
	}
});

lib.mixin(
	lib.presenter.Select,
	lib.mixins.Buildable,
	lib.mixins.StorablePresenter
);
