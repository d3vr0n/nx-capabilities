import { getGreeting } from '../support/app.po';

describe('ron-ticketing', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ron-ticketing!');
  });
});
