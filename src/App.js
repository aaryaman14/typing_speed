import React, { Component } from 'react';  
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";   

class App extends Component {
  
  render()
  {
    const data = [{  
      Roll_number: 1, 
      Image: 'abc.jpg',
      Total_words: 100,
      Total_characters: 800,
      Words_per_Minute: 7,
      Characters_per_Minute: 56
      },{  
      Roll_number: 2, 
      Image: 'efg.jpg',
      Total_words: 80,
      Total_characters: 640,
      Words_per_Minute: 5,
      Characters_per_Minute: 40 
      },{  
      Roll_number: 3, 
      Image: 'xyz.jpg',
      Total_words: 90,
      Total_characters: 720,
      Words_per_Minute: 8,
      Characters_per_Minute: 64  
      }]  
  
    const columns = [{  
      Header: 'Roll_number',  
      accessor: 'Roll_number'  
      },{
      Header: 'Image',  
      accessor: 'Image'  
      },{
      Header: 'Total_words',  
      accessor: 'Total_words'  
      },{
      Header: 'Total_characters',  
      accessor: 'Total_characters'  
      },{
      Header: 'Words_per_Minute',  
      accessor: 'Words_per_Minute'  
      },{
      Header: 'Characters_per_Minute',  
      accessor: 'Characters_per_Minute'  
      }]
  
    return (
      <div>
        <ReactTable  
            data={data}  
            columns={columns}  
            defaultPageSize = {2}  
            pageSizeOptions = {[2,4,6]}  
        />  
      </div>
    )
  }
      
}

export default App;
