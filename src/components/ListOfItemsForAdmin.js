import React, { Component } from 'react';
import FormSelect from './FormSelect';
import ItemMenuAdmin from './ItemMenuAdmin';

class ListOfItemsForAdmin extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {items, id, isActive}=this.props;

        return (
            <div className="listOfDishes">
                <ul>
                    {items.map((item, i)=>{return  <li key={i} className="dish">
                        <div>
                            <span><ItemMenuAdmin isActive={isActive} id={id} text={item} /></span>
                        </div>
                    </li>})
                    }
                </ul>
            </div>
        );
    }
}

export default ListOfItemsForAdmin;