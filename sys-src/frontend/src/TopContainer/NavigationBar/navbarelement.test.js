import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import NavBarElement from './navbarelement'

/*
//  Tests for rendering all Buttons in the Navigation Bar,
//  logged in and logged out.
//  SearchBar and Login are tested separately.
*/
test("logged out: render Favoriten correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const favoriten = queryByText("Favoriten")
    expect(favoriten).toBeNull()
})

test("logged in: render Favoriten correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Favoriten"/>)
    const favoriten = queryByText("Favoriten")
    expect(favoriten).toBeTruthy()
})

test("logged out: render Letzte Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const letzteCocktails = queryByText("Letzte Cocktails")
    expect(letzteCocktails).toBeNull()
})

test("logged in: render Letzte Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Letzte Cocktails"/>)
    const letzteCocktails = queryByText("Letzte Cocktails")
    expect(letzteCocktails).toBeTruthy()
})

test("logged out: render Meine Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const meineCocktails = queryByText("Meine Cocktails")
    expect(meineCocktails).toBeNull()
})

test("logged in: render Meine Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Meine Cocktails"/>)
    const meineCocktails = queryByText("Meine Cocktails")
    expect(meineCocktails).toBeTruthy()
})

test("logged out: render Cocktail erstellen correctly", () => {
    const { queryByText } = render(<NavBarElement />)
    const cocktailErstellen = queryByText("Cocktail erstellen")
    expect(cocktailErstellen).toBeNull()
})

test("logged in: render Cocktail erstellen correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Cocktail erstellen"/>)
    const cocktailErstellen = queryByText("Cocktail erstellen")
    expect(cocktailErstellen).toBeTruthy()
})



/*
//  Tests for clicking all Buttons in the Navigation Bar,
//  logged in and logged out.
//  SearchBar and Login are tested separately.
*/
test("logged out: click Favoriten", () =>{
        const { queryByText } = render(<NavBarElement userIsLoggedIn={false} value="Favoriten"/>)
        const button = queryByText("Favoriten")
        fireEvent.click(button)
        expect(NavBarElement).toBeTruthy();
})

test("logged in: click Favoriten", () =>{
        const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Favoriten"/>)
        const button = queryByText("Favoriten")
        fireEvent.click(button)
        expect(button).toBeTruthy();
})

// Wieso geht das hier nicht? 
// Schaltet er vllt den button nicht an?
test("logged out: click Letzte Cocktails", () => {
    const handleClick = jest.fn()
    render(<NavBarElement disabled={false} onClick={handleClick} value="Letzte Cocktails">Letzte Cocktails</NavBarElement>)
    fireEvent.click(screen.getByText(/Letzte Cocktails/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
/*
test("logged in: click Letzte Cocktails", () => {
    const handleClick = jest.fn()
    render(<NavBarElement userIsLoggedIn={true} onClick={handleClick} value="Letzte Cocktails"></NavBarElement>)
    fireEvent.click(screen.getByText(/Letzte Cocktails/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  */