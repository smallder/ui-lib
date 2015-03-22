/**
 * Groupable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Groupable = {
	/**
	 * @property {String} groupField
	 * Field name for grouping
	 */
	groupField: '',
	
	/**
	 * @property {Integer} groupPrefixLen
	 * Grouping field value limiter
	 */
	groupPrefixLen: 0,
	
	/**
	 * Init mixin
	 */
	groupableInit: function() {
		this.setDataBuilder(this.getGroupedData);
	},
	
	/**
	 * Returns group name
	 * @param {Object} item Fields
	 * @return {String}
	 */
	groupHandler: function(item) {
		var value = item[this.groupField] || '~';
		if (this.groupPrefixLen > 0) {
			return value.substr(0, 1);
		} else {
			return value;
		}
	},
	
	/**
	 * Sets field name for grouping
	 * @param {String} field Field name
	 */
	setGroupField: function(field) {
		this.groupField = field;
	},
	
	/**
	 * Sets group field value limit
	 * @param {Integer} len Value length limit
	 */
	setGroupPrefixLen: function(len) {
		this.groupPrefixLen = len;
	},
	
	/**
	 * Returns grouped data
	 * @param {Object[]} Recordset
	 * @return {Object[]}
	 */
	getGroupedData: function(data) {
		var groupsMap = {};
		var groupsNames = [];
		for (var i = 0, len = data.length; i < len; i++) {
			var item = data[i];
			var groupName = this.groupHandler(item).toUpperCase();
			if (groupsMap[groupName] === undefined) {
				groupsMap[groupName] = [];
				groupsNames.push(groupName);
			}
			groupsMap[groupName].push(item);
		}
		
		var groups = [];
		groupsNames.sort();
		for (var i = 0, len = groupsNames.length; i < len; i++) {
			groups.push({
				name: groupsNames[i],
				items: groupsMap[groupsNames[i]]
			});
		}
		
		return groups;
	}
};
