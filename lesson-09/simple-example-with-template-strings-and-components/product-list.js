const productListItem = require("./product-list-item");

module.exports = function productList(products) {
    return products.map((item, idx) => {
        const className = idx % 2 === 0 ? "even" : "odd";

        return productListItem({
            className: className,
            name: item.name,
            price: item.price
        });
    }).join("");
};