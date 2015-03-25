/**
 * Single record model
 */

lib.ns('lib.model');

lib.model.Record = lib.extends(lib.model.Base, {
	/**
	 * Convert data for the single record model
	 * @param {Object} data Data that received from provider
	 */
	convertData: function(rawData) {
		var row = {};
		for (var fieldNum = 0, fieldsCount = this.fields.length; fieldNum < fieldsCount; fieldNum++) {
			var fieldName = this.fields[fieldNum];
			row[fieldName] = rawData[fieldName];
		}
		
		return row;
	},
	
	/**
	 * Returns field value
	 * @param {String} name Field name
	 * @return {String}
	 */
	getFieldValue: function(name) {
		if (this.data[name] === undefined) {
			throw 'Field ' + name + ' is not found';
		}
		
		this.fire('getFieldValue', this);
		
		return this.data[name];
	},
	
	/**
	 * Sets field value
	 * @param {String} name Field name
	 * @param {String} value Field value
	 */
	setFieldValue: function(name, value) {
		if (this.data[name] === undefined) {
			throw 'Field ' + name + ' is not found';
		}
		
		this.data[name] = value;
		this.fire('setFieldValue', this);
		
		this.provider.setData(this.data);
		this.fire('update', this);
	}
});
