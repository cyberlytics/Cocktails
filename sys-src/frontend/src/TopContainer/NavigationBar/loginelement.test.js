import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LoginElement from './loginelement'
import LoginForm from '../../LoginForm/loginform.js'

test("render Login correctly", () => {
    const { queryByText } = render(<LoginElement />)
    const button = queryByText("Login")
    expect(button).toBeTruthy()
})

describe("clickButton", () =>{
    it("onClick", () => {
        const { queryByText } = render(<LoginElement />)
        const button = queryByText("Login")
        fireEvent.click(button)
        expect(LoginForm).toBeTruthy();
    }) 
})

// Hier muss wahrscheinlich ein Login simuliert werden
    test("render Logout correctly", () => {
        const { queryByText } = render(<LoginElement />)
        expect(queryByText("Logout")).toBeTruthy()
    })
