const Armor = (listType = "common") => {
    const armors = {
        common: [
            {id:"ca001", itemType: "armor", title: "Cloth", weightclass: "Light", armor: 0, movementMod: 0, initiativeMod: 1, penalties: []},
            {id:"ca002", itemType: "armor", title: "Hide", weightclass: "Light", armor: 1, movementMod: 0, initiativeMod: 0, penalties: ["-1 Initiative"]},
            {id:"ca003", itemType: "armor", title: "Padded", weightclass: "Medium", armor: 2, movementMod: 0, initiativeMod: -1, penalties: ["-2 Initiative"]},
            {id:"ca004", itemType: "armor", title: "Partial Plate", weightclass: "Medium", armor: 4, movementMod: 0, initiativeMod: -1, discomforts: ["sle"], skillMod: ["-1 Climbing"], penalties: ["-3 Initiative"]},
            {id:"ca005", itemType: "armor", title: "Half Plate", weightclass: "Heavy", armor: 6, movementMod: 0, initiativeMod: -3, discomforts: ["sle"], skillMod: ["-1 Climbing", "-1 Stealth"], penalties: ["-3 Initiative", "-1 Stealth"]},
            {id:"ca006", itemType: "armor", title: "Full Plate", weightclass: "Heavy", armor: 8, movementMod: 0, initiativeMod: -3, discomforts: ["sle", "slo"], skillMod: ["-2 Climbing", "-2 Stealth"], penalties: ["-4 Initiative", "-2 Stealth", "-1 Movement"]}    
        ],
        magical: [
            {id:"ma001", itemType: "armor", title: "Dragon Scales", weightclass: "Heavy", armor: 8, movementMod: 0, initiativeMod: -3, discomforts: ["sle", "slo"], skillMod: ["-2 Climbing", "-2 Stealth"], penalties: ["-4 Initiative", "-2 Stealth", "-1 Movement"]}    
        ]
    }
    const armor = [
    ];
    return armors[listType];
}

export default Armor;