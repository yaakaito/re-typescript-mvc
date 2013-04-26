/// <reference path="../core/controller.ts" />
/// <reference path="../view/todo-view.ts" />

module Todo {

    export class TodoController implements Core.Controller {

        private todoListView : TodoListView = new TodoListView();

        view() : Core.View {
            return this.todoListView;
        }
    }
    
}