import './index.css'

const status = 'Won'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = cardDetails

  return (
    <li className="ipl-card-details">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-img-logo"
      />
      <p className="name">{competingTeam}</p>
      <p className="result-team">{result}</p>
      {matchStatus === status ? (
        <p className="won">{matchStatus}</p>
      ) : (
        <p className="lost">{matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
