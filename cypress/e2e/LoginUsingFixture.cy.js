describe('Automation Using Cypress || Fixtures', ()=> {
    let data //Initialized the variable data
    beforeEach(()  => {
    cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login") //Open the website
    cy.fixture('login').then((value) => {    //Load the data from the login.json file present inside the fixtures folder
     data = value
    })
})
    // Start the Test case
    it('Login into the application using fixture data', ()=> { 
        cy.get('input[name="email"]').type(data.email) // Enter the email
        cy.get('input[name="password"]').type(data.password) //Enter the password
        cy.get('input[type="submit"]').click() //Click on Submit button
    })
    // End of the Test case
})