<template>
<header class="waist">
    <div class="header-content">
        <div class="tolyk">
            <p class="tolyk__about" v-html="$t('about')"></p>
        </div>
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
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            // year: new Date().getFullYear(),
            langs: [
                {
                    title: 'УКР',
                    id: 'uk'
                },
                {
                    title: 'ENG',
                    id: 'en'
                }
            ]
        }
    }
}
</script>

<style lang="less">
@bgColor: #315;
@accentColor: #fa0;
@S: 400px;
@M: 770px;
@L: 1000px;
@XL: 1300px;
@XXL: 1600px;

.header-content {
    position: relative;
    margin-top: 20px;
}

.tolyk__about {
    display: inline-block;
    font-size: 7vw;
    font-weight: 800;
    color: @accentColor;
    margin-bottom: 0;
    margin-top: -.1em;
    padding-right: 100px;
    line-height: initial;
    max-width: 850px;
        @media (min-width: @L) {
            font-size: 70px;
        }
}

.lang-switcher {
    position: absolute;
    top: 0;
    right: 0;
    list-style: none;
    padding: 0;
    margin-bottom: 0;
    margin-top: 1.6vw;

    &__item {
        display: inline-block;
        cursor: pointer;
        font-weight: 700;
        font-size: 13px;
        line-height: 20px;
        padding-bottom: 2px;
        letter-spacing: .1em;
        opacity: .5;

        &:hover {
            opacity: 1;
        }

        &_selected {
            color: @accentColor;
            border-bottom: solid 2px;
            opacity: 1;
        }

        & + & { margin-left: 1em; }
    }
}

</style>
