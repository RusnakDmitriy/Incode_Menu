import React, { Component } from 'react';

class ListOfItems extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {item, isActive}=this.props;

        return (
            <div className={isActive ? "listOfDishes menuActive" : "listOfDishes"}>
                <ul>
                    {item.map((item, i)=>{return  <li key={i} className="dish">
                                                        <div>
                                                            <span><img src={item.src} alt="img" /></span>
                                                            <span><p>{item.text}</p></span>
                                                        </div>
                                                    </li>})
                    }
                </ul>
            </div>
        );
    }
}

export default ListOfItems;