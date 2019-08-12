const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let cartItems = [{
    id: 1,
    product: "apples",
    price: "2.50",
    quantity: 4
}, {
    id: 2,
    product: "sweet potatoes",
    price: "1.99",
    quantity: 5
}, {
    id: 3,
    product: "brussel sprouts",
    price: "2.50",
    quantity: 20
}, {
    id: 4,
    product: "beets",
    price: "3.25",
    quantity: 4
}, {
    id: 5,
    product: "beer",
    price: "9.99",
    quantity: 6
}];

app.get('/get', (req, res) => {
    res.json(cartItems);
});
app.post('/post', (req, res) => {
    console.log(cartItems);
})
app.listen(3000, () => {
    console.log("3000 is listening");
});