import SHA1 from 'crypto-js/sha1';

function hashtonumber(hash, max=11) {
    for(let i = 0; i < max; i++){
        if (hash == SHA1(i.toString()).toString()) {
            return i;
        }
    }
    return -1;
}

function numbertohash(num) {
    return SHA1(num.toString()).toString();
}

export default {
    hashtonumber,
    numbertohash,
}
