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
        let sum = 0;

        products.forEach(product => {
            this.getSubtotal(product.name).then(el => {
                const val = parseFloat(el.text().replace('$', ''));
                sum += val;
            });
        });

        this.getTotal().should(totalEl => {
            const total = parseFloat(totalEl.text().replace('Total: ', '').replace('$', ''));
            expect(total).to.eq(sum);
        });
    }

}

export default CartPage;