import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    venue,
    date,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails
  return (
    <div className="latest-match-card">
      <div className="team-card">
        <div className="competing-team-details">
          <p className="team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="horizontal-line" />
      <div className="match-result-details">
        <h1 className="match-innings">First Innings</h1>
        <p className="text">{firstInnings}</p>
        <h1 className="match-innings">Second Innings</h1>
        <p className="text">{secondInnings}</p>
        <h1 className="match-innings">Man Of The Match</h1>
        <p className="text">{manOfTheMatch}</p>
        <h1 className="match-innings">Umpires</h1>
        <p className="text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
