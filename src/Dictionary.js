import React ,{useState}from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
export default function Dictionary(props){
    let [keyword,setKeyword]=useState(props.defaultKeyword);
    let [results,setResults]=useState(null);
     let [loaded,setLoaded]=useState(false);
    function handleResponse(response){
               setResults(response.data[0])
    }
    function Search(event){
        // event.preventDefault();        
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    function handleSubmit(event){
        event.preventDefault(); 
        Search();

    }
    function load(){
        setLoaded(true);
        Search();
    }
     if(loaded){
    return (
    <div className="Dictionary">
        
        <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
        <div className="hint">
        Suggested words:sunset,yoga,dawn,wine...
        </div>
        </section>
        <Results results={results}/>
    </div>
    
    )
    }else{
        load();
        return "Loading";       
        
    }
}