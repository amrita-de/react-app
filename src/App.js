// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import HomeScreen from './Components/HomeScreen';
import FeatureComponent from './Components/FeatureComponent';
import FooterComponent from './Components/FooterComponent';


function App() {
    return (
        <div>
            
            
              <Navbar/>
                <HomeScreen/>
                <FeatureComponent/>
                <FooterComponent/>
        </div>
    );
}

export default App;
