import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.jsx';
import Info from './components/Info.jsx';
import {API_KEY} from './key';

class App extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            country: undefined,
            main: undefined,
            error: null,
            feels_like: undefined,
            humidity: undefined,
            name: undefined,
            pressure: undefined,
            speed: undefined,
            temp: undefined,
            temp_max: undefined,
            temp_min: undefined,
            visibility: undefined
          }
    }
    
    getWeather = async event => {
        event.preventDefault();
    
        const {city, nation} = event.target.elements;
        const cityValue = city.value;
        const nationValue = nation.value;
    
        if (cityValue && nationValue) {
            const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=
                            ${cityValue}, ${nationValue}&appid=${API_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            
            if (!data.name) {
                return this.setState({error: 'No results found'})
            } 

            if (!data.sys.country) {
                return this.setState({error: 'No results found'})
            } 
            
            this.setState({
                country: data.sys.country,
                main: data.weather[0].main,
                error: null,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                name: data.name,
                pressure: data.main.pressure,
                speed: data.wind.speed,
                temp: data.main.temp,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,  
                visibility: data.visibility,   
                }, () => {console.log(this.state)});
        } 

        else {
            return this.setState({error: 'Please, complete both fields'})
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <Form getWeather={this.getWeather} />
                            <Info country={this.state.country}
                                  main={this.state.main}
                                  error={this.state.error}
                                  feels_like={this.state.feels_like}
                                  humidity={this.state.humidity}
                                  name={this.state.name}
                                  pressure={this.state.pressure}
                                  speed={this.state.speed}
                                  temp={this.state.temp}
                                  temp_max={this.state.temp_max}
                                  temp_min={this.state.temp_min}
                                  visibility={this.state.visibility}
                            />
                        </div>
                    </div>
                </div> 
            </React.Fragment>           
        );
    }
}

export default App;