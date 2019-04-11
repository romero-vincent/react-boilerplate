import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@ticketmaster/aurora'

const initialState = {
    value: '',
    error: null
};

class StrictFieldInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState(initialState);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            error: null
        });

        let { onChange } = this.props;
        if (onChange) onChange(event);
    }

    handleBlur() {
        this.validate();
    }

    validate() {
        let { value } = this.state;
        let { validators } = this.props;
        let errorMessage = null;
        validators.map(function (validator) {
            let { pattern, message } = validator;
            if (! new RegExp(pattern).test(value) ) {
                errorMessage = message;
            }
        });

        this.setState({
            error: errorMessage
        })
    }

    render() {
        let { value, error } = this.state;
        return (
            <Input {...this.props}
                value={ value }
                errorMessage={ error }
                onChange={ this.handleChange }
                onBlur={ this.handleBlur } />
        )
    }
}

StrictFieldInput.defaultProps = {
    validators: [
        { pattern: '.+', message: 'Required' }
    ]
};

StrictFieldInput.propTypes = {
    name: PropTypes.string.isRequired,
    validators: PropTypes.array,
    onChange: PropTypes.func
};

export default StrictFieldInput