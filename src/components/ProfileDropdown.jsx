import React from 'react'
import { connect } from 'react-redux'
import { PopOver } from '@ticketmaster/aurora'

import { ViewFilters } from '../constants'

import ProfileDropdownUser from './ProfileDropdownUser'
import ProfileDropdownMenu from './ProfileDropdownMenu'
import ProfileDropdownForm from './ProfileDropdownForm'

const ProfileDropdown = ({ view, userInfo, menuItems, menuHeading }) => {

    let renderUserInfo = () => {
        let { name, organization, isAdmin, badgeLabel } = userInfo;
        return <ProfileDropdownUser userFullName={name}
            userOrganization={organization}
            isUserAdmin={isAdmin}
            badgeLabel={badgeLabel} />
    }

    let renderView = () => {
        if (view === ViewFilters.SHOW_CHANGE_PASSWORD) {
            return <ProfileDropdownForm />
        } else {
            return <ProfileDropdownMenu heading={menuHeading}
                items={menuItems} />
        }
    }

    return (
        <PopOver spaceFromMouse={30} isVisible={true}>
            <div className="ProfileDropDown">
                {/* isVisible */}
                {renderUserInfo()}
                {renderView()}
            </div>
        </PopOver>
    );
}


const mapStatesToProps = (state, ownProps) => {
    return {
        view: state.profileDropdown.view,
        menuItems: ownProps.menuItems,
        menuHeading: ownProps.menuHeading,
        userInfo: ownProps.userInfo
    }
}

export default connect(mapStatesToProps)(ProfileDropdown);