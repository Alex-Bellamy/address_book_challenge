describe('user can create a contact', () => {
    
    it ('test', () => {
        cy.visit('http://localhost:3002')
        cy.get("#add-contact").click()
        cy.get("#name").type ("Alex")
        cy.get("#email").type ("alexlbellamy@gmail.com")
        cy.get("#phone").type ("0752 111111")
        cy.get("#company").type ("Craft Academy")
        cy.get("#notes").type ("Enjoying the sun")
        cy.get("#twitter").type ("@alexbellamy")
        cy.get("#submit").click()
    })

    it ('dispays a name of the new contact', () => {
        cy.get("#contact-list").should("contain", "Alex")
    })

    it ('displays the phone number of the new contact', () => {
        cy.get("#contact-list").should("contain", "0752 111111")
    })

})