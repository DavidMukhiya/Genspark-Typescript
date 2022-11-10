const ADMIN = 'admin'
const READ_ONLY = "user"


//an enum is a way of giving more friendly name to sets of numeric values

enum Permission{
    ADMIN, 
    READ_ONLY
}


const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
    permission: Permission.READ_ONLY
}

console.log(you.permission)