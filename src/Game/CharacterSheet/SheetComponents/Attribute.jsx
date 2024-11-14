import {agility_img, body_img, mind_img, mystic_img, presence_img} from '../Art/index'
import '../CSS/AttributeStyle.css';

const Attribute = (props) => {
    return(
        <div>
            <img src={props.path}/>
            <h4 className="attribute-value">{props.baseValue}</h4>
            <h5 className="aspiration-value">{props.aspirationValue}</h5>
        </div>
    )
}

export default Attribute;