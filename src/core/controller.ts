/// <reference path="../../t.ds/jquery.d.ts /">
/// <reference path="./view.ts" />


module Core {

    export interface Controller {
        view(): Core.View;
    }

}