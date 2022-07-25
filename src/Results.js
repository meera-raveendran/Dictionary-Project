import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props){
        console.log(props.results)
        if (props.results){
        return(
           <div >   
            <section>        
                <h2>{props.results.word}</h2> 
                {props.results.meanings.map(function(meaning,index){
                    return(
                        <section key={index}>
                        <Meaning meaning={meaning}/>
                    </section>
                    )
                    
                })}   
                </section>                    
           </div>           
    )
        }
    else{
        return null;
    }
}