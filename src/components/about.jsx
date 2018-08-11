import React from 'react';

const about = ({match}) => {
    console.log(match);
    return (
        <h1>Hello World its About : {match.params.name}</h1>
    );
    
};

export default about;