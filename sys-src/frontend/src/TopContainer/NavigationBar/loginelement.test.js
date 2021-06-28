import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LoginElement from './loginelement'
import LoginForm from '../../LoginForm/loginform.js'

test("render Login correctly", () => {
    const { queryByText } = render(<LoginElement />)
    const button = queryByText("Login")
    expect(button).toBeTruthy()
})

describe("click Login", () =>{
    it("onClick", () => {
        const { queryByText } = render(<LoginElement />)
        const button = queryByText("Login")
        fireEvent.click(button)
        expect(LoginForm).toBeTruthy();
    }) 
})

    test("render Logout correctly", () => {
        const { queryByText } = render(<LoginElement userIsLoggedIn={true}/>)
        expect(queryByText("Logout")).toBeTruthy()
    })

    describe("click Logout", () =>{
        it("onClick", () => {
            const { queryByText } = render(<LoginElement userIsLoggedIn={true}/>)
            const button = queryByText("Logout")
            fireEvent.click(button)
            expect(LoginForm).toBeTruthy();
        }) 
    })