import React from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

export const Layouts =()=>{

    

    return(
     <div className="layout"> 
       <header>
         <Header/>
       </header>      
        
       <section>
        <LeftSidebar/>
       </section>


     </div>
    );
};