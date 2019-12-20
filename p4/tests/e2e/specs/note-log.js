let testnote = {
    title: "note1",
    note: "This is the first note."
}

describe('note-log', () => {
    it('shows notes', () => {
        cy.visit('/notes')
        cy.contains('h2', 'Add a new note:')
    })
})