import React, {useState, useEffect} from 'react';

import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import tableIcons from './materialTableIcons';
import { textAlign } from '@mui/system';
export default function TradeTable (){
    
    const [tableData, setTableData]=useState([])
    const columns=[
        { title: "Lot no", field:"lot_no"},
        { title: "Farmer Name", field:"f_fname"},
        { title: "Quantity", field:"lot_quantity"},
        { title: "Commision Agent", field:"c_fname"},
        { title: "Sale Price", field:"bid_price", cellStyle: {
          textAlign: "center"
      }, headerStyle:{textAlign:"center"}, type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 }},
        { title: "Trader Name", field:"t_fname"},
        { title: "Commodity", field:"commodity_name"},
        
    ]
 
    useEffect(() => {
      fetch("http://localhost:8081/trades")
        .then(resp => resp.json())
        .then(resp => {
          setTableData(resp)
        })
    }, [])
    return(
        <MaterialTable columns={columns} data={tableData} icons={tableIcons} style={{width: '80vw'}}
        actions={[
            {
              icon: tableIcons.Delete,
              tooltip: "Delete User",
              onClick: (event, rowData) => alert("You want to delete " + rowData.name),
            },
            {
              icon: tableIcons.Add,
              tooltip: "Add User",
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new row"),
            },
          ]}
          options={{
           
             columnsButton: true,
            rowStyle:{ background: "#FCFFFB" },
            headerStyle: { background: "#9ABE4C",color:"#fff"}
          }}
          title="All Trades"
           
           />
          
        

    )
}