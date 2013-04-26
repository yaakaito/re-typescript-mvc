/// <reference path="../core/controller.ts" />

module Todo {

    export class Layout implements Core.Controller {

        private LayoutView: LayoutView = new LayoutView();

        view(): Core.View {
            return this.applicationView;
        }
    }
}