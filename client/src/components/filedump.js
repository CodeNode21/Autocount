import React from 'react';


function FileDump(){
    return(
        <div>
        <div className="card" 
        // style="width: 18rem;"
        >
            <div className="card-body">
                <h5 className="card-title">Statement CSV</h5>
                <h6 className="card-subtitle mb-2 text-muted">Vendor's outstanding items data</h6>
                <p className="card-text">Upload statment details in CSV format</p>
                <a href="#" className="card-link">Card link</a>
                {/* <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
        <div className="card" 
        // style="width: 18rem;"
        >
            <div className="card-body">
                <h5 className="card-title">Open Payables CSV</h5>
                <h6 className="card-subtitle mb-2 text-muted">Items processed not yet paid</h6>
                <p className="card-text">Upload processed items detail pending payemnt in CSV format</p>
                <a href="#" className="card-link">Card link</a>
                {/* <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
        <div className="card" 
        // style="width: 18rem;"
        >
            <div className="card-body">
                <h5 className="card-title">Payments CSV</h5>
                <h6 className="card-subtitle mb-2 text-muted">Items paid with payemnt details</h6>
                <p className="card-text">Upload payments data for vendor in CSV format</p>
                <a href="#" className="card-link">Card link</a>
                {/* <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
        </div>
    );
}

export default FileDump;