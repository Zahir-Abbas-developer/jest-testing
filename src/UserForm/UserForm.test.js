import { render, screen } from "@testing-library/react"
import UserForm from "./UserForm"

test("show two inputs and one button",(()=>{
     render (<UserForm/>);
     const inputs=screen.getAllByRole("textbox");
     const button=screen.getByRole("button")
     //The toHaveLength function is typically used with arrays to check the number of elements in the array. When you use screen.getByRole("button"), it returns a single DOM element, not an array. Therefore, you should not use toHaveLength(1) with it.
     expect(inputs).toHaveLength(2);
     //To check if a single element is present, you should continue using expect(button).toBeInTheDocument(); as it's the correct way to assert the presence of a single element in the DOM.
     expect(button).toBeInTheDocument()
 
}))