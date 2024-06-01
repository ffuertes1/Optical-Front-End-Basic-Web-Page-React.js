// In App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';  // Ensure this path matches the file location
//import TextCardsLayout from './components/TextCardsLayout';
import TwoSidedLayout from './components/TwoSidedLayout';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
//import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar /> 
            <TwoSidedLayout/>
            <ServiceSection/>
            <Footer/>
        </div>
    );
}

export default App;
