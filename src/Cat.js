import React from 'react';

export const Cat = (props) => {
    console.log(props)
    return(
        <div>
            <img src={props.cat.url} height="400" width="400"/>
        </div>
    )
};
