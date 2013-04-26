/// <reference path="../../t.ds/jquery.d.ts /">

module Core {

    export interface View {
        element(): JQuery;
        render(): void;
    }

}