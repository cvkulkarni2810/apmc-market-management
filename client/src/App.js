import logo from './logo.svg';
import './App.css';
import NavBar from './header/navbar';
import React from 'react';
import LotPendCommTable from './commission_agent/lot_actionpend_table';
import OngoingAuctionTable from './commission_agent/ongoing_auction_table';
import PreviousLotTable from './commission_agent/previous_lot_table';
import LotTable from './commission_agent/table_component';
import {Routes,Route ,BrowserRouter as Router} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LotPendCommTable/>
      <OngoingAuctionTable/>
      <PreviousLotTable/>
      <LotTable/>
    </div>  

  );
}

export default App;
