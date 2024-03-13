import * as actionTypes from './actionTypes';
import axios from 'axios';


export const getItemList=(orderLists)=>{
     return {
         type: actionTypes.GET_ORDERED_ITEM,
         orderLists:orderLists
     }
}

export const addItemList=(orderLists)=>{
    return {
        type: actionTypes.POST_ORDERED_ITEM,
        orderLists:orderLists
    }
}


 export const getOrderedList = (token)=>{
    return dispatch=>{
         console.log(token);
           axios.get('/getordereditems')
           .then(response=>{
               dispatch(getItemList(response.data))
           })
           .catch(err=>console.log(err));
    }
}


export const  addItemToOrderList = (id)=>{
    console.log("action order",id)
    return dispatch=>{
           axios.post('/order',id)
           .then(response=>{
               dispatch(addItemList(response.data))
           })
           .catch(err=>console.log(err));
    }
}


export const deleteItembyId=(id)=>{
    return {
        type: actionTypes.DELET_ITEM_ORDER,
        payload:id
    }
}

export const  deleteItem = (id)=>{
    console.log("llllllllllmmmmmmmmm",id)
    return dispatch=>{
           axios.delete('/order/'+id)
           .then(response=>{
               dispatch(deleteItembyId(response.data))
           })
           .catch(err=>console.log(err));
    }
}