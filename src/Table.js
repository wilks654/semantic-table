import React, { useState } from 'react'
import './Table.css'

function Table(props) {
    
    //Props
    let {tableHeader, tableRows} = props.tableData

    //State, currently hovered table data cell
    const [highlightedCellCoordinates, setHighlightedCellCoordinates] = useState({ x : '' , y : '' })


    //MouseEnter/Leave table cell handlers
    let cellEnter = (x,y) => {
        setHighlightedCellCoordinates({x,y})
    }

    let cellLeave = () => {
        setHighlightedCellCoordinates({x : '',y : ''})
    }

    //returns bool describing if data cell should be highlighted
    let highlightCell = (x, y) => {
        //should highlight?
        let highlight = false

            /* Highlight Rules */
            /* Left most cell highlighted on hover (row entry name/id) */
            /* Remaining cells highlight on hover in addition to left most cell */
            // (header highlighting is handled in render)

            //highlight left most cell if on same row as hovered coords
        if ((x === 0 && y === highlightedCellCoordinates.y) ||
            //highlight if match hovered coords
            (x === highlightedCellCoordinates.x && y === highlightedCellCoordinates.y)) {

                highlight = true

        }

        //return data cell with highlight? and mouseEvents
        return highlight

    }

    //Return a sementic table
    return (
        <table id = "table">
            <tbody>
                {/* Table Header derived from props.tableHeader
                    takes an array and uses Array.map to output an array containing JSX
                 */}
                <tr key = {0}>
                    {tableHeader.map((name, xIndex) => {
                        return (
                            <th key = {xIndex} 
                                className = {highlightedCellCoordinates.x === xIndex ? 'highlight' : ''} 
                                onMouseEnter = {() => cellEnter(xIndex, '')} 
                                onMouseLeave = {() => cellLeave()}>
                                    {name}
                            </th>)}
                        )
                    }
                </tr>

                {/* Generate Table rows containing table data
                 */}
                {tableRows.map(
                    (row, yIndex) => {
                        //generate rows JSX from props.tableRows
                        return (
                            <tr key = {yIndex + 1}>
                                {/* return row JSX consisting of table data cells
                                */}
                                {row.map((entry, xIndex) => {
                                    return(
                                        <td key = {xIndex} className = {highlightCell(xIndex, yIndex) ? 'highlight' : ''}
                                                onMouseEnter = {() => cellEnter(xIndex, yIndex)}
                                                onMouseLeave = {() => cellLeave()}
                                            >
                                                {entry}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    }
                )} 

            </tbody>
        </table>

    );



  }
  
export default Table

