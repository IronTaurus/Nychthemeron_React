import PropTypes from "prop-types";
import TraitList from "./TraitList";
import '../Game/Talents/Talents.css';

function GetTrait({tId}) {
    const TargetTrait = TraitList.find((trait) => trait.id === tId);
    return (
        <>
        <div className={`traitbox ${TargetTrait.Type}`}>
          <h3 className="traitbox-title">{TargetTrait.Title}</h3>
          <div className="traitbox-popcontainer">
            <p className="traitbox-description">{TargetTrait.Description}</p>
          </div>
        </div> 
      </>
    );
}

GetTrait.propTypes = {
  tId: PropTypes.string.isRequired
}

export default GetTrait;