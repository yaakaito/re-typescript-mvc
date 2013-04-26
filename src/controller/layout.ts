/// <reference path="../core/controller.ts" />
/// <reference path="../../d.ts/jquery.d.ts" />

module Todo {

    export class Layout implements Core.Controller {

        private layoutView: LayoutView = new LayoutView();

        constructor() {
            this.view().on('click', '#new-todo', this.addNewTask);
        }

        view(): LayoutView {
            return this.layoutView;
        }

        addNewTask(event): void {
            var title = this.view().newTodo.val();
            if (event.which != 13 || title == '') {
                return;
            }

            var todo = new Todo(title);
            Todos.push(todo);
        }
    }
}