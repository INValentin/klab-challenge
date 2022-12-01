// All products
const products = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
]

// 1. Cheapest (minimum price)
const cheapestProduct = products.reduce((prev, current) => {
    if (prev && current.price < prev.price) {
        return current
    }
    return prev
})

console.log("1. Cheapest: ", { ...cheapestProduct })

// 2. Most expensive
const expensiveProduct = products.reduce((prev, current) => {
    if (prev && current.price > prev.price) {
        return current
    }
    return prev
})

console.log("2. Most Expensive: ", { ...expensiveProduct })

// 3. Total Price
const totalPrice = products.reduce((prev, current) => prev + current.price, 0)

console.log("3. Total Price: ", { totalPrice })

// 4. Total of 10+ dollar products
const totalOver10DollarPrice = products.reduce((prev, current) => {
    return prev + (current.price > 10 ? current.price : 0)
}, 0)

console.log("4. Total of 10+ dollar products: ", { totalOver10DollarPrice })