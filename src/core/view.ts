/// <reference path="../../d.ts/jquery.d.ts" />
/// <reference path="./controller.ts" />

module Core {

    export interface View {
        element(): JQuery;
        render(): void;
    }

    // (sender, event)
    var proxy: Function = function(context, callback) {
        return function(event) {
            callback.call(context, this, event);
        }
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
            $(document.body).on(action, selector, proxy(this.controller, callback));
        }
    }

}