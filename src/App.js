import React from 'react';
import ReactDOM from 'react-dom';

//import Header from './components/Header';
import Navbar from './components/Navbar';  // Ensure this path matches the file location
import TwoSidedLayout from './components/TwoSidedLayout';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
//import CarouselComponent from './components/CarouselComponent';
//import GalleryComponents from './components/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CarouselComponent from './components/CarouselComponent'
import PromotionGlasses  from './components/PromotionGlasses';
function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="home">

            <CarouselComponent/>
            </section>
            <section id="about">
                <TwoSidedLayout />
            </section>
            <section id="services">
                <ServiceSection />
            </section>
            
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
