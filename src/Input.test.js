import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Input from './Input'

beforeEach(()=>{
    render(<Input />)
})

test("Test Secret Message Is Initially Empty", ()=>{
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveValue("");
});

test("Test Input Change", () => {
    const inputEl = screen.getByLabelText(/secret/i);

    expect(inputEl).toHaveValue("");
    userEvent.type(inputEl, "Test React");
    expect(inputEl).toHaveValue("Test React")
})



test("Initially Checkbox is not checked", ()=>{
    const checkEl = screen.getByRole("checkbox");

    expect(checkEl).not.toBeChecked();
})

test("ceheckbox work correctly", ()=>{
    const checkEl=screen.getByRole("checkbox");

    expect(checkEl).not.toBeChecked();
    userEvent.click(checkEl);

    expect(checkEl).toBeChecked();
})