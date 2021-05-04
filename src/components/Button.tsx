import React from 'react';
import { 
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import colors from '../pages/styles/colors';
import fonts from '../pages/styles/fonts';

export function Button(){
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                Confirmar
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    }, 
    
    text: {
        fontSize: 16,
        fontFamily: fonts.heading
    }
})