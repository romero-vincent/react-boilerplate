import React from 'react'
import { connect } from 'react-redux'
import { Link } from '@ticketmaster/aurora'

import ChangePasswordForm from './ChangePasswordForm'
import { ViewFilters, ChangePasswordViewFilters } from '../constants'

import { setViewFilter, changePassword } from '../redux/actions/actions'

const mapStateToProps = (state, ownProps) => ({
    view: state.profileDropdown.changePasswordView
})


const mapDispatchToProps = (dispatch) => ({
    onCancel: () => { dispatch(setViewFilter(ViewFilters.SHOW_MENU)) },
    onSubmit: (oldPassword, newPassword) => { dispatch(changePassword(oldPassword, newPassword)) }
})

const ProfileDropdownForm = ({ view, passwordPolicy, error, onSubmit, onCancel }) => {
    let renderView = () => {
        switch (view) {
            case ChangePasswordViewFilters.SHOW_SUCCESS_MESSAGE:
                return (
                    <div>
                        Successful
                        <Link onClick={onCancel}>Close</Link>
                    </div>
                );

            default: //ChangePasswordViewFilters.SHOW_FORM
                return (
                    <ChangePasswordForm passwordPolicy={passwordPolicy}
                        onSubmit={onSubmit}
                        onCancel={onCancel} />
                );
        }
    }
    return renderView();
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdownForm)