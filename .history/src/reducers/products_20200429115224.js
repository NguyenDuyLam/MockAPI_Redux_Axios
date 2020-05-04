var initialState = [
    {
        id: 1,
        name: "Iphone",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Samsung",
        price: 4002,
        status: true
    },
    {
        id: 3,
        name: "Nokia",
        price: 40,
        status: true
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default products;