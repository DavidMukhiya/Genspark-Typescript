const properties:{
    image: string;
    title: string;
    price: number;
    location:{
        address: string;
        city: string;
        code: number;
        country: string;
    }
    contact:string;
    availableToRent: boolean;
}[] = [
    {
        image:'',
        title: 'Colombian shack',
        price: 45,
        location: {
            address:'flat 37',
            city:'LA',
            code: 1442,
            country: 'US'
        },
        availableToRent: true,
        contact:'12345676788'
    },
    {
        image:'',
        title: 'Indiana shack',
        price: 45,
        location: {
            address:'flat 25',
            city:'Newyork',
            code: 143,
            country: 'US'
        },
        availableToRent: true,
        contact:'12345676788'
    }
]

console.log(properties);