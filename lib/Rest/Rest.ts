import { request } from "undici";

export interface RestOptions {
    auth: string;
    version: number;
}

export class RestResponse {
    public body: any;
    public headers: any;
    public status: number;
    constructor(response: any) {
        this.body = response.body;
        this.headers = response.headers;
        this.status = response.status;
    }
}

export class Rest {
    public auth: string;
    public version: number;
    public url: string;
    constructor(options: RestOptions) {
        this.auth = options.auth;
        this.version = options.version;
        this.url = `https://discord.com/api/v${this.version}`;
    }

    public async get(endpoint: string) {
        const res = await request(`${this.url}${endpoint}`, {
            headers: {
                Authorization: this.auth
            }
        });
        return res.body;
    }
}