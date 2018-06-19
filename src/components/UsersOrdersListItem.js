import React, { Component } from 'react';

export default function usersOrdersListItem(props){
    console.log(props.dishes);
    const getItem=props.dishes.map((item, i)=>{
        return <span key={i}>{item}, </span>
    })
    return (
        <div>
            {getItem}
        </div>
    )
}
