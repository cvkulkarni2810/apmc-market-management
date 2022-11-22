import React from 'react'
import NavBar from './header/navbar'
import ResponsiveAppBar from './header/headmui';
import SignInSide from './login';
import './app.css'
import './Dashboard.css'
import TradeTable from './TradeTable';
export function Dashboard() {
    return (
        <div className="App">
            <NavBar />
        <div className='tradetable'>
            <TradeTable/>
            </div>
        </div>

    );
}

