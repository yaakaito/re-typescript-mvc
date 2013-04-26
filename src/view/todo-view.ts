/// <reference path="../core/view.ts" />
/// <reference path="../model/todo.ts" />
/// <reference path="../../d.ts/jquery.d.ts" />

module TodoApp {

    export class TodoListView implements Core.View {

        public todos : any[] = Todos;

        element(): JQuery {
            return $('#todo-list');
        }

        render(): void {
            var element = this.element();
            var todos = this.todos;

            element.html('');
            for (var i = 0, l = todos.length; i < l; i++) {

                () => {
                    var todo = todos[i];
                    var view = new TodoView();
                    view.todo = todo;
                    view.render();
                    element.append(view.element());
                }()
            }
        }
    }

    export class TodoView implements Core.View {

        public todo: Todo = null;
        private todoElement: JQuery = null;

        element(): JQuery {
            return this.todoElement;
        }

        render(): void {
            var htmlString = Template.Todo(this.todo.attributes());
            this.todoElement = $(htmlString);
        }
    }

}

module Template {

    export var Todo = (attributes: any) : string => {
        var checked = attributes.completed ? 'checked' : '';
        var title = attributes.title;
        var html = '';

        html    += '<div class="view">';
        html    += '  <input class="toggle" type="checkbox" ' + checked + '>';
        html    += '  <label>' + title + '</label>';
        html    += '  <button class="destroy"></button>';
        html    += '</div>';
        html    += '<input class="edit" value="' + title + '">';

        return html;
    }
}