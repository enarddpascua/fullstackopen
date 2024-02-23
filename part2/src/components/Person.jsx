const Person = ({name, number, show=true, onDelete}) => {
    return (
        <div className="person-wrapper">
            <p style={show ? {} : {display:'none'}}>{name} {number}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Person