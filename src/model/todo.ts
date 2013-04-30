/// <reference path="../core/model.ts" />

module TodoApp {

    export class Todo implements Core.Model {

        private title : string = 'untitled';
        private completed : bool = false;

        constructor(title: string) {
            this.title = title;
        }

        toggle() : void {
            this.completed = !this.completed;
        }

        updateTitle(title: string) : void {
            this.title = title;
        }

        attributes() : any {
            return {
                title:     this.title,
                completed: this.completed
            };
        }
    }

    export var Todos = [];
}