import {screen, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from "./Counter"

beforeEach(()=>{
    render(<Counter />);
})

test("Counter is initialy 0", ()=>{
    const counterEl = screen.getByTestId("counter")
    expect(counterEl).toHaveTextContent(0);
})

test("Increment Button works Correctly", ()=>{
    const counterEl = screen.getByTestId("counter")
    const incBtn=screen.getByRole("button", {
        name: /increment/i,
    })
    expect(counterEl).toHaveTextContent(0);
    // Click on Increment Button
    userEvent.click(incBtn);
    expect(counterEl).toHaveTextContent(1)
})

test("Deccrement Button works Correctly", ()=>{
    const counterEl = screen.getByTestId("counter")
    const incBtn=screen.getByRole("button", {
        name: /decrement/i,
    })
    expect(counterEl).toHaveTextContent(0);
    // Click on Increment Button
    userEvent.click(incBtn);
    expect(counterEl).toHaveTextContent(-1)
})
