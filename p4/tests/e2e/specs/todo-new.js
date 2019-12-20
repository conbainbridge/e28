let testtodo = {
    todo: "Make lunch"
}

describe('todo-new', () => {
    it('adds new todo item', () => {
        cy.visit('/todo')
        cy.get('[data-test=todo-input]').type(testtodo.todo);
        cy.get('[data-test=add-todo]').click();
    })
})