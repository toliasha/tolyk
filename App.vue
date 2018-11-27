<template>
    <div class="body">
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
@bgColor: #315;
@accentColor: #fa0;

.grid(@columns; @size; @index: 1) when (@index =< @columns) {
    .grid(@columns; @size; (@index + 1));
    .@{size}-@{index}-col .grid__box {
        width: percentage(1 / @index);
    }
}

@S: 400px;
@M: 770px;
@L: 1000px;
@XL: 1300px;
@XXL: 1600px;

@media (max-width: @XXL) {
    .grid(5, XXL);
}

@media (max-width: @XL) {
    .grid(4, XL);
}

@media (max-width: @L) {
    .grid(3, L);
}

@media (max-width: @M) {
    .grid(2, M);
}

@media (max-width: @S) {
    .grid(1, S);
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

html, body {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 500;
    background-color: @bgColor;
    color: @accentColor;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    height: 100%;
}

.body {
    height: 100%;
}

#tolyk {
    box-sizing: border-box;
    background-color: @bgColor;
    color: @accentColor;
    padding-bottom: 140px;
    margin-bottom: -140px;
    height: auto;
    min-height: 100%;
    overflow-x: hidden;
    @media (max-width: @M) {
        padding-bottom: 220px;
        margin-bottom: -220px;
    }
}

a {
    text-decoration: none;
    color: @accentColor;
    border-bottom: 1px solid fadeout(@accentColor, 80%);
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid fadeout(@accentColor, 0%);
    }
}

.waist {
    box-sizing: border-box;
    padding-left: 5vw;
    padding-right: 5vw;
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
