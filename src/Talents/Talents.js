import PropTypes from 'prop-types';
import './Talents.css';
import TalentList from './TalentList';

function GetSingleTalent({id}) {
  const TargetTalent = TalentList.find((talent) => talent.id === id);
  if(!TargetTalent){return (<p>Cannot Find</p>)}
  return (
    <>
      <div class="traitbox" id={TargetTalent.Types[0]}>
        <h3 class="traitbox-title">{TargetTalent.Title}</h3>
        <div class="traitbox-popcontainer">
          <p class="traitbox-description">{TargetTalent.Description}</p>
        </div>
      </div> 
    </>
  );
}
GetSingleTalent.propTypes = {
  id: PropTypes.string.isRequired
}
export default GetSingleTalent;