import React, { useState } from 'react'
import './Table.css'

function Table(props) {
    
    let {columnNames, tableEntries} = props.tableData
    const [highlightCell, setHighlightCell] = useState({ x : '' , y : '' })

    let cellEnter = (x,y) => {
        setHighlightCell({x,y})
    }

    let cellLeave = () => {
        setHighlightCell({x : '',y : ''})
    }

    let thisCellIsHighlighted = (x, y) => {
        return x === highlightCell.x && y === highlightCell.y
    }

    return (
    
        <table id = "table">
            <tbody>

                <tr>
                    {columnNames.map((name, index) => <th className = {highlightCell.y === index ? 'highlight' : ''} onMouseEnter = {() => cellEnter('', index)} onMouseLeave = {() => cellLeave()}>{name}</th>)}
                </tr>

                {tableEntries.map(
                    (entry, xIndex) => {
                        let rowDataEntries = []
                            columnNames.forEach((name, yIndex) => 
                                rowDataEntries.push(<td className = {yIndex === 0 && highlightCell.x === xIndex || thisCellIsHighlighted(xIndex, yIndex) ? 'highlight' : ''} 
                                    onMouseEnter = {() => cellEnter(xIndex, yIndex)} 
                                    onMouseLeave = {() => cellLeave()}>{entry[name]}</td>))
                            return <tr>{rowDataEntries}</tr>
                    }
                )} 

            </tbody>
        </table>

    );



  }
  
export default Table