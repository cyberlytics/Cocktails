import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DatenschutzElement from './datenschutzelement'

test("render Datenschutz correctly", () => {
    render(<DatenschutzElement/>)
    const button = screen.getByText("Datenschutz")
    expect(button).toBeTruthy()
})

test("click Datenschutz", () =>{
    const handleRedirect = jest.fn()
    render(<DatenschutzElement redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Datenschutz"))
    expect(handleRedirect).toHaveBeenCalledTimes(1)
    
})
//const datenschutzerklärung = screen.getByText("Datenschutzerklärung").toBeInTheDocument() 