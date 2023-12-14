import React from 'react'
import { ContributionIcon, HomeIcon, LibraryIcon, MeditationIcon, NewsIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants';
import { View } from 'react-native';

export default function TabIcon({route, isFocused}) {
    let Icon = null;
    switch (route) {
        case 'Home':
            Icon = HomeIcon;
            break;
        case 'Meditation':
            Icon = MeditationIcon;
            break;
        case 'News':
            Icon = NewsIcon;
            break;
        case 'Library':
            Icon = LibraryIcon;
            break;
        case 'Contribution':
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
