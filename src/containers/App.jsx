import React, { Component } from 'react'
import AddTodo from '../components/AddTodo'
import ProfileDropDown from '../components/ProfileDropDown'
import { PopOver } from '@ticketmaster/aurora'

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
                <div className="ProfileDropDown">
                    <section className="ProfileDropDown__UserInfo" >
                        {/* userName, userOrganization?, isUserAdmin, adminBadgeLabel? */}
                    </section>

                    <section className="ProfileDropDown__Menu">
                        {/* menuItems, onSelect */}
                        <div className="Menu__defaultView">
                            {/* menuItems, onSelect */}
                        </div>
                        <div className="Menu__accessView">
                            {/* menuItems, onSelect, heading */}
                        </div>
                    </section>
                    
                    <section className="ProfileDropDown__ChangePasswordForm">
                        <div className="ChangePasswordForm__formView">
                            {/* passwordPolicyText, validations, errorMessages, onSubmit  */}
                        </div>
                        <div className="ChangePasswordForm__successView">
                            {/* onSuccessMessage */}
                        </div>
                    </section>
                </div>

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

export default App;