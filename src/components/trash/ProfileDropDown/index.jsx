import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChangePasswordForm from '../ChangePasswordForm'
import ProfileCrumb from '../ProfileCrumb'
import ProfileMenu from '../ProfileMenu'
import {PopOver, Text} from '@ticketmaster/aurora'
import { connect } from 'react-redux'
import { ProfileViews, selectProfileItem, setProfileView } from '../../redux/actions'

const STATE_INITIAL = {
    showPopOver: false
}

class ProfileDropDown extends Component {

    constructor(props) {
        super(props);
        this.state = STATE_INITIAL;
        this.togglePopOver = this.togglePopOver.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    togglePopOver(event) {
        let { showPopOver } = this.state;
        this.setState({
            showPopOver: !showPopOver
        });
    }

    selectItem(item) {
        console.log('user selected', item, ProfileViews)
        if (item.name === 'changePassword') {
            this.props.changeView(ProfileViews.CHANGE_PASSWORD_FORM)
        } else {
            this.props.selectItem(item)
        }
        
    }

    componentDidMount() {
        this.props.trigger.current.addEventListener('mousedown', this.togglePopOver)

    }

    componentWillUnmount() {
        this.props.trigger.current.removeEventListener('mousedown', this.togglePopOver)

    }

    handleChangePassword() {
    }
    
    render() {
        let { showPopOver } = this.state;
        let { userFullName, userOrganization, isUserAdmin, adminBadgeLabel, passwordPolicy, view, menuItems} = this.props;
        
        let displayMenuOrChangePasswordForm = () => {
            console.log()
            return (view === ProfileViews.CHANGE_PASSWORD_FORM)
                ? <ChangePasswordForm onCancel={ this.togglePopOver } passwordPolicy={ passwordPolicy } />
                :   <ProfileMenu onSelect={this.selectItem} items={ menuItems }></ProfileMenu>
            
        };

        return (
            <PopOver spaceFromMouse={30}  isVisible={ true }>
                <ProfileCrumb
                    userFullName={ userFullName }
                    userOrganization={ userOrganization }
                    isUserAdmin={ isUserAdmin }
                    adminBadgeLabel={ adminBadgeLabel } />
                <hr/>

                { displayMenuOrChangePasswordForm() }

                <hr/>
            </PopOver>
        );
    }
    
}

ProfileDropDown.propTypes = {
    selectedItem: PropTypes.object,
    onSelect: PropTypes.func,
    view: PropTypes.string,
    trigger: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    userFullName: PropTypes.string,
    userOrganization: PropTypes.string,
    adminBadgeLabel: PropTypes.string,
    isUserAdmin: PropTypes.bool,
    onChangePassword: PropTypes.func,
    menuItems: PropTypes.array
}

ProfileDropDown.defaultProps = {
    view: ProfileViews.MENU,
    showChangePasswordForm: false,
    isUserAdmin: false,
    adminBadgeLabel: 'ADMIN',
    userFullName: 'TM1 User',
    userOrganization: 'Ticketmaster',
    menuItems: []
}

const mapStateToProps = (state) => ({
    view: state.profile.view
});

const mapDispatchToProps = {
    selectItem: selectProfileItem,
    changeView: setProfileView
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileDropDown);