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
 * @since 2017-08-07 14:13
 */

const mockup = require('webpack-dev-server-mock');

exports.response = function (path, params) {
    return mockup.list([{
        id: 1,
        name: '2017网络媒体杯精英赛',
        date: '2017-10-28',
        organizer: '首都互联网协会',
        sponsor: '首都互联网协会',
        address: '北京体育大学足球场'
    }], {
        pageNo: +params.pageNo
    });
};
