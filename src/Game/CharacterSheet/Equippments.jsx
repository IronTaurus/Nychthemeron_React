import {BaseDamage as bdmgIcon} from "./Art/Icons/BaseDamage.png";



const Weapons = (meleeType) => {
    const meleeList = [
        {id:"mw001", title:"Dagger", type: "Melee", weightclass: "Light", size: "One handed", range: 1, baseDamage: 1, damageTypes: ["Piercing"], movementMod: 0, initiativeMod: 2, penalties: ["-2 Initiative"]},
        {id:"mw002", title:"Long Sword", type: "Melee", weightclass: "Medium", size: "One handed", range: 1, baseDamage: 2, damageTypes: ["Piercing", "Slashing"], movementMod: 0, initiativeMod: 2, penalties: ["-2 Initiative"]},
        {id:"mw003", title:"Hand Axe", type: "Melee", weightclass: "Medium", size: "One handed", range: 1, baseDamage: 3, damageTypes: ["Slashing"], movementMod: 0, initiativeMod: -2, penalties: ["-2 Initiative"]},
        {id:"mw004", title:"Battle Axe", type: "Melee", weightclass: "Heavy", size: "Two handed", range: 1, baseDamage: 4, damageTypes: ["Slashing"], movementMod: 0, initiativeMod: -2, penalties: ["-3 Initiative"]},
        {id:"mw005", title:"Spear", type: "Melee", weightclass: "Heavy", size: "Two handed", range: 2, baseDamage: 3, damageTypes: ["Piercing"], movementMod: 0, initiativeMod: -1, penalties: ["-3 Initiative"]},
        {id:"mw003", title:"War Hammer", type: "Melee", weightclass: "Medium", size: "One handed", range: 1, baseDamage: 2, damageTypes: ["Bludgeon", "Armor Crushing 1"], movementMod: 0, initiativeMod: -1, penalties: ["-2 Initiative"]},
        {id:"mw003", title:"War Sledge", type: "Melee", weightclass: "Heavy", size: "Two handed", range: 1, baseDamage: 3, damageTypes: ["Bludgeon", "Armor Crushing 3"], movementMod: 0, initiativeMod: -2, penalties: ["-3 Initiative"]},
    ];
    const rangedList = [
        {id:"rw001", title:"Short Bow", type: "Ranged", weightclass: "Light", size: "Two handed", range: 14, baseDamage: 2, damageTypes: ["Piercing"], movementMod: 0, initiativeMod: 1, reloadPenalty:["-2 Movement"], penalties: ["-2 Range", "-1 Initative"]},
        {id:"rw002", title:"Long Bow", type: "Ranged", weightclass: "Medium", size: "Two handed", range: 16, baseDamage: 3, damageTypes: ["Piercing"], movementMod: 0, initiativeMod: 2, reloadPenalty:["-2 Movement"], penalties: ["-2 Range", "-1 Initative"]},
        {id:"rw003", title:"Hand Crossbow", type: "Ranged", weightclass: "Light", size: "One handed", range: 12, baseDamage: 2, damageTypes: ["Piercing"], movementMod: 0, initiativeMod: 0, reloadPenalty:["-1 Action of your choice"], penalties: ["-1 Range", "-2 Initative"]},
        {id:"rw004", title:"Heavy Crossbow", type: "Ranged", weightclass: "Heavy", size: "Two handed", range: 17, baseDamage: 4, damageTypes: ["Piercing", "Armor Piercing 2"], movementMod: -1, initiativeMod: 0, reloadPenalty:["-2 Actions of your choice"], penalties: ["-1 Range", "-2 Initative"]},
    ];
    return meleeType ? meleeList : rangedList;
}
const Armor = () => {
    const Armor = [
        {id:"a001", title: "Cloth", weightclass: "Light", armor: 0, movementMod: 0, initiativeMod: 1, discomforts: [], skillMod: [], penalties: []},
        {id:"a001", title: "Hide", weightclass: "Light", armor: 1, movementMod: 0, initiativeMod: 0, discomforts: [], skillMod: [], penalties: ["-1 Initiative"]},
        {id:"a002", title: "Padded", weightclass: "Medium", armor: 2, movementMod: 0, initiativeMod: -1, discomforts: [], skillMod: [], penalties: ["-2 Initiative"]},
        {id:"a003", title: "Partial Plate", weightclass: "Medium", armor: 4, movementMod: 0, initiativeMod: -1, discomforts: ["Sleeping Discomfort"], skillMod: ["-1 Climbing"], penalties: ["-3 Initiative"]},
        {id:"a004", title: "Half Plate", weightclass: "Heavy", armor: 6, movementMod: 0, initiativeMod: -3, discomforts: ["Sleeping Discomfort"], skillMod: ["-1 Climbing", "-1 Stealth"], penalties: ["-3 Initiative", "-1 Stealth"]},
        {id:"a005", title: "Full Plate", weightclass: "Heavy", armor: 8, movementMod: 0, initiativeMod: -3, discomforts: ["Sleeping Discomfort", "Slow Equip"], skillMod: ["-2 Climbing", "-2 Stealth"], penalties: ["-4 Initiative", "-2 Stealth", "-1 Movement"]}
    ];
}
const ItemEffects = () => {
    const discomforts = [
        {id: "de001", title:"Sleeping Discomforts", effect: "Sleeping with this on gives you half as much recovery of Health and Spirit for a long rest rounded down."},
        {id: "de002", title:"Slow Equip", effect: "It takes you 30 minutes without aid to put your armor on, with aid this is reduced to 20 minutes."},

    ]
    const damageTypes = [
        {id: "we001", title: "Full Armor Piercing", effect: "You may ignore armor with attacks from this weapon."},
        {id: "we002", title: "Armor Piercing 2", effect: "You deal damage to an enemy with armor as if it had 2 less in armor. (This attack cannot reduce Armor to 0)"},
        {id: "we003", title: "Armor Piercing 3", effect: "You deal damage to an enemy with armor as if it had 3 less in armor. (This attack cannot reduce Armor to 0)"},
        {id: "we004", title: "Armor Piercing 4", effect: "You deal damage to an enemy with armor as if it had 4 less in armor. (This attack cannot reduce Armor to 0)"},
        {id: "we005", title: "Armor Crushing 2", effect: "If you attack an enemy with armor you deal an additional 2 damage to the armor. (This bonus damage cannot be dealt on health)"},
        {id: "we006", title: "Armor Crushing 3", effect: "If you attack an enemy with armor you deal an additional 3 damage to the armor. (This bonus damage cannot be dealt on health)"},
        {id: "we007", title: "Armor Crushing 4", effect: "If you attack an enemy with armor you deal an additional 4 damage to the armor. (This bonus damage cannot be dealt on health)"},
    ];
}

const GetMeleeWeapon = (itemId) => {
    const TargetWeapon = Weapons(true).find((weapon) => weapon.id === "mw001");
    return(
        <>
        <div>
            <div className="item-title">{TargetWeapon.title}</div>
            <div className="item-basestats-container">
                <div className="item-box">
                    <img src={bdmgIcon} height="50px" width="50px"/>
                    <div>{TargetWeapon.baseDamage}</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default GetMeleeWeapon;