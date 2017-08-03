const initialState = { 
    value: '' ,
    list : []
};

const HANDLECHANGE = "HANDLECHANGE";
const SUBMITTASK = "SUBMITTASK";
const COMPLETETASK = "COMPLETETASK";
const DELETE = "DELETE";
export default function counter (state = initialState, action) {
        let newList;
        console.log('inside the reducer')
    switch (action.type){
        
        case HANDLECHANGE:  
            console.log('handleinput')
            return Object.assign( {}, state, {
                value: action.payload
            })
        case SUBMITTASK:
            console.log('createtask')
             newList = [...state.list,{ task: action.payload, completed: false }]
            return Object.assign( {}, state, {
                value: '',
                list: newList
            })
        case COMPLETETASK:
            console.log('complete task')
            newList = [...state.list]
            newList[action.payload].completed = true
            console.log('its true')
            return Object.assign( {}, state, {
                list: newList
            })
        case DELETE:
            console.log(action.payload, 'payload here')
            newList = [...state.list]
            newList.splice(action.payload,1)
            return Object.assign({}, state, {
                list: newList
            })
        default:
            console.log('default')
          return state
    }
}



export function handleChange(e){
    console.log(e.target.value)
    return {
        type: HANDLECHANGE,
        payload: e.target.value
    }
}

export function submitTask(value){
    console.log(value)
    return {
        type: SUBMITTASK,
        payload: value
    }
}
export function completeTask(i){
    console.log(i)
    return {
        type: COMPLETETASK,
        payload: i
    }
}

export function deleteTask(i){
  console.log('delete here')
    return {
        type: DELETE,
        payload: i
    }
}