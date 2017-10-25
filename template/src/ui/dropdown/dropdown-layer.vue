<template>
    <transition name="el-zoom-in-top" @after-leave="doDestroy">
        <div class="h-dropdown-layer" v-show="showPopper">
            <slot></slot>
        </div>
    </transition>
</template>
<style lang="less" rel="stylesheet/less">
    .h-dropdown-layer {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 2px;
        margin-top: 2px;
    }
</style>
<script>
    /**!
     * Copyright (c) 2017 hillinsight.com, Inc. All Rights Reserved
     *
     * @author lifayu(fyli@hillinsight.com)
     * @since 2017-10-18 10:54
     */
    import Popper from 'element-ui/src/utils/vue-popper';

    export default {
        name: 'HDropdownLayer',
        componentName: 'HDropdownLayer',
        mixins: [Popper],
        created() {
            this.$on('updatePopper', () => {
                if (this.showPopper) this.updatePopper();
            });
            this.$on('visible', val => {
                this.showPopper = val;
            });
        },
        mounted() {
            this.$parent.popperElm = this.popperElm = this.$el;
            this.referenceElm = this.$parent.$el;
        },
        watch: {
            '$parent.layerAlign': {
                immediate: true,
                handler(val) {
                    this.currentPlacement = `bottom-${val}`;
                }
            }
        }
    };
</script>
