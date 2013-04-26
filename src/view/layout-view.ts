/// <reference path="../core/view.ts" />
/// <reference path="../../d.ts/jquery.d.ts" />


module Todo {

    export class LayoutView extends Core.BindableView implements Core.View {

        element(): JQuery {
            return $('#body');
        }        

        render(): void {
            return;
        }
    }
}