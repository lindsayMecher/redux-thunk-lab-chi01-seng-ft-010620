import React from 'react';

export const Cat = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.url} />
        </div>
    )
};
