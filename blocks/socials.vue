<template>
<r-crossbar :duration="200">
    <div class="socials">
        <a class="socials__button" v-for="(btn, key) in socials" :class="btn.name" :href="generateUrl(btn)" target="_blank">
            <svg class="socials__logo" width="24" height="24">
                <use :xlink:href="'#' + btn.name"/>
            </svg>
            <span>{{ $t(btn.name) }}</span>
        </a>
    </div>
</r-crossbar>
</template>

<script>
import socials from '../data/socials.json';

export default {
    props: {
        data: {
            required: true,
            type: Array
        }
    },
    data() {
        return {
            socials
        }
    },
    methods: {
        generateUrl(button) {
            let up = [];
            Object.keys(button.query).forEach((z, i) => {
                if (button.query[z]) up.push(button.query[z] + '=' + this.data[i]);
            });
            return button.shareUrl + '?' + up.join('&');
        }
    }
}
</script>

<style lang="less">
.socials {
    white-space: nowrap;
    padding: 1em calc(5vw e('-') 4px);

    h3 { margin-bottom: 1em; }

    &__button {
        display: inline-block;
        background-color: black;
        text-decoration: none;
        color: white;
        font-size: 14px;
        padding: 4px;
        padding-right: 10px;
        box-shadow: 0 .5em 1em -.5em fadeout(black, 60%);
        position: relative;
        white-space: nowrap;
        margin: .4em;
        height: 24px;
        padding-left: 32px;
        line-height: 24px;
        vertical-align: top;

        span {
            position: relative;
            z-index: 1;
        }

        &.facebook {
            border-radius: 5px;
        }

        &.pinterest {
            border-radius: 1000px;
        }

        &.twitter {
            border-top-left-radius: 7px;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 7px;
        }

        &.telegram {
            margin: .4em 18px;
            padding: 4px 2px 4px 22px;

            svg { left: -5px; }

            &:before {
                content: '';
                position: absolute;
                width: 26px; height: 26px;
                background-color: black;
                transform: scaleX(.8) rotate(-45deg);
                border-top-left-radius: 5px;
                border-top-right-radius: 6px;
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 5px;
                top: 3px; left: -12px;
            }

            &:after {
                content: '';
                position: absolute;
                width: 26px; height: 26px;
                background-color: black;
                transform: scaleX(.8) rotate(-45deg);
                border-top-left-radius: 5px;
                border-top-right-radius: 6px;
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 5px;
                top: 3px; right: -12px;
            }
        }
    }

    &__logo {
        fill: white;
        position: absolute;
        z-index: 1;
        left: 4px; top: 4px;
    }
}
</style>
