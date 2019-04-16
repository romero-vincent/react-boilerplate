import React from 'react'
import { Row, Column, Text, StatusBadge, themes } from '@ticketmaster/aurora'

const ProfileDropdownUser = ({ userFullName, userOrganization, isUserAdmin = false, badgeLabel = "USER" }) => {

    const DefaultColumnSpan = 12;
    const OrganizationColumnSpan = DefaultColumnSpan;
    const BadgeColumnSpan = 4;
    const OrganizationWithBadgeColumnSpan = 8;

    let renderAdminBadge = () => {
        return (isUserAdmin)
            ? <Column small={BadgeColumnSpan} medium={BadgeColumnSpan} large={BadgeColumnSpan}>
                <StatusBadge label={badgeLabel} color={themes.global.accent03.base}></StatusBadge>
            </Column>
            : null;
    }

    let renderUserOrganization = () => {
        let columnSpan = (isUserAdmin) ? OrganizationWithBadgeColumnSpan : OrganizationColumnSpan;
        return (userOrganization && userOrganization.length > 0)
            ? <Column small={columnSpan} medium={columnSpan} large={columnSpan}>
                <Text size="hecto" weight="light">{userOrganization}</Text>
            </Column>
            : null;

    }

    return (
        <div>
            <Row>
                <Column small={DefaultColumnSpan}>
                    <Text size="kilo" weight="extraBold">{userFullName}</Text>
                </Column>
            </Row>
            <Row>
                {renderUserOrganization()}
                {renderAdminBadge()}
            </Row>
        </div>

    );
}

export default ProfileDropdownUser