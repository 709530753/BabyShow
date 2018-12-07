
'user strict'

let endPoint = "http://192.168.1.10:9528";

const url = {

    list: endPoint + '/json/babyshow/video.json',
    mine: endPoint + '/json/babyshow/mine.json',
    picture: endPoint + '/json/babyshow/picture.json',
}

module.exports = url
