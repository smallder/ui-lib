/**
 * Base component
 */

lib.ns('lib.component');

lib.component.Base = lib.extends(lib.Object, {
	id: '',
	model: null,
	view: null,
	renderers: [],
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
	getViewInstance: function(config) {
		return new lib.view.Base(config);
	},
	connect: function() {
		this.view.getPresenter().setModel(this.model);
		this.view.getPresenter().connect();
		
		for (var i = 0, len = this.renderers.length; i < len; i++) {
			this.view.setRenderer.apply(this.view, this.renderers[i]);
		}
	},
	render: function() {
		this.view.renderWrapper(this.id);
	}
});
