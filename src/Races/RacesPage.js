import GetRace from "./GetRaces";

const rId = ["Dwarf_M", "Elf_D", "Elf_H", "Elf_W"] 

const RacesPage = () => {
    console.log("Entering RacesPage...")
    return (
        <div key="racePageId" className="main-page">
            {rId.map((id, index) => <GetRace raceId={id} isEven={index % 2 === 0}/>)}
        </div>
    )
}

export default RacesPage;