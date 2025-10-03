import PropTypes from "prop-types"



function Student({
    name = "Guest",
    age = 0,
    isStudent = false,

}) {
    return(
       <div className="std">
        <p>Name: {name}</p>
        <p>age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
        
       </div>
    );   
}
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age:  PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired, 
};

export default Student