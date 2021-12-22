const data = [
    {
        name: 'Saitama',
        power: 'Soco simples',
        rank: 'S',
    },
    {
        name: 'Tornado do Terror',
        power: 'Telecinese',
        rank: 'S',
    },
    {
        name: 'Heavy Kong',
        power: 'Soco',
        rank: 'A',
    },
    {
        name: 'Mumen Rider',
        power: 'Atropelar',
        rank: 'C',
    },
];

const sortedData = data.sort((a, b) => { 
    if(a.name.toUpperCase() < b.name.toUpperCase())
    {
        return -1
    } 
});

console.log(data);