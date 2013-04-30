/// <reference path="../core/controller.ts" />
/// <reference path="../view/todo-view.ts" />
/// <reference path="../core/mediator.ts" />


module TodoApp {

    export class TodoController implements Core.Controller {

        private todoListView : TodoListView = new TodoListView();

        constructor() {
            Core.mediator.subscribe(this, 'UpdateTodos', this.updateTodoList);
            var view = this.view();
            view.controller = this;
            view.on('click',   'input.toggle', this.toggleStatus);
            view.on('dblclick', 'label',        this.edit);
            view.on('keyup',   '.edit',        this.finishEditOnEnter);
            view.on('blur',    '.edit',        this.finishEdit);
        }

        view() : TodoListView {
            return this.todoListView;
        }

        private updateTodoList(event): void {
            this.view().render();
        }

        private toggleStatus(sender, event): void {
            var index = this.view().toggleIndexOf(sender);
            Todos[index].toggle();
        }

        private edit(sender, event): void {
            var index = this.view().labelIndexOf(sender);
            this.view().childAt(index).element().addClass('editing');
        }

        private finishEditOnEnter(sender, event): void {
            if(event.which == 13) {
                this.finishEdit(sender, event);
            }
        }

        private finishEdit(sender, event): void {
            var index = this.view().editIndexOf(sender);
            var view = this.view().childAt(index);
            view.element().removeClass('editing')
            var val = view.editElement().val();

            if (val) {
                Todos[index].updateTitle(val);
                view.render();
            }
       }
    }

}