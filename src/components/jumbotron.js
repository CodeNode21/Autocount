import React from 'react';
import './styles.css';


function Jumbotron(){
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Autocount+</h1>
                <p className="lead">Automated Statement Reconciliation</p>
                    {/* <form action="myform.cgi">
                        <input type="file" name="fileupload" value="fileupload" id="fileupload"/>
                        <label for="fileupload"> Select a file to upload</label>
                        <input type="submit" value="submit"/>
                    </form> */}
            </div>
        </div>
    );
}

export default Jumbotron;