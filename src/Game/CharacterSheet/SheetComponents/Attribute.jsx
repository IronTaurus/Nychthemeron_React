import {agility_img, body_img, mind_img, mystic_img, presence_img} from '../Art/index'
import '../CSS/AttributeStyle.css';

const Attribute = (props) => {
    return(
        <div className='attribute-div'>
            <h3 className='attribute-title'>{props.name}</h3>
                <div className='attribute-element'>
                    <img src={props.path} className='attribute-image'/>
                    <div className='attribute-block'>
                            <h4 className="attribute-value">{props.baseValue}</h4>
                            <h5 className="aspiration-value">{props.aspirationValue}</h5>
                    </div>
                </div>
        </div>
        
    )
}

export default Attribute;