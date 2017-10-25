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
 * @since 2017-08-09 15:36
 */
import Region from './region/region.vue';
import Dropdown from './dropdown/dropdown.vue';
import DropdownLayer from './dropdown/dropdown-layer.vue';
import Uploader from './uploader/uploader.vue';

import './dialog/index';

const install = function (Vue) {
    if (install.installed) return;

    Vue.component(Region.name, Region);
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(DropdownLayer.name, DropdownLayer);

    Vue.component(Uploader.name, Uploader);
};

export default {
    install,
    Region
};
