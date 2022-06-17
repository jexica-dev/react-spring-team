import React,{Component} from "react";
import GameContainer from "../Components/Game/GamesContainer";
import GameSearch from "../Components/Game/GameSearch";
import Layout from "../Components/Layout/Layout";
import axios from "axios";
import { baseURL, API_KEY, config } from "../Services/apiConfigGames";

export default class Games extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      incomingGames: null
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleIncomingResults = this.handleIncomingResults.bind(this)
  }

  handleSearch = (searchValue) => {
    axios.get(baseURL + API_KEY+`&search=${searchValue}&page_size=24`).then(res => {
      this.setState({incomingGames: res.data.results})
    }).catch(err => {
      console.log(err)
    })
  }
  
  handleIncomingResults = () => {
    
  }
  
  render() {
    return (
      <div>
        <Layout id={this.props.id} username={this.props.username}>
          <GameSearch handleSearch={this.handleSearch}/>
          <GameContainer id={this.props.id} incomingGames={this.state.incomingGames} />
        </Layout>
      </div>
    );
 }
}
