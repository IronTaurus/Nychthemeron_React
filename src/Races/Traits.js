import PropTypes from "prop-types";
import TraitList from "../Components/Lists/TraitList";

function GetTrait({id}) {
    const TargetTrait = TraitList.find((trait) => trait.ID === id);
    return (
        <>
        <div className="traitbox" id={TargetTrait.Type}>
          <h3 className="traitbox-title">{TargetTrait.Title}</h3>
          <div className="traitbox-popcontainer">
            <p className="traitbox-description">{TargetTrait.Description}</p>
          </div>
        </div> 
      </>
    );
}

GetTrait.propTypes = {
  id: PropTypes.string.isRequired
}

export default GetTrait;