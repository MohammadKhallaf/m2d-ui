import { faker } from "@faker-js/faker";

function generateProducts(count = 10) {
  // array to add the products to ...
  const products = [];

  // loop to add no. of products equal to the count provided
  for (let i = 0; i < count; i++) {
    // product schema
    const product = {
      _id: faker.database.mongodbObjectId(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      image: "https://placehold.co/600x400",
      discount: faker.number.int({ min: 0, max: 100 }),
    };

    // product add
    products.push(product);
  }

  //  return the final array ( as result )
  return products;
}

//  next steps : ==> check if the product list is empty,
//  then generate product list and add it to the local storage to be preserved to the next refresh loading

// first : build the ui on the generated array directly
// ... ?

export default generateProducts;
