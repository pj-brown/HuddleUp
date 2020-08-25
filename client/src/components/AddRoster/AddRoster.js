import React from 'react';
import './AddRoster.css';

const AddRoster = ({ teamName, city, state, bio, handleInputChange, handleCreateRoster }) => {
  return (
    <div className="roster-modal">
      <div className="modal-content">
        <form>
          <h3 style={{ textAlign: "center" }}>Set up your team!</h3><hr />
          <label htmlFor="team-name">Team Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="team-name"
            name="teamName"
            placeholder="Isotopes"
            value={teamName}
          />

          <label htmlFor="team-city">City</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="team-city"
            name="city"
            placeholder="Springfield"
            value={city}
          />

          <label htmlFor="team-state">State</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="team-state"
            name="state"
            placeholder="MN"
            value={state}
          />

          <label htmlFor="team-bio">Team biography</label>
          <input
            onChange={handleInputChange}
            type="text"
            id="team-bio"
            name="bio"
            placeholder="The Springfield Isotopes are Springfield's only minor league baseball team"
            value={bio}
          />

          <button onClick={handleCreateRoster} className="add-roster" title="Create Roster">Create Team</button>

        </form>
        <div>

          <button className="modal-close" title="Close">Close</button>
        </div>
      </div>
    </div>
  )
}

const RosterInfo = ({ teamName, city, state, bio }) => {
  return (
    <div className="roster-info">
      <h3>roster team name here</h3>
      <h3>roster team city and state here</h3>
      <h3>roster team bio here</h3>

    </div>
  )
}


export default AddRoster
