
import React from 'react';
import {Cat} from './Cat';


class CatList extends React.Component{

    renderCats = () => {
        console.log("cats", this.props.cats[0])
       
        return this.props.cats[0].map((cat, index) => {
            return(
                <Cat cat={cat} key={index}/>
            )
        })
    }
    render(){
        console.log("catlistrender", this.props)
        return(
            <div>
                {
                    this.renderCats()
                }
            </div>
        )
    }
};

export default CatList;