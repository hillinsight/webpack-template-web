<template>
    <div class="h-dropdown" v-clickoutside="clickoutside">
        <slot></slot>
        <slot name="dropdown"></slot>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
</style>
<<script>
    import Clickoutside from 'element-ui/src/utils/clickoutside';
    import Emitter from '../mixins/emitter';

    export default {
        name: 'HDropdown',
        componentName: 'HDropdown',
        mixins: [Emitter],
        directives: { Clickoutside },
        props: {
            trigger: {
                type: String,
                default: 'hover'
            },
            clickoutsideHide: {
                type: Boolean,
                default: false
            },
            layerAlign: {
                type: String,
                default: 'end'
            },
            hideOnClick: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                timeout: null,
                visible: false,
                triggerElm: null
            };
        },
        mounted() {
            this.initEvent();
        },
        watch: {
            visible(val) {
                this.broadcast('HDropdownLayer', 'visible', val);
                this.$emit('visible-change', val);
            }
        },
        methods: {
            show() {
                if (this.triggerElm.disabled) return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 250);
            },
            hide() {
                if (this.triggerElm.disabled) return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 150);
            },
            clickoutside() {
                if (this.clickoutsideHide) {
                    this.hide();
                }
            },
            handleClick() {
                if (this.triggerElm.disabled) return;
                this.visible = !this.visible;
            },
            initEvent() {
                let { trigger, show, hide, handleClick } = this;
                this.triggerElm = this.$slots.default[0].elm;

                if (trigger === 'hover') {
                    this.triggerElm.addEventListener('mouseenter', show);
                    this.triggerElm.addEventListener('mouseleave', hide);

                    let dropdownElm = this.$slots.dropdown[0].elm;

                    dropdownElm.addEventListener('mouseenter', show);
                    dropdownElm.addEventListener('mouseleave', hide);
                }
                else if (trigger === 'click') {
                    this.triggerElm.addEventListener('click', handleClick);
                }
            }
        }
    };
</script>
