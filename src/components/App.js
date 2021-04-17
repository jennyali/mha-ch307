import React from 'react';

import Header from './Header';
import Footer from './Footer';
import MovingPanel from './MovingPanel';
import './App.css';

const App = () => {
    return (
        <div className="app-body">
            <Header />
            <MovingPanel />
            <Footer />
        </div>
    )
};

export default App;