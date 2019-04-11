import React, { Component } from 'react'
import AddTodo from '../components/AddTodo'
import FilteredProfileDropdown from '../components/FilteredProfileDropdown'
import { PopOver } from '@ticketmaster/aurora'
import { connect } from 'react-redux'

import { ViewFilters } from '../constants'
import { setViewFilter } from '../redux/actions/actions'

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

                <FilteredProfileDropdown isVisible={false}/>

                <button onClick={() => {
                    this.props.dispatch(setViewFilter(ViewFilters.SHOW_MENU))
                }}>Toggle Menu</button>
                <button onClick={() => {
                    this.props.dispatch(setViewFilter(ViewFilters.SHOW_CHANGE_PASSWORD))
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