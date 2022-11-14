class User {
    email:string
    name:string
    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
}

let david = new User("david@gmail.com", "david");
console.log(david);