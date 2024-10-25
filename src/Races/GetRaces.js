import GetSingleTalent from '../Game/Talents/GetTalents';
import GetTrait from './Traits'
import RaceList from './RaceList';
import PropTypes from 'prop-types';

function GetRace({raceId, isEven}) {
    const TargetRace = RaceList.find((race) => race.id === raceId);
    return (
      <>
      <div className={`race-grid even-is-${isEven}`}>
        <div className={`race-portrait right`}>
                    <img className='race-portrait' src={require(`../Art/RacePortraits/${TargetRace.id}.png`)}/>
                </div>
        <div className='race-info'>
            <div className='title-block'>
                <h3 className='main-title'>{TargetRace.Title}</h3>
                {TargetRace.SubTitle ? <h3 className='sub-title'>{TargetRace.SubTitle}</h3>: <></>}
            </div>
            <div className='item-block'>
                <div className="flex-container">
                    {TargetRace.Attributes.map((attribute, index) => <div key={index} className={`attribute-score ${attribute.Type}`}>{attribute.Type} {attribute.Value}</div>)}
                </div>
                <div className="flex-container">
                    {TargetRace.Traits.map((trait, index) => <GetTrait key={index} tId={trait}/>)}
                </div>
                <div className="flex-container">
                    {TargetRace.Talents.map((talent, index) => <GetSingleTalent key={index} tId={talent}/>)}
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
      </div>


      </>
    );
};

GetRace.propTypes = {
    raceId: PropTypes.string.isRequired,
}

export default GetRace;