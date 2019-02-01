
'user strict'

let endPoint = "http://192.168.1.7:9528";

const url = {

    endpoint: "http://192.168.1.7:9528",
    list: endPoint + '/json/babyshow/video.json',
    mine: endPoint + '/json/babyshow/mine.json',
    picture: endPoint + '/json/babyshow/picture.json',
}

module.exports = url
