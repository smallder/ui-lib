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
	}
});