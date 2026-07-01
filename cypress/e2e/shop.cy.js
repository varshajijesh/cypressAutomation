import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CartPage from '../pages/CartPage';

describe('Shop Tests', () => {

  const home = new HomePage();
  const shop = new ShopPage();
  const cart = new CartPage();

  const prodName = require('../fixtures/products.json');

  it('Test Case 3 - Cart validation', () => {

    cy.visit('/');

    home.openShopPage();

    cy.fixture('products').then((products) => {

      products.forEach(product => {
        shop.buyProduct(product.name, product.quantity);
      });

      shop.goToCart();

      products.forEach(product => {
        cart.verifyPrice(product.name, product.price);
        cart.verifySubtotal(product.name, product.quantity);
      });

      cart.verifyTotal(products);
    });
  });

});