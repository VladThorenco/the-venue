import React, {Component} from 'react';
import '../../resourses/styles.css';
import {Element} from 'react-scroll';
import Header from "../Header_Footer";
import Features from "../featured";
import VenueInfo from "../VenueInfo";
import HighLights from "../HightLigths";
import Pricing from "../Pricing";
import Location from "../Location";
import Footer from "../Footer";


class App extends Component {
    render() {
        return (
            <div className='App' style={{height: '1500px'}}>
                <Header/>
                <Element name='featured'>
                    <Features/>
                </Element>

                <Element name='venueifno'>
                    <VenueInfo/>
                </Element>

                <Element name='highlights'>
                    <HighLights/>
                </Element>

                <Element name='pricing'>
                    <Pricing/>
                </Element>

                <Element name='location'>
                    <Location/>
                </Element>

                <Footer/>
            </div>
        );
    }
}


export default App;
