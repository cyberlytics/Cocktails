import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBarElement from './navbarelement'

test("render logged out Favoriten correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const favoriten = queryByText("Favoriten")
    expect(favoriten).toBeNull()
})
/*
test("render logged in Favoriten correctly", () => {
    render(<NavBarElement userIsLoggedIn={true}/>)
    const favoriten = screen.getByText("Favoriten")
    expect(favoriten).toBeTruthy()
})
*/
test("render Letzte Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const letzteCocktails = queryByText("Letzte Cocktails")
    expect(letzteCocktails).toBeNull()
})
/*
test("render logged in Letzte Cocktails correctly", () => {
    render(<NavBarElement userIsLoggedIn={true}/>)
    const letzteCocktails = screen.getByTitle("Letzte Cocktails")
    expect(letzteCocktails).toBeTruthy()
})
*/
test("render Meine Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const meineCocktails = queryByText("Meine Cocktails")
    expect(meineCocktails).toBeNull()
})

test("render Cocktail erstellen correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const cocktailErstellen = queryByText("Cocktail erstellen")
    expect(cocktailErstellen).toBeNull()
})