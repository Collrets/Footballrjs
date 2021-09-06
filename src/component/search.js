import React, {Component} from "react";

const Search = (props) => (
    <form onSubmit={props.league_method}>
        <input type="text" name = "league" placeholder="Лига"/>
        <button> Найти </button>

    </form>
)
export default Search;