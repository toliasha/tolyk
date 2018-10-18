<template>
<div>
    <div id="tolyk" ref="tolyk" :class="style">
        <t-header v-if="!hideBlock"/>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
    <t-footer v-if="!hideBlock"/>
    <t-svg/>
</div>
</template>

<script>
import VueCookie from 'vue-cookie';
import router from './app/router.js';
import hexToHSL from './app/hexToHSL.js';
import i18n from './app/i18n.js';
import {GET} from './app/api.js';

export default {
    router,
    el: '#app',
    i18n,
    render: r => r(this),
    name: 'tolyk',
    created() {
        let lang = VueCookie.get('lang');
        if (!lang) {
            lang = navigator.language.split('-')[0];
        }
        this.$locale.change(lang === 'en' || lang === 'uk' ? lang : 'uk');
    },
    data() {
        return {
        }
    },
    watch: {
        '$i18n.locale': function() {
            document.title = this.$i18n.t(this.$route.name);
        }
    },
    computed: {
        hideBlock() {
            return this.$route.name === 'not-found';
        }
    }
}
</script>

<style lang="less">
@font-face {
    font-family: 'tolyk';
    src: url('https://cdn.thekarton.com/fonts/bold.woff') format('woff');
    font-weight: bold;
}
@font-face {
    font-family: 'tolyk';
    src: url('https://cdn.thekarton.com/fonts/regular.woff') format('woff');
    font-weight: normal;
}
@font-face {
    font-family: 'mono';
    src: url('/fonts/pt-mono-regular.woff') format('woff');
    font-weight: normal;
}
@font-face {
    font-family: 'mono';
    src: url('/fonts/pt-mono-bold.woff') format('woff');
    font-weight: bold;
}

@bg-color: #315;
@accent-color: #fa0;

html, body {
    padding: 0;
    margin: 0;
    font-family: tolyk, -apple-system, BlinkMacSystemFont, Segoe UI, Arial;
    font-size: 17px;
    background-color: @bg-color;
    color: white;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
    user-select: none;
}

#tolyk {
    box-sizing: border-box;
    background-color: @bg-color;
    color: white;
    padding-bottom: 2em;
}

a {
    text-decoration: none;
    color: blue;
    border-bottom: 1px solid fadeout(black, 80%);
}

h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
    line-height: 1em;
}

h1 {
    font-size: 2em;
    text-indent: -.05em;
}

h2 {
    font-size: 1.4em;
    text-indent: -.04em;
}

h3 {
    font-size: 1em;
    text-indent: -.03em;
}

h4 {
    font-size: 0.7em;
    text-transform: uppercase;
    letter-spacing: 0.2ex;
}

center {
    display: block;
    text-align: center;
}

em {
    display: block;
    font-size: .8em;
    font-style: normal;
    opacity: .5;
}

.waist {
    box-sizing: border-box;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-top: 3vw;
    padding-bottom: 3vw;
}

.static-layout {
    margin: auto;
    max-width: 600px;
}

.loader {
    text-align: center;
    padding: 10vh 0;

    span {
        font-size: 3em;
        display: block;
        padding-bottom: 2rem;
    }
}

</style>
