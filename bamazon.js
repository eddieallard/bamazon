// INITIALIZE DEPENDENCIES
var mysql = require('mysql');
var inquirer = require("inquirer");
var total = 0;

// INITIALIZE CONNECTION VARIABLE TO SYNC W/ MYSQL DATABASE
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
})

// CREATE THE CONNECTION WITH THE SERVER AND LOAD THE PRODUCT DATA
connection.connect(function (err) {

    if (err) {
        console.log("error connect" + err.stack)
    }
    loadProducts()
})

// FUNCTION TO LOAD PRODUCTS FROM DB
function loadProducts() {
    connection.query("SELECT id, product_name, department_name, price FROM products", function (err, res) {
        if (err) throw err;

        // DISPLAYS ITEMS IN A TABLE
        console.table(res);

        // THEN PROMPT THE CUSTOMER TO CHOSE THE ITEM
        promptCustomerForItem(res);
    })
}

// PROMPT THE CUSTOMER FOR PRODUCT ID
function promptCustomerForItem(products) {
    inquirer
        .prompt([{
            name: "item",
            type: "input",
            message: "Select a product by choosing the product id :"
        }, ])
        .then(function (answer) {
            var choice = parseInt(answer.item);
            var product = checkInventory(choice, products);
            if (product) {
                promptCustomerForQuantity(product);
            } else {
                console.log("That product is not available!");
                loadProducts();
            }
        })
}


// PROMPT CUSTOMER FOR QUANTITY
function promptCustomerForQuantity(product, res) {
    inquirer
        .prompt([{
            name: "Quantity",
            type: "input",
            message: "How many do you want?"
        }, ])
        .then(function (answer) {
            var quantity = parseInt(answer.Quantity);
            if (quantity > product.stock_quantity) {
                console.log("Insufficient Quantity, Please choose a lesser value");
                loadProducts();
            } else {
                makePurchase(product, quantity);
            }
        })
}

// UPDATING DATABASE TO REFLECT PURCHASE
function makePurchase(product, quantity) {
    // CREATE A REQUEST TO THE SERVER
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?",
        [quantity, product.id],
        function (err, res) {
            if (err) throw err;
            // STARTING THE PROCESS OVER AGAIN AFTER PURCHASE
            loadProducts(res);
        }
    );
}

// CHECK INVENTORY TO SEE IF THE USER CHOICE EXIST IN
function checkInventory(choice, products) {
    for (var index = 0; index < products.length; index++) {
        if (choice === products[index].id) {
            return products[index];
        }
    }
    return null;
};
// TOTAL UP THE AMOUNT PURCHASED

total = res[0].price * answer.Quantity;
var updatedQuantity = res[0].stock_quantity - answer.Quantity;
connection.query(`UPDATE products SET stock_quantity=${updatedQuantity} WHERE id = ${answer.id}`, function (res) {
    console.log(`Total Amount Purchased: ${res[0].total}`)

});






    
