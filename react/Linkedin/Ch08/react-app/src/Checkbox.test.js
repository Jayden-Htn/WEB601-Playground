import { render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox", () => {
    // render the Checkbox component
    const { getByLabelText } = render(<Checkbox />);
    // use dom-testing-library's assertion to check that the text content is "not checked"
    const checkbox = getByLabelText(/not checked/);
    // fireEvent.click simulates a user clicking on the checkbox
    fireEvent.click(checkbox);
    // expect the checkbox to be checked
    expect(checkbox.checked).toEqual(true);
});