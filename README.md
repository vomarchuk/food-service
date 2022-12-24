**In progress**

Used packages :

[react-toastify](https://github.com/fkhadra/react-toastify) : library for non-blocking notifications
[Material UI](https://mui.com/material-ui/getting-started/overview/) : MUI offers a comprehensive suite of UI tools to help you ship new features faster.
[Formik](https://formik.org/docs/overview) : Formik is the world's most popular open source form library
[Yup](https://github.com/jquense/yup) : is a schema builder for runtime value parsing and validation.

https://food-service-api.herokuapp.com/api/reviews

//requests

/api/categories
get =>
'/' get all categories
'/:id' get category by ID

post =>
'/' add category

put =>
'/:id' update 'Soon' (true/false)

delete =>
'/:id' remove category by ID

/api/products
get => '/' get all products
get => '/:id' get category by category ID
post => '/:id' add product by category ID
delete => '/:id' remove product by category ID

/api/reviews

get => '/' get all reviews
get => '/:id' get review by ID
post => '/' add review
delete => '/:id' remove review by ID
