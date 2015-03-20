var app = lib.Application.getInstance();

app.models.register(
	'users',
	lib.model.Recordset,
	{
		fields: ['id', 'firstname', 'lastname', 'gender', 'city'],
		provider: new lib.provider.Array({
			data: [
				{id: 1, firstname: 'Остап', lastname: 'Бендер', gender: 'М', city: 'Одесса'},
				{id: 2, firstname: 'Игнат', lastname: 'Делюгин', gender: 'М', city: 'Москва'},
				{id: 3, firstname: 'Максим', lastname: 'Дергачев', gender: 'М', city: 'Ярославль'},
				{id: 4, firstname: 'Петр', lastname: 'Дуров', gender: 'М', city: 'Санкт-Петербург'},
				{id: 5, firstname: 'Иван', lastname: 'Иванов', gender: 'М', city: 'Москва'},
				{id: 6, firstname: 'Сергей', lastname: 'Иванов', gender: 'М', city: 'Ярославль'},
				{id: 7, firstname: 'Ольга', lastname: 'Ивушина', gender: 'Ж', city: 'Москва'},
				{id: 8, firstname: 'Марианна', lastname: 'Маринина', gender: 'Ж', city: 'Санкт-Петербург'},
				{id: 9, firstname: 'Ирина', lastname: 'Мурашова', gender: 'Ж', city: 'Ярославль'},
				{id: 10, firstname: 'Олег', lastname: 'Мухин', gender: 'М', city: 'Санкт-Петербург'},
				{id: 11, firstname: 'Жан', lastname: 'Никаноров', gender: 'М', city: 'Москва'},
				{id: 12, firstname: 'Иван', lastname: 'Никитин', gender: 'М', city: 'Ярославль'},
				{id: 13, firstname: 'Петр', lastname: 'Сергеев', gender: 'М', city: 'Санкт-Петербург'},
				{id: 14, firstname: 'Bender', lastname: 'Rodriguez', gender: 'Р', city: 'Новый Нью-Йорк'}
			]
		})
	}
);

app.models.register(
	'user-1',
	lib.model.Record,
	{
		fields: ['id', 'firstname', 'lastname', 'gender'],
		provider: new lib.provider.Array({
			data: {id: 1, firstname: 'Остап', lastname: 'Бендер', gender: 'М'}
		})
	}
);

app.models.register(
	'user-2',
	lib.model.Record,
	{
		fields: ['id', 'firstname', 'lastname', 'gender'],
		provider: new lib.provider.Array({
			data: {id: 2, firstname: 'Игнат', lastname: 'Делюгин', gender: 'М'}
		})
	}
);

app.components.register(
	'field',
	lib.component.Field,
	{
		model: 'user-1',
		name: 'firstname'
	}
);

app.components.register(
	'select',
	lib.component.Select,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname'
	}
);

app.components.register(
	'select-grouped',
	lib.component.SelectGrouped,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname',
		groupField: 'lastname',
		groupPrefixLen: 1
	}
);

app.components.register(
	'list',
	lib.component.List,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'lastname',
		renderers: [[
			lib.view.renderer.ListSuffix,
			['firstname']
		]]
	}
);

app.components.register(
	'list-grouped-simple',
	lib.component.ListGrouped,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname',
		groupField: 'gender',
		groupsFloating: false,
		renderers: [[
			lib.view.renderer.ListSuffix,
			['lastname']
		]]
	}
);

app.components.register(
	'list-grouped-floating-lastname',
	lib.component.ListGrouped,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname',
		groupField: 'lastname',
		groupPrefixLen: 1,
		groupsFloating: true,
		renderers: [[
			lib.view.renderer.ListSuffix,
			['lastname']
		]]
	}
);


app.components.register(
	'list-grouped-floating-city',
	lib.component.ListGrouped,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname',
		groupField: 'city',
		groupsFloating: true,
		renderers: [[
			lib.view.renderer.ListSuffix,
			['lastname']
		]]
	}
);
