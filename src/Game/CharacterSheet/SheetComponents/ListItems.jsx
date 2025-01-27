import { add_ico } from "../../../Art/Icons/index"
import Weapons from "../../../Utils/Weapons"
import Armors from "../../../Utils/Armor"
import {GetWeapon, GetArmor } from "../../../Components/Items/Equippments"
import { useState } from "react"

const ListItems = (props) => {
    const [itemList, openList] = useState(false)
    const [weapons, setWeapons] = useState(false);
    const [melee, setMelee] = useState(false);
    const [ranged, setRanged] = useState(false);
    const [magic, setMagic] = useState(false);
    const [armors, setArmors] = useState(false);
    
    return(
        <div className="itemlist-parent" onMouseEnter={() => openList(true)} onMouseLeave={() => openList(false)}>
        <img src={add_ico}/>
        <div className={`popup-itemlist ${itemList ? `open-list` : `closed-list`} parent-list`}>
            <div className="itemlist-title"></div>
            <div className="itemlist-row" onMouseEnter={() => setWeapons(true)} onMouseLeave={() => setWeapons(false)}>
                <div className={`itemlist-title ${weapons ? 'list-active' : ''}`}>Weapons</div>
                <div  className={`popup-itemlist ${weapons ? `open-list` : `closed-list`} child-list`}>
                    <div className="itemlist-row" onMouseEnter={() => setMelee(true)} onMouseLeave={() => setMelee(false)}>
                        <div className={`itemlist-title ${melee ? 'list-active' : ''}`}>Melee</div>
                        <div  className={`popup-itemlist ${melee ? `open-list` : `closed-list`} child-list`}>
                            {Weapons("melee").map((w, index) => <div className="inventory-list-name" key={index} onClick={() => 
                                props.AddItem({id: w.id, baseType: "melee", itemType: "weapon", inventoryId:`${w.id}_${props.inventoryNum}`})}>{w.title}</div>)}
                        </div>
                    </div>
                    <div className="itemlist-row" onMouseEnter={() => setRanged(true)} onMouseLeave={() => setRanged(false)}>
                        <div className={`itemlist-title ${ranged ? 'list-active' : ''}`}>Ranged</div>
                        <div className={`popup-itemlist ${ranged ? `open-list` : `closed-list`} child-list`}>
                            {Weapons("ranged").map((w, index) => <div className="inventory-list-name" key={index} onClick={() => 
                                props.AddItem({id: w.id, baseType: "ranged", itemType: "weapon", inventoryId:`${w.id}_${props.inventoryNum}`})}>{w.title}</div>)}
                        </div>
                    </div>
                    <div className="itemlist-row" onMouseEnter={() => setMagic(true)} onMouseLeave={() => setMagic(false)}>
                        <div className={`itemlist-title ${magic ? 'list-active' : ''}`}>Magic</div>
                        <div className={`popup-itemlist ${magic ? `open-list` : `closed-list`} child-list`}>
                            {Weapons("magic").map((w, index) => <div className="inventory-list-name" key={index} onClick={() => 
                                props.AddItem({id: w.id, baseType: "magic", itemType: "weapon", inventoryId:`${w.id}_${props.inventoryNum}`})}>{w.title}</div>)}
                        </div>
                    </div>
                </div>
                
            </div> 
            <div className="itemlist-row" onMouseEnter={() => setArmors(true)} onMouseLeave={() => setArmors(false)}>
                <div className={`itemlist-title ${armors ? 'list-active' : ''}`}>Armor</div>
                <div  className={`popup-itemlist ${armors ? `open-list` : `closed-list`} child-list`}>
                    {Armors("common").map((arm, index) => <div className="inventory-list-name" key={index} onClick={() => 
                        props.AddItem({id: arm.id, baseType: "common", itemType: "armor", inventoryId:`${arm.id}_${props.inventoryNum}`})}>{arm.title}</div>)}                
                </div>
            </div>                  

        </div>
    </div>
    )
}

export default ListItems