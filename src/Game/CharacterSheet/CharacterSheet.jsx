// import Attribute from './SheetComponents/Attribute';
import Attribute from "./SheetComponents/attribute";
import { agility_img, body_img, mind_img, mystic_img, presence_img } from "./Art";
import portrait_frame from '../../Art/PortraitFrame/portrait_frame.png';
import Textblock from "./SheetComponents/Textblock";
import './CSS/CharacterSheetStyle.css'
import Inventory from "./Inventory";
import PersonInfo from "./PersonInfo";
import styled from "styled-components";
import PlayerMomentum from "./SheetComponents/PlayerMomentum";
import EquippedItems from "./SheetComponents/EquippedItems";

const CharacterSheet = () => {
    const PortraitFrame = styled.img`
        width: 8em;
        height: auto;
    `

    return(
        <div className="charactersheet">
            <div className="left-col">
                <div className="portrait-picture">
                    <div className="portrait-box">
                        <PortraitFrame src={portrait_frame}/>
                    </div>
                </div>
                <div className="person-info">
                    {/*This is the block for personal info such as Name, Race, Class, Religion, Level and Talent-points.*/}
                    <PersonInfo/>
                </div>
                <div className="momentum-stats">
                    {/*This is the block for Initative and Movement value*/}
                    <PlayerMomentum/>
                </div>
                <div className="condition-info">
                    {/*This is the block for character condition such as Death tokens, Life Tokens, Exhaustion and Permanent Conditions.*/}
                </div>
            </div>
            <div className="mid-col">
                <div className="attribute-stats">
                    {/*This is the block for the main attributes.*/}
                    <Attribute name="Agility" path={agility_img} baseValue={1} aspirationValue={1}/>
                    <Attribute name="Body" path={body_img} baseValue={2} aspirationValue={2}/>
                    <Attribute name="Mind" path={mind_img} baseValue={3} aspirationValue={3}/>
                    <Attribute name="Mystic" path={mystic_img} baseValue={4} aspirationValue={4}/>
                    <Attribute name="Presence" path={presence_img} baseValue={5} aspirationValue={5}/>
                </div>
                <div className="sheet-block">
                    {/*This is the block for the base stats such as Max Health, Current Health, Temp-Health Spirit, Armor, Current Armor and Temp-Armor.*/}
                    <div>
                        <h5 className="sheet-sub-title">Health</h5>
                        <div>
                            <Textblock title="Current" size="small"/>
                            <Textblock title="Max" size="small"/>
                            <Textblock title="Temp" size="small"/>
                        </div>

                    </div>
                    <div>
                        <h5 className="sheet-sub-title">Armor</h5>
                        <div>
                            <Textblock title="Current" size="small"/>
                            <Textblock title="Max" size="small"/>
                            <Textblock title="Temp" size="small"/>
                        </div>
                    </div>
                    <div>
                        <h5 className="sheet-sub-title">Spirit</h5>
                        <div>
                            <Textblock title="Current" size="small"/>
                            <Textblock title="Max" size="small"/>
                        </div>
                    </div>
                    
                </div>
                <div className="inventory-items">
                    <Inventory/>
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