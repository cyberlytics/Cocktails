import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import NavBarElement from './navbarelement'

/*
//  Tests for rendering all Buttons in the Navigation Bar,
//  logged in and logged out.
//  SearchBar and Login are tested separately.
*/

test("logged out: render Favoriten correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={false} value="Favoriten"/>)
    const favoriten = queryByText("Favoriten")
    expect(favoriten).toBeTruthy()
})

test("logged in: render Favoriten correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Favoriten"/>)
    const favoriten = queryByText("Favoriten")
    expect(favoriten).toBeTruthy()
})

test("logged out: render Letzte Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={false} value="Letzte Cocktails"/>)
    const letzteCocktails = queryByText("Letzte Cocktails")
    expect(letzteCocktails).toBeTruthy()
})

test("logged in: render Letzte Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Letzte Cocktails"/>)
    const letzteCocktails = queryByText("Letzte Cocktails")
    expect(letzteCocktails).toBeTruthy()
})

test("logged out: render Meine Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={false} value="Meine Cocktails"/>)
    const meineCocktails = queryByText("Meine Cocktails")
    expect(meineCocktails).toBeTruthy()
})

test("logged in: render Meine Cocktails correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={true} value="Meine Cocktails"/>)
    const meineCocktails = queryByText("Meine Cocktails")
    expect(meineCocktails).toBeTruthy()
})

test("logged out: render Cocktail erstellen correctly", () => {
    const { queryByText } = render(<NavBarElement userIsLoggedIn={false} value="Cocktail erstellen"/>)
    const cocktailErstellen = queryByText("Cocktail erstellen")
    expect(cocktailErstellen).toBeTruthy()
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

test("logged in: click Favoriten", () =>{
        const handleRedirect = jest.fn()
        render(<NavBarElement userIsLoggedIn={true} value="Favoriten" redirect={handleRedirect}/>)
        fireEvent.click(screen.getByText("Favoriten"))
        expect(handleRedirect).toHaveBeenCalledTimes(1)
})

test("logged out: click Favoriten", () =>{
    const handleRedirect = jest.fn()
    render(<NavBarElement userIsLoggedIn={false} value="Favoriten" redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Favoriten"))
    expect(handleRedirect).toHaveBeenCalledTimes(0)
})

test("logged in: click Letzte Cocktails", () => {
    const handleRedirect = jest.fn()
    render(<NavBarElement userIsLoggedIn={true} value="Letzte Cocktails" redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Letzte Cocktails"))
    expect(handleRedirect).toHaveBeenCalledTimes(1)
  })
  
  test("logged out: click Letzte Cocktails", () => {
    const handleRedirect = jest.fn()
    render(<NavBarElement userIsLoggedIn={false} value="Letzte Cocktails" redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Letzte Cocktails"))
    expect(handleRedirect).toHaveBeenCalledTimes(0)
  })

  test("logged in: click Meine Cocktails", () => {
    const handleRedirect = jest.fn()
    render(<NavBarElement userIsLoggedIn={true} value="Meine Cocktails" redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Meine Cocktails"))
    expect(handleRedirect).toHaveBeenCalledTimes(1)
  })
  
  test("logged out: click Meine Cocktails", () => {
    const handleRedirect = jest.fn()
    render(<NavBarElement userIsLoggedIn={false} value="Meine Cocktails" redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Meine Cocktails"))
    expect(handleRedirect).toHaveBeenCalledTimes(0)
  })

  test("logged in: click Cocktail erstellen", () => {
    const handleRedirect = jest.fn()
    render(<NavBarElement userIsLoggedIn={true} value="Cocktail erstellen" redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Cocktail erstellen"))
    expect(handleRedirect).toHaveBeenCalledTimes(1)
  })
  
  test("logged out: click Cocktail erstellen", () => {
    const handleRedirect = jest.fn()
    render(<NavBarElement userIsLoggedIn={false} value="Cocktail erstellen" redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Cocktail erstellen"))
    expect(handleRedirect).toHaveBeenCalledTimes(0)
  })