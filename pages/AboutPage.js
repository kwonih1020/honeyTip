import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function AboutPage({navigation,route}) {

    useEffect(()=>{
        console.log(route)
        navigation.setOptions({
            title:"소개 페이지",
            headerStyle: {
                backgroundColor: 'rgb(39, 45, 113)',
                shadowColor: "rgb(39, 45, 113)",
            },
            headerTintColor: "#fff",
        })
    },[])


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
            <View style={styles.whiteContainer}>
                <Image style={styles.humanImage} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'}} />
                <Text style={styles.middleText}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.lastText}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시기 바랍니다</Text>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.instagram.com/ickhyun_k/')} >
                    <Text style={styles.buttonText}>인스타 계정</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(39, 45, 113)"
    },
    title: {
        color: "#fff",
        fontWeight: "800",
        textAlign: "center",
        fontSize: 38,
        padding: 20,
        textAlign:"center"
    },
    whiteContainer: {
        borderWidth: 1,
        width: "90%",
        height: 600,
        marginTop: 30,
        alignSelf: "center",
        borderRadius: 30,
        backgroundColor: "#fff",
    },
    humanImage: {
        width: "50%",
        height: 200,
        alignSelf: "center",
        marginTop: 50
    },
    middleText: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 28,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20
    },
    lastText: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        padding: 20
    },
    button: {
        width: 150,
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: "rgb(248, 176, 78)"
    },
    buttonText: {
        padding: 15,
        textAlign: "center",
        color: "#fff",
        fontSize: 18
    }
});
