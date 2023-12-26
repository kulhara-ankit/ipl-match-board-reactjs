import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

const backgroundColors = [
  'red',
  'rebeccapurple',
  'maroon',
  'yellow',
  'magenta',
  'blue',
  'burlywood',
  'blueviolet',
]

const bgColor =
  backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
console.log(bgColor)

class TeamMatches extends Component {
  state = {isLoading: true, matchesDataList: []}

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({matchesDataList: updatedData, isLoading: false})
  }

  renderMatchDetails = () => {
    const {matchesDataList} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchesDataList
    return (
      <div className={`match-bg-container ${bgColor}`}>
        <img src={teamBannerUrl} className="banner" alt="team banner" />
        <div>
          <h1 className="latest">Latest Matches</h1>
          <LatestMatch
            key={latestMatchDetails.id}
            matchDetails={latestMatchDetails}
          />
        </div>
        <ul className="recent-matches-list">
          {recentMatches.map(eachIpl => (
            <MatchCard key={eachIpl.id} cardDetails={eachIpl} />
          ))}
        </ul>
      </div>
    )
  }

  loadingSpinner = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>{isLoading ? this.loadingSpinner() : this.renderMatchDetails()}</div>
    )
  }
}

export default TeamMatches
