<template>
<div>
    <div id="KARTON" ref="KARTON" :class="style" :style="{backgroundColor: bgColor}">
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
    name: 'KARTON',
    created() {
        let lang = VueCookie.get('lang');
        if (!lang) {
            lang = navigator.language.split('-')[0];
        }
        this.$locale.change(lang === 'ru' || lang === 'uk' ? lang : config.defaultLang);
    },
    mounted() {
        this.loading = true;
        GET('/what-we-have', res => {
            this.logos = res;
            this.loading = false;
        });
    },
    data() {
        return {
            bgColor: '#FFDD44',
            style: 'white',
            logos: [],
            loading: false
        }
    },
    watch: {
        bgColor() {
            this.style = hexToHSL(this.bgColor ? this.bgColor : '#FFDD44').l > 35 ? 'white' : 'black';
        },
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
    font-family: 'KARTON';
    src: url('https://cdn.thekarton.com/fonts/bold.woff') format('woff');
    font-weight: bold;
}
@font-face {
    font-family: 'KARTON';
    src: url('https://cdn.thekarton.com/fonts/regular.woff') format('woff');
    font-weight: normal;
}

html, body {
    padding: 0;
    margin: 0;
    font-family: KARTON, -apple-system, BlinkMacSystemFont, Segoe UI, Arial;
    font-size: 18px;
    background-color: black;
    color: white;
    line-height: 1em;
    -webkit-font-smoothing: antialiased;
}

@juice: #fd4;
@violet: #80f;

#KARTON {
    box-sizing: border-box;
    background-color: @juice;
    color: black;
    padding-bottom: 2em;

    &.black {
        color: white;

        .logo {
            fill: white;
        }

        a {
            color: #fd4;
        }

        .link-svg {
            fill: #fd4;
        }

        .socials {
            &__button {
                background-color: white;
                color: black;

                svg { fill: black; }
                &:before, &:after { background-color: white; }
            }
        }

        a.order-button {
            color: black;
            background-color: #fd4;
        }

        ._dashed {
            border: 2px dashed fadeout(white, 70%);
        }
    }
}

a {
    text-decoration: none;
    color: blue;
    //border-bottom: 1px solid fadeout(black, 80%);
}

.link-svg {
    fill: blue;
}

._dashed {
    border: 2px dashed fadeout(black, 70%);
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

i {
    font-size: 0;
    display: block;
    height: 1rem;

    &[small] { height: .5rem; }
}

.t_a_c {
    text-align: center;
}

.logo {
    display: inline-block;
}

nav {
    display: block;
    text-align: center;

    .menu-item {
        color: inherit !important;
        text-decoration: none;
        font-size: 1.2em;
        display: inline-block;
        padding: .3em 0;
        position: relative;

        &.router-link-exact-active {
            &:after {
                content: '';
                position: absolute;
                display: block;
                bottom: 0;
                background-color: black;
                width: 100%; height: 2px;
                left: 0;
            }
        }
    }

    .menu-item + .menu-item { margin-left: 1em; }
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

.r-crossbar__arrow {
    display: none;
}

.r-button {
    border-radius: 95px e('/') 100px;
    cursor: pointer;
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

.router-link-exact-active {
    cursor: default;
}

@media (max-width: 600px) {
    body {
        //font-size: 15px;
    }
}
</style>
