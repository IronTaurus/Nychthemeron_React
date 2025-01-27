import Textblock from "./SheetComponents/Textblock";

const PersonInfo = () => {
  return (
    <div className="info-block">
        <Textblock title="Name" size="large" />
        <div className="flex-div">
            <div className="info-col">
                <Textblock title="Race" size="medium" />
                <Textblock title="Level" size="small" />
                
            </div>
            <div className="info-col">
                <Textblock title="Sub-Race" size="medium" />
                <Textblock title="Talent Points" size="small" />
            </div>
        </div>
    </div>
  );
};

export default PersonInfo;
