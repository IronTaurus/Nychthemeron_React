import Attribute from "./SheetComponents/Attribute";
import { agility_img, body_img, mind_img } from "./Art";

const CharacterSheet = () => {
    return(
        <div>
            <div className="left-col">
                <div className="portrait-picture">           
                </div>
                <div className="person-info">
                    {/*This is the block for personal info such as Name, Race, Class, Religion, Level and Talent-points.*/}
                </div>
                <div className="combat-stats">
                    {/*This is the block for Initative and Movement value*/}
                </div>
                <div className="condition-info">
                    {/*This is the block for character condition such as Death tokens, Life Tokens, Exhaustion and Permanent Conditions.*/}
                </div>
            </div>
            <div className="mid-col">
                <div className="atrribute-stats">
                    {/*This is the block for the main attributes.*/}
                    <Attribute name="Agility" path={agility_img} attributeValue={1} aspirationValue={12}/>
                    <Attribute name="Body" path={body_img} attributeValue={2} aspirationValue={22}/>
                    <Attribute name="Mind" path={mind_img} attributeValue={3} aspirationValue={32}/>

                </div>
                <div className="base-stats">
                    {/*This is the block for the base stats such as Max Health, Current Health, Temp-Health Spirit, Armor, Current Armor and Temp-Armor.*/}
                </div>
                <div className="equipped-items">
                </div>
                <div className="inventory-items">
                </div>
            </div>
            <div className="right-col">
                <div className="trait-list">
                </div>
            </div>
        </div>

        
    )
}

export default CharacterSheet;