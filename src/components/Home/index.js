import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplTeamList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplTeamDetails()
  }

  getIplTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const iplData = data.teams
    const updatedIplTeamData = iplData.map(eachIplData => ({
      id: eachIplData.id,
      name: eachIplData.name,
      teamImageUrl: eachIplData.team_image_url,
    }))

    this.setState({iplTeamList: updatedIplTeamData, isLoading: false})
  }

  loadingSpinner = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  getTeamCardDetails = () => {
    const {iplTeamList} = this.state
    return (
      <ul className="ipl-list-container">
        {iplTeamList.map(eachIpl => (
          <TeamCard key={eachIpl.id} teamCardDetails={eachIpl} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="ipl-bg-container">
        <div className="ipl-dashboard">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl"
          />
          <h1 className="ipl-heading">IPL DASHBOARD</h1>
        </div>
        {isLoading ? this.loadingSpinner() : this.getTeamCardDetails()}
      </div>
    )
  }
}

export default Home
