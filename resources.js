var app = lib.Application.getInstance();

app.models.register(
	'users',
	lib.model.Recordset,
	{
		fields: ['id', 'firstname', 'lastname', 'gender'],
		provider: new lib.provider.Array({
			data: [
				{id: 1, firstname: 'Остап', lastname: 'Бендер', gender: 'M'},
				{id: 2, firstname: 'Игнат', lastname: 'Делюгин', gender: 'M'},
				{id: 3, firstname: 'Максим', lastname: 'Дергачев', gender: 'M'},
				{id: 4, firstname: 'Петр', lastname: 'Дуров', gender: 'M'},
				{id: 5, firstname: 'Иван', lastname: 'Иванов', gender: 'M'},
				{id: 6, firstname: 'Сергей', lastname: 'Иванов', gender: 'M'},
				{id: 7, firstname: 'Ольга', lastname: 'Ивушина', gender: 'F'},
				{id: 8, firstname: 'Марианна', lastname: 'Маринина', gender: 'F'},
				{id: 9, firstname: 'Ирина', lastname: 'Мурашова', gender: 'F'},
				{id: 10, firstname: 'Олег', lastname: 'Мухин', gender: 'M'},
				{id: 11, firstname: 'Жан', lastname: 'Никаноров', gender: 'M'},
				{id: 12, firstname: 'Иван', lastname: 'Никитин', gender: 'M'},
				{id: 13, firstname: 'Петр', lastname: 'Сергеев', gender: 'M'},
				{id: 14, firstname: 'Bender', lastname: 'Rodriguez', gender: 'R'}
			]
		})
	}
);

app.models.register(
	'user-2',
	lib.model.Record,
	{
		fields: ['id', 'firstname', 'lastname', 'gender'],
		provider: new lib.provider.Array({
			data: {id: 2, firstname: 'Игнат', lastname: 'Делюгин', gender: 'M'}
		})
	}
);

app.components.register(
	'field-firstname',
	lib.component.Field,
	{
		model: 'user-2',
		name: 'firstname'
	}
);

app.components.register(
	'select-user',
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
	'select-grouped-user',
	lib.component.SelectGrouped,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname',
		groupField: 'lastname'
	}
);

app.components.register(
	'list-user',
	lib.component.List,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname',
	}
);


app.components.register(
	'list-grouped-user',
	lib.component.ListGrouped,
	{
		model: 'user-2',
		name: 'id',
		store: 'users',
		valueField: 'id',
		titleField: 'firstname',
		groupField: 'lastname'
	}
);