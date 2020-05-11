import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorage {

    constructor() { }

    static set(key: any, payload: any) {
        if (typeof payload === 'string') {
            localStorage.setItem(key, payload);
        } else if (typeof payload === 'object') {
            localStorage.setItem(key, JSON.stringify(payload));
        } else {
            throw new Error('LocalStorage Error: \'value\' can only be a string or an object.');
        }
    }

    static get(key: any): any {
        let result;
        const payload = localStorage.getItem(key);
        try {
            result = <object>JSON.parse(payload);
        } catch (e) {
            result = <string>payload;
        }
        return result;
    }

    static clear(): void {
        localStorage.clear();
    }

    static remove(key: string): void {
        localStorage.removeItem(key);
    }

    static hasOwnProperty(key: string): Boolean {
        return localStorage.hasOwnProperty(key);
    }
}
