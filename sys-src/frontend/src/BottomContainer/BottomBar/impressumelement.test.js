import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImpressumElement from './impressumelement'

test("render Impressum correctly", () => {
    render(<ImpressumElement/>)
    const button = screen.getByText("Impressum")
    expect(button).toBeTruthy()
})

test("click Impressum", () =>{
    const handleRedirect = jest.fn()
    render(<ImpressumElement redirect={handleRedirect}/>)
    fireEvent.click(screen.getByText("Impressum"))
    expect(handleRedirect).toHaveBeenCalledTimes(1)
})