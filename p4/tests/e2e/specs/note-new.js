let testnote = {
    title: "note1",
    note: "This is the first note."
}

describe('note-new', () => {
    it('adds new note', () => {
        cy.visit('/notes')
        cy.get('[data-test=note-title-input]').type(testnote.title);
        cy.get('[data-test=note-note-input]').type(testnote.note);
        cy.get('[data-test=add-note]').click();
    })
})