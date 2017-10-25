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
 * @file 数据列表抽象类
 *
 * @author lifayu(fyli@hillinsight.com)
 * @since 2017-10-24 18:32
 */
export default {
    request: '',
    data() {
        return {
            listData: [],
            pageData: {
                totalCount: 0,
                pageSize: 15,
                pageNo: 1
            },
            query: {
                pageSize: 15
            }
        };
    },
    methods: {
        /**
         * 列表筛选
         * @param {Object} query 筛选参数
         * @param {Boolean} overide 是否重新搜索，默认增量搜索
         */
        search(query, overide = false) {
            if (overide) {
                this.query = query;
            }
            else {
                this.query = Object.assign(this.query, query);
            }
            this.handleQueryChange();
        },
        handleQueryChange(page = 1) {
            this.fetch(page);
        },
        /**
         * 对返回的数据进行预处理，如格式转换等
         * @param {Object} data 列表数据
         * @return {Object}
         */
        prepareData(data) {
            return data;
        },
        fetch(page = 1) {
            this.query.pageNo = page;
            this.$api[this.$options.request](this.query).then(data => {
                this.prepareData(data);

                this.listData = data.list;
                this.pageData = data.page;
            });
        }
    }
};
