# infoware
B2B Multi-tenant eCommerce APIs for infoware nodejs assignment

# start app

npm start

node ./src/server.js

# users end point
signup for user
/api/v1/users/signup   
method: POST

login for user
/api/v1/users/login   
method: POST

# products end point
method: POST create a product,

method: GET get all product

/api/v1/products

method: GET  find one product by id

/api/v1/products/:id

# orders end point
method: POST  create a new order,
method: GET get all orders

/api/v1/orders

method:GET get all order for a specific user by its userId

/api/v1/orders/:userId
