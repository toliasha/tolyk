<template>
<footer class="waist">
    <div class="footer-content">
        <div class="socials">
            <a href="https://t.me/toliasha" target="_blank">
                <svg class="social__icon" viewBox="0 0 36 36">
                    <use xlink:href="#telegram"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/tolykd/" target="_blank">
                <svg class="social__icon" viewBox="0 0 36 36">
                    <use xlink:href="#linkedin"/>
                </svg>
            </a>
            <a href="https://www.instagram.com/tolikdenysiuk/" target="_blank">
                <svg class="social__icon" viewBox="0 0 36 36">
                    <use xlink:href="#instagram"/>
                </svg>
            </a>
        </div>
        <p class="made-by" v-html="$t(made.name[$i18n.locale])"></p>
        <div class="text-me">
            <a href="mailto:tohax2@gmail.com">
                <span v-html="$t(email.link[$i18n.locale])"></span>
                <svg class="new-tab" viewBox="0 0 24 21">
                    <use xlink:href="#new-tab"/>
                </svg>
            </a>
        </div>

    </div>
</footer>
</template>

<script>
export default {
    data() {
        return {
            made: {
                name: {
                    uk: 'Зробив я',
                    en: 'Made by me'
                }
            },
            email: {
                link: {
                    uk: 'Написати мені',
                    en: 'Email me'
                }
            }
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

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 80px 0 20px;
        @media (max-width: @M) {
            flex-flow: column;
        }

    .socials {
        @media (max-width: @M) {
            order: 1;
        }

        & a {
            border-bottom: none;

            &:nth-child(2) {
                margin: 0 10px;
            }

            .social__icon {
                width: 36px;
                height: 36px;
                fill: @accentColor;
            }
        }
    }

    .made-by {
        opacity: .5;
        text-align: center;
            @media (max-width: @M) {
                order: 3;
            }
    }

    .text-me {
        & .new-tab {
            width: 0.8em;
            vertical-align: bottom;
            fill: @accentColor;
        }
            @media (max-width: @M) {
                order: 2;
                margin: 20px 0;
            }
    }
}

</style>
