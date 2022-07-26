import React from "react";
import Phonetic from "./Phonetic"
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props){
        console.log(props.results)
        if (props.results){
        return(
           <div >   
            <section>        
                <h2>{props.results.word}</h2> 
                {props.results.phonetics.map(function(phonetic,index){
                    return(
                        <div key={index}>
                        <Phonetic phonetic={phonetic}/>
                    </div>
                    )
                   
                })}
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