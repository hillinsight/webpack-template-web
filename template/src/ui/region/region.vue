<template>
    <div class="h-region">
        <el-cascader class="h-region-cascader"
                     :options="options"
                     @change="handleChange"
                     v-model="selected" :change-on-select="changeOnSelect">
        </el-cascader>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .h-region {
        display: inline-block;
    }
    .h-region-cascader {
        width: 100%;
    }
</style>
<script>
    /**!
     * Copyright (c) 2017 hillinsight.com, Inc. All Rights Reserved
     *
     * @author lifayu(fyli@hillinsight.com)
     * @since 2017-08-30 18:29
     *
     * @example
     * ```html
     * <h-region v-model="region"></h-region>
     * ```
     */
    import {REGION_TREE} from './data';
    import emitter from '../mixins/emitter';
    export default {
        name: 'HRegion',
        componentName: 'HRegion',
        mixins: [emitter],
        props: {
            value: {
                type: String,
                default() {
                    return '';
                }
            },
            changeOnSelect: {
                type: Boolean,
                default: true
            },
            level: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                options: [],
                selected: []
            }
        },
        methods: {
            handleChange(val) {
                let value = val[val.length - 1];
                this.$emit('input', value);
                this.dispatch('ElFormItem', 'el.form.change', [value]);
            },
            valueChange(value) {
                this.selected = [];
                if (value) {
                    value = +value;
                    if (value % 10000 === 0) {
                        this.selected.push(String(value));
                    }
                    else if (value % 100 === 0) {
                        this.selected = [String(value - value % 10000), String(value)];
                    }
                    else {
                        this.selected = [String(value - value % 10000), String(value - value % 100), String(value)];
                    }
                }
            },
            levelChange(level) {
                let options = [];
                if (level > 0) {
                    REGION_TREE.forEach(item => {
                        let p = {
                            value: item.value,
                            label: item.label
                        };
                        if (level > 1 && item.children) {
                            p.children = [];
                            item.children.forEach(child => {
                                let c = {
                                    value: child.value,
                                    label: child.label
                                };
                                if (level > 2 && child.children) {
                                    c.children = [];
                                    child.children.forEach(it => {
                                        c.children.push({
                                            value: it.value,
                                            label: it.label
                                        });
                                    });
                                }
                                p.children.push(c);
                            });
                        }
                        options.push(p);
                    });
                }
                this.options = options;
            }
        },
        created() {
            this.valueChange(this.value);
            this.levelChange(this.level);
        },
        watch: {
            value(val) {
                this.valueChange(val);
            },
            level(val) {
                this.levelChange(val);
            }
        }
    }
</script>
