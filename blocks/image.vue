<template>
<div class="picture">
    <picture :style="{paddingBottom}">
        <img :class="{'picture__img_showed': !error && loaded}" ref="image">
    </picture>
    <span class="picture__error" v-show="error">
        <svg>
            <use xlink:href="#no-image"/>
        </svg>
        {{ $t('picerror') }}
    </span>
    <span class="picture__loading" v-show="!loaded && !error">{{ $t('loading') }}</span>
</div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        ratio: {
            type: Number
        }
    },
    data() {
        return {
            img: null,
            loaded: false,
            error: false,
            proportion: 0
        }
    },
    mounted() {
        this.loadImage();
    },
    methods: {
        loadImage() {
            let image = this.$refs.image;
            this.img = new Image();
            this.img.srcset = this.url;
            this.img.onload = () => {
                this.loaded = true;
                image.srcset = this.url;
                this.proportion = this.img.height / this.img.width;
            }
            this.img.onerror = () => this.error = true;
        }
    },
    computed: {
        paddingBottom() {
            let hui = this.ratio ? this.ratio : this.proportion !== 0 ? this.proportion : 1;
            return (hui * 100) + '%';
        }
    },
    watch: {
        url() {
            this.img = null;
            this.loaded = false;
            this.error = false;
            this.loadImage();
        }
    }
}
</script>

<style lang="less">
.picture {
    display: block;
    position: relative;

    picture {
        display: inline-block;
        position: relative;
        vertical-align: top;
        width: 100%;
        text-align: left;

        img {
            position: absolute;
            object-fit: contain;
            width: 100%; height: 100%;
            opacity: 0;
            transition: opacity 150ms linear;
            image-rendering: optimizeQuality;

            &.picture__img_showed {
                opacity: 1;
            }
        }
    }

    &__error {
        position: absolute;
        top: 50%; left: 0;
        text-align: center;
        width: 100%;
        color: #aaa;
        font-size: .8em;
        transform: translateY(-50%);
        opacity: .5;

        svg {
            width: 60px; height: 68px;
            display: block;
            margin: 0 auto .5em auto;
            fill: #aaa;
        }
    }

    &__loading {
        position: absolute;
        top: calc(50% e('-') .5em); left: 0;
        width: 100%;
        line-height: 1em;
        text-align: center;
    }
}
</style>
