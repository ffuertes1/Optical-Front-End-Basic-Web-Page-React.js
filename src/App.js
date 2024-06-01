// In App.js
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';  // Ensure this path matches the file location
//import TextCardsLayout from './components/TextCardsLayout';
import TwoSidedLayout from './components/TwoSidedLayout';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
//import './App.css';
// index.js or App.js
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import React from 'react';
import ReactDOM from 'react-dom';
import GalleryComponent from './components/GalleryComponent';

//import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


function App() {
    return (
        <div className="App">
            <Header />
            <Navbar /> 
            <GalleryComponent/>
            <TwoSidedLayout/>
            <ServiceSection/>
            <Footer/>
            

        </div>
    );
}

export default App;
