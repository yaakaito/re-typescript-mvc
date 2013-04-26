/// <reference path="../core/controller.ts" />
/// <reference path="../../d.ts/jquery.d.ts" />

module Todo {

    export class Layout implements Core.Controller {

        private layoutView: LayoutView = new LayoutView();

        constructor() {
            
        }

        view(): Core.View {
            return this.layoutView;
        }
    }
}