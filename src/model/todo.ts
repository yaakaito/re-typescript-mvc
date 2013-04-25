/// <reference path="../core/model.ts" />

module Todo {
    export class Todo implements Core.Model {

        private title : string = 'untitled';
        private completed : bool = false;

        constructor(title: string) {
            this.title = title;
        }

        toggle() : void {
            this.completed = !this.completed;
        }

        attributes() : any {
            return {
                title:     this.title,
                completed: this.completed
            };
        }
    }
}