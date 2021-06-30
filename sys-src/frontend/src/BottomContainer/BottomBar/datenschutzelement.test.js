import React from 'react';
import { render, screen } from '@testing-library/react';
import Datenschutz from './datenschutzelement'

test("render Datenschutz correctly", () => {
    render(<Datenschutz/>)
    const button = screen.getByText("Datenschutz")
    expect(button).toBeTruthy()
})