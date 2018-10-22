<template>
<div class="projects-wrap waist XXL-5-col XL-4-col L-3-col M-2-col S-1-col">
    <div class="project karton grid__box" v-for="project in projects">
        <div class="project__title">
            <a>
                {{ project.title }}
                <svg class="new-tab" viewBox="0 0 24 21">
                    <use xlink:href="#new-tab"/>
                </svg>
            </a>
        </div>
        <div class="project__description">
            {{ project.description[$i18n.locale] }}
        </div>
        <div class="project__task">
            {{ project.task[$i18n.locale] }}
        </div>
        <div class="project__year">
            {{ project.year }}
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: 'Karton',
                    description: {
                        uk: 'Я разом з колегою зробили власний проект. Сайт, на якому молоді хлопці та дівчата можуть замовити крутий логотип всього за три дні.',
                        en: 'I, along with my colleague, made our own project. A site where young people can order a cool logo in just three days.'
                    },
                    task: {
                        uk: 'Дизайн сайта і логотипа',
                        en: 'Site and logo design'
                    },
                    year: '2018'
                },
                {
                    title: 'OLL.TV',
                    description: {
                        uk: 'Сервіс з великим вибором фільмів, серіалів і телеканалів.',
                        en: 'A huge library of movies, series and TV-channels.'
                    },
                    task: {
                        uk: 'Дизайн сайта',
                        en: 'Site design'
                    },
                    year: '2018'
                },
                {
                    title: 'Kyivstar Football',
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

.projects-wrap {
    display: table;
    margin: 5vw -20px 0;

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
            }

            & .new-tab {
                width: 24px;
                fill: @accentColor;
                margin-left: 4px;
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
