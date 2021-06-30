import React from 'react';
import { render } from '@testing-library/react';

//Import own modules
import IconTextField from '../inputs/icontextfield';

describe('<IconTextField/>', () => {
    //Textfeld wird erfolgreich gerendert
    it('renders without crashing', () => {
        render(<IconTextField/>);
    })
    //Propertys funktionieren
    it('props working', () => {
        render(<IconTextField type={"password"}/>);
    })
})