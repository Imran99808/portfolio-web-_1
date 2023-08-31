import React,{useState,useContext} from "react";

export const context=React.createContext();



// route for
export function Route({path,children}) {
    const [toggle,setToggle]=useContext(theme);
    return window.location.pathname===path?children:null;
  }
  
// link for
export function Link({className,href,children}) {
    const [toggle,setToggle]=useContext(theme)
   function handaleClick(e){
    e.preventDefault();
   setToggle(!toggle)
  window.history.pushState({}," ",e.target.href)
       
   }
  return <a className={className} href={href} onClick={handaleClick}>{children}</a>
}




export function Rerender(props){
   
    const[toggle,setToggle]=useState(true)
  

   return(
   <context.Provider value={[toggle,setToggle]}>
       {props.children} 

   
    </context.Provider>
   )
}