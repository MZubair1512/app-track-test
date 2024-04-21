///<reference types="Cypress" />

describe('Login functionality', () => {
  it('Should login successfully with correct credentials', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('asghar@gmail.com')
    cy.get('#password').type('asghar123')
    cy.get('#log-button').click()
    cy.url().should("equal","http://localhost:5173/")
  })

  it('should show error (for incorrect password)', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('asghar@gmail.com')
    cy.get('#password').type('81ash999999')
    cy.get('#log-button').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Invalid Email/Password').should('be.visible')
  })

  it('should show error (for incorrect email)', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('asghar1@gmail.com')
    cy.get('#password').type('asghar123')
    cy.get('#log-button').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Invalid Email/Password').should('be.visible')
})

  it('should show error (for both incorrect email/phone number and password)', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('asghar1@gmail.com')
    cy.get('#password').type('asghar12313')
    cy.get('#log-button').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Invalid Email/Password').should('be.visible')
  })

  it('should show error (for blank email/phone number)', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#password').type('asghar123')
    cy.get('#log-button').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Email/Password Field cannot be blank').should('be.visible')
  })

  it('should show error (for blank password)', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#email').type('asghar1@gmail.com')
    cy.get('#log-button').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').contains('Email/Password Field cannot be blank').should('be.visible')
  })

  it('should show error (for both blank email/phone number and password)', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('#log-button').click()
    cy.get('.Toastify__toast-body').contains('Email/Password Field cannot be blank').should('be.visible')
  })
})
