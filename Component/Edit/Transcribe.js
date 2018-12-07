
import React, { Component } from 'react';
import { Dimensions } from  'react-native';

import Camera from 'react-native-camera';

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
    NativeModules
} from 'react-native';

let {heigh, width} = Dimensions.get('window');

let FlashLight = NativeModules.FlashLight;


export default class Transcribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            moveAnim: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,
            {
                toValue: 1,
                duration: 2200,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };
    //  识别二维码
    onBarCodeRead = (result) => {
        const { navigate } = this.props.navigation;
        const {data} = result;
        navigate('Sale', {
            url: data
        })
    };


    render(){
        return(
            <View>
                <NavTitleView
                    navTitle={"扫描"}
                    backTitle={""}
                    back={()=>this._back()}
                    rightBarBtnItemDisplay={true}

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
                    </View>
                </Camera>

            </View>
        )
    }

    _back = () => {

        let {navigator} = this.props;
        this.props.isHideTabbar(false)
        if (navigator) {
            navigator.pop();
        }

    }

}
const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
    },
    preview: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 200,
        height: 2,
        backgroundColor: '#00FF00',
    },
    electricStyle:{
        width:80,
        height:80,
        marginTop:20,
    }

});