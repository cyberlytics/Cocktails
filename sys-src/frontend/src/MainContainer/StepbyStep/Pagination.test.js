import React from 'react'
import { render } from '@testing-library/react'
import Pagination from "./Pagination"

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
    const currentStep = 0

    const paginate = () => {}

    const increasestep = () => {}
    const decreasestep = () => {}

    render(<Pagination steps={steps} paginate={paginate} increasestep={increasestep} decreasestep={decreasestep} currentStep={currentStep}/>)
    
  }); 