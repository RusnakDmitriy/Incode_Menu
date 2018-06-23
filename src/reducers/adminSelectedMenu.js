import {ADMIN_MENU_SELECT, GET_MENU_FOR_ADMIN, SUCCESS} from '../constants';
import {OrderedMap, Record} from 'immutable';

// const ReducerState=Record({
//     entities:new OrderedMap({})
// });
//
// const defaultState=new ReducerState();

// const defaultState={
//     entities:[
//         {"id": "1",
//             "list": [
//                 {"src": "./img/food1.jpg",
//                     "text": "Наваристый суп харчо"},
//                 {"src": "./img/food2.jpg",
//                     "text": "Картофель отварной молодой"},
//                 {"src": "./img/food3.jpg",
//                     "text": "Биток Хмельницкий"},
//                 {"src": "./img/food4.jpg",
//                     "text": "Свежий салат из капусты с огурцом"}
//             ]
//         },
//         {"id": "2",
//             "list": [
//                 {"src": "./img/food1.jpg",
//                     "text": "Наваристый суп харчо"},
//                 {"src": "./img/food2.jpg",
//                     "text": "Картофель отварной молодой"},
//                 {"src": "./img/food3.jpg",
//                     "text": "Биток Хмельницкий"},
//                 {"src": "./img/food4.jpg",
//                     "text": "Свежий салат из капусты с огурцом"}
//             ]
//         },
//         {"id": "3",
//             "list": [
//                 {"src": "./img/food1.jpg",
//                     "text": "Наваристый суп харчо"},
//                 {"src": "./img/food2.jpg",
//                     "text": "Картофель отварной молодой"},
//                 {"src": "./img/food3.jpg",
//                     "text": "Биток Хмельницкий"},
//                 {"src": "./img/food4.jpg",
//                     "text": "Свежий салат из капусты с огурцом"}
//             ]
//         },
//         {"id": "4",
//             "list": [
//                 {"src": "./img/food1.jpg",
//                     "text": "Наваристый суп харчо"},
//                 {"src": "./img/food2.jpg",
//                     "text": "Картофель отварной молодой"},
//                 {"src": "./img/food3.jpg",
//                     "text": "Биток Хмельницкий"},
//                 {"src": "./img/food4.jpg",
//                     "text": "Свежий салат из капусты с огурцом"}
//             ]
//         }
//     ]
// };

const defaultState={};

export default (adminSelectedMenu=defaultState, action)=>{
    const {type, payload}=action;
    switch(type){
        case GET_MENU_FOR_ADMIN+SUCCESS: return {...adminSelectedMenu,
                                                    entities:[
                                                        {
                                                            id: payload[0].id,
                                                            list: [
                                                                {src: payload[0].list[0].dish[0].src, text: payload[0].list[0].dish[0].text},
                                                                {src: payload[0].list[0].dish[0].src, text: payload[0].list[0].dish[0].text},
                                                                {src: payload[0].list[0].dish[0].src, text: payload[0].list[0].dish[0].text},
                                                                {src: payload[0].list[0].dish[0].src, text: payload[0].list[0].dish[0].text}
                                                            ]
                                                        },
                                                        {
                                                            id: payload[1].id,
                                                            list: [
                                                                {src: payload[1].list[0].dish[0].src, text: payload[1].list[0].dish[0].text},
                                                                {src: payload[1].list[0].dish[0].src, text: payload[1].list[0].dish[0].text},
                                                                {src: payload[1].list[0].dish[0].src, text: payload[1].list[0].dish[0].text},
                                                                {src: payload[1].list[0].dish[0].src, text: payload[1].list[0].dish[0].text}
                                                            ]
                                                        },
                                                        {
                                                            id: payload[2].id,
                                                            list: [
                                                                {src: payload[2].list[0].dish[0].src, text: payload[2].list[0].dish[0].text},
                                                                {src: payload[2].list[0].dish[0].src, text: payload[2].list[0].dish[0].text},
                                                                {src: payload[2].list[0].dish[0].src, text: payload[2].list[0].dish[0].text},
                                                                {src: payload[2].list[0].dish[0].src, text: payload[2].list[0].dish[0].text}
                                                            ]
                                                        },
                                                        {
                                                            id: payload[3].id,
                                                            list: [
                                                                {src: payload[3].list[0].dish[0].src, text: payload[3].list[0].dish[0].text},
                                                                {src: payload[3].list[0].dish[0].src, text: payload[3].list[0].dish[0].text},
                                                                {src: payload[3].list[0].dish[0].src, text: payload[3].list[0].dish[0].text},
                                                                {src: payload[3].list[0].dish[0].src, text: payload[3].list[0].dish[0].text}
                                                            ]
                                                        }
                                                    ]}

        // case ADMIN_MENU_SELECT: return adminSelectedMenu.setIn(['entities', payload.id, payload.index], payload.selected)
        case ADMIN_MENU_SELECT: return {...adminSelectedMenu,
                                        entities: [...adminSelectedMenu.entities.slice(0, (payload.id-1)),
                                                    {...adminSelectedMenu.entities[payload.id-1],
                                                         list:[...adminSelectedMenu.entities[payload.id-1].list.slice(0,payload.number), payload.selected, ...adminSelectedMenu.entities[payload.id-1].list.slice(payload.number+1)]},
                                                    ...adminSelectedMenu.entities.slice(payload.id)]};
    }
    return adminSelectedMenu;
}