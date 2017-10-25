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
 * @since 2017-08-21 15:51
 */

import Menu from 'element-ui/packages/menu/src/menu.vue';
import { addClass, removeClass, hasClass } from 'element-ui/src/utils/dom';

Menu.components['el-menu-collapse-transition'] = {
    functional: true,
    render(createElement, context) {
        const data = {
            props: {
                mode: 'out-in'
            },
            on: {
                beforeEnter(el) {
                    el.style.opacity = 0.2;
                },

                enter(el) {
                    addClass(el, 'el-opacity-transition');
                    el.style.opacity = 1;
                },

                afterEnter(el) {
                    removeClass(el, 'el-opacity-transition');
                    el.style.opacity = '';
                },

                beforeLeave(el) {
                    if (!el.dataset) el.dataset = {};

                    if (hasClass(el, 'el-menu--collapse')) {
                        removeClass(el, 'el-menu--collapse');
                        el.dataset.oldOverflow = el.style.overflow;
                        el.dataset.scrollWidth = el.scrollWidth;
                        addClass(el, 'el-menu--collapse');
                    }

                    el.style.overflow = 'hidden';
                },

                leave(el) {
                    if (!hasClass(el, 'el-menu--collapse')) {
                        addClass(el, 'horizontal-collapse-transition');
                    }
                    else {
                        addClass(el, 'horizontal-collapse-transition');
                    }
                },

                afterLeave(el) {
                    removeClass(el, 'horizontal-collapse-transition');
                    el.style.overflow = el.dataset.oldOverflow;
                }
            }
        };
        return createElement('transition', data, context.children);
    }
};
