describe('user can create a contact', () => {
    
    it ('test', () => {
        cy.visit('http://localhost:3002')
        cy.get("#add-contact").click
        cy.get("#name").type ("Alex")
        cy.get("#email").type ("alexlbellamy@gmail.com")
        cy.get("#phone").type ("0752 111111")
        cy.get("#company").type ("Craft Academy")
        cy.get("#notes").type ("Enjoying the sun")
        cy.get("#twitter").type ("@alexbellamy")
    })
})