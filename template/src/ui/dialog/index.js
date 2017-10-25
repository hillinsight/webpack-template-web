/**!
 * Copyright (c) 2017 hillinsight.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"), you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @file Title
 * @author lifayu(fyli@hillinsight.com)
 * @since 13/07/2017
 */

import Vue from 'vue';
import Dialog from './dialog.vue';

Vue.prototype.$showDialog = function (Child, extOptions = {}, dialogOptions = {}) {
    let NewDialog = Object.create(Dialog);

    NewDialog.components = {
        UiDialogContent: {
            extends: Child,
            mixins: [extOptions] // 优先级高于extends(Vue.js#1199)
        }
    };
    let vm = new Vue(NewDialog).$mount();
    for (let key in dialogOptions) {
        if (dialogOptions.hasOwnProperty(key)) {
            vm[key] = dialogOptions[key];
        }
    }
    vm.$on('beforeDestroy', () => {
        vm.$el.parentNode.removeChild(vm.$el);
    });
    document.body.appendChild(vm.$el);
    return vm;
};
