const touchRE = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/;
const ieRE = /msie|trident/;
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const userAgent = navigator.userAgent.toLowerCase();

export default {
    isTouch() {
        return touchRE.test(userAgent);
    },
    isIE() {
        return ieRE.test(userAgent);
    },
    isEmail(email) {
        return emailRE.test(email);
    }
}
