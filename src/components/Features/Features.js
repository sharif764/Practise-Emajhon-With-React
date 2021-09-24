import React from 'react';

const Features = (props) => {
    console.log(props);
    const featuresName = props.features;
    console.log(featuresName);
    return (
        <div>
            <p>{featuresName.description}</p>
        </div>
    );
};

export default Features;