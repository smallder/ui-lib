/**
 * Base model
 */

lib.ns('lib.model');

lib.model.Base = lib.extends(lib.Object, {
	fields: [],
	data: [],
	provider: null,
	converter: null,
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		lib.override(this, config);
		
		this.converter = this.getConverterHandler();
		
		if (!this.provider) {
			throw 'Data provider is undefined';
		}
	},
	getConverterHandler: function() {
		return this.applyDataRow;
	},
	load: function() {
		var def = new lib.Deferred();
		var self = this;
		lib.when(
			this.provider.load()
		).then(function(success) {
			self.data = self.converter(self.provider.getData());
			self.fire('load', self);
			def.resolve(success);
		})
		return def;
	},
	save: function() {
		var def = new lib.Deferred();
		var self = this;
		lib.when(
			this.provider.save()
		).then(function(success) {
			self.fire('save', self);
			def.resolve(success);
		})
		return def;
	},
	getData: function() {
		//this.data = this.converter(this.provider.getData());
		this.fire('getData', self);
		return this.data;
	},
	setData: function(data) {
		this.data = data;
		this.fire('setData', self);
		this.provider.setData(data);
		this.fire('update', self);
	},
	applyDataTable: function(rawData) {
		var data = [];
		
		for(var rowNum = 0, rowsCount = rawData.length; rowNum < rowsCount; rowNum++) {
			var row = this.applyDataRow(rawData[rowNum]);
			data.push(row);
		}
		
		return data;
	},
	applyDataRow: function(rawData) {
		var row = {};
		for (var fieldNum = 0, fieldsCount = this.fields.length; fieldNum < fieldsCount; fieldNum++) {
			var fieldName = this.fields[fieldNum];
			row[fieldName] = rawData[fieldName];
		}
		
		return row;
	}
});

lib.mixin(lib.model.Base, lib.mixins.Observable);