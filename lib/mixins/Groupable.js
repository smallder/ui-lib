/**
 * Groupable mixin
 * @depends lib.mixins.Buildable
 */

lib.ns('lib.mixins');

lib.mixins.Groupable = function(name) {
	this.setDataBuilder(this.getGroupedData);
};

lib.mixins.Groupable.mixinId = 'Groupable';

lib.apply(lib.mixins.Groupable.prototype, {
	groupField: '',
	groupPrefixLen: 0,
	groupHandler: function(item) {
		var value = item[this.groupField] || '~';
		if (this.groupPrefixLen > 0) {
			return value.substr(0, 1);
		} else {
			return value;
		}
	},
	setGroupField: function(field) {
		this.groupField = field;
	},
	setGroupPrefixLen: function(len) {
		this.groupPrefixLen = len;
	},
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
});
