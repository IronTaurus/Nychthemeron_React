import GetMeleeWeapon from "../Components/Items/Equippments";
import CharacterSheet from "./CharacterSheet/CharacterSheet";

const Characters = ()=> {
    return(
        <>
            <h1>Characters</h1>
            <p>A Page explaining character creation and class differences.
                it also has links to Character sheet/sheets.
            </p>
            <CharacterSheet/>
        </>
    )
}
export default Characters;