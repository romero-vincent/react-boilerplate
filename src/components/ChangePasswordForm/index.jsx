import React from 'react'
import PropTypes from 'prop-types'
import { Input, Spacing, Button, Text } from '@ticketmaster/aurora'

import StrictFieldInput from '../StrictFieldInput'

const FIELD_NAMES = {
    CONFIRMATION: 'confirm_password',
    OLD_PASSWORD: 'current_password',
    NEW_PASSWORD: 'password'
};

const FIELD_PLACEHOLDERS = {
    CONFIRM_PASSWORD: 'Verify New Password',
    CURRENT_PASSWORD: 'Current Password',
    NEW_PASSWORD: 'New Password'
}

const NEW_PASSWORD_VALIDATORS = [
    { pattern: '^.{1,}$', message: 'Required' },
    { pattern: '^.{8,}$', message: 'At least 8 Characters'},
    { pattern: '(?=(.*[0-9]){2,})', message: 'Must have at least 2 Numbers'},
    { pattern: '((?=(.*[A-Z])|(?=.*[@#$%!?&\"\\/])){1,})', message: 'Must have at least 1 Uppercase or 1 Special Character'},
    { pattern: '[a-z]+', message: 'Must have at least 1 Lowercase Character'}
];

const MESSAGE_PASSWORD_MISMATCH =  'Must match new password';

// todo: Add Password/CUrrent states here
const initialState = {
    isPristine: true,
    isPasswordConfirmed: false,

    confirmation: '',
    confirmationError: null
};

class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleConfirmation = this.handleConfirmation.bind(this);
        this.reset = this.reset.bind(this);

        this.newPasswordElement = null;
        this.oldPasswordElement = null;
    }

    reset() {
        this.newPasswordElement.reset();
        this.oldPasswordElement.reset();
        this.setState(initialState);
    }

    handleCancel(event) {
        event.preventDefault();
        this.reset();
        let { onCancel } = this.props;
        if (onCancel) onCancel();
    }

    handleChange(event) {
        this.setState({ isPristine: false });
        switch(event.target.name) {
            case FIELD_NAMES.NEW_PASSWORD : break;
            case FIELD_NAMES.CONFIRMATION  : break;
            default: break;
        }
    }

    isInputValid(element) {
        let { value, error } = element.state;
        return (value !== null && value.length > 0 && error === null);
    }

    handleConfirmation(event) {
        let confirmation = event.target.value;
        let password = this.newPasswordElement.state.value;
        let isPasswordConfirmed = (password === confirmation);
        this.setState({
            confirmation,
            confirmationError: (isPasswordConfirmed) ? MESSAGE_PASSWORD_MISMATCH : null,
            isPasswordConfirmed
        });
    }

    confirmPassword() {
        return (this.newPasswordElement.state.value === this.confirmPasswordElement.state.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        let { isPasswordConfirmed, isPristine } = this.state;
        let isValid = false;

        if (this.isInputValid(this.newPasswordElement)
            && this.isInputValid(this.oldPasswordElement)
            && isPasswordConfirmed){
            isValid = true;
        }

        console.info('submit isValid', isPasswordConfirmed)

        if (!(!isPristine && isValid)) {
            return;
        }

        let {onSubmit} = this.props;
        let newPassword = this.newPasswordElement.state.value;
        let oldPassword = this.oldPasswordElement.state.value;
        console.info('callback with', newPassword, oldPassword)
        if (onSubmit) onSubmit(newPassword, oldPassword);
        
    }

    render() {
        return (
            <form ref={(element) => this.form = element }
                  onSubmit={ event => this.handleSubmit }>
                <Text>{ this.props.passwordPolicy }</Text>
                <Spacing top={{ small: 'moderate' }}>
                    <StrictFieldInput ref={ element => this.newPasswordElement = element } size="large"
                                      name={ FIELD_NAMES.OLD_PASSWORD }
                                      placeholder={ FIELD_PLACEHOLDERS.CURRENT_PASSWORD }
                                      onChange={ this.handleChange } />

                </Spacing>
                <Spacing top={{ small: 'moderate' }}>
                    <StrictFieldInput ref={ element => this.oldPasswordElement = element } size="large"
                                      name={ FIELD_NAMES.NEW_PASSWORD }
                                      placeholder={ FIELD_PLACEHOLDERS.NEW_PASSWORD }
                                      validators={ NEW_PASSWORD_VALIDATORS }
                                      onChange={ this.handleChange } />
                </Spacing>
                <Spacing top={{ small: 'moderate' }}>
                    <Input value={this.state.confirmation} size="large"
                           name={ FIELD_NAMES.CONFIRMATION }
                           placeholder={ FIELD_PLACEHOLDERS.CONFIRM_PASSWORD}
                           onChange={ this.handleConfirmation }
                           errorMessage={ this.state.confirmationError } />
                </Spacing>
                <Spacing top={{ small: 'moderate' }}>
                    <Button onClick={ this.handleSubmit }>Submit</Button>
                    <Button variant="transparent" onClick={ this.handleCancel }>Cancel</Button>
                </Spacing>
            </form>
        )
        let { onSubmit } = this.props;
    }
}

ChangePasswordForm.propType = {
    passwordPolicy: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

ChangePasswordForm.defaultProps = {
    passwordPolicy: null
}

export default ChangePasswordForm