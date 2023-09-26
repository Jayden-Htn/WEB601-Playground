// use dom-testing-library to test the Star component
import { render } from "@testing-library/react";
import { Star } from "./Star";

test("renders an h1", () => {
    // render the Star component
    const { getByText } = render(<Star />);
    // use dom-testing-library's assertion to check that the text content is "Cool Star"
    const h1 = getByText(/cool star/i);
    // expect the heading text to be "Cool Star"
    expect(h1).toHaveTextContent("Cool Star");
});
