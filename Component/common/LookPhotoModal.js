

import React, { Component, PropTypes ,PureComponent} from 'react';


import {
    View,
    Modal,
    TouchableOpacity,
    CameraRoll
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

export default class LookPhotoModal extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            urls:this.props.urls,
            index: this.props.index,
            modalVisible: true
        };
    }

    componentDidMount(){

       this.setState({
           urls:this.props.urls,
           index: this.props.index,
       })

    }

    _savePhoto(url) {

        let promise = CameraRoll.saveToCameraRoll(url);
        promise.then(function (result) {
            alert("已保成功")
        }).catch(function (error) {
            alert('保存失败！\n' + error);
        });
    }


    render() {
        let urls = this.state.urls;
        let index =  this.state.index;
        console.log("selecedIndex :" + index);
        return (
            <View
                style={{
                    padding: 10
                }}
            >
                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={() => this.setState({modalVisible: false})}>
                    <ImageViewer
                        imageUrls={urls}
                        index={index}
                        onClick={()=>{
                            this.props.navigator.pop()
                        }}
                        menuContext={{ "saveToLocal": "保存图片", "cancel": "取消" }}
                        onSave={(url) => {this._savePhoto(url)}}

                    />
                </Modal>
            </View>
        )
    }
}
