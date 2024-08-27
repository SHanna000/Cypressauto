describe('Scroll', ()=>{
    it('Scroll', ()=> {
        cy.visit('https://naveenautomationlabs.com/opencart/')
            cy.scrollTo('bottom')
            cy.wait(3000)
            cy.scrollTo('top')
    cy.scrollTo('500, 300')
    })
})