var Core;
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
