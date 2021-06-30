import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import LoginElement from './loginelement'
import LoginForm from '../../LoginForm/loginform.js'
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

/*
//  Test for render Login and Logout correctly
*/
test("render Login correctly", () => {
    render(<LoginElement userIsLoggedIn={false}/>)
    const button = screen.getByTestId('LoginButton')
    expect(button).toBeTruthy()
})

test("render Logout correctly", () => {
    render(<LoginElement userIsLoggedIn={true}/>)
    const button = screen.getByText("Logout")
    expect(button).toBeTruthy()
})

/*
//  Test for click Login and Logout correctly
*/
test("logged out: click Login", () =>{
        render(<LoginElement userIsLoggedIn={false}/>)
        screen.getByText("Login").click()
        expect(render(<LoginForm/>)).toBeTruthy();
})

test("logged in: click Logout", () =>{
    render(<LoginElement userIsLoggedIn={true}/>)
    const loginrender = render(<LoginElement userIsLoggedIn={false}/>)
    screen.getByText("Logout").click()
    expect(loginrender.getByText('Login')).toBeTruthy();
})