import PropTypes from 'prop-types';
import './UserGreating.css'

function UserGreasting (props) {
       
       return  props.isLoggedIn ? <h2 className="Welcom" >Welcome {props.username}</h2> : 
       <h2 className="login">Please Log In</h2>;
       
}
UserGreasting.propstypes = {
       isLoggedIn: PropTypes.bool.isRequired,
       username:   PropTypes.string.isRequired,
};

export default UserGreasting