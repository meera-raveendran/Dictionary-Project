import React ,{useState}from "react";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary(){
    let [keyword,setKeyword]=useState("");
    function handleResponse(response){
        console.log(response.data[0])
    }
    function Search(event){
        event.preventDefault();        
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    return (<div className="Dictionary">
        <form onSubmit={Search}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
    </div>
    )
}