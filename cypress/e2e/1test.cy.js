describe('product ce',()=>{ 
    it('products ce',()=>{
        cy.visit('http://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('prd')

        cy.get('@prd').find('.product').eq(3).contains('add to cart', {matchCase: false}).click()
        cy.log('Add to Cart button was clicked successfully')

        cy.get('@prd').find('.product').each(($el,index,$list) => {
            const textveg=$el.find('.product-name').text()

            if(textveg.includes('Carrot'))     
     {
        cy.wrap($el).find('button').click() 
     }
     })
     cy.get('.brand.greenLogo').should('have.text','GREENKART')
     cy.get('.brand').then(function(logo)
     {
        cy.log(logo.text())
     })

    })
})