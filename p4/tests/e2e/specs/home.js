describe('home', () => {
  it('visits the homepage', () => {
    cy.visit('/')
    cy.contains('h2', 'Notes:')
    cy.contains('h2', 'To-do items:')
  })
})