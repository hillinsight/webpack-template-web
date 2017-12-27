/**!
 * @file 入口文件
 * @author lifayu(fyli@hillinsight.com)
 * @since 26/06/2017
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import ajax from '../common/ajax';
import '../common/vue-utils';
import {api} from './config';
import ElementUI from '../common/element-ui';
import HUI from '../ui/index';
import VueMeta from 'vue-meta';
import 'jquery.cookie';

import '../common/css/element-theme/var.scss';
import '../common/css/main.less';
import '../common/patch/index';
import App from './App.vue';

// ########## DEBUG ###########
Vue.config.debug = process.env.NODE_ENV !== 'production';
Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = process.env.NODE_ENV !== 'production';
// ########## DEBUG ###########

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(HUI);
Vue.use(VueMeta);
Vue.use(ajax, router, api);

new Vue({
    el: '#viewport',
    name: 'App',
    router,
    template: '<App/>',
    components: {App}
});
