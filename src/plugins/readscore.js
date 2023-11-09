import SHA1 from 'crypto-js/sha1';
var vue = null;

function getvue() {
    if(vue == null){
        vue = require('@/main').app.config.globalProperties;
    }
    return vue;
}

function getscore(max=11) {
    const now = new Date();
    for(let i = -1; i < max; i++){
        if (getvue().$cookies.get("score") == SHA1(`${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}/${i}`).toString()) {
            return i;
        }
    }
    return 0;
}

function setscore(num) {
    const now = new Date();
    getvue().$cookies.set("score", SHA1(`${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}/${num}`).toString());
}

function clearscore() {
    getvue().$cookies.remove("score");
}

export default {
    getscore,
    setscore,
    clearscore,
}
