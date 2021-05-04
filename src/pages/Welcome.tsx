import React from 'react';
import { SafeAreaView, 
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from './styles/colors';
import fonts from '../pages/styles/fonts';

export function Welcome(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            <Image 
                source={wateringImg} 
                style={styles.image}
                resizeMode="contain"
            />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.{'\n'}
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Entypo 
                        name="chevron-right" 
                        style={styles.buttonIcon} 
                    />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        marginTop: 65,
        lineHeight: 36
    }, 

    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        marginBottom: 40,
        height: 56,
        width: 56,
    },

    image: {
        height: Dimensions.get('window').width * 0.7
    },

    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})