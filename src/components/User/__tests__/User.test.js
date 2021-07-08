import { render, screen, cleanup } from "@testing-library/react"
import User from "../User"
import renderer from "react-test-renderer"

import * as React from "react"


// afterEach(() =>{
//     cleanup()
// })

// describe("Rendering User compoents", ()=> {

//     test("should render User conponent", () => {
//         const currentUser = {
//             name: "Peter Falkirk",
//             role: ["ADMIN"],
//             permsissions: {
//                 createCustomer: true
//             }}
        
//         render(<User key={0} user={currentUser}/>)
//         const userElement = screen.getByTestId(currentUser.name)
//     })


//     test.only("Matches Snapshot", ()=>{    
//         const currentUser = {
//             name: "Peter Falkirk",
//             role: ["ADMIN"],
//             permsissions: {
//                 createCustomer: true
//             }}
//         const tree = renderer.create(<User key={0} user={currentUser}/>).toJSON()
//         expect(tree).toMatchSnapshot()
//     })

// })