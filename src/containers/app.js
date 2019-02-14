import {connect} from 'react-redux';
import appComponent from '../components/App';
import {fetchProfile} from '../actions/actions_profile'

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        fetchProfile: () => {
            dispatch(fetchProfile());
        }
    }
}

const app = connect(
    false,
    mapDispatchToProps
)(appComponent)

export default app