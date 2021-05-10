import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LeftCard from './LeftCard'

test('button in form was clicked', () =>{
    render(<LeftCard/>)
    const outputText =  screen.getByText("Nice to see you again, we hope you are doing great");
    expect(outputText).toBeInTheDocument();
})