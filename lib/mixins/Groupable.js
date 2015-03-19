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
	groupHandler: function(item) {
		var value = item[this.groupField] || '';
		return value.substr(0, 1) || '~';
	},
	setGroupField: function(field) {
		this.groupField = field;
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
		
		groups = [];
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
