import React from 'react';

const Features = (props) => {

    const featuresName = props.features;

    return (
        <div>
            <p>{featuresName.description}</p>
        </div>
    );
};

export default Features;