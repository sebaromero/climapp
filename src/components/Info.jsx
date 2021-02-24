import React from 'react';

const Info = props => {
    return(
        <div>
            {
                props.error && 
                <div className="alert alert-primary p-4 m-2 pb-2 d-flex flex-row"
                     role="alert">
                    <i className="fas fa-exclamation-circle mx-2 mt-1"></i>
                    <p className="text-primary">{props.error}</p>
                </div>
            }
            {
                props.temp ?
                <div className="card card-body p-4 m-2 shadow rounded-3">
                    <div className="card-header bg-white">{props.name}, {props.country}
                        <p className="text-secondary mb-0">{props.main}</p>
                        <p className="fs-1 mb-0">{Math.round(props.temp)}°</p>        
                        <p>{Math.round(props.temp_min)}° <span className="text-secondary">|</span> {Math.round(props.temp_max)}°</p>               
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p className="text-secondary mb-0">Feels Like</p>
                            <p className="mb-0">{Math.round(props.feels_like)}°</p>
                        </li>
                        <li className="list-group-item">
                            <p className="text-secondary mb-0">Humidity:</p> 
                            <p className="mb-0">{props.humidity} %</p>
                        </li>
                        <li className="list-group-item">
                            <p className="text-secondary mb-0">Wind Speed</p>
                            <p className="mb-0">{props.speed} Km/h</p>
                        </li>
                        <li className="list-group-item">
                            <p className="text-secondary mb-0">Pressure</p>
                            <p className="mb-0">{props.pressure} hPa</p>
                        </li>
                        <li className="list-group-item">
                            <p className="text-secondary mb-0">Visibility</p>
                            <p className="mb-0">{props.visibility} m</p>
                        </li>
                    </ul>
                </div>
                :
                <div></div>
            }
        </div>       
    )
}

export default Info;