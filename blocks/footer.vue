<template>
<footer>
    <svg class="footer__bend">
        <use xlink:href="#bend"/>
    </svg>
    <ul class="lang-switcher">
        <li
            class="lang-switcher__item"
            v-for="lang of langs"
            :class="{'lang-switcher__item_selected': $i18n.locale == lang.id }"
            @click="$locale.change(lang.id)"
        >
            {{ lang.title }}
        </li>
    </ul>
    <i></i>
    <a href="mailto:hello@thekarton.com">hello@thekarton.com</a>
    <i></i>
    © {{ year }}, Karton
</footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear(),
            langs: [
                {
                    title: 'українською',
                    id: 'uk'
                },
                {
                    title: 'по-русски',
                    id: 'ru'
                }
            ]
        }
    }
}
</script>

<style lang="less">
footer {
    display: block;
    padding: 1em 3vw 2em 3vw;
    text-align: center;
    font-size: .8em;
    color: #888;
    position: relative;

    a {
        color: #fd4;
    }
}

.footer__bend {
    fill: yellow;
    height: 20px;
    width: 100%;
    position: absolute;
    bottom: calc(100% e('-') 2px); left: 0;
}

.lang-switcher {
    list-style: none;
    padding: 0; margin: 0;

    &__item {
        display: inline-block;
        cursor: pointer;

        &_selected {
            color: #fd4;
            font-weight: bold;
        }

        & + & { margin-left: 1em; }
    }
}
</style>
