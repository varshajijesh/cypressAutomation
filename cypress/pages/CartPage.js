class CartPage {

    getPrice(product) {
        return cy.contains('tr', product)
            .find('td')
            .eq(1);
    }

    getSubtotal(product) {
        return cy.contains('tr', product)
            .find('td')
            .eq(3);
    }

    getTotal() {
        return cy.get('.total');
    }

    verifyPrice(product, expectedPrice) {
        this.getPrice(product)
            .should('have.text', `$${expectedPrice.toFixed(2)}`);
    }
    verifySubtotal(product, expectedPrice, qty) {
        this.getSubtotal(product).should(subtotalText => {
            const subtotal = parseFloat(subtotalText.text().replace('$', ''));
            expect(subtotal).to.eq(expectedPrice * qty);
        });
    }

    verifyTotal(products) {
        cy.wrap(products).then(items => {
            return Cypress.Promise.all(
                items.map(product => {
                    return this.getSubtotal(product.name)
                        .invoke('text')
                        .then(text => parseFloat(text.replace('$', '')));
                })
            );
        }).then(subtotalValues => {
            const sum = subtotalValues.reduce((total, value) => total + value, 0);

            this.getTotal().should(totalEl => {
                const total = parseFloat(totalEl.text().replace('Total: ', '').replace('$', ''));
                expect(total).to.eq(sum);
            });
        });
    }
}

export default CartPage;