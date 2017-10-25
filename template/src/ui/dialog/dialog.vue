<template>
    <div class="h-dialog">
        <el-dialog :title="title"
                   v-model="dialogVisible"
                   :size="size"
                   :close-on-click-modal="closeOnClickModal"
                   :custom-class="customClass"
                   @close="close">
            <ui-dialog-content></ui-dialog-content>
        </el-dialog>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
</style>
<script>
    export default{
        props: {
            title: String,
            size: String,
            customClass: String,
            closeOnClickModal: Boolean
        },
        data() {
            return {
                dialogVisible: true,
                width: 0
            };
        },
        components: {
            UiDialogContent: {
                template: '<div></div>'
            }
        },
        methods: {
            close() {
                this.$emit('beforeDestroy');
                this.dialogVisible = false;
                this.$destroy();
            }
        },
        mounted() {
        },
        watch: {
            width() {
                if (this.width > 0) {
                    $('.el-dialog', this.$el).width(this.width);
                }
            }
        }
    }
</script>
