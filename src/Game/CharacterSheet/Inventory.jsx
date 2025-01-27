import { useState } from "react"
import './CSS/inventory.css'
import ListItems from "./SheetComponents/ListItems"
import { useEffect } from 'react';
import {GetWeapon, GetArmor } from '../../Components/Items/Equippments'
import EquippedList from "./SheetComponents/EquippedItems";

const Inventory = () => {
    const [inventoryNumber, setInventoryNumber] = useState(1)
    const [inventory, setInventory] = useState([]);
    const [weapons, setWeapons] = useState([]);
    const [armors, setArmors] = useState([]);

    useEffect(() => {
        console.log('Updated inventory:', inventory);
    }, [inventory]);

    const AddItem = (item) => {
        setInventoryNumber((inventoryNumber) => inventoryNumber +1)
        const itemArray = [...inventory, item]
        UpdateEquippments(itemArray);
        setInventory(itemArray)
    }

    const RemoveItem = (target) => {
        const itemArray = [...inventory].filter(item => item.inventoryId !== target);
        UpdateEquippments(itemArray);
        setInventory(itemArray);
    }

    const UpdateEquippments = (itemList) => {
        const weaponsList = [...itemList].filter(item => item.itemType == "weapon")
        setWeapons(weaponsList)
        const armorList = [...itemList].filter(item => item.itemType == "armor")
        setArmors(armorList)
    }

    const BuildItem = (props) =>{
        switch (props.itemType){
            case "armor":
                return <GetArmor baseType={props.baseType} RemoveItem={() => RemoveItem(props.inventoryId)} itemId={props.id} inventoryId={props.inventoryId}/>;
            case "weapon":
                return <GetWeapon baseType={props.baseType} RemoveItem={() => RemoveItem(props.inventoryId)} itemId={props.id} inventoryId={props.inventoryId}/>
        }
    }

    return(
        <>
            <div className="EquippedItems">
                <EquippedList weapons={weapons} armors={armors}/>
            </div>
            <div className="inventory-block">
                <ListItems AddItem={AddItem} inventoryNum={inventoryNumber}/>
                {inventory.map((i, index) => <div key={i.inventoryId}>{
                    BuildItem(i)
                    }</div>)}
            </div>
        </>

    )
}

export default Inventory;