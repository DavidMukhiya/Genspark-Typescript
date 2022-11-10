"use strict";
const ADMIN = 'admin';
const READ_ONLY = "user";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["READ_ONLY"] = 1] = "READ_ONLY";
})(Permission || (Permission = {}));
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
    permission: Permission.READ_ONLY
};
console.log(you.permission);
//# sourceMappingURL=enum-type.js.map