<template>
<header class="waist">
    <div class="header-content">
        <div class="tolyk">
            <p class="tolyk_name">Tolyk.</p>
            <p class="tolyk_about"></p>
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
@bg-color: #315;
@accent-color: #fa0;

.header-content {
    position: relative;
}

.tolyk_name {
    display: inline-block;
    font-family: 'mono';
    font-size: 10vw;
    font-weight: bold;
    color: @accent-color;
    margin: 0;
    line-height: initial;
}

.tolyk_about {
    margin: 0;
    max-width: 300px;
    display: inline-block;
    vertical-align: top;
}

.lang-switcher {
    position: absolute;
    top: 0;
    right: 0;
    list-style: none;
    padding: 0;
    margin: 0;

    &__item {
        display: inline-block;
        cursor: pointer;
        font-weight: bold;
        font-size: 13px;
        padding-bottom: 2px;
        letter-spacing: 1px;

        &_selected {
            color: @accent-color;
            border-bottom: solid 2px;
        }

        & + & { margin-left: 1em; }
    }
}

</style>
