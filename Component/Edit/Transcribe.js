
import React, { Component } from 'react';
import { Dimensions } from  'react-native';

// import Camera from 'react-native-camera';

import {
    StyleSheet,
    Text,
    Image,
    View

} from 'react-native';

let {heigh, width} = Dimensions.get('window');

export default class Transcribe extends Component {

    constructor(props) {
        super(props)
        this.state={
            // cameraType:Camera.constants.Type.back
        };
    }

    render(){
        return(
            <View style={styles.container}>
                {/*<Camera*/}
                    {/*ref={(cam) => {*/}
                        {/*this.camera = cam;*/}
                    {/*}}*/}
                    {/*style={styles.preview}*/}
                    {/*type={this.state.cameraType}*/}
                    {/*aspect={Camera.constants.Aspect.fill}>*/}
                {/*</Camera>*/}
            </View>
        )
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
        alignItems: 'flex-end',
        flexDirection: 'row',
    }

});