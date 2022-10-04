import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    listOfTeams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.listOfTeam()
  }

  listOfTeam = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageURL: eachItem.team_image_url,
    }))
    this.setState({listOfTeams: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, listOfTeams} = this.state

    return (
      <div className="bg-container">
        <div className="container-box">
          <div className="container-row">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="img-logo"
            />
            <h1 className="heading-class">IPL Dashboard</h1>
          </div>
          <div className="blog-list-container">
            {isLoading ? (
              <div className="loading-class" testid="loader">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              <ul className="ul-list">
                {listOfTeams.map(eachItem => (
                  <TeamCard teamData={eachItem} key={eachItem.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
