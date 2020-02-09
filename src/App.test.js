import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App.js'

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('Toggles user visibility of table on span click', () => {

    //add App to jsdom container
    act(() => {
        render(<App />, container)
    })
    
    //get toggle span
    const toggle = document.querySelector("[data-testid=table-toggle]")
    
    //query selector returns null if not present in the DOM, which we use in our assertions
    let table = document.querySelector("[data-testid=table]")
    
    //expect table by default to be present in DOM (assert not null)
    expect(table).toEqual(expect.anything())
    
    //trigger toggle onClick event, this should remove table from the DOM
    act(() => {
        toggle.dispatchEvent(new MouseEvent("click", { bubbles: true }))
      })

    //search for table in the DOM
    table = document.querySelector("[data-testid=table]")
    
    //expect table to no longer be in the DOM
    expect(table).toBeNull()
      
    //click toggle five more times
    act(() => {
        for (let i = 0; i < 5; i++) {
            toggle.dispatchEvent(new MouseEvent("click", { bubbles: true }))
        }
      })

    //search for table in the DOM
    table = document.querySelector("[data-testid=table]")
    
    //expect table to be visible 6 % 2 = 0 (clicked 0 or positive number of times should result in table present in the DOM)
    expect(table).toEqual(expect.anything())

})

