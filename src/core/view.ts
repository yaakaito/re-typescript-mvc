/// <reference path="../../t.ds/jquery.d.ts /">

module Core {

    export interface View {
        element(): JQuery;
        render(): void;
    }

    export class BindableView implements View {

        element(): JQuery {
            return null;
        }

        render(): void{
            return;
        }

        on(action, selector, callback) : void {
            this.element().on(action, selector, $.proxy(callback, this));
        }
    }

}