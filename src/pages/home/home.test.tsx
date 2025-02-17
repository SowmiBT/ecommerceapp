import { render, screen } from '@testing-library/react'
import HomePage from '.'

test('render correctly', () => {
    render(<HomePage />)
    const element = screen.getByText(/home/i)
    expect(element).toBeInTheDocument()
})