import React, {Component} from 'react';

export default class FormSelect extends Component{
    constructor(props){
        super(props);
    }

    handleChange=(ev, index)=>{
        const {isActive}=this.props;
        if(!isActive) {this.props.onChangeSelect(ev.target.value, ev.target.selectedIndex);}
    }

    render() {
        const {selected, text, isActive}=this.props;
        const getList = text.map((item, i)=>{
            return <option key={i} value={item.text}>{item.text}</option>
        })

        return (
            <form name="selection">
                <select disabled={isActive} name="filter" value={selected.select} onChange={this.handleChange}>
                    {getList}
                </select>
            </form>
        )
    }
}