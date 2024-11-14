import { bdmg_ico, meleeRng_ico, open_ico, closed_ico } from "../../Art/Icons";
import './Item.css';
import {Weapons, ItemEffects} from '../../Utils/index';
// import { useState } from "react";

// const [items, setOpen] = useState([
//     { id: "", state: ""},
// ]);

// const openItems = (itemId, isOpen) => {
//     setOpen(items.map(item =>
//       item.id === itemId ? { ...item, state: isOpen } : item
//     ));
// };


const GetMeleeWeapon = (itemId) => {
    const ItemType = "melee";
    const TargetWeapon = Weapons("melee").find((weapon) => weapon.id === "mw007");
    // Weapons("melee").map((w, index) => items.push({id: `${ItemType}${index}`, state: true}))
    
    return(
        Weapons("melee").map((w, index) =>    
        <div className="item-block">
            <img src={open_ico} id={`ico-${ItemType}${index}`}/>
            <div className="item-title">{w.title}</div>
            <div className="item-expanded-info" id={`item-exp-${ItemType}${index}`}>
                <div className="item-flexContainer">
                    <div className="item-box">
                        <img src={meleeRng_ico} height="30px" width="auto"/>
                    </div>
                    <div className="item-box">
                        <div className="item-text">{w.weightclass}</div>
                    </div>
                    <div className="item-box">
                        <div className="item-text">{w.size}</div>
                    </div>
    
                </div>
                <div className="item-flexContainer">
                    <div className="item-box">
                    <img src={bdmg_ico} height="20px" width="20px"/>
                    <div className="item-text">{w.baseDamage}</div>
                    </div>
                    <div className="item-box">
                        <div className="item-list">
                            {w.damageTypes.map((type, index) =>
                                <ItemEffects key={index} effectType="damageType" effectId={type}/>
                            )}
                        </div>
                    </div>
                    <div className="item-box">
                        <div className="item-label">Range: </div>
                        <div className="item-text">{w.range}</div>
                    </div>
                </div>
                <div className="item-additional-info">
                    <div className="item-box">
                        <div className="item-label">Movement Mod: </div>
                        <div className="item-text">{w.movementMod}</div>
                    </div>
                    <div className="item-box">
                        <div className="item-label">Initiative Mod: </div>
                        <div className="item-text">{w.initiativeMod}</div>
                    </div>
                    <div className="item-box">
                        <div className="item-label">Penalties: </div>
                        <div className="item-list">
                            {w.penalties.map((penalty, index) => 
                                <div key={index} className="item-text">{penalty}</div>
                            )}
                        </div>                      
                    </div>
                </div>
            </div>
            
        </div>
        )
        /*<>
        <div>
            <div className="item-title">{TargetWeapon.title}</div>
            <div className="item-flexContainer">
                <div className="item-box">
                    <img src={meleeRng_ico} height="40px" width="auto"/>
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
                <img src={bdmg_ico} height="25px" width="25px"/>
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
                <div className="item-box">
                    <div className="item-label">Movement Mod: </div>
                    <div className="item-text">{TargetWeapon.movementMod}</div>
                </div>
            </div>
        </div>
        </>*/
    );
}

export default GetMeleeWeapon;