import logo from './logo.svg';
import './FarmerDash.css';
import NavBar from './header/navbar';
import React from 'react';
import LotPendCommTable from './commission_agent/lot_actionpend_table';
import OngoingAuctionTable from './commission_agent/ongoing_auction_table';
import PreviousLotTable from './commission_agent/previous_lot_table';
import LotTable from './commission_agent/table_component';
import {Routes,Route ,BrowserRouter as Router} from 'react-router-dom'; 
import MuiLotTable from './commission_agent/muiLotTable';
import LotDetailTable from './table';
import ProminentAppBar from './header/headmui';

function FarmerDash() {
  return (
    <div className="App">
      {/* <ProminentAppBar/> */}
      <NavBar/>
      
      <div className="lottable">
      {/* <LotPendCommTable/>
      <OngoingAuctionTable/>
      <PreviousLotTable/>
      <LotTable/>
      <MuiLotTable/> */}
      
      <LotDetailTable/>
      </div>
      
    </div>  

  );
}

export default FarmerDash;
