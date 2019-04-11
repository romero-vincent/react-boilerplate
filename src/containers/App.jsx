import React, { Component } from 'react'
import AddTodo from '../components/AddTodo'

import { PopOver } from '@ticketmaster/aurora'
import { connect } from 'react-redux'

import { ViewFilters, MenuViewFilters } from '../constants'
import { setViewFilter, setMenuViewFilter } from '../redux/actions/actions'

import ProfileDropdown from '../components/ProfileDropdown'

class App extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    handleSelect(item) {
        console.log('selected', item);
    }

    render() {
        
        return (
            <div className="App" ref={ node => this.triggerRef = node }>
                <button ref={this.buttonRef}>Open Me</button>

                <AddTodo/>

                <ProfileDropdown
                    menuHeading="My Acccount"
                    menuItems={[
                            { name:'', label: 'Access Settings', onSelect: () => {}},
                            { name:'', label: 'Profile Settings', onSelect: () => {}},
                            { name:'', label: 'Change Password', onSelect: () => {
                                this.props.dispatch(setViewFilter(ViewFilters.SHOW_CHANGE_PASSWORD))
                            }},
                            { name:'', label: 'Sign Out', onSelect:  () => {}},
                        ]}>
                    
                </ProfileDropdown>

                <button onClick={() => {
                    this.props.dispatch(setViewFilter(ViewFilters.SHOW_MENU))
                }}>Toggle Menu</button>
                <button onClick={() => {
                    this.props.dispatch(setMenuViewFilter(MenuViewFilters.SHOW_LATEST))
                }}>Toggle ChangePassword</button>

                {/* <ProfileDropDown trigger={this.buttonRef}
                    adminBadgeLabel={"ADMIN"}
                    isUserAdmin={true}
                    passwordPolicy={"Some policy Goes here"}
                    onSelect={ this.handleSelect }
                    showChangePasswordForm={false}
                    menuItems={[{ name: 'logout', label: 'Sign Out' }, { name: 'changePassword', label: 'Change Password'}]} /> */}
            </div>
        );
    }
}

export default connect()(App);