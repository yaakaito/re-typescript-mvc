/// <reference path="../../t.ds/jquery.d.ts /">

module Core {

    export interface Controller {
        element(): JQuery;
        didLoad(): void;
    }

}