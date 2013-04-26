/// <reference path="./core/model.ts" />
/// <reference path="./core/controller.ts" />
/// <reference path="./core/view.ts" />
/// <reference path="./core/mediator.ts" />
/// <reference path="./controller/layout.ts" />
/// <reference path="./view/layout-view.ts" />
/// <reference path="./model/todo.ts" />
/// <reference path="./controller/todo-controller.ts" />
/// <reference path="./view/todo-view.ts" />

$(() => {

    new TodoApp.Layout();
    new TodoApp.TodoController();
});