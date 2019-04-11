import React from 'react'
import { connect } from 'react-redux'

import ChangePasswordForm from './ChangePasswordForm'
import { ViewFilters, ChangePasswordViewFilters } from '../constants'

import { setViewFilter } from '../redux/actions/actions'

const mapStateToProps = (state, ownProps) => ({})


const mapDispatchToProps = (dispatch) => ({
    onCancel: () => { dispatch(setViewFilter(ViewFilters.SHOW_MENU)) },
    onSubmit: (oldPassword, newPassword) => { dispatch()}
})

const ManagedProfileDropdownForm = ({view, passwordPolicy, error, onSubmit, onCancel}) => {
    let renderView = () => {
        switch (view) {
            case ChangePasswordViewFilters.SHOW_SUCCESS_MESSAGE : 
                return "HEllo";
            
            default: //ChangePasswordViewFilters.SHOW_FORM
                return (<ChangePasswordForm passwordPolicy={passwordPolicy}
                    onSubmit={onSubmit}
                    onCancel={ onCancel }/>);
        }
    }
    return renderView();
}


export default connect(mapStateToProps, mapDispatchToProps)(ManagedProfileDropdownForm)