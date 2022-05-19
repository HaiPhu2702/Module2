"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Role = void 0;
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
})(Role = exports.Role || (exports.Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return this.name;
    };
    User.prototype.isAdmin = function () {
        if (this.role === Role.Admin) {
            console.log("admin");
        }
        else {
            console.log("user");
        }
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map