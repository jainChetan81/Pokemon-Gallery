import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Followers List", () => {
	beforeEach(() => render(<Header title="Hi" />));
	it("check if props in the title is being rendered", async () => {
		const divElement = await screen.findByRole("heading", { name: "Hi" });
		expect(divElement).toBeInTheDocument();
	});
	it("check if the props is not provided default prop is rendered", async () => {
		render(<Header />);
		const divElement = await screen.findByRole("heading", { name: /pokedox/i });
		expect(divElement).toBeInTheDocument();
	});
});
