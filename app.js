import * as Redux from 'redux' //es6 valid

const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const box1=document.querySelector('.box1')
const box2=document.querySelector('.box2')


//combine reducers
const rootReducer =Redux.combineReducers( {
inc1:Reducer1,
incr2:Reducer2
})
//reducer receive dispatches 
const Reducer1=(initialState1="50%",action)=>{ //should return value whatever the if test
    if (action==="inc1") 
      return "100%"
    return "50%"
        
}
const Reducer2=(initialState2="50%",action)=>{  //should return value whatever the if test
    if (action==="inc2")
      return  "100%"
    return "50%"

}
//create store and subscribe
const firstStore=Redux.createStore(rootReducer)//not 'rootreducer'
firstStore.subscribe(setStyle())

//event listeners to send/dispatch actions
btn1.addEventListener('click',function(){
    firstStore.dispatch({type:"inc2"})
})
btn2.addEventListener('click',function(){
    firstStore.dispatch({type:"inc1"})
    console.log("test");
})

//styling
const setStyle =()=>{
    box1.style.width=firstStore.Reducer1
    box2.style.width=firstStore.Reducer2
}
setStyle()