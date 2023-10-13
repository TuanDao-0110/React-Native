/* eslint-disable react/prop-types */
/* eslint-disable react-native/sort-styles */
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from './theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? theme.fontFamily.ios : theme.fontFamily.android
    }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        styles.fontFamily,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;