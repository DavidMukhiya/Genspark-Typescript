var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    return User;
}());
var david = new User("david@gmail.com", "david");
console.log(david);
