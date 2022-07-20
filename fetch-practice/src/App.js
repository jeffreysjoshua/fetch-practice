import React, { Component } from 'react'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      locationData: ''
    }
  }
  // then is a higher order function that takes a new function
  getLocation = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({locationData: payload}))
  }
  render(){
    console.log(this.state.locationData)
    const {ip, city} = this.state.locationData
    return(
      <>
        <h1>A Basic Class Component</h1>
        <button onClick={this.getLocation}>Get your location</button>
        {/* The key referenced below ip and city comes from the json object found in console logging locationData  */}
        <p>Your IP: {ip}</p>
        <p>Your city: {city}</p>
      </>
    )
  }
}

// Insertion sort:


export default App
