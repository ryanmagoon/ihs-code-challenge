import { render, waitFor } from '@testing-library/react'
import App from './App'

const alertSpy = jest.spyOn(window, 'alert')

it('renders', () => {
  const { container } = render(<App />)
  expect(container).toBeInTheDocument()
})

describe('Album', () => {
  it('renders', () => {
    const { getByText } = render(<App />)
    expect(getByText('Challenge 1: Switch Albums')).toBeInTheDocument()
  })

  it('basically works', () => {
    const { getByRole, getByText } = render(<App />)
    expect(getByText('Revolver')).toBeInTheDocument()
    getByRole('button', { name: 'Switch Album' }).click()
    expect(getByText('Pet Sounds')).toBeInTheDocument()
  })
})

describe('Counter', () => {
  it('renders', () => {
    const { getByText } = render(<App />)
    expect(getByText('Challenge 2: Counter')).toBeInTheDocument()
    expect(getByText('Count is: 0')).toBeInTheDocument()
  })

  it('increments and decrements', () => {
    const { getByRole, getByText } = render(<App />)
    const incrementButton = getByRole('button', { name: '+' })
    const decrementButton = getByRole('button', { name: '-' })
    incrementButton.click()
    expect(getByText('Count is: 1')).toBeInTheDocument()
    decrementButton.click()
    expect(getByText('Count is: 0')).toBeInTheDocument()
    decrementButton.click()
    expect(getByText('Count is: -1')).toBeInTheDocument()
  })
})

describe('Toggle', () => {
  it('renders', () => {
    const { getByText } = render(<App />)
    expect(getByText('Challenge 3: Toggle')).toBeInTheDocument()
  })

  it('toggles', async () => {
    const { getByAltText, getByRole, queryByAltText } = render(<App />)
    expect(getByAltText('Sloth')).toBeInTheDocument()
    const removeSlothButton = getByRole('button', {
      name: 'Remove the cute sloth',
    })
    removeSlothButton.click()
    await waitFor(() => expect(alertSpy).toHaveBeenCalled())
    expect(queryByAltText('Sloth')).toBeNull()
    const showSlothButton = getByRole('button', { name: 'Show the cute sloth' })
    showSlothButton.click()
    expect(getByAltText('Sloth')).toBeInTheDocument()
  })
})
