import React, { Component } from 'react';
import './Services.css';

class Services extends Component{
    render(){
        return(
            <div className="services">
                <h3>services</h3>
                <h2>what we offer</h2>
                <div className="row">
                    <div>
                        <span>
                            <ion-icon name="phone-portrait"></ion-icon>
                        </span>
                        <h4>Contact</h4>
                        <p>You can reach out to me anytime</p>
                    </div>

                    <div>
                         <span>
                            <ion-icon name="brush"></ion-icon>
                         </span>
                         <h4>About me</h4>
                        <p>I'm fresh</p>
                    </div>

                    <div>
                        <span>
                            <ion-icon name="thumbs-up"></ion-icon>
                        </span>
                        <h4>Stuff</h4>
                        <p>ya boy <ion-icon name="heart"></ion-icon> react</p>
                    </div>

                    <div>
                        <span>
                            <ion-icon name="help"></ion-icon>
                        </span>
                        <h4>Questions</h4>
                        <p>Ask me anything</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;