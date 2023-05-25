
// import * as Redux from '/redux' //es6 valid //use type="module" in html not works
//use cdn script link then app.js script in html
const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const box1=document.querySelector('.box1')
const box2=document.querySelector('.box2')

//reducer receive dispatches 
const Reducer1=(initialState1="50%",action)=>{ //should return value whatever the if test
    if (action.type==="inc1") 
      return "100%"
    return initialState1
        
}
const Reducer2=(initialState2="50%",action)=>{  //should return value whatever the if test
    if (action.type==="inc2")
      return  "100%"
    return initialState2

}
//combine reducers
const rootReducer = Redux.combineReducers( {
    inc1:Reducer1,
    inc2:Reducer2
    })

//create store and subscribe
const firstStore=Redux.createStore(rootReducer)//not 'rootreducer'

//event listeners to send/dispatch actions
btn1.addEventListener('click',function(){
    firstStore.dispatch({type:"inc1"})
})
btn2.addEventListener('click',function(){
    firstStore.dispatch({type:"inc2"})
})

//styling
const setStyle = () =>{
    box1.style.width=firstStore.getState().inc1
    box2.style.width=firstStore.getState().inc2
    console.log(firstStore.getState().inc1)
    console.log(firstStore.getState().inc2)


}

setStyle()

firstStore.subscribe(setStyle)


