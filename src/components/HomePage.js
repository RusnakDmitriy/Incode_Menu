import React, { Component } from 'react';
import ListOfItems from './ListOfItems';



class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            active:null
        }
    }

    handleChoiceMenu=(i)=>{
        this.setState({active: i});
    }

    render() {
        const getList = this.props.list.map((item,i)=>{
            return <li key={i} className="listItem" onClick={()=>this.handleChoiceMenu(i)}>
                        <ListOfItems isActive={i===this.state.active}  item={item} />
                        <div className="menuNumber">{i+1}</div>
                    </li>
        })


        return (
            <div className="listScreen">
                <ul className="listOfItems clearfix">
                    {getList}
                </ul>
            </div>
        );
    }
}

export default HomePage;