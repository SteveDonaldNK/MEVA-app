import React from 'react'
import { ContributionIcon, HomeIcon, LibraryIcon, MeditationIcon, NewsIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants';
import { View } from 'react-native';

export default function TabIcon({route, isFocused}) {
    let Icon = null;
    switch (route) {
        case 'home':
            Icon = HomeIcon;
            break;
        case 'meditation':
            Icon = MeditationIcon;
            break;
        case 'news':
            Icon = NewsIcon;
            break;
        case 'library':
            Icon = LibraryIcon;
            break;
        case 'contribution':
            Icon = ContributionIcon;
            break;
        default:
           return <></>
    }

    return (
        <View style={isFocused && {backgroundColor: "rgba(208, 209, 212, 0.50)", padding: 15, borderRadius: 50}}>
            <Icon fill={isFocused ? COLORS.primary : COLORS.tertiary} />
        </View>
    )
}
