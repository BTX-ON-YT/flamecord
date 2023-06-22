import { EventEmitter } from 'events';

export interface ClientOptions {
    auth: string;
}

export class Client extends EventEmitter {
    constructor(options: ClientOptions) {
        super();
    }
}