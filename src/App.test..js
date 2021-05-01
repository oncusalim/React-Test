import {render, screen, cleanup} from "@testing-library/react";
import App from './App'

beforeAll(()=>{
  console.log("Before All");
})

beforeEach(()=>{
  render(<App />);
  console.log("Before Each");
})
afterAll(()=>{
  console.log("After All")
})
afterEach(()=>{
  console.log("After Each")
  cleanup(); //artık cleanupı çağırmaya gerek yok her testten 
  //sonra Dom render edilen componenti kaldırıyor. otomatik
})

test("Header Render Correctly", ()=>{
  const headerEl = screen.getByText(/test react/i)
  expect(headerEl).toBeInTheDocument()
  expect(headerEl).toHaveTextContent(/test react/i)

  //screen.debug()
});
test("Disable Button Render Test", ()=>{
 
  const buttonEl1 = screen.getByRole("button", {
    name: "Disabled"
  });
  expect(buttonEl1).toBeInTheDocument()
  expect(buttonEl1).toHaveTextContent("Click")
  expect(buttonEl1).toBeDisabled()
  
})
test("Enable Button Render Correctly", ()=>{
  
  const enableBtnEl = screen.getByTestId("enableBtn")
  //const enableBtnEl = screen.getByRole("button", {
   // name : "Enable"
  //})
  expect(enableBtnEl).toBeInTheDocument()
  expect(enableBtnEl).toBeEnabled()
  expect(enableBtnEl).toHaveTextContent("Enable")

})

test("Pink Paragraph Rebders Correctly", ()=>{
  
  const pinkElement = screen.getByText(/Happy codding/i)
  expect(pinkElement).toBeInTheDocument();
  expect(pinkElement).toHaveTextContent("Happy codding")
  expect(pinkElement).toHaveClass("text")
})
