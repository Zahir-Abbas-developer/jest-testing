import { fireEvent, getByLabelText, getByTestId, render, screen } from "@testing-library/react";
import Test from "./test";

// test('show 7 headings ', async () => {
//     render(<Test />);
//     const headings = await screen.findAllByRole("heading");
//     expect(headings).toHaveLength(7);
// });

test("input field value is updating" ,async ()=>{
  render(<Test />);
    const inputfield=screen.getByLabelText("Enter First Name")
    fireEvent.change(inputfield,{target:{value:"Test Value"}})
    expect(inputfield.value).toBe("Test Value")
})

test("shows more 6 products" ,async(()=>{
  
}))