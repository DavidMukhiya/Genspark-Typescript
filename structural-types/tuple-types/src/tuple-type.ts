let intro :{
    name:string,
    country:string,
    age:number,
    contact:[number, string]
}[] = [
    {
        name: "David Mukhiya",
        country:"USA",
        age:25,
        contact:[6261111111,"david@gmail.com"]
    }
]

console.log(intro[0].contact[0])