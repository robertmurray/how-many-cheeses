import React, {Component} from 'react';
import './App.css';
import Map from './components/GoogleMap/GoogleMap'
import Places from './components/PlacesComponent/Places'
import SideNav from './components/SideNav/SideNav'
import NavBar from './components/Common/Navigation/NavBar'
import SearchButton from './components/Common/Button'
import SearchBar from './components/Common/SearchBar'
import TextArea from './components/TextArea/TextArea'
import Header from './components/Header'
import Email from './components/Login/Email'
import Password from './components/Login/Password'
import Login from './components/Login/LoginTitle'

class App extends Component {
    render() {
        const location = {
            lat: 40.7575285,
            lng: -73.9884469
        }
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div style={{
                    width: 500,
                    height: 500,
                    background: 'red'
                }}>
                    <SideNav/>
                    <SearchBar/>
                    <Map center={location}/>
                    <SearchButton/>
                    <Header/>
                    <TextArea/>
                    <Login/>
                    {/* <Email/> */}
                    {/* <Password/> */}
                </div>
            </div>
        );
    }
}

export default App;
