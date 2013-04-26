/// <reference path="../core/controller.ts" />

module Todo {

    export class Layout implements Core.Controller {

        private layoutView: LayoutView = new LayoutView();

        view(): Core.View {
            return this.layoutView;
        }
    }
}