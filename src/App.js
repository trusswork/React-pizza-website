import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import { GlobalStyle } from './Components/globalStyles';
import Hero from './Components/Hero';
import Products from './Components/Products'
import {productData, productDataTwo} from './Components/Products/Data'
function App() {
    return ( 
    <Router >
        <GlobalStyle  />
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
        <Feature />
        <Products heading='Sweet Treats for you' data={productDataTwo} />
        <Footer />
    </Router>
    );
}

export default App;