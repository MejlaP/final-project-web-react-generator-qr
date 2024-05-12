import "./FilteredPlayers.css"


const FilteredPlayers = ({position, players}) => {
  return <div className="filtered-players">
      <h6>{position}</h6>
      <p>{players}</p>
  </div>

}

export default FilteredPlayers