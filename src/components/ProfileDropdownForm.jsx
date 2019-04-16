import React from 'react'
import { connect } from 'react-redux'

import ChangePasswordForm from './ChangePasswordForm'
import { ViewFilters, ChangePasswordViewFilters } from '../constants'

import { setViewFilter, changePassword} from '../redux/actions/actions'

const mapStateToProps = (state, ownProps) => ({})


const mapDispatchToProps = (dispatch) => ({
    onCancel: () => { dispatch(setViewFilter(ViewFilters.SHOW_MENU)) },
    onSubmit: (oldPassword, newPassword) => { changePassword(oldPassword, newPassword) }
})

const ProfileDropdownForm = ({view, passwordPolicy, error, onSubmit, onCancel}) => {
    let renderView = () => {
        switch (view) {
            case ChangePasswordViewFilters.SHOW_SUCCESS_MESSAGE : 
                return (
                    <div>
                        Successful
                    </div>
                );
            
            default: //ChangePasswordViewFilters.SHOW_FORM
                return (
                    <ChangePasswordForm passwordPolicy={passwordPolicy}
                        onSubmit={ onSubmit }
                        onCancel={ onCancel }/>
                );
        }
    }
    return renderView();
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdownForm)