
const ItemEffects = (props) => {
    const discomforts = [
        {id: "de001", title:"Sleeping Discomforts", effect: "Sleeping with this on gives you half as much recovery of Health and Spirit for a long rest rounded down."},
        {id: "de002", title:"Slow Equip", effect: "It takes you 30 minutes without aid to put your armor on, with aid this is reduced to 20 minutes."},
    ]
    const damageTypes = [
        {id: "blu", title: "Bludgeon", description: "A blunt strike, great for knocking your enemy unconscious."},
        {id: "sla", title: "Slashing", description: "A wide cut, great for cutting of limbs or leaving your enemy bleeding."},
        {id: "pie", title: "Piercing", description: "A small puncturing attack, great for hitting vital organs."},
        {id: "armp0", title: "Full Armor Piercing", description: "You may ignore armor with attacks from this weapon."},
        {id: "armp2", title: "Armor Piercing 2", description: "You deal damage to an enemy with armor as if it had 2 less in armor. (The ignored armor cannot be reduced by this attack.)"},
        {id: "armp3", title: "Armor Piercing 3", description: "You deal damage to an enemy with armor as if it had 3 less in armor. (The ignored armor cannot be reduced by this attack.)"},
        {id: "armp4", title: "Armor Piercing 4", description: "You deal damage to an enemy with armor as if it had 4 less in armor. (The ignored armor cannot be reduced by this attack.)"},
        {id: "armc2", title: "Armor Crushing 2", description: "If you attack an enemy with armor you deal an additional 2 damage to the armor. (This bonus damage cannot be dealt on health)"},
        {id: "armc3", title: "Armor Crushing 3", description: "If you attack an enemy with armor you deal an additional 3 damage to the armor. (This bonus damage cannot be dealt on health)"},
        {id: "armc4", title: "Armor Crushing 4", description: "If you attack an enemy with armor you deal an additional 4 damage to the armor. (This bonus damage cannot be dealt on health)"},
    ];

    let targetType = {};
    switch(props.effectType){
        case "damageType":
            targetType = damageTypes.find((effect) => effect.id === props.effectId);
            break;        
        case "discomfort":       
            targetType = discomforts.find((effect) => effect.id === props.effectId);
            break;
    }
    console.log(`The target is:`, targetType);

    return(
        <div className={`effectbox`}>
            <h3 className="effectbox-title">{targetType ? targetType.title : "Not Found"}</h3>
            <div className="effectbox-popcontainer">
                <p className="effectbox-description">{targetType ? targetType.description : "The target was not found and returned as null."}</p>
            </div>
        </div> 
    );
}

export default ItemEffects;