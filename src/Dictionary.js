import React ,{useState}from "react";
import "./Dictionary.css";
export default function Dictionary(){
    let [keyword,setKeyword]=useState("");
    function Search(event){
        event.preventDefault();
        alert(`searching for ${keyword} definition`);
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