import React from 'react'
import {  render, screen } from '@testing-library/react'
import TopContainer from "./topcontainer"
import LoginForm from "../LoginForm/loginform"
import { expect } from '@jest/globals'
import "@testing-library/jest-dom/extend-expect";

test("logged out: click Login in TopContainer", () =>{
    render(<TopContainer userIsLoggedIn={false}/>)
    screen.getByText("Login").click()
    expect(render(<LoginForm/>)).toBeTruthy();
})