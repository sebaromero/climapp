import React from 'react';

const Form = props => {
    return (
        <div className="card card-body p-4 m-2 shadow">
            <form onSubmit={props.getWeather}>
                <div className="input-group mb-3 rounded-3">
                    <span className="input-group-text text-secondary bg-white border-0">
                        <i className="fas fa-building"></i>
                    </span>
                    <input type="text" 
                           name="city"
                           placeholder="Enter city"
                           className="form-control border-bottom"  
                           autoFocus />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text text-secondary bg-white border-0">
                        <i className="fas fa-flag"></i>
                    </span>
                    <input type="text" 
                           name="nation"
                           placeholder="Enter country"
                           className="form-control border-bottom"  />
                </div>
                <button className="btn btn-primary rounded-pill">Get  Weather</button>
            </form>
        </div>
    );
}

export default Form;