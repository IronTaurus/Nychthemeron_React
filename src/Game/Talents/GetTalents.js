import PropTypes from 'prop-types';
import './Talents.css';
import TalentList from './TalentList';

function GetSingleTalent({tId}) {
  const TargetTalent = TalentList.find((talent) => talent.id === tId);
  if(!TargetTalent){return (<p>Cannot Find</p>)}
  return (
    <>
      <div className={`traitbox ${TargetTalent.Types[0]}`}>
        <h3 className="traitbox-title">{TargetTalent.Title}</h3>
        <div className="traitbox-popcontainer">
          <p className="traitbox-description">{TargetTalent.Description}</p>
        </div>
      </div> 
    </>
  );
}
GetSingleTalent.propTypes = {
  tId: PropTypes.string.isRequired
}
export default GetSingleTalent;