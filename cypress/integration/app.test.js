/// <reference types="cypress" />
/// <reference types="Cypress" />

describe("check for basic tests", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("elements present on the Home page", () => {
		// Start from the Home page
		cy.contains("h1", /Pokemon Gallery/i);
		cy.get("[data-testid='pokemon']").should("have.length", 30);
		cy.scrollTo("bottom");
		cy.get("[data-testid='pokemon']").should("have.length", 60);
	});
	it("hovering on any pokemon card", () => {
		cy.get("[data-testid='pokemon']").first().trigger("mouseover");
		cy.contains("h2", /bulbasaur/i).click();
		cy.url().should("include", "/pokemon/1");
		cy.contains("h1", /bulbasaur/i);
		cy.get("img").should("have.attr", "alt");
	});
	it("on first pokemon details page", () => {
		cy.visit("/pokemon/1");
		cy.contains("h1", /bulbasaur/i);
		cy.get("img").should("have.attr", "alt");
	});
	it("going back t homepage", () => {
		cy.visit("/pokemon/1");
		cy.contains("p", /home/i).click();
		cy.url().should("include", "/");
	});
});
