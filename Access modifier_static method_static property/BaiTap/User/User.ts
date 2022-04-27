export enum Role {
    Admin = 1,
    User = 2
}

export class User {
    protected name: string;
    protected email: string;
    role: Role;

    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getInfo() {
        return this.name;
    }

    isAdmin() {
        if (this.role === Role.Admin) {
            console.log("admin")
        } else {
            console.log("user")
        }
    }
}