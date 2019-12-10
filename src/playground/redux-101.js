import {createStore} from 'redux';


// const incrementCount = (payload={})=>({
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number'? payload.incrementBy:1
// });

//same thing desctructured
const incrementCount = ({incrementBy = 1} = {})=>({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {})=>({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ()=>({
    type: 'RESET',
    count: 0
});

const setCount = ({count}) =>({
    type: 'SET',
    count
});

// REDUCER (pure funciton) 
// !!!!!!!! NEVER CHANGE STATE OR ACTION HERE
const countReducer = (state={count:0}, action )=>{
    switch (action.type){
        case 'INCREMENT':
            return{
                count: state.count+action.incrementBy
            };  
        case 'DECREMENT':
            return{
                count: state.count-action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            };
        case 'RESET':
            return{
                count: action.count
            }; 
        default:
            return state;
    }
        
};

const store = createStore(countReducer);



// const store = createStore((state={count:0}, action )=>{
//     switch (action.type){
//         case 'INCREMENT':
//             return{
//                 count: state.count+action.incrementBy
//             };  
//         case 'DECREMENT':
//             return{
//                 count: state.count-action.decrementBy
//             };
//         case 'SET':
//             return{
//                 count: action.count
//             };
//         case 'RESET':
//             return{
//                 count: action.count
//             }; 
//         default:
//             return state;
//     }
        
// });

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

//unsubscribe();

store.dispatch(resetCount());
store.dispatch(decrementCount());

store.dispatch(setCount({count: -1000}));
store.dispatch(decrementCount({decrementBy: 100}));

//console.log(store.getState());