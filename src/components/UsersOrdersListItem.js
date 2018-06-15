import React, { Component } from 'react';

export default function usersOrdersListItem(props){
    console.log(props.dishes);
    const getItem=props.dishes.map((item)=>{
        return <span>{item}, </span>
    })
    return (
        <div>
            {getItem}
        </div>
    )
}
