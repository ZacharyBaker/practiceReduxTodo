import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actionCreators'
import Footer from '../components/Footer'


const mapDispatchToProps = dispatch => {
	return {
		setVisibilityFilter: filter => {
			dispatch(setVisibilityFilter(filter))
		}
	}
}

const FooterContainer = connect(null, mapDispatchToProps)(Footer)
export default FooterContainer