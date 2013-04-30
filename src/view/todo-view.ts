/// <reference path="../core/view.ts" />
/// <reference path="../model/todo.ts" />
/// <reference path="../../d.ts/jquery.d.ts" />

module TodoApp {

    export class TodoListView extends Core.BindableView implements Core.View {

        public todos : any[] = Todos;
        private children: any[] = [];

        element(): JQuery {
            return $('#todo-list');
        }

        render(): void {
            var element = this.element();
            var todos = this.todos;

            element.html('');
            this.children = [];

            for (var i = 0, l = todos.length; i < l; i++) {

                () => {
                    var view = new TodoView();
                    view.todoIndex = i;
                    view.render();
                    element.append(view.element());
                    this.children.push(view);
                }()
            }
        }

        childAt(index: number): TodoView {
            return this.children[index];
        }

        // TODO: TodoViewに一部移す？
        // セレクターごとでよいのでは
        toggleIndexOf(sender: JQuery): number {
            return this.indexOf(sender, "#todo-list li input.toggle");
        }

        labelIndexOf(sender: JQuery): number {
            return this.indexOf(sender, "#todo-list li div label");
        }

        editIndexOf(sender: JQuery): number {
            return this.indexOf(sender, "#todo-list li input.edit");
        }

        private indexOf(sender: JQuery, selector: string): number {
            return $(selector).index($(sender));
        }
    }

    export class TodoView implements Core.View {

        public todoIndex: number = null;
        public editing: bool = false;
        private todoElement: JQuery = $('<li></li>');

        element(): JQuery {
            return this.todoElement;
        }

        editElement(): JQuery {
            return this.todoElement.find('input.edit');
        }

        render(): void {
            var todo = Todos[this.todoIndex];
            this.todoElement.html('');
            var htmlString = Template.Todo(todo.attributes(), this.editing);
            this.todoElement.append($(htmlString));
        }
    }

}

module Template {

    export var Todo = (attributes: any, editing: bool) : string => {
        var checked = attributes.completed ? 'checked' : '';
        var editing = editing ? 'class="editing"' : '';
        var title = attributes.title;
        var html = '';

        html    += '<div class="view" ' + editing + '>';
        html    += '  <input class="toggle" type="checkbox" ' + checked + '>';
        html    += '  <label>' + title + '</label>';
        html    += '  <button class="destroy"></button>';
        html    += '</div>';
        html    += '<input class="edit" value="' + title + '">';

        return html;
    }
}