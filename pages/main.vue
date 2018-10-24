<template>
<div class="projects-wrap waist XXL-5-col XL-4-col L-3-col M-2-col S-1-col">
    <div class="project karton grid__box" v-for="project in projects">
        <div class="project__title">
            <a :href="project.link" target="_blank">
                {{ project.title }}<svg class="new-tab" viewBox="0 0 24 21">
                    <use xlink:href="#new-tab" />
                </svg>
            </a>
        </div>
        <div class="project__description" v-html="$t(project.description[$i18n.locale])">
        </div>
        <div class="project__task" v-html="$t(project.task[$i18n.locale])">
        </div>
        <div class="project__year" v-html="$t(project.year)">
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                    title: 'Karton',
                    link: 'https://thekarton.com/',
                    description: {
                        uk: 'Я разом з колегою зробили власний проект. Сайт, на&nbspякому молоді хлопці та&nbsp;дівчата можуть замовити крутий логотип всього за&nbspтри дні.',
                        en: 'I, along with my&nbspcolleague, made our own project. A&nbspsite where young people can order a&nbspcool logo in&nbspjust three days.'
                    },
                    task: {
                        uk: 'Дизайн сайта і&nbspлоготипа',
                        en: 'Site and logo design'
                    },
                    year: '2018'
                },
                {
                    title: 'OLL.TV',
                    link: 'https://oll.tv/',
                    description: {
                        uk: 'Сервіс з великим вибором фільмів, серіалів і&nbspтелеканалів.',
                        en: 'A huge library of&nbspmovies, series and&nbspTV-channels.'
                    },
                    task: {
                        uk: 'Дизайн сайта',
                        en: 'Site design'
                    },
                    year: '2018'
                },
                {
                    title: 'Kyivstar Football',
                    link: 'http://kyivstar.oll.tv/',
                    description: {
                        uk: 'Сайт для футбольних фанів — трансляція популярних європейських чемпіонатів та кращих футбольних телеканалів України.',
                        en: 'Site for football fans — popular European championships and ukrainian football channels stream.'
                    },
                    task: {
                        uk: 'Дизайн сайта',
                        en: 'Site design'
                    },
                    year: '2017'
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

.projects-wrap {
    margin: 5vw -20px 0;
    @media (max-width: @M) {
        margin: 40px -20px 0;
    }

    .project {
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        padding: 0 20px 30px;
        vertical-align: top;

        & .project__title {
            margin-bottom: 10px;

            & a {
                font-family: 'mono';
                font-size: 35px;
                font-weight: bold;
                @media (max-width: @M) {
                    font-size: 25px;
                }
                @media (max-width: @S) {
                    font-size: 20px;
                }
            }

            & .new-tab {
                width: 0.8em;
                vertical-align: bottom;
                fill: @accentColor;
                margin-left: 0.2em;
            }
        }

        & .project__task {
            margin-top: 6px;
            opacity: 0.5;
        }

        & .project__year {
            margin-top: 4px;
            opacity: 0.5;
        }
    }
}
</style>
