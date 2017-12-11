const fs = require("fs");
const ejs = require("ejs");

const template = ejs.compile(fs.readFileSync("./index.ejs", "utf8"));

const data = {
    "title": "My Email HTML Products",
    "products": [
        {
            "name": "Responsive Email Template",
            "price": 500
        },
        {
            "name": "Email Template Builder",
            "price": 2000
        },
        {
            "name": "HTML Generator",
            "price": 5000
        },
        {
            "name": "Drop Calc Generator",
            "price": 10000
        }
    ]
};

console.log(template(data));
