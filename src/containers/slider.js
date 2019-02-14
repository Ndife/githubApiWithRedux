import {connect} from 'react-redux';
import sliderComponent from '../components/Slider';

const mapStateToProps = state =>{
    return{
        profile: state.profile
    }
}


const Slider = connect(
    mapStateToProps
)(sliderComponent)

export default Slider