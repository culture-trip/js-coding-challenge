import { render } from "@testing-library/react";
import { Gallery } from "./";

describe("Gallery", () => {
  it("renders all cards", async () => {
    const { findAllByTestId } = render(<Gallery />);

    const cards = await findAllByTestId("gallery-card");
    expect(cards.length).toBe(12);
  });
});
