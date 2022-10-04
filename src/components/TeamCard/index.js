import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageURL} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list-of-teams">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
