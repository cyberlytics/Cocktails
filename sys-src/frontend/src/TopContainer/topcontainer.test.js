import React from 'react'
import {  render, screen, fireEvent } from '@testing-library/react'
import TopContainer from "./topcontainer"
import LoginForm from "../LoginForm/loginform"

test("logged out: click Login in TopContainer", () =>{
    render(<TopContainer userIsLoggedIn={false}/>)
    screen.getByText("Login").click()
    expect(render(<LoginForm/>)).toBeTruthy();
})

