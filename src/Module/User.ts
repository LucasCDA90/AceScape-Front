import { BehaviorSubject } from "rxjs";

type UserPropsType = {
    _id: string
    firstName: string
    lastName: string
    username: string
    email: string
    token: string
}

export class User {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    token: string;

    constructor({_id, token, firstName, lastName, username, email}: UserPropsType) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.token = token;
    }
}

export const user$ = new BehaviorSubject<User | null>(null)
