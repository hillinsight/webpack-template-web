/**
 * @file Vue-router Config
 * @author lifayu(fyli@hillinsight.com)
 * @since 26/06/2017
 */

import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'hash',
    base: '/web',
    routes: [{
        path: '/',
        redirect: '/league/list'
    }, {
        path: '/league/list',
        meta: {
            title: '赛事管理',
            mainMenu: 'league'
        },
        component: resolve => require.ensure([], () => resolve(require('./league/list.vue')), 'web/league/list')
    }, {
        path: '/league/:id/match',
        name: 'leagueMatch',
        meta: {
            title: '比赛管理',
            mainMenu: 'league'
        },
        component: resolve => require.ensure([], () => resolve(require('./league/match/list.vue')), 'web/league/match/list')
    }, {
        path: '*',
        component: {
            template: '<p style="text-align: center; font-size: 20px; color: #678;">404 Page Not Found</p>'
        }
    }]
});
router.beforeEach(function (to, from, next) {
    next();
});

export default router;
