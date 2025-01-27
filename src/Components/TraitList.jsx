const TraitList = () => {
    const [traits, setTraits] = useState([]);
    const [traitNumber, setTraitNumber] = useState(1)

    const AddTrait = (trait) => {
        setTraitNumber((traitNumber) => traitNumber +1);
        const traitArray = [...traits, trait];
        setTraits(traitArray);
    }
    const RemoveItem = (target) => {
        const traitArray = [...traits, trait];
        traitArray.filter(trait => trait.traitId !== target.idNumber)
        setInventory(traitArray)
    }

    return(
        <>
        </>
    )
}