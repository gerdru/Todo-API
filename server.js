var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet someone for lunch',
	completed: false
},{
	id: 2,
	description: 'Go to laundry',
	completed: false
}, {
	id: 3,
	description: 'wash the dishes',
	completed: true
}];

app.get('/', function (req, res){
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo) {
		if (todoId === todo.id){
			matchedTodo = todo;
		}		
		});
	if (matchedTodo){
		res.json(matchedTodo || matchedTodo!='undefined');
	} else {
		res.status(404).send();
	}
});

app.listen(PORT, function (){
	console.log('Epxress listening on port' + PORT);
}); 