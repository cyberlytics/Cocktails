import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Pagination from "./Pagination"

describe("Test for pagination", () => {

    test('Pagination render correctly', () => {
        const steps = [
            "Sahne leicht anschlagen, so dass sie noch fließt und nicht steif ist",
            "Den Wodka in ein Rührglas geben",
            "Kaffeelikör zu dem Wodka in das Rührglas füllen",
            "Einen oder zwei Eiswürfel in das Rührglas zugeben",
            "Ca. 30 Sekunden den Inhalt des Rührglases verrühren ",
            "Entweder ohne Eis in eine vorgekühlte Coktailschale abseihen oder mit Eis in einem Tumbler servieren  ",
            "Die Sahne über den Rücken eines Barlöffels vorsichtig in das Glas laufen lassen, wobei sich die Schichten nicht mischen sollen"
        ]
        render(<Pagination steps={steps}/>)
        expect(screen.getByText("Sahne leicht anschlagen, so dass sie noch fließt und nicht steif ist")).toBeInTheDocument()  
    }); 

    test('increase step', () => {
        const steps = [
            "Sahne leicht anschlagen, so dass sie noch fließt und nicht steif ist",
            "Den Wodka in ein Rührglas geben",
            "Kaffeelikör zu dem Wodka in das Rührglas füllen",
            "Einen oder zwei Eiswürfel in das Rührglas zugeben",
            "Ca. 30 Sekunden den Inhalt des Rührglases verrühren ",
            "Entweder ohne Eis in eine vorgekühlte Coktailschale abseihen oder mit Eis in einem Tumbler servieren  ",
            "Die Sahne über den Rücken eines Barlöffels vorsichtig in das Glas laufen lassen, wobei sich die Schichten nicht mischen sollen"
        ]
        render(<Pagination steps={steps}/>)
        screen.getByTestId("NextButton").click()
        expect(screen.getByText("Den Wodka in ein Rührglas geben")).toBeInTheDocument()

    }),

    test('decrease step', () => {
        const steps = [
            "Sahne leicht anschlagen, so dass sie noch fließt und nicht steif ist",
            "Den Wodka in ein Rührglas geben",
            "Kaffeelikör zu dem Wodka in das Rührglas füllen",
            "Einen oder zwei Eiswürfel in das Rührglas zugeben",
            "Ca. 30 Sekunden den Inhalt des Rührglases verrühren ",
            "Entweder ohne Eis in eine vorgekühlte Coktailschale abseihen oder mit Eis in einem Tumbler servieren  ",
            "Die Sahne über den Rücken eines Barlöffels vorsichtig in das Glas laufen lassen, wobei sich die Schichten nicht mischen sollen"
        ]
        render(<Pagination steps={steps}/>)
        screen.getByTestId("NextButton").click()
        screen.getByTestId("NextButton").click()
        screen.getByTestId("BackButton").click()
        expect(screen.getByText("Den Wodka in ein Rührglas geben")).toBeInTheDocument()

    }),

    test('jump to specific step', () => {
        const steps = [
            "Sahne leicht anschlagen, so dass sie noch fließt und nicht steif ist",
            "Den Wodka in ein Rührglas geben",
            "Kaffeelikör zu dem Wodka in das Rührglas füllen",
            "Einen oder zwei Eiswürfel in das Rührglas zugeben",
            "Ca. 30 Sekunden den Inhalt des Rührglases verrühren ",
            "Entweder ohne Eis in eine vorgekühlte Coktailschale abseihen oder mit Eis in einem Tumbler servieren  ",
            "Die Sahne über den Rücken eines Barlöffels vorsichtig in das Glas laufen lassen, wobei sich die Schichten nicht mischen sollen"
        ]
        render(<Pagination steps={steps}/>)
        screen.getByText("7").click()
        expect(screen.getByText("Die Sahne über den Rücken eines Barlöffels vorsichtig in das Glas laufen lassen, wobei sich die Schichten nicht mischen sollen")).toBeInTheDocument()

    })
})