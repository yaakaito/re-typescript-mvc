var TodoApp;
(function (TodoApp) {
    var Layout = (function () {
        function Layout() {
            this.layoutView = new TodoApp.LayoutView();
            this.view().controller = this;
            this.view().on('keyup', '#new-todo', this.addNewTodo);
        }
        Layout.prototype.view = function () {
            return this.layoutView;
        };
        Layout.prototype.addNewTodo = function (event) {
            var title = this.view().newTodo.val();
            if(event.which != 13 || title == '') {
                return;
            }
            var todo = new TodoApp.Todo(title);
            TodoApp.Todos.push(todo);
            Core.mediator.publish('UpdateTodos');
        };
        return Layout;
    })();
    TodoApp.Layout = Layout;    
})(TodoApp || (TodoApp = {}));
;var TodoApp;
(function (TodoApp) {
    var TodoController = (function () {
        function TodoController() {
            this.todoListView = new TodoApp.TodoListView();
            Core.mediator.subscribe(this, 'UpdateTodos', this.updateTodoList);
        }
        TodoController.prototype.view = function () {
            return this.todoListView;
        };
        TodoController.prototype.updateTodoList = function (event) {
            this.view().render();
        };
        return TodoController;
    })();
    TodoApp.TodoController = TodoController;    
})(TodoApp || (TodoApp = {}));
;var Core;
(function (Core) {
    var Mediator = (function () {
        function Mediator() {
            this.subscribers = [];
        }
        Mediator.prototype.subscribe = function (context, event, callback) {
            this.subscribers.push({
                context: context,
                event: event,
                callback: callback
            });
        };
        Mediator.prototype.unsubscribe = function (context) {
            var subscribers = this.subscribers;
            this.filterTargets({
                key: 'context',
                value: context
            }).forEach(function (target) {
                var index = subscribers.indexOf(target);
                if(index >= 0) {
                    subscribers.splice(index, 1);
                }
            });
        };
        Mediator.prototype.publish = function (event) {
            this.filterTargets({
                key: 'event',
                value: event
            }).forEach(function (target) {
                target.callback.call(target.context, arguments);
            });
        };
        Mediator.prototype.filterTargets = function (info) {
            return this.subscribers.filter(function (subscriber) {
                return subscriber[info.key] == info.value;
            });
        };
        return Mediator;
    })();
    Core.Mediator = Mediator;    
    Core.mediator = new Mediator();
})(Core || (Core = {}));
;var Core;
(function (Core) {
    var HOGe = (function () {
        function HOGe() { }
        return HOGe;
    })();    
})(Core || (Core = {}));
;var Core;
(function (Core) {
    var BindableView = (function () {
        function BindableView() {
            this.controller = null;
        }
        BindableView.prototype.element = function () {
            return null;
        };
        BindableView.prototype.render = function () {
            return;
        };
        BindableView.prototype.on = function (action, selector, callback) {
            $(selector).on(action, $.proxy(callback, this.controller));
        };
        return BindableView;
    })();
    Core.BindableView = BindableView;    
})(Core || (Core = {}));
;$(function () {
    new TodoApp.Layout();
    new TodoApp.TodoController();
});
;var TodoApp;
(function (TodoApp) {
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
    TodoApp.Todo = Todo;    
    TodoApp.Todos = [];
})(TodoApp || (TodoApp = {}));
;var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TodoApp;
(function (TodoApp) {
    var LayoutView = (function (_super) {
        __extends(LayoutView, _super);
        function LayoutView() {
            _super.apply(this, arguments);

            this.newTodo = $('#new-todo');
        }
        LayoutView.prototype.element = function () {
            return $('#body');
        };
        LayoutView.prototype.render = function () {
            return;
        };
        return LayoutView;
    })(Core.BindableView);
    TodoApp.LayoutView = LayoutView;    
})(TodoApp || (TodoApp = {}));
;var TodoApp;
(function (TodoApp) {
    var TodoListView = (function () {
        function TodoListView() {
            this.todos = TodoApp.Todos;
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
    TodoApp.TodoListView = TodoListView;    
    var TodoView = (function () {
        function TodoView() {
            this.todo = null;
            this.todoElement = $('<li></li>');
        }
        TodoView.prototype.element = function () {
            return this.todoElement;
        };
        TodoView.prototype.render = function () {
            this.todoElement.html('');
            var htmlString = Template.Todo(this.todo.attributes());
            this.todoElement.append($(htmlString));
        };
        return TodoView;
    })();
    TodoApp.TodoView = TodoView;    
})(TodoApp || (TodoApp = {}));
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
        return html;
    };
})(Template || (Template = {}));
