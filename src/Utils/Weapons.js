
const Weapons = (listType = "melee") => {
    const weapons = {
        melee: [
            {id:"mw001", title:"Dagger", type: "Melee", weightclass: "Light", size: "One-handed", range: 1, baseDamage: 1, damageTypes: ["sla"], movementMod: 0, initiativeMod: 2, penalties: ["-2 Initiative"]},
            {id:"mw002", title:"Long Sword", type: "Melee", weightclass: "Medium", size: "One-handed", range: 1, baseDamage: 2, damageTypes: ["pie", "sla"], movementMod: 0, initiativeMod: 2, penalties: ["-2 Initiative"]},
            {id:"mw003", title:"Hand Axe", type: "Melee", weightclass: "Medium", size: "One-handed", range: 1, baseDamage: 3, damageTypes: ["sla"], movementMod: 0, initiativeMod: -2, penalties: ["-2 Initiative"]},
            {id:"mw004", title:"Battle Axe", type: "Melee", weightclass: "Heavy", size: "Two-handed", range: 1, baseDamage: 4, damageTypes: ["sla"], movementMod: 0, initiativeMod: -2, penalties: ["-3 Initiative"]},
            {id:"mw005", title:"Spear", type: "Melee", weightclass: "Heavy", size: "Two-handed", range: 2, baseDamage: 3, damageTypes: ["pie"], movementMod: 0, initiativeMod: -1, penalties: ["-3 Initiative"]},
            {id:"mw006", title:"War Hammer", type: "Melee", weightclass: "Medium", size: "One-handed", range: 1, baseDamage: 2, damageTypes: ["blu", "armc2"], movementMod: 0, initiativeMod: -1, penalties: ["-2 Initiative"]},
            {id:"mw007", title:"War Sledge", type: "Melee", weightclass: "Heavy", size: "Two-handed", range: 1, baseDamage: 3, damageTypes: ["blu", "armc3"], movementMod: 0, initiativeMod: -2, penalties: ["-3 Initiative"]},
        ],
        ranged: [
            {id:"rw001", title:"Short Bow", type: "Ranged", weightclass: "Light", size: "Two-handed", range: 14, baseDamage: 2, damageTypes: ["pie"], movementMod: 0, initiativeMod: 1, reloadPenalty:["-2 Movement"], penalties: ["-2 Range", "-1 Initative"]},
            {id:"rw002", title:"Long Bow", type: "Ranged", weightclass: "Medium", size: "Two-handed", range: 16, baseDamage: 3, damageTypes: ["pie"], movementMod: 0, initiativeMod: 2, reloadPenalty:["-2 Movement"], penalties: ["-2 Range", "-1 Initative"]},
            {id:"rw003", title:"Hand Crossbow", type: "Ranged", weightclass: "Light", size: "One-handed", range: 12, baseDamage: 2, damageTypes: ["pie"], movementMod: 0, initiativeMod: 0, reloadPenalty:["-1 Action of your choice"], penalties: ["-1 Range", "-2 Initative"]},
            {id:"rw004", title:"Heavy Crossbow", type: "Ranged", weightclass: "Heavy", size: "Two-handed", range: 17, baseDamage: 4, damageTypes: ["pie", "armp2"], movementMod: -1, initiativeMod: 0, reloadPenalty:["-2 Actions of your choice"], penalties: ["-1 Range", "-2 Initative"]},
        ],
        magic: [
            
        ]
    }

    return weapons[listType];
}

export default Weapons;