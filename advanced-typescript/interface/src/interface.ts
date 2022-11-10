interface Review{
    name: string; 
    stars: number;
    date: string; 
}

// Reviews
// Before Interface

// const reviews: { 
//     name: string; 
//     stars: number;
//     date: string; 
//     }[] = [     

//After Using interface
    const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        date: '27-03-2021',
    },
]

reviews.forEach(n=>console.log(n))
