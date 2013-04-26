/// <reference path="../core/view.ts" />
/// <reference path="../../d.ts/jquery.d.ts" />


module TodoApp {

    export class LayoutView extends Core.BindableView implements Core.View {

        public newTodo: JQuery = $('#new-todo');

        element(): JQuery {
            return $('#body');
        }        

        render(): void {
            return;
        }
    }
}