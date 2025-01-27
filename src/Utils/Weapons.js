
const Weapons = (listType = "melee") => {
    const weapons = {
        melee: [
            {id:"mw001", itemType: "weapon", title:"Dagger", type: "Melee", weightclass: "Light", size: "One-handed", range: 1, baseDamage: 1, damageTypes: ["sla"], movementMod: 0, initiativeMod: 2, penalties: ["-2 Initiative"]},
            {id:"mw002", itemType: "weapon", title:"Long Sword", type: "Melee", weightclass: "Medium", size: "One-handed", range: 1, baseDamage: 2, damageTypes: ["pie", "sla"], movementMod: 0, initiativeMod: 2, penalties: ["-2 Initiative"]},
            {id:"mw003", itemType: "weapon", title:"Hand Axe", type: "Melee", weightclass: "Medium", size: "One-handed", range: 1, baseDamage: 3, damageTypes: ["sla"], movementMod: 0, initiativeMod: -2, penalties: ["-2 Initiative"]},
            {id:"mw004", itemType: "weapon", title:"Battle Axe", type: "Melee", weightclass: "Heavy", size: "Two-handed", range: 1, baseDamage: 4, damageTypes: ["sla"], movementMod: 0, initiativeMod: -2, penalties: ["-3 Initiative"]},
            {id:"mw005", itemType: "weapon", title:"Spear", type: "Melee", weightclass: "Heavy", size: "Two-handed", range: 2, baseDamage: 3, damageTypes: ["pie"], movementMod: 0, initiativeMod: -1, penalties: ["-3 Initiative"]},
            {id:"mw006", itemType: "weapon", title:"War Hammer", type: "Melee", weightclass: "Medium", size: "One-handed", range: 1, baseDamage: 2, damageTypes: ["blu", "armc2"], movementMod: 0, initiativeMod: -1, penalties: ["-2 Initiative"]},
            {id:"mw007", itemType: "weapon", title:"Maul", type: "Melee", weightclass: "Heavy", size: "Two-handed", range: 1, baseDamage: 3, damageTypes: ["blu", "armc3"], movementMod: 0, initiativeMod: -2, penalties: ["-3 Initiative"]},
        ],
        ranged: [
            {id:"rw001", itemType: "weapon", title:"Short Bow", type: "Ranged", weightclass: "Light", size: "Two-handed", range: 14, baseDamage: 2, damageTypes: ["pie"], movementMod: 0, initiativeMod: 1, reloadPenalty:["-2 Movement"], penalties: ["-2 Range", "-1 Initative"]},
            {id:"rw002", itemType: "weapon", title:"Long Bow", type: "Ranged", weightclass: "Medium", size: "Two-handed", range: 16, baseDamage: 3, damageTypes: ["pie"], movementMod: 0, initiativeMod: 2, reloadPenalty:["-2 Movement"], penalties: ["-2 Range", "-1 Initative"]},
            {id:"rw003", itemType: "weapon", title:"Hand Crossbow", type: "Ranged", weightclass: "Light", size: "One-handed", range: 12, baseDamage: 2, damageTypes: ["pie"], movementMod: 0, initiativeMod: 0, reloadPenalty:["-1 Action of your choice", "-2 Movement"], penalties: ["-1 Range", "-2 Initative"]},
            {id:"rw004", itemType: "weapon", title:"Heavy Crossbow", type: "Ranged", weightclass: "Heavy", size: "Two-handed", range: 17, baseDamage: 4, damageTypes: ["pie", "armp3"], movementMod: -1, initiativeMod: 0, reloadPenalty:["-1 Standard Action", "-2 Movement"], penalties: ["-1 Range", "-2 Initative"]},
        ],
        magic: [
            {id:"mf001", itemType: "weapon", title: "Small Focus", type: "Magic", weightclass: "Light", size: "One-Handed", range: 8, baseDamage: 0, damageTypes:["mag"], movementMod: 0, initiativeMod: 1, penalties: ["-3 Initiative", "-2 Range"]},
            {id:"mf002", itemType: "weapon", title: "Large Focus", type: "Magic", weightclass: "Heavy", size: "Two-Handed", range: 12, baseDamage: 1, damageTypes:["mag"], movementMod: 0, initiativeMod: 0, penalties: ["-3 Initiative", "-2 Range"]},
            {id:"mf003", itemType: "weapon", title: "Small Instrument", type: "Magic", weightclass: "Light", size: "One-Handed", range: 6, baseDamage: 1, damageTypes:["mag"], movementMod: 0, initiativeMod: 1, penalties: ["-1 Initiative", "-1 Range"]},
            {id:"mf004", itemType: "weapon", title: "Large Instrument", type: "Magic", weightclass: "Heavy", size: "Two-Handed", range: 10, baseDamage: 2, damageTypes:["mag"], movementMod: 0, initiativeMod: 0, penalties: ["-2 Initiative", "-1 Range"]},
        ]
    }

    return weapons[listType];
}

export default Weapons;