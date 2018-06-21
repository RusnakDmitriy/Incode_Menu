import React, { Component } from 'react';

export default function UsersOrdersListItem(props){

    const getItem=props.dishes.map((item, i)=>{
        return <span key={i}>{item}, </span>
    })
    return (
        <div>
            {getItem}
        </div>
    )
}
