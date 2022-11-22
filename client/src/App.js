import React from 'react'
import NavBar from './header/navbar'
import ResponsiveAppBar from './header/headmui';
import SignInSide from './login';
import './app.css'
export function App() {
    return (
        <div className="App">
            {/* <ProminentAppBar/> */}
            <NavBar />
            {/* <ResponsiveAppBar/> */}
            <div class="float-container">

                <div class="float-child">
                    
                </div>

                <div class="float-login">
                    <SignInSide />
                </div>

            </div>
        </div>

    );
}

