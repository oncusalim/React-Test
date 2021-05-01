import {render, screen} from "@testing-library/react";
import App from './App'

test("Header Render Correctly", ()=>{
  render(<App />);

  const headerEl = screen.getByText(/test react/i)
  expect(headerEl).toBeInTheDocument()
  expect(headerEl).toHaveTextContent(/test react/i)

  //screen.debug()
});
test("Disable Button Render Test", ()=>{
  render(<App />);

  const buttonEl1 = screen.getByRole("button", {
    name: "Disabled"
  });
  expect(buttonEl1).toBeInTheDocument()
  expect(buttonEl1).toHaveTextContent("Click")
  expect(buttonEl1).toBeDisabled()
  
})
test("Enable Button Render Correctly", ()=>{
  render(<App/>);
  const enableBtnEl = screen.getByTestId("enableBtn")
  //const enableBtnEl = screen.getByRole("button", {
   // name : "Enable"
  //})
  expect(enableBtnEl).toBeInTheDocument()
  expect(enableBtnEl).toBeEnabled()
  expect(enableBtnEl).toHaveTextContent("Enable")

})

test("Pink Paragraph Rebders Correctly", ()=>{
  render(<App />);
  const pinkElement = screen.getByText(/Happy codding/i)
  expect(pinkElement).toBeInTheDocument();
  expect(pinkElement).toHaveTextContent("Happy codding")
  expect(pinkElement).toHaveClass("text")
})
