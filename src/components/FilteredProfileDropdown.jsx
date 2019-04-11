import React from 'react'
import ProfileDropdown from './ProfileDropdown'
import { connect } from 'react-redux'

const mapStatesToProps = (state, ownProps) => {
    console.log(state, ownProps)
return {
    view : state.profileDropdown.view,
}
}

const FilteredProfileDropdown = connect(mapStatesToProps)(ProfileDropdown);

export default FilteredProfileDropdown