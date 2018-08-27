import React, { Component } from 'react'
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";


class App extends Component {
    val = {};
    render() {

        return (
            <div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default App;
