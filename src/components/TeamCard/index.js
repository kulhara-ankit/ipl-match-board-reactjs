// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link className="ipl-details-link" to={`/team-matches/${id}`}>
      <li className="ipl-team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="card-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
