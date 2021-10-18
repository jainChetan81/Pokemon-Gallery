// cypress/integration/app.spec.js

describe("Hello world", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});
	it("should navigate to the about page", () => {
		// Start from the index page
		cy.contains("h1", /Pokemon Gallery/i);
	});
});
