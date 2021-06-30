import React from 'react';
import { render, screen } from '@testing-library/react';
import Impressum from './impressumelement'

test("render Impressum correctly", () => {
    render(<Impressum/>)
    const button = screen.getByText("Impressum")
    expect(button).toBeTruthy()
})