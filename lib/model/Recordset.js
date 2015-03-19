/**
 * Recordset model
 */

lib.ns('lib.model');

lib.model.Recordset = lib.extends(lib.model.Base, {
	getConverterHandler: function() {
		return this.applyDataTable;
	}
});