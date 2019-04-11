import React from 'react'
import { Container, Row, Column, Text, StatusBadge, themes, constants } from '@ticketmaster/aurora'



const ProfileCrumb = ({ userFullName, userOrganization, isUserAdmin = false, adminBadgeLabel }) => {
    let displayAdminBadge = () => {
        return (isUserAdmin)
            ? <StatusBadge label={ adminBadgeLabel } color={themes.global.accent03.base}></StatusBadge>
            : null
    }

    let displayUserOrganization = () => {
        return (userOrganization && userOrganization.length > 0)
            ?   <Column small={8} medium={8} large={8}>
                    <Text size="hecto" weight="light">{ userOrganization }</Text>
                </Column>
            : null
    }

    return (
        <div>
            <Row>
                <Column small={12} medium={12} large={12}>
                    <Text size="kilo" weight="extraBold">{ userFullName }</Text>
                </Column>
            
        
            </Row>
            <Row>
                { displayUserOrganization() }
                <Column small={4} medium={4} large={4}>
                    { displayAdminBadge() }
                </Column>
        
            </Row>
        </div>
            
    );       
}

export default ProfileCrumb;