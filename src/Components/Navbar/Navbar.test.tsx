import React from 'react';
import {render} from '@testing-library/react';
import Logo from '../../Assets/Images/Logo.png'
import Hub from '../../Assets/Images/HUB.png'
import Navbar from './Navbar';

/**Test, if Navbar component is renderered correctly */
it('component renders', () => {
    const {queryByTestId} =render(<Navbar logo={Logo} logoAdditional={Hub}/>);
    const atomComponent = queryByTestId('navbarId');
    expect(atomComponent).toBeTruthy()
})