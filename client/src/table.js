import React, {useState, useEffect} from 'react';
import SignInSide from './login';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import tableIcons from './materialTableIcons';
export default function LotDetailTable (){
  const [f_id, setf_id] = useState(101);
  const [tableData, setTableData]=useState([])


    const columns=[
        { title: "Farmer", field:"f_fname"},
        { title: "Lot no", field:"lot_no"},
        { title: "Commodity", field:"commodity_name"},
        { title: "Quantity", field:"lot_quantity"},
        { title: "Base price", field:"base_price",  type: "currency", currencySetting: { currencyCode: "INR", minimumFractionDigits: 1 }},
        { title: "Start Time", field:"start_time"},
        { title: "Status", field:"status"},
        //      { title: "Lot no", field:"f_id"},
        // { title: "Commodity", field:"f_village"},
        // { title: "Quantity", field:"f_district"},
    ]
 
    useEffect(() => {
      fetch(`http://localhost:8081/mylots/101`)
        .then(resp => resp.json())
        .then(resp => {
          setTableData(resp)
        })
    }, [])
    return(
      <div>
      
        <MaterialTable columns={columns} data={tableData} icons={tableIcons}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction:true
          }
        ]}
          options={{
           
            grouping: true, columnsButton: true,
            rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#9ABE4C",color:"#fff"}
          }}
          title="Pending Lots"
           />
          </div>
        

    )
}