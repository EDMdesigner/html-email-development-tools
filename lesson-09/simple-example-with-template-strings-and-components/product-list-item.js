module.exports = function productListItem(item) {
    return `
        <div class="${item.className}">
            <span>${item.name}</span>
            <span class="price">$${item.price}</span>
        </div>
    `;
};