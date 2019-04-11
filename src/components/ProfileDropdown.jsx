import React from 'react'


import { ViewFilters } from '../constants'
const ProfileDropdown = ({view}) => {

    let renderView = () => {
        if (view === ViewFilters.SHOW_CHANGE_PASSWORD) {
            return (
                <section className="ProfileDropDown__ChangePasswordForm">
                    Password Form
                </section>
            )
        } else {
            return (
                <section className="ProfileDropDown__Menu">
                    {/* view */}
                    Menu
                </section>
            )
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

export default ProfileDropdown