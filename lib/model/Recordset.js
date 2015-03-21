/**
 * Recordset model
 */

lib.ns('lib.model');

lib.model.Recordset = lib.extends(lib.model.Base, {
	/**
	 * Convert data for the recordset model
	 * @param {Array} data Data that received from provider
	 */
	convertData: function(rawData) {
		var data = [];
		
		for(var rowNum = 0, rowsCount = rawData.length; rowNum < rowsCount; rowNum++) {
			data.push(lib.model.Record.prototype.convertData.call(this, rawData[rowNum]));
		}
		
		return data;
	}
});