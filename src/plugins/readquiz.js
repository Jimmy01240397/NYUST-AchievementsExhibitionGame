import SHA1 from 'crypto-js/sha1';
import CryptoJS from 'crypto-js';
var vue = null;

function getvue() {
    if(vue == null){
        vue = require('@/main').app.config.globalProperties;
    }
    return vue;
}

var quizzes = null;

async function read() {
    if(quizzes == null){
        quizzes = {};
        const data = await fetch('/quiz.json').then((response) => response.json());
        data.forEach((item) => {
            const hash = SHA1(item.id + '\n').toString(CryptoJS.enc.Base64)
            if(item.ans >= 0) {
                if(!(hash in quizzes)) quizzes[hash] = [];
                quizzes[hash].push(item);
            }
        });
    }
    return quizzes;
}

async function getquiz() {
    return (await read())[getvue().$cookies.get("quiz")];
}

function setquiz(data) {
    return getvue().$cookies.set("quiz", data);
}

function clearquiz() {
    return getvue().$cookies.remove("quiz");
}

async function contain() {
    return getvue().$cookies.get("quiz") in (await read());
}

function complatelist() {
    if(getvue().$cookies.get("complate") == undefined) return [];
    return JSON.parse(window.atob(getvue().$cookies.get("complate")));
}

function addcomplate() {
    const list = complatelist();
    list.push(getvue().$cookies.get("quiz"));
    getvue().$cookies.set("complate", window.btoa(JSON.stringify(list)));
}

function checkcomplate() {
    return complatelist().includes(getvue().$cookies.get("quiz"));
}


export default {
    getquiz,
    setquiz,
    clearquiz,
    contain,
    addcomplate,
    checkcomplate,
}
