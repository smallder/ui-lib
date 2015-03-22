/**
 * Base component (IoC container)
 */

lib.ns('lib.component');

lib.component.Base = lib.extends(lib.Object, {
	/**
	 * @property {String} id
	 * Component unique id
	 */
	id: '',
	
	/**
	 * @property {lib.model.Base/String} model
	 * Model used
	 */
	model: null,
	
	/**
	 * @property {lib.view.Base} view
	 * View instance
	 */
	view: null,
	
	/**
	 * @property {Function[]} renderers
	 * Additional view renderers
	 */
	renderers: [],
	
	/**
	 * Component constructor
	 * @param {Object} config Component config
	 */
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		this.renderers = [];
		
		lib.override(this, config);
		
		if (!this.id) {
			this.id = lib.getId('component-');
		}
		
		if (typeof this.model == 'string') {
			this.model = app.models.getInstance(this.model);
		}
		if (!this.model) {
			throw 'Model is undefined';
		}
		
		if (!this.view) {
			this.view = this.getViewInstance(config);
		}
		
		this.connect();
	},
	
	/**
	 * Creates the new view instance
	 * @param {Object} config View config
	 * @return {lib.view.Base}
	 */
	getViewInstance: function(config) {
		return new lib.view.Base(config);
	},
	
	/**
	 * Connect component elements within
	 */
	connect: function() {
		this.view.getPresenter().setModel(this.model);
		this.view.getPresenter().connect();
		
		for (var i = 0, len = this.renderers.length; i < len; i++) {
			this.view.setRenderer.apply(this.view, this.renderers[i]);
		}
	},
	
	/**
	 * Runs component rendering
	 */
	render: function() {
		this.view.renderWrapper(this.id);
		
		lib.Application.getInstance().on('ready', function() {
			this.view.getPresenter().startUp();
		}, this);
	}
});
