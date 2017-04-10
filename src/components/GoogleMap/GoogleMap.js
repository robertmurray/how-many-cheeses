import React, {Component} from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'
// const API_KEY = 'AIzaSyA6_Q41cfo5GrTNCxzbKEIBg2lE7Gn-acw';

class Map extends Component {
 render () {
  const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
  return (
   <GoogleMapLoader
     containerElement = {mapContainer}
     googleMapElement = {
      <GoogleMap
         defaultZoom = {15}
         defaultCenter = {this.props.center}
         options = {{streetViewControl: false, mapTypeControl: false}}>
      </GoogleMap>
     } />
  )
 }
}

export default Map
