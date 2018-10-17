<template>
<header :class="{'showcase__header': showcase}">
    <div>
        <router-link :to="'/'">
            <svg class="logo" viewBox="0 0 500 200">
                <use xlink:href="#karton-logo"/>
            </svg>
        </router-link>
        <h1 class="header__slogan" v-html="$t('slogan')"></h1>
    </div>
    <r-button v-if="$route.name !== 'order'" class="order-button r-button_accented" @push="$router.push('/order')" :caption="$t('i-want-logo')"/>
</header>
</template>

<script>
export default {
    computed: {
        showcase() {
            return this.$route.name === 'showcase';
        }
    }
}
</script>

<style lang="less">
header {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    box-sizing: border-box;
    align-items: center;
    position: relative;
    padding: 0 5vw;

    &.showcase__header {
        display: block;
        height: auto;
        text-align: center;
        padding: 3vw 5vw;

        .header__slogan {
            display: block;
            padding: 3vw 0;
        }

        .logo {
            width: auto;
            max-width: 700px;
        }

        .order-button {
            font-size: 1.4em;
        }
    }

    .header__slogan {
        display: none;
    }

    .logo {
        width: 140px;
    }
}

.order-button {
    background-color: purple;
    background-image: linear-gradient(to right, purple, lighten(purple, 5%));
    box-shadow: 0 5px 10px -5px purple;
}

@media (max-width: 400px) {
    header {
        font-size: .8em;

        .logo {
            width: 110px;
        }
    }
}
</style>
