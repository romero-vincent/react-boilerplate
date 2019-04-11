import React from 'react'
import { connect } from 'react-redux'

import { ViewFilters } from '../constants'

import ProfileDropdownMenu from './ProfileDropdownMenu'
import ManagedProfileDropdownForm from './ManagedProfileDropdownForm'

const ProfileDropdown = ({view, menuItems, menuHeading}) => {

    let renderView = () => {
        if (view === ViewFilters.SHOW_CHANGE_PASSWORD) {
            return <ManagedProfileDropdownForm onSubmit={() => {}} onCancel={ ()=> {}} />
        } else {
            return <ProfileDropdownMenu heading={ menuHeading } items={ menuItems } />
        }
    }
    
    return (
        <div className="ProfileDropDown">
            {/* isVisible */}
            <section className="ProfileDropDown__UserInfo" >
                User Info
            </section>
            { renderView() }
        </div>
    );
}


const mapStatesToProps = (state, ownProps) => {
    return {
        view : state.profileDropdown.view,
        menuItems : ownProps.menuItems,
        menuHeading: ownProps.menuHeading
    }
}

export default connect(mapStatesToProps)(ProfileDropdown);