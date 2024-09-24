## Start a react

`npx create-react-app ecommerce-frontend`
cd 

## To add a library

`npm install react-bootstrap bootstrap`

## To add global css from the bootstrap

`import 'bootstrap/dist/css/bootstrap.min.css';` in `index.js` **or** `App.js`


# Router 
- home
- cart -> product list 
- in the navbar I should be able to navigate between cart and home
- descriptive
- add button -> add to cart

## React Style
- how to override the bootstrap styling
  - write the new styles and put the import of 'index.css' after 'bootstrap css'
- CSS Modules
  - 1. '***.module.css'
  - 2. import classes from '***.module.css'
  - 3. use the class defined in the css module --> `classes.classname`

## Task
- remove from cart
- product list in the cart -> sum ( total cost )
- bonus -> qty ( adding to cart ( increase product qty) , count -> product)
- (+) Wishlist Full flow

--- 
## 24 sept 
- create new page
  1. create new react component
  2. create new route
  3. link the component to the route path