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
 * @file Vue扩展工具类
 *
 * @author lifayu(fyli@hillinsight.com)
 * @since 2017-07-25 16:21
 *
 * @example
 * ```
 * <div v-text="utils.formatNumber(100.23232, 2)"></div>
 * ```
 */

import Vue from 'vue';
import moment from 'moment';
import accounting from 'accounting';

// CDN域名
const CDN_URL = '';

const utils = {};

/**
 * 时间格式化
 *
 * @param {number} value 待处理数据
 * @param {string?} formatter 时间格式
 * @param {string?} defaults 为空时展示的默认值
 *
 * @return string
 */
utils.date = function (value, formatter = 'YYYY-MM-DD HH:mm:ss', defaults = '') {
    if (!value) {
        return defaults;
    }
    let m = moment(value);
    return m.isValid() ? m.format(formatter) : value;
};

/**
 * 默认值
 * @param value
 * @param dft
 * @return {string}
 */
utils.dft = function (value, dft = '') {
    if (typeof value === 'undefined' || value === null || value === '') {
        return dft;
    }
    return value;
};

/**
 * 数字格式化
 *
 * @param {number} number 目标数字
 * @param {number} precision 精度
 * @param {string} thousand 千分位
 * @param {string} decimal 小数点
 *
 * @return {string}
 */
utils.formatNumber = function (number, precision = 0, thousand = ',', decimal = '.') {
    return accounting.formatNumber(number, precision, thousand, decimal);
};

/**
 * 金钱格式化
 * 默认单位是分
 *
 * @return {string}
 */
utils.formatMoney = function (number, symbol = '￥', precision = 2, thousand = ',', decimal = '.', format = '%s%v') {
    return accounting.formatMoney(number / 100, symbol, precision, thousand, decimal, format);
};

utils.toFixed = function (number, precision = 0) {
    return accounting.toFixed(number, precision).replace(/\.?0+$/g, '');
};

/**
 * 字符串截断
 *
 * @param {string} text 待处理字符串
 * @param {number} length 截取长度
 * @param {string} tail 追加字符串
 *
 * @return string
 */
utils.truncate = function (text, length, tail = '…') {
    if (text.length > length) {
        return text.substr(0, length) + tail;
    }
    return text;
};

/**
 * `\n`替换为`<br>`
 * @param text
 */
utils.nl2br = function (text) {
    return text.replace(/\n/g, '<br>');
};

/**
 * 转换路径为CDN路径
 *
 * @param {string} path
 * @return {string}
 */
utils.static = function (path) {
    if (!/^(http|https):\/\//.test(path)) {
        path = CDN_URL + path;
    }
    return path;
};

/**
 * 转换路径为CDN路径，并设置图片裁剪规则
 *
 * @param {string} path 图片路径
 * @param {string} rule 裁剪规则
 * @return {string}
 */
utils.staticimage = function (path, rule) {
    return utils.static(path) + '@' + rule;
};

for (let fn in utils) {
    if (utils.hasOwnProperty(fn)) {
        Vue.filter(fn, utils[fn]);
    }
}

/**
 * 将utils绑定到Vue上
 *
 * @type {Object}
 */
Vue.prototype.utils = utils;

export default utils;
