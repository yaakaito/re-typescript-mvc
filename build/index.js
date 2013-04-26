var Todo;
(function (Todo) {
    var TodoController = (function () {
        function TodoController() {
            this.todoListView = new Todo.TodoListView();
        }
        TodoController.prototype.view = function () {
            return this.todoListView;
        };
        return TodoController;
    })();
    Todo.TodoController = TodoController;    
})(Todo || (Todo = {}));
;var Core;
(function (Core) {
    var HOGe = (function () {
        function HOGe() { }
        return HOGe;
    })();    
})(Core || (Core = {}));
;var Todo;
(function (Todo) {
    var Todo = (function () {
        function Todo(title) {
            this.title = 'untitled';
            this.completed = false;
            this.title = title;
        }
        Todo.prototype.toggle = function () {
            this.completed = !this.completed;
        };
        Todo.prototype.attributes = function () {
            return {
                title: this.title,
                completed: this.completed
            };
        };
        return Todo;
    })();
    Todo.Todo = Todo;    
})(Todo || (Todo = {}));
var Todo;
(function (Todo) {
    var TodoListView = (function () {
        function TodoListView() {
            this.todos = [];
        }
        TodoListView.prototype.element = function () {
            return $('#todo-list');
        };
        TodoListView.prototype.render = function () {
            var element = this.element();
            var todos = this.todos;
            element.html('');
            for(var i = 0, l = todos.length; i < l; i++) {
                (function () {
                    var todo = todos[i];
                    var view = new TodoView();
                    view.todo = todo;
                    view.render();
                    element.append(view.element());
                })();
            }
        };
        return TodoListView;
    })();
    Todo.TodoListView = TodoListView;    
    var TodoView = (function () {
        function TodoView() {
            this.todo = null;
            this.todoElement = null;
        }
        TodoView.prototype.element = function () {
            return this.todoElement;
        };
        TodoView.prototype.render = function () {
            var htmlString = Template.Todo(this.todo.attributes());
            this.todoElement = $(htmlString);
        };
        return TodoView;
    })();
    Todo.TodoView = TodoView;    
})(Todo || (Todo = {}));
var Template;
(function (Template) {
    Template.Todo = function (attributes) {
        var checked = attributes.completed ? 'checked' : '';
        var title = attributes.title;
        var html = '';
        html += '<div class="view">';
        html += '  <input class="toggle" type="checkbox" ' + checked + '>';
        html += '  <label>' + title + '</label>';
        html += '  <button class="destroy"></button>';
        html += '</div>';
        html += '<input class="edit" value="' + title + '">';
    };
})(Template || (Template = {}));
var Todo;
(function (Todo) {
    var TodoController = (function () {
        function TodoController() {
            this.todoListView = new Todo.TodoListView();
        }
        TodoController.prototype.view = function () {
            return this.todoListView;
        };
        return TodoController;
    })();
    Todo.TodoController = TodoController;    
})(Todo || (Todo = {}));
;var Todo;
(function (Todo) {
    var Todo = (function () {
        function Todo(title) {
            this.title = 'untitled';
            this.completed = false;
            this.title = title;
        }
        Todo.prototype.toggle = function () {
            this.completed = !this.completed;
        };
        Todo.prototype.attributes = function () {
            return {
                title: this.title,
                completed: this.completed
            };
        };
        return Todo;
    })();
    Todo.Todo = Todo;    
})(Todo || (Todo = {}));
;var Todo;
(function (Todo) {
    var TodoListView = (function () {
        function TodoListView() {
            this.todos = [];
        }
        TodoListView.prototype.element = function () {
            return $('#todo-list');
        };
        TodoListView.prototype.render = function () {
            var element = this.element();
            var todos = this.todos;
            element.html('');
            for(var i = 0, l = todos.length; i < l; i++) {
                (function () {
                    var todo = todos[i];
                    var view = new TodoView();
                    view.todo = todo;
                    view.render();
                    element.append(view.element());
                })();
            }
        };
        return TodoListView;
    })();
    Todo.TodoListView = TodoListView;    
    var TodoView = (function () {
        function TodoView() {
            this.todo = null;
            this.todoElement = null;
        }
        TodoView.prototype.element = function () {
            return this.todoElement;
        };
        TodoView.prototype.render = function () {
            var htmlString = Template.Todo(this.todo.attributes());
            this.todoElement = $(htmlString);
        };
        return TodoView;
    })();
    Todo.TodoView = TodoView;    
})(Todo || (Todo = {}));
var Template;
(function (Template) {
    Template.Todo = function (attributes) {
        var checked = attributes.completed ? 'checked' : '';
        var title = attributes.title;
        var html = '';
        html += '<div class="view">';
        html += '  <input class="toggle" type="checkbox" ' + checked + '>';
        html += '  <label>' + title + '</label>';
        html += '  <button class="destroy"></button>';
        html += '</div>';
        html += '<input class="edit" value="' + title + '">';
    };
})(Template || (Template = {}));
