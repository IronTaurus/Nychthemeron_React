
const RuleBlock = (props) => {
    return( 
        <p>{props.txt}</p>
    )
}


const CharacterCreation = () => {
    return(
        <ul>
            <li>When creating a new character choose a name, race and class using the Character Sheet.</li>
            <li><p>1. Choose Race</p></li>
            <li><p>2. Choose Class</p></li>
            <li><p>3. Choose Talents</p></li>
            <li><p>4. Choose Equippments</p></li>
        </ul>
    )
}

export default CharacterCreation;