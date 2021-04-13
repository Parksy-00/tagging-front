import React from "react"
import { render } from "@testing-library/react"
import '@testing-library/jest-dom'
import {BrowserRouter } from 'react-router-dom'
import MainSpace from './Intro'

describe("Intro page", () => {
  it("renders trial button", () => {  
    const { getByText } = render(<BrowserRouter>
                                    <MainSpace />
                                 </BrowserRouter>)
    const header = getByText('stolage')
    expect(header).toBeInTheDocument()
  })
})