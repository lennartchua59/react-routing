import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";

class App extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
              <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path="/products/:productId" element={<SingleProductScreen/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>
                
                <FooterBar/>
            </div>
        );
    }
}

export default App;