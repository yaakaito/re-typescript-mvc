module Core {

    export class Mediator {
        
        private subscribers = [];

        subscribe(context, event, callback): void {
            this.subscribers.push({
                context : context,
                event   : event,
                callback: callback    
            });
        }

        unsubscribe(context): void {
            var subscribers = this.subscribers;
            this.filterTargets({ key : 'context' , value : context}).forEach((target) => {
                var index = subscribers.indexOf(target);
                if (index >= 0) {
                    subscribers.splice(index, 1);
                }
            });
        }

        publish(event): void {
            this.filterTargets({ key : 'event' , value : event }).forEach((target) => {
                target.call(target.context, arguments);
            });
        }

        private filterTargets(info) : any[] {
            return this.subscribers.filter((subscriber) => {
                return subscriber[info.key] == info.value
            });
        }
    }

    export var mediator = new Mediator();
}