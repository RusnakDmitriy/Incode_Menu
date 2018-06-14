import React, { Component } from 'react';
import FormSelect from './FormSelect';
import ItemMenuAdmin from './ItemMenuAdmin';

class ListOfItemsForAdmin extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {items, id}=this.props;

        return (
            <div className="listOfDishes">
                <ul>
                    {items.map((item, i)=>{return  <li key={i} className="dish">
                        <div>
                            {/*<span><img src="" alt="img" /></span>*/}
                            <span><ItemMenuAdmin text={item} /></span>
                            {/*<span><FormSelect selected={select} onChangeSelect={this.handleChangeSelect} text={item.text} /></span>*/}
                        </div>
                    </li>})
                    }
                </ul>
            </div>
        );
    }
}

export default ListOfItemsForAdmin;