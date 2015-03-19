/**
 * Field view
 */

lib.ns('lib.view');

lib.view.Field = lib.extends(lib.view.Base, {
	type: 'text',
	name: '',
	value: '',
	getDomElementInstance: function() {
		return $('<input/>');
	},
	getPresenterInstance: function() {
		return new lib.presenter.Field(this);
	},
	getValue: function() {
		return this.value;
	},
	setValue: function(value) {
		this.value = value;
	},
	render: function(parentElement) {
		this.domElement
			.attr('type', this.type)
			.attr('name', this.name)
			.val(this.value);
		
		this.callParent('render', arguments);
	}
});