import {createSelector} from 'reselect';

const pageGetter = state=>state.usersOrderList.page;
const usersOrderGetter = state=>state.usersOrderList.entities;

export const paginationUsersOrderSelector = createSelector(pageGetter,usersOrderGetter,(page,data)=>{
    console.log(data)
    if(!data) return data=[];
    return data.filter((item)=> {return (item.id<page*5 && item.id>=page*5-5)});
})