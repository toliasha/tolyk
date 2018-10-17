<template>
<div class="waist fzf">
    <h1>{{ $t('fzf') }}</h1>
    <i></i>
    {{ $t('not-found') }}
    <i></i>
    <i></i>
    <router-link :to="{name: 'showcase'}">{{ $t('go-showcase') }}</router-link>
</div>
</template>

<script>
export default {
    activated() {
        this.App.bgColor = '#000000';
    },
    computed: {
        App() {
            return this.$root;
        }
    }
}
</script>

<style lang="less">
.fzf {
    text-align: center;

    h1 {
        font-size: 3em;
    }

    &.fzf {
        padding-top: 30vh;
    }
}
</style>
