import GetSingleTalent from '../Talents/Talents';
import GetTrait from './Traits'
import RaceList from './RaceList';
import PropTypes from 'prop-types';

const rId = ["Dwarf_M", "Elf_D", "Elf_H", "Elf_W"] 

function GetRace({raceId}) {
    const TargetRace = RaceList.find((race) => race.id === raceId);
    return (
      <>
      <div className='race-grid'>
        <div className='race-info'>
            <div className='title-block'>
                <h3 className='main-title'>{TargetRace.Title}</h3>
                {TargetRace.SubTitle ? <h3 className='sub-title'>{TargetRace.SubTitle}</h3>: <></>}
            </div>
            <div className='item-block'>
                <div className="flex-container">
                    {TargetRace.Attributes.map(attribute => <div class="attribute-score" id={attribute.Type}>{attribute.Type} {attribute.Value}</div>)}
                </div>
                <div className="flex-container">
                    {TargetRace.Traits.map(trait => <GetTrait id={trait}/>)}
                </div>
                <div className="flex-container">
                    {TargetRace.Talents.map(talent => <GetSingleTalent id={talent}/>)}
                </div>
            </div>
            
            <div className="text-block">
                <h3 className='sub-title'>Background</h3>
                <p>{TargetRace.Background}</p>
            </div>
            <div className="text-block">
                <h3 className='sub-title'>Appearence</h3>
                <p>{TargetRace.Appearence}</p>
            </div>
            <div className="text-block">
                <h3 className='sub-title'>Behaviour</h3>
                <p>{TargetRace.Behaviour}</p>
            </div>
        </div>
        <div className='race-portrait'>
            {/* <img className='race-portrait' src={require(`../Art/RacePortraits/${TargetRace.ID}.png`)}/> */}
        </div>
      </div>


      </>
    );
};

GetRace.propTypes = {
    raceId: PropTypes.string.isRequired,
}

const RacesPage = () => {
    return (
        <>
        <div className="main-page">
            {rId.map(id => <GetRace raceId={id}/>)}
        </div>
        </>
    )
}

export default RacesPage;