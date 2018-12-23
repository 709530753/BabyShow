
import React, { Component } from 'react';
import { Dimensions } from  'react-native';

import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-picker'

import NavTitleView from './../List/NavTitleView'

import {
    StyleSheet,
    Text,
    Image,
    View,
    Animated,
    Easing,
    Alert,
    TouchableOpacity,
    NativeModules,
    AlertIOS
} from 'react-native';

let {heigh, width} = Dimensions.get('window');

let FlashLight = NativeModules.FlashLight;


export default class Transcribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0),
            isHighlighted: false,
            imageUrl: "",
            isGetData: false
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        this.myAnimate = Animated.timing(
            this.state.moveAnim,
            {
                toValue: -200,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };
    //  识别二维码
    onBarCodeRead = (result) => {
        const { navigate } = this.props;
        const {data} = result;
        this.state.moveAnim.stopAnimation();

        AlertIOS.alert(data);

        // navigate('Sale', {
        //     url: data
        // })
    };


    render(){
        return(
            <View style={styles.container}>
                <NavTitleView
                    navTitle={"扫描"}
                    backTitle={""}
                    rightBarBtnItemTitle={"相册"}
                    back={()=>this._back()}
                    rightBarBtnItemDisplay={false}
                    rightBarBtnItemClick={()=>this._rithtBarBtnItemAction()}

                />
                <Camera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={this.state.cameraType}
                    aspect={Camera.constants.Aspect.fill}
                    onBarCodeRead={this.onBarCodeRead}

                >
                    <View style={styles.rectangleContainer}>
                        <View style={styles.rectangle}/>
                        <Animated.View style={[
                            styles.border,
                            {transform: [{translateY: this.state.moveAnim}]}]}/>
                        <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
                        <TouchableOpacity onPress={()=>this._touchFlashlightAction()}>
                        {this._renderFlashlight()}
                            {/*<Image style={[styles.flashlightStyle, backgroundColor='#f00']} source={{url: this.state.imageUrl}}/>*/}
                        </TouchableOpacity>
                    </View>
                </Camera>

            </View>
        )
    }

    _rithtBarBtnItemAction =()=> {
        // AlertIOS.alert("rightBarBtnItemClick")

        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        // Open Image Library:
        ImagePicker.launchImageLibrary(options, (response) => {
            // Same code as in above section!

            // AlertIOS.alert(response.uri);

            this.setState({
                imageUrl: response.uri
            })

        });

        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);
        //
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //         const source = { uri: response.uri };
        //
        //         AlertIOS.alert(response.uri);
        //
        //     }
        // });

    }

    _touchFlashlightAction =()=> {

        let isHighlighted = !this.state.isHighlighted;
        AlertIOS.alert("isHighlighted : " + isHighlighted)
        FlashLight.switchState(isHighlighted);

        this.setState({
            isHighlighted: isHighlighted
        })

    }

    _renderFlashlight =()=> {

        let isHighlighted = this.state.isHighlighted;

        if (isHighlighted == true) {
            return(
                <Image style={styles.flashlightStyle} source={require('./../resources/edit/flashlight_height.png')}/>
            )
        } else {
            return(
                <Image  style={styles.flashlightStyle} source={require('./../resources/edit/flashlight_height.png')}/>
            )
        }

    }

    _back = () => {

        let {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }

    }

}
const styles=StyleSheet.create({

    container:{
        flex:1,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 30,
        fontSize: 16,
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    },
    flashlightStyle: {
        marginTop: 50,
        height: 50,
        width: 50,
    }

});