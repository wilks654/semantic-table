import React, { useState } from 'react';
import './App.css'
import Table from './Table.js'

function App() {
  
  //Set initial state data
  //To mimic how a csv file might be destructured (Header and subsequent rows)
  const [tableData, setTableData] = useState({
    tableHeader : ['id', 'col2', 'col3', 'col4', 'col5'],
    tableRows : [
       [
        'name1',
        'entry2entry2entry2entry2entry2entry2entry2entry2',
        'entry3',
        'entry4',
        'entry5'
       ],
       [
        'name1',
        'entry2entry2entry2entry2entry2entry2entry2entry2',
        'entry3',
        'entry4',
        'entry5'
       ],
       [
        'name1',
        'entry2entry2entry2entry2entry2entry2entry2entry2',
        'entry3',
        'entry4',
        'entry5'
       ],
       [
        'name1',
        'entry2entry2entry2entry2entry2entry2entry2entry2',
        'entry3',
        'entry4',
        'entry5'
       ],
       [
        'name1',
        'entry2entry2entry2entry2entry2entry2entry2entry2',
        'entry3',
        'entry4',
        'entry5'
       ]
    ]
  })

  //table visibility
  const [tableVisible, setTableVisible] = useState(true)

  return (
    <div className="App">
      <div className = 'App-link' >
        {/* When clicked will hide/unhide table*/}
        <span onClick = {() => setTableVisible(!tableVisible)}>
          Toggle Table
        </span>
      </div>

      {/*Conditional render for show table from state*/}
      {tableVisible &&
        <Table tableData = {tableData} setTableVisible = {() => setTableVisible(!tableVisible)} />
      }

    </div>
  );
}

export default App;
