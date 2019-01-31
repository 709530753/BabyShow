
'user strict'

let endPoint = "http://172.21.2.229:9528";

const url = {

    endpoint: "http://172.21.2.229:9528",
    list: endPoint + '/json/babyshow/video.json',
    mine: endPoint + '/json/babyshow/mine.json',
    picture: endPoint + '/json/babyshow/picture.json',
}

module.exports = url
