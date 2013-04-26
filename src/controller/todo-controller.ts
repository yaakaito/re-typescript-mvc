/// <reference path="../core/controller.ts" />
/// <reference path="../view/todo-view.ts" />
/// <reference path="../core/mediator.ts" />


module TodoApp {

    export class TodoController implements Core.Controller {

        private todoListView : TodoListView = new TodoListView();

        constructor() {
            Core.mediator.subscribe(this, 'UpdateTodos', this.updateTodoList);
        }

        view() : Core.View {
            return this.todoListView;
        }

        private updateTodoList(event): void {
            this.view().render();
        }
    }

}