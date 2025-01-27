import { bdmg_ico, magicRng_ico, meleeRng_ico, open_ico, rangedRng_ico, remove_ico } from "../../Art/Icons";
import './Item.css';
import {Weapons, Armors, ItemEffects} from '../../Utils/index';
import { useState } from "react";

const GetWeapon = (props) => {
    const [isOpen, setOpen] = useState(true);
    const TargetWeapon = Weapons(props.baseType).find((weapon) => weapon.id === props.itemId);

    const getIcon = (typeIcon = "melee") => {
        const weaponIcons = {
            melee: meleeRng_ico,
            ranged: rangedRng_ico,
            magic: magicRng_ico,
        }
        return weaponIcons[typeIcon]
    }

    return( 
        <div className="item-block" id={props.inventoryId}>
            <div className="item-title-row">
                <div className="row-left">
                    <img src={open_ico} id={`ico-${props.inventoryId}`} className={`expand-icon ${isOpen ? 'open-icon' : 'closed-icon'}`} onClick={() => isOpen ? setOpen(false) : setOpen(true)}/>
                    <textarea className="item-title" defaultValue={TargetWeapon.title}/>
                </div>
                <div className="row-right">
                    <img src={remove_ico} className="clickable" onClick={props.RemoveItem}/>
                </div>
                
            </div>

            <div className={`item-expanded-info ${isOpen ? 'item-open' : 'item-closed'}`} id={`item-exp-${props.inventoryId}`}>
                <div className="item-flexContainer">
                    <div className="item-box">
                        <img src={getIcon(props.itemType)} height="30px" width="auto"/>
                    </div>
                    <div className="item-box">
                        <div className="item-text">{TargetWeapon.weightclass}</div>
                    </div>
                    <div className="item-box">
                        <div className="item-text">{TargetWeapon.size}</div>
                    </div>
    
                </div>
                <div className="item-flexContainer">
                    <div className="item-box">
                    <img src={bdmg_ico} height="20px" width="20px"/>
                    <div className="item-text">{TargetWeapon.baseDamage}</div>
                    </div>
                    <div className="item-box">
                        <div className="item-list">
                            {TargetWeapon.damageTypes.map((type, index) =>
                                <ItemEffects key={index} effectType="damageType" effectId={type}/>
                            )}
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="item-label">Range: </div>
                        <div className="item-text">{TargetWeapon.range}</div>
                    </div>
                </div>
                <div className="item-additional-info">
                    <div className="item-flexContainer">
                        <div className="item-box">
                            <div className="item-label">Movement Mod: </div>
                            <div className="item-text">{TargetWeapon.movementMod}</div>
                        </div>
                        <div className="item-box">
                            <div className="item-label">Initiative Mod: </div>
                            <div className="item-text">{TargetWeapon.initiativeMod}</div>
                        </div>
                    </div>
                    <div className="item-flexContainer">
                    {TargetWeapon.reloadPenalty ?
                        <div className="item-box">
                            <div className="item-label">Reload Penalties: </div>
                            {TargetWeapon.reloadPenalty.map((p, index) => <div className="item-text" key={index}>{p}</div>)}
                        </div>
                        : <></>}
                        <div className="item-box">
                            <div className="item-label">Penalties: </div>
                            <div className="item-list">
                                {TargetWeapon.penalties.map((penalty, index) => 
                                    <div key={index} className="item-text">{penalty}</div>
                                )}
                            </div>                      
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
       
}
const GetArmor = (props) => {
    const [isOpen, setOpen] = useState(true);
    const TargetArmor = Armors(props.baseType).find((armor) => armor.id === props.itemId);

    return( 
        <div className="item-block" id={props.inventoryId}>
            <div className="item-title-row">
                <div className="row-left">
                    <img src={open_ico} id={`ico-${props.inventoryId}`} className={`expand-icon ${isOpen ? 'open-icon' : 'closed-icon'}`} onClick={() => isOpen ? setOpen(false) : setOpen(true)}/>
                    <textarea className="item-title" defaultValue={TargetArmor.title}/>
                </div>
                <div className="row-right">
                    <img src={remove_ico} className="clickable" onClick={props.RemoveItem}/>
                </div>      
            </div>

            <div className={`item-expanded-info ${isOpen ? 'item-open' : 'item-closed'}`} id={`item-exp-${props.itemId}`}>
                <div className="item-flexContainer">
                    <div className="item-box">
                        <div className="item-text">{TargetArmor.weightclass}</div>
                    </div>
    
                </div>
                <div className="item-flexContainer">
                    <div className="item-box">
                        <div className="item-label">Armor: </div>
                        <div className="item-text">{TargetArmor.armor}</div>
                    </div>
                </div>
                <div className="item-additional-info">
                    <div className="item-flexContainer">
                        <div className="item-box">
                            <div className="item-label">Movement Mod: </div>
                            <div className="item-text">{TargetArmor.movementMod}</div>
                        </div>
                        <div className="item-box">
                            <div className="item-label">Initiative Mod: </div>
                            <div className="item-text">{TargetArmor.initiativeMod}</div>
                        </div>
                    </div>
                    <div className="item-flexContainer">
                    {TargetArmor.discomforts ?
                        <div className="item-box">
                            <div className="item-label">Discomforts: </div>
                            {TargetArmor.discomforts.map((type, index) => <ItemEffects key={index} effectType="discomfort" effectId={type}/>)}
                        </div>
                        : <></>
                    }
                    {TargetArmor.skillMod ?
                        <div className="item-box">
                            <div className="item-label">Skill Mod: </div>
                            {TargetArmor.skillMod.map((m, index) => <div className="item-text" key={index}>{m}</div>)}
                        </div>
                        : <></>
                    }
                    </div>
                    <div className="item-box">
                        <div className="item-label">Penalties: </div>
                        <div className="item-list">
                            {TargetArmor.penalties.map((penalty, index) => 
                                <div key={index} className="item-text">{penalty}</div>
                            )}
                        </div>                      
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
       
}

export {GetWeapon, GetArmor};