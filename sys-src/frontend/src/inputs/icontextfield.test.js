import React from 'react';
import { render } from '@testing-library/react';

//Import own modules
import IconTextField from '../inputs/icontextfield';

describe('Testfield is rendering correctly', () => {
    it('renders without crashing', () => {
        render(<IconTextField/>);
    })

    it('Propertys are rendering correctly', () => {
        render(<IconTextField type={"password"}/>);
    })
})