import { useState } from "react"
import { add_ico } from "../../../Art/Icons/index"
import { Weapons, Armors } from "../../../Utils/index"
import styled from "styled-components"
import Textblock from "./Textblock"

const EquippmentRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: stretch;
    width: 10em
`
const FlexBox = styled.section`
    display: flex;
    margin-left: 0.2em;
    margin-right: 0.2em;
    justify-content: flex-end;
`

const EquippedList = (props) => {
    console.log("weapons:")
    console.log(props.inventory)
    const [weaponList, setWeapon] = useState(false);
    const [armorList, setArmor] = useState(false);

    const FindItem = (props) => {
        switch (props.itemType){
            case "armor":
                const armor = Armors(props.baseType).find((armor) => armor.id === props.id);
                console.log(armor)
                return armor.title
            case "weapon":
                const weapon = Weapons(props.baseType).find((weapon) => weapon.id === props.id);
                console.log(weapon)
                return weapon.title
        }
        
    }

    return (
        <EquippmentRow>
            <FlexBox className="equippedWeapons">
                    <div className="itemlist-parent" onMouseEnter={() => setWeapon(true)} onMouseLeave={() => setWeapon(false)}>
                    <img src={add_ico}/>
                        <div  className={`popup-itemlist ${weaponList ? `open-list` : `closed-list`} parent-list`}>
                            {props.weapons.map((item, index) => <div className="text-label" key={index}>{FindItem(item)}</div>)}                
                        </div>
                    </div>
                    <textarea className={"text-editable medium"}/>
            </FlexBox>
            <FlexBox className="equippedArmor">
                    <div className="itemlist-parent" onMouseEnter={() => setArmor(true)} onMouseLeave={() => setArmor(false)}>
                    <img src={add_ico}/>
                        <div  className={`popup-itemlist ${armorList ? `open-list` : `closed-list`} parent-list`}>
                            {props.armors.map((item, index) => <div className="text-label" key={index}>{FindItem(item)} </div>)}                
                        </div>
                    </div>
                    <textarea className={"text-editable medium"}/>
            </FlexBox>
        </EquippmentRow>
    )
}

export default EquippedList;