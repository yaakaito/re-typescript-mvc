/// <reference path="../core/controller.ts" />
/// <reference path="../../d.ts/jquery.d.ts" />
/// <reference path="../core/mediator.ts" />
/// <reference path="../model/todo.ts" />

module TodoApp {

    export class Layout implements Core.Controller {

        private layoutView: LayoutView = new LayoutView();

        constructor() {
            this.view().controller = this;
            this.view().on('keyup', '#new-todo', this.addNewTodo);
        }

        view(): LayoutView {
            return this.layoutView;
        }

        addNewTodo(event): void {
            var title = this.view().newTodo.val();
            if (event.which != 13 || title == '') {
                return;
            }

            var todo = new Todo(title);
            Todos.push(todo);

            Core.mediator.publish('UpdateTodos');
        }
    }
}