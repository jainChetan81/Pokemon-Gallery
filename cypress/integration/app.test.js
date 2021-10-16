// cypress/integration/app.spec.js

describe("Hello world", () => {
	it("should navigate to the about page", () => {
		// Start from the index page
		cy.visit("http://localhost:3000/");
		cy.get("h1", /Pokemon Gallery/i);
	});
});
