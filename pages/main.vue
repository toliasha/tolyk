<template>
<div>
    <section class="waist">
        {{ $t('hui') }}
    </section>
    <h3 class="t_a_c">{{ $t('share-it') }}</h3>
    <socials class="t_a_c" :data="['https://thekarton.com', $t('slogan'), 'https://cdn.thekarton.com/share-it.png']"/>
</div>
</template>

<script>

export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="less">
.showcase {
    &__logo-mesh {
        text-align: center;
    }

    &__soon {
        padding: 6vw;
        text-align: center;
    }
}
</style>
