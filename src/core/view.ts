/// <reference path="../../d.ts/jquery.d.ts" />
/// <reference path="./controller.ts" />

module Core {

    export interface View {
        element(): JQuery;
        render(): void;
    }

    export class BindableView implements View {

        // weak
        public controller: Controller = null;

        element(): JQuery {
            return null;
        }

        render(): void{
            return;
        }

        on(action, selector, callback) : void {
            $(selector).on(action, $.proxy(callback, this.controller));
        //    this.element().on(action, selector, $.proxy(callback, this));
        }
    }

}