/*
You have a table with all available goods in the store. The data is represented as a list of objects.
Your mission here is to find the TOP most expensive goods. The amount we are looking for will be given as a first argument and the whole data as the second one.

Input:
    Integer and array of objects. Each objects has two attributes "name" and "price".
Output:
    The same as the second Input argument.

Example:
    biggerPrice(2, [
        {"name": "bread", "price": 100},
        {"name": "wine", "price": 138},
        {"name": "meat", "price": 15},
        {"name": "water", "price": 1}
    ]) == [
        {"name": "wine", "price": 138},
        {"name": "bread", "price": 100}
    ]

    biggerPrice(1, [
        {"name": "pen", "price": 5},
        {"name": "whiteboard", "price": 170}
    ]) == [{"name": "whiteboard", "price": 170}]
*/

interface Stock {
    name: string,
    price: number,
};

function biggerPrice(limit: number, data: Stock[]): Stock[] {
    data.sort((a, b) => (a.price > b.price) ? 1 : -1);
    let arr = [];
    while(limit > 0) {
        arr.push(data.pop());
        limit--;
    }
    return arr;
}