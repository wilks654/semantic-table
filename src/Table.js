import React from 'react'
import './Table.css'

function Table(props) {
    
    let {columnNames, tableEntries} = props.tableData
    //let {setTableVisible} = props

    return (
    
        <table id = "table">
            <tbody>
                <tr>
                    {columnNames.map(name => <th>{name}</th>)}
                </tr>

                {tableEntries.map(
                    entry => {
                        let rowDataEntries = []
                            columnNames.forEach(name => rowDataEntries.push(<td>{entry[name]}</td>))
                            return <tr>{rowDataEntries}</tr>
                    }
                )} 
            </tbody>
        </table>

    );
  }
  
export default Table