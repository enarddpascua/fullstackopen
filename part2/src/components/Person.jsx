const Person = ({name, number, show}) => <p style={show ? {} : {display:'none'}}>{name} {number}</p>

export default Person