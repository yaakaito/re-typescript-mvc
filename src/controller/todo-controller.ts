/// <reference path="../core/controller.ts" />
/// <reference path="../view/todo-view.ts" />
/// <reference path="../core/mediator.ts" />


module TodoApp {

    export class TodoController implements Core.Controller {

        private todoListView : TodoListView = new TodoListView();

        constructor() {
            Core.mediator.subscribe(this, 'UpdateTodos', this.updateTodoList);
            this.view().controller = this;
            this.view().on('click', 'input.toggle', this.toggleStatus);
        }

        view() : TodoListView {
            return this.todoListView;
        }

        private updateTodoList(event): void {
            this.view().render();
        }

        private toggleStatus(sender, event): void {
            var index = this.view().indexOf(sender);
            Todos[index].toggle();
        }
    }

}