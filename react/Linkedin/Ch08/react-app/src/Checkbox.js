import { userReducer } from 'react';

// use dom-testing-library to test the checkbox component
// use htmlFor and id to link the label and checkbox
export function Checkbox() {
    const [checked, toggle] = userReducer(
        (checked) => !checked,
        false
    );
    return (
        <>
            <label htmlFor="checked">
                {checked ? "checked" : "not checked"}
            </label>
            <input
                id="checked"
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
        </>
    );
}