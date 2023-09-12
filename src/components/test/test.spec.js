import { render, screen } from "@testing-library/react";
import Test from "./test";

test('show 6 headings ', async () => {
    render(<Test />);

    const headings = await screen.findAllByRole("heading");
    expect(headings).toHaveLength(7);
});
