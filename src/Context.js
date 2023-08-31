
import React,{useState} from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const theme=React.createContext();
// window.value1=true;
 window.value2=true;
 window.value3=true;
 window.value4=true;
 window.value5=true;
 window.value6=false;
const initialState={
 
  floatingDiv1:true,
  floatingDiv2:true,
  card1:true,
  card2:true,
  card3:true,
  work:false,
}
const reducer=(state,action)=>{
  switch(action.type){
    case 'f1':
    
      return{...state,
        
      floatingDiv1:action.value,
        

      
    }
    
    case 'f2':
       return{
       ...state,
        floatingDiv2:action.value

      } 
    case 'f3':
      return{
        ...state,
        card1:action.value
      } 
    case 'f4':
        return{
          ...state,
          card2:action.value
        }  
    case 'f5':
      return{
        ...state,
        card3:action.value
      } 
    case 'f6':
      return{
        ...state,
        work:action.value
      }            
    default:
      return state;  
  }
}


  export function ThemeProvider(props){
    const[toggle,setToggle]=useState(true)
    

    const[state,dispatch]=useReducer(reducer,initialState)
    
   
    window.addEventListener("scroll",function(){
      

  this.window.pageYOffset>240?false!==window.value1&&dispatch({type:'f1',value:false}):true!==window.value1&& dispatch({type:'f1',value:true});

         this.window.pageYOffset>590?false!==window.value2&&dispatch({type:'f2',value:false}):true!==window.value2&&dispatch({type:'f2',value:true});
      (this.window.pageYOffset>=393)&&(this.window.pageYOffset<=1030)?false!==window.value3&&dispatch({type:'f3',value:false}):true!==window.value3&&dispatch({type:'f3',value:true});
         (this.window.pageYOffset>=637)&&(this.window.pageYOffset<=1269)?false!==window.value4&&dispatch({type:'f4',value:false}):true!==window.value4&&dispatch({type:'f4',value:true});
         (this.window.pageYOffset>=770)&&(this.window.pageYOffset<=1406)?false!==window.value5&&dispatch({type:'f5',value:false}):true!==window.value5&&dispatch({type:'f5',value:true});
       (this.window.pageYOffset>=1600)&&(this.window.pageYOffset<=2603)?true!==window.value6&&dispatch({type:'f6',value:true}):false!==window.value6&&dispatch({type:'f6',value:false});


       
  
  
   
        })
    
      window.value1=state.floatingDiv1;
      window.value2=state.floatingDiv2;
      window.value3=state.card1;
      window.value4=state.card2;
      window.value5=state.card3;
      window.value6=state.work;

    //  console.log(  window.location.hash )
   return(
   <theme.Provider value={[toggle,setToggle,state]}>
       {props.children} 

   
    </theme.Provider>
   )
}