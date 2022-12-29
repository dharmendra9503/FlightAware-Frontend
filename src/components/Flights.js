import React from 'react';
import '../css/Flight.css';

function FlightPrice() {
    return (
        <>
            <div className="container">
                <h2 className='center'>SEARCH HERE</h2>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-xs-8">
                            <input className="local" type="text" name="adults" placeholder="ENTER ADULTS"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-8">
                            <input className="source" type="text" name="source" placeholder="ENTER ORIGIN"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-8">
                            <input className="destination" type="text" name="destination" placeholder="ENTER DESTINATION"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-8">
                            <input className="date" type="text" name="date" placeholder="ENTER DEPARTURE DATE IN YYYY-MM-DD FORMAT"></input>
                        </div>
                    </div>
                    <div className="result-container">
                        <button className='result' type='submit'>RESULT</button>
                    </div>
                </form>
            </div >
        </>
    )
}


export default FlightPrice;