const Armor = () => {
    const armor = [
        {id:"a001", title: "Cloth", weightclass: "Light", armor: 0, movementMod: 0, initiativeMod: 1, discomforts: [], skillMod: [], penalties: []},
        {id:"a001", title: "Hide", weightclass: "Light", armor: 1, movementMod: 0, initiativeMod: 0, discomforts: [], skillMod: [], penalties: ["-1 Initiative"]},
        {id:"a002", title: "Padded", weightclass: "Medium", armor: 2, movementMod: 0, initiativeMod: -1, discomforts: [], skillMod: [], penalties: ["-2 Initiative"]},
        {id:"a003", title: "Partial Plate", weightclass: "Medium", armor: 4, movementMod: 0, initiativeMod: -1, discomforts: ["Sleeping Discomfort"], skillMod: ["-1 Climbing"], penalties: ["-3 Initiative"]},
        {id:"a004", title: "Half Plate", weightclass: "Heavy", armor: 6, movementMod: 0, initiativeMod: -3, discomforts: ["Sleeping Discomfort"], skillMod: ["-1 Climbing", "-1 Stealth"], penalties: ["-3 Initiative", "-1 Stealth"]},
        {id:"a005", title: "Full Plate", weightclass: "Heavy", armor: 8, movementMod: 0, initiativeMod: -3, discomforts: ["Sleeping Discomfort", "Slow Equip"], skillMod: ["-2 Climbing", "-2 Stealth"], penalties: ["-4 Initiative", "-2 Stealth", "-1 Movement"]}
    ];
    return armor;
}

export default Armor;