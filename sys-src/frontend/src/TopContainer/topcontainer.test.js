import React from 'react'
import {  render, screen, fireEvent } from '@testing-library/react'
import TopContainer from "./topcontainer"
import LoginForm from "../LoginForm/loginform"
import { expect } from '@jest/globals'
import "@testing-library/jest-dom/extend-expect";

test("logged out: click Login in TopContainer", () =>{
    render(<TopContainer userIsLoggedIn={false}/>)
    screen.getByText("Login").click()
    expect(render(<LoginForm/>)).toBeTruthy();
})

test("handle onChange event", () => {
    const searchCocktail = jest.fn((value) => {})
    const cocktailList = [{name: 'WhiteRussian'}, {name: 'Mojito'}]
    render(<TopContainer value="Search" tempcocktails={cocktailList} onSearchFiltered={searchCocktail}/>)
    const input = screen.getByPlaceholderText("Suche")
    fireEvent.change(input, {target: {value: "WhiteRussian"}})
    expect(input.value).toBe("WhiteRussian")
  })