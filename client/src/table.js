import React, {useState} from 'react';

import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';

export default function LotDetailTable (){
    
    const [tableData, setTableData]=useState([])
    const columns=[
        { title: "Lot no", field:"lot"},
        { title: "Commodity", field:"lot"},
        { title: "Quantity", field:"quantity"},
        { title: "Farmer", field:"farmer"},
        { title: "Base price", field:"baseprice",  type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 }},
        { title: "Increment", field:"increment"},
        { title: "Start Time", field:"starttime"},
        { title: "End Time", field:"endtime"},
        { title: "Status", field:"status"},
    ]
    return(
        <MaterialTable columns={columns} data={tableData}/>

    )
}