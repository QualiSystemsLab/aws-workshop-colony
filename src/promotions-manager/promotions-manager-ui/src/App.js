import React from 'react';
import './App.css';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Components/Footer/FooterComponenet"

console.log('react version:' + React.version);

const App = () => (
    <div className="App">
        <Header />
        <Main />
        <Footer/>
    </div>
)

export default App;