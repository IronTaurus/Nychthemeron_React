const Textblock = (props) => {
    return(
        <div className="text-box">
            <div className="text-label">{props.title}:</div>
            <textarea className={"text-editable" +" "+ props.size}/>
        </div>
    )
}

export default Textblock;