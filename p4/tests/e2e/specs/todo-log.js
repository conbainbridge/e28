let testtodo = {
    todo: "Make lunch"
}

describe('todo-log', () => {
    it('shows todo items', () => {
        cy.visit('/todo')
        cy.contains('h2', 'To-do list:')
    })
})