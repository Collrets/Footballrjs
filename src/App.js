import React, {Component} from 'react';
import Search from "./component/search";
import LeagueList from "./component/leaguelist";

const API_KEY= "FSN4473470"

export default class App extends Component {
    state = {
        league: {},
        team: {},
        date: {},
        error: undefined
    }
    gettingLeague = async (event) => {
        event.preventDefault();
        const league = event.target.elements.league.value;
        if (league) {
            const api_url = await
                fetch(`http://www.fantasysportnet.com/data/feed?week=0812&league=${league}&season=2015&apiKey=${API_KEY}&format=json`)
            const data = await api_url.json();
            console.log(data)
            if (!data.name) {
                this.setState({
                    league: {},
                    team: {},
                    date: {},
                    error: "Неправильное название"
                })
            } else {
                this.setState({
                    league: data.league.id,
                    team: data.league.homeTeam,
                    date: data.league.date,
                    error: undefined
                })
            }
        }
        else
            {
                this.setState({
                    league: {},
                    team: {},
                    date: {},
                    error: "Пустое поле"
                })
            }
        }
        render()
        {  return(
               <div>
                    < Search league_method={this.gettingLeague}/>
                    <LeagueList
                        league={this.state.league}
                        team={this.state.team}
                        date={this.state.date}
                        error={this.state.error}
                    />
                </div>
            );
        }
    }



