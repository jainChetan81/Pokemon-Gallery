import { render, screen, fireEvent } from "@testing-library/react";
import PokemonCard from "../components/PokemonCard";

describe("Pokemon Card", () => {
	beforeEach(() => render(<PokemonCard name="chetan" image="a" />));
	it("should render the Pokemon Container", async () => {
		const divElement = screen.getByTestId(/pokemon-card/i);
		expect(divElement).toBeInTheDocument();
	});
	it("should not render name of Pokemon initially", async () => {
		const divElement = screen.getByTestId(/pokemon-card/i);
		expect(divElement).not.toHaveTextContent(/chetan/i);
	});
	it("should render name of Pokemon when hovering", async () => {
		const divElement = screen.getByTestId(/pokemon-card/i);
		fireEvent.mouseEnter(divElement);
		const paragraphElement = screen.getByRole("heading", { name: /chetan/i });
		expect(paragraphElement).toBeInTheDocument();
	});
	it("should not render name of Pokemon when not hovering", async () => {
		const divElement = screen.getByTestId(/pokemon-card/i);
		fireEvent.mouseEnter(divElement);
		fireEvent.mouseLeave(divElement);
		expect(divElement).not.toHaveTextContent(/chetan/i);
	});
});
