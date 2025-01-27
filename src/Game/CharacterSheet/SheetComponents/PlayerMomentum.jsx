import Textblock from "./Textblock"
import styled from "styled-components";

const PlayerMomentum = () => {
    const FlexBox = styled.section`
    display: flex;
    justify-content: flex-end;
`
    return (
        <FlexBox>
            <Textblock title={"Movement"} size={"small"}/>
            <Textblock title={"Initiative"} size={"small"}/>
        </FlexBox>
        
    )
}
export default PlayerMomentum;