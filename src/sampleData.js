const boards = [
    {
        id: 2225,
        title: 'Ideias de Treino',
        background: '#7260A5'
    },
    {
        id: 2226,
        title: 'Ideias Casa',
        background: '#34A770'
    },
    {
        id: 2227,
        title: 'Ideias para GDV',
        background: '#7A9ECE'
    },
]

const lists = [
    {
        id: 2225,
        board: 2225,
        title: 'Ideia 001',
        cards: [
            {
                id: 1,
                text: 'card 01',
            },
            {
                id: 2,
                text: 'card 02',
            },
            {
                id: 3,
                text: 'card 03',
            },
        ]
    },
    {
        id: 2226,
        board: 2226,
        title: 'Ideia 002',
        cards: []
    },
    {
        id: 2227,
        board: 2227,
        title: 'Ideia 003',
        cards: [
            {
                id: 1,
                text: 'card 04',
            },
            {
                id: 2,
                text: 'card 05',
            },
            {
                id: 3,
                text: 'card 06',
            },
        ],
    }
]

const data= {
    boards,
    lists
}

export default data;