import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Column, Text, Link, constants } from '@ticketmaster/aurora'

const ProfileMenu = ({ onSelect, items }) => {
    
    let displayItems = () => {
        return (
            <ul>{
                items.map(item => { return <li><Link onClick={() => onSelect(item) }>{ item.label }</Link></li>})
            }</ul>
        );
    }

    return (
        <div>
            <Row>
                <Column small={12} medium={12} large={12}>
                    <Text size="kilo" weight="extraBold">MY ACCOUNT</Text>
                    { displayItems() }
                </Column>
            </Row>
        </div>
            
    );       
}

ProfileMenu.propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
}

ProfileMenu.defaultProps = {
    items: []
}

export default ProfileMenu;