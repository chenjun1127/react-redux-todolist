/**
 * Created by 0easy-23 on 2017/8/15.
 */
import {connect } from 'react-redux';
import {setVisibilityFilter} from '../actions/index';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink
