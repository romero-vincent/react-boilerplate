import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Column, Text, Link } from '@ticketmaster/aurora'


import { connect } from 'react-redux'
import { MenuViewFilters, ViewFilters } from '../constants'


const mapStatesToProps = (state, ownProps) => {
    return {
        items : ownProps.items,
        heading: ownProps.heading,
        view : state.profileDropdown.menuView
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const ProfileMenu = ({ items, heading, view }) => {

    let renderHeading = () => {
        return (MenuViewFilters.SHOW_LATEST === view)
            ? <Text size="kilo" weight="extraBold">{ heading }</Text>
            : null
    }
    
    let renderItems = () => {
        return (
            <ul>{
                items.map(item => { return <li><Link onClick={ item.onSelect }>{ item.label }</Link></li>})
            }</ul>
        );
    }

    return (
        <Container>
            <Row>
                <Column small={12} medium={12} large={12}>
                    { renderHeading() }
                    { renderItems() }
                </Column>
            </Row>
        </Container>
            
    );       
}

ProfileMenu.propTypes = {
    items: PropTypes.array,
    heading: PropTypes.string,
    view: PropTypes.oneOf([MenuViewFilters.SHOW_DEFAULT, MenuViewFilters.SHOW_LATEST])
}

ProfileMenu.defaultProps = {
    items: []
}

export default connect(mapStatesToProps)(ProfileMenu);