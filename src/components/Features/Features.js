import React from 'react';
import './Features.css';
import feature1 from '../../images/feature1.png';
import feature2 from '../../images/feature2.png';
import feature3 from '../../images/feature3.png';
import SingleFeature from './SingleFeature';

function Features() {
    
    const features = [
        {   
            id: 1,
            title: "Quick Delivery",
            image: feature1,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, { 
            id: 2,
            title: "A Good Auto Responder",
            image: feature2,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }, {
            id: 3,
            title: "Home Delivery",
            image: feature3,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    ];


    return (
        <section className="features my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Why you choose us</h2>
                                <p className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                            </div>
                        </div>
                    </div>

                    {
                        features.map(feature => <SingleFeature key={feature.id} feature={feature} />)
                    }

                </div>
            </div>
        </section>
    );
}

export default Features;