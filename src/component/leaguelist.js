import React, {Component} from "react";

const LeagueList = props => {
    return(
        <div>
            {props.league &&
            <div>
                <p>Лиги: {props.league}</p>
                <p>Команды: {props.team}</p>
                <p>Дата: {props.date}</p>
            </div>
            }
            <p>{props.error}</p>
        </div>
    )
}
export default LeagueList;