import React, { useState } from 'react';
import './App.css'
import Table from './Table.js'

function App() {
  
  const [tableData, setTableData] = useState({
    columnNames : ['name', 'col2', 'col3', 'col4', 'col5'],
    tableEntries : [
      {
        name : 'name1',
        col2 : 'entry2',
        col3 : 'entry3',
        col4 : 'entry4',
        col5 : 'entry5',
      },
      {
        name : 'name1',
        col2 : 'entry2',
        col3 : 'entry3',
        col4 : 'entry4',
        col5 : 'entry5',
      },
      {
        name : 'name1',
        col2 : 'entry2',
        col3 : 'entry3',
        col4 : 'entry4',
        col5 : 'entry5',
      },
      {
        name : 'name1',
        col2 : 'entry2',
        col3 : 'entry3',
        col4 : 'entry4',
        col5 : 'entry5',
      },{
        name : 'name1',
        col2 : 'entry2',
        col3 : 'entry3',
        col4 : 'entry4',
        col5 : 'entry5',
      }
    ]
  })

  const [tableVisible, setTableVisible] = useState(true)

  return (
    <div className="App">
      <div className = 'App-link' >
      
        <span onClick = {() => setTableVisible(!tableVisible)}>
          Toggle Table
        </span>
      </div>
      {tableVisible &&
        <Table tableData = {tableData} setTableVisible = {() => setTableVisible(!tableVisible)} />
      }
    </div>
  );
}

export default App;
