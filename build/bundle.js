(()=>{const e=document.querySelector(".btn1"),t=document.querySelector(".btn2"),c=document.querySelector(".box1"),n=document.querySelector(".box2"),i=Redux.combineReducers({inc1:(e="50%",t)=>"inc1"===t.type?"100%":e,inc2:(e="50%",t)=>"inc2"===t.type?"100%":e}),o=Redux.createStore(i);e.addEventListener("click",(function(){o.dispatch({type:"inc1"})})),t.addEventListener("click",(function(){o.dispatch({type:"inc2"})}));const d=()=>{c.style.width=o.getState().inc1,n.style.width=o.getState().inc2,console.log(o.getState().inc1),console.log(o.getState().inc2)};d(),o.subscribe(d)})();