import {
    StyleSheet
} from 'react-native';

const styles = {
    stylesLogin: StyleSheet.create({
        containerLogin: {
            flexGrow: 1,
            backgroundColor: '#022048',
            alignItems: 'center',
            justifyContent: 'center',
        },
        loginWhite: {
            width: '70%',
            height: '100%',
            bottom: '10%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 500,
            transform: [
                { scaleX: 2 }
            ]
        },
        logo: {
            width: '50%',
            height: '50%',
            position: 'absolute',
            top: '-9%',
            zIndex: 2,
            resizeMode: 'contain'
        },
        textTitle: {
            position: 'absolute',
            top: '27%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            zIndex: 2,
            fontSize: 40
        },
        textLogin: {
            position: 'absolute',
            top: '35%',
            right: '55%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#036BB9',
            zIndex: 2,
            fontSize: 25
        },
        textRegister: {
            position: 'absolute',
            top: '80%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            zIndex: 2,
            fontSize: 25
        },
        userIconStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '46%',
            right: '81%'
        },
        lineUsername: {
            position: 'absolute',
            height: 1,
            width: '75%',
            top: '50%',
            backgroundColor: '#A6A6A6',
            zIndex: 3
        },
        textUsername: {
            position: 'absolute',
            width: '60%',
            top: '45.5%',
            right: '17%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            zIndex: 2,
            fontSize: 25
        },
        lockIconStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '53.5%',
            right: '81%'
        },
        linePassword: {
            position: 'absolute',
            height: 1,
            width: '75%',
            top: '57.5%',
            backgroundColor: '#A6A6A6',
            zIndex: 3
        },
        textPassword: {
            position: 'absolute',
            width: '60%',
            top: '53%',
            right: '17%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            zIndex: 2,
            fontSize: 25
        },
        textForgotPassword: {
            position: 'absolute',
            top: '62%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#0386D0',
            zIndex: 2,
            fontSize: 21
        },
        buttonLogin: {
            position: 'absolute',
            alignItems: 'center',
            top: '73%',
            justifyContent: 'center',
            paddingVertical: '2%',
            paddingHorizontal: '33%',
            borderRadius: 5,
            zIndex: 3,
        },
        buttonRegister: {
            position: 'absolute',
            alignItems: 'center',
            top: '35.1%',
            right: '35%',
            justifyContent: 'center',
            zIndex: 3,
        },
        buttonLoginText: {
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#ffffff',
            zIndex: 3,
            fontSize: 25
        },
        loginErrorText: {
            position: 'absolute',
            bottom: '18%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: 'red',
            textAlign: 'left',
            zIndex: 2,
            fontSize: 15
        }
    }),
    stylesRegister: StyleSheet.create({
        containerLogin: {
            flexGrow: 1,
            backgroundColor: '#022048',
            alignItems: 'center',
            justifyContent: 'center',
        },
        loginWhite: {
            width: '70%',
            height: '100%',
            bottom: '10%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 500,
            transform: [
                { scaleX: 2 }
            ]
        },
        logo: {
            width: '60%',
            height: '60%',
            position: 'absolute',
            top: '-15%',
            zIndex: 2,
            resizeMode: 'contain'
        },
        textLogin: {
            position: 'absolute',
            top: '80%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            zIndex: 2,
            fontSize: 25
        },
        buttonLogin: {
            position: 'absolute',
            alignItems: 'center',
            top: '28%',
            left: '35%',
            justifyContent: 'center',
            zIndex: 3,
        },
        textRegister: {
            position: 'absolute',
            top: '28%',
            left: '52%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#036BB9',
            zIndex: 2,
            fontSize: 25
        },
        mailIconStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '36.3%',
            right: '10%'
        },
        fieldEmail: {
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#a6a6a6',
            alignSelf: 'center',
            width: '90%',
            height: '5%',
            top: '35%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            textAlign: 'left',
            paddingLeft: '2%',
            zIndex: 2,
            fontSize: 20
        },
        userIconStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '43%',
            right: '10%'
        },
        fieldUsername: {
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#a6a6a6',
            alignSelf: 'center',
            width: '90%',
            height: '5%',
            top: '42%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            textAlign: 'left',
            paddingLeft: '2%',
            zIndex: 2,
            fontSize: 20
        },
        userIconNameStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '50%',
            right: '10%'
        },
        fieldName: {
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#a6a6a6',
            alignSelf: 'center',
            width: '90%',
            height: '5%',
            top: '49%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            textAlign: 'left',
            paddingLeft: '2%',
            zIndex: 2,
            fontSize: 20
        },
        userIconSurameStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '57%',
            right: '10%'
        },
        fieldSurame: {
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#a6a6a6',
            alignSelf: 'center',
            width: '90%',
            height: '5%',
            top: '56%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            textAlign: 'left',
            paddingLeft: '2%',
            zIndex: 2,
            fontSize: 20
        },
        lockIconStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '64%',
            right: '10%'
        },
        fieldPassword: {
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#a6a6a6',
            alignSelf: 'center',
            width: '90%',
            height: '5%',
            top: '63%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            textAlign: 'left',
            paddingLeft: '2%',
            zIndex: 2,
            fontSize: 20
        },
        lockIconConStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '71%',
            right: '10%'
        },
        fieldConPassword: {
            position: 'absolute',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#a6a6a6',
            alignSelf: 'center',
            width: '90%',
            height: '5%',
            top: '70%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            textAlign: 'left',
            paddingLeft: '2%',
            zIndex: 2,
            fontSize: 20
        },
        buttonRegister: {
            position: 'absolute',
            alignItems: 'center',
            top: '75%',
            justifyContent: 'center',
            paddingVertical: '2%',
            paddingHorizontal: '33%',
            borderRadius: 5,
            backgroundColor: '#022048',
            zIndex: 3,
        },
        buttonRegisterText: {
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#ffffff',
            zIndex: 3,
            fontSize: 25
        },
        buttonDeleteText: {
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#ffffff',
            zIndex: 3,
            fontSize: 20
        },
        passwordErrorText: {
            position: 'absolute',
            top: '70%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: 'red',
            textAlign: 'left',
            zIndex: 2,
            fontSize: 15
        }
    }),
    stylesMainMenu: StyleSheet.create({
        containerMainMenu: {
            flexGrow: 1,
            backgroundColor: '#022048',
            alignItems: 'center',
            justifyContent: 'center',
        },
        mainMenuWhite: {
            width: '47%',
            height: '97%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 30,
            transform: [
                { scaleX: 2 }
            ]
        },
        defaultUser: {
            top: '3%',
            position: 'absolute',
            zIndex: 1,
            backgroundColor: '#B5B5B5'
        },
        userName: {
            position: 'absolute',
            top: '22%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            zIndex: 2,
            fontSize: 25
        },
        textMainMenu: {
            position: 'absolute',
            top: '35%',
            right: '55%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#036BB9',
            zIndex: 2,
            fontSize: 25
        },
        userIconStyle: {
            position: 'absolute',
            zIndex: 2,
            top: '46%',
            right: '81%'
        },
        textUsername: {
            position: 'absolute',
            width: '60%',
            top: '45.5%',
            right: '17%',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#a6a6a6',
            zIndex: 2,
            fontSize: 25
        },
        menuIconStyle: {
            position: 'absolute',
            zIndex: 3
        },
        folderIconStyle: {
            position: 'absolute',
            top: '25%',
            zIndex: 3
        },
        buttonCards: {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: '15%',
            paddingHorizontal: '25%',
            width: '76%',
            height: '17.5%',
            backgroundColor: '#022048',
            borderRadius: 10,
            zIndex: 2,
        },
        buttonRegister: {
            position: 'absolute',
            alignItems: 'center',
            top: '35.1%',
            right: '35%',
            justifyContent: 'center',
            zIndex: 3,
        },
        buttonCardsText: {
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            top: '65%',
            color: '#ffffff',
            zIndex: 3,
            fontSize: 25
        },
        buttonMyCards: {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: '15%',
            paddingVertical: '15%',
            paddingHorizontal: '17%',
            backgroundColor: '#022048',
            borderRadius: 10,
            zIndex: 2,
        },
        buttonMyCardsText: {
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            top: '65%',
            color: '#ffffff',
            zIndex: 3,
            fontSize: 25
        },
        UserFolderIconStyle: {
            position: 'absolute',
            top: '65%',
            zIndex: 4
        },
        modalView: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageModal: {
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            width: '80%',
            height: '80%',
            resizeMode: 'center'
        }

    }),
    stylesFolderMenu: StyleSheet.create({
        containerFolderMenu: {
            backgroundColor: '#022048',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
        },
        folderWhite: {
            width: '47%',
            height: '97%',
            top: '1%',
            backgroundColor: 'white',
            borderRadius: 30,
            transform: [
                { scaleX: 2 }
            ]
        },
        textTitle: {
            position: 'absolute',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            fontSize: 10
        },
        listStyle: {
            height: '78%',
            width: '90%',
            position: 'absolute',
            alignContent: 'center',
            top: '18%',
            flexGrow: 0
        },
        folderTitle: {
            alignSelf: 'center',
            fontFamily: 'Philosopher-Bold',
            fontStyle: 'normal',
            fontSize: 20
        },
        folderDescription: {
            alignSelf: 'center',
            fontFamily: 'Philosopher-Bold',
            fontStyle: 'normal',
            fontSize: 14
        },
        folderImage: {
            resizeMode: 'center',
            alignSelf: 'center',
        },
        backIconStyle: {
            position: 'absolute',
            zIndex: 3,
            alignSelf: 'center'
        },
        screenName: {
            position: 'absolute',
            top: '9.5%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            zIndex: 2,
            fontSize: 30
        }
    }),
    stylesEditProfile: StyleSheet.create({
        defaultUser: {
            top: '13%',
            position: 'absolute',
            zIndex: 1,
            backgroundColor: '#B5B5B5'
        },
        screenName: {
            position: 'absolute',
            top: '7%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            zIndex: 2,
            fontSize: 30
        },
        modalText: {
            position: 'absolute',
            top: '7%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            zIndex: 2,
            fontSize: 20,
            padding: '2%'
        },
        modalButtonYesText: {
            position: 'absolute',
            top: '7%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            zIndex: 2,
            fontSize: 20,
            padding: '2%',
            color: '#fff'
        },
        cnpjDescription: {
            position: 'absolute',
            top: '47%',
            alignSelf: 'center',
            fontFamily: 'AbrilFatFace',
            fontStyle: 'normal',
            color: '#B5B5B5',
            zIndex: 2,
            fontSize: 13
        },
        backIconStyle: {
            position: 'absolute',
            zIndex: 3,
            alignSelf: 'center'
        },
        mainMenuWhite: {
            width: '47%',
            height: '97%',
            top: '1%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 30,
            transform: [
                { scaleX: 2 }
            ]
        },
        buttonRegister: {
            position: 'absolute',
            alignItems: 'center',
            top: '79%',
            justifyContent: 'center',
            paddingVertical: '2%',
            paddingHorizontal: '36%',
            borderRadius: 5,
            backgroundColor: '#022048',
            zIndex: 3,
        },
        buttonDelete: {
            position: 'absolute',
            alignItems: 'center',
            top: '87%',
            justifyContent: 'center',
            paddingVertical: '2%',
            paddingHorizontal: '36%',
            borderRadius: 5,
            backgroundColor: 'red',
            zIndex: 3,
        },
    })
}


export default styles;