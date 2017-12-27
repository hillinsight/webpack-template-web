<template>
    <div class="h-dialog">
        <el-dialog :title="title"
                   :visible.sync="dialogVisible"
                   :close-on-click-modal="closeOnClickModal"
                   :custom-class="customClass"
                   :width="width"
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
            width: String,
            title: String,
            customClass: String,
            closeOnClickModal: Boolean
        },
        data() {
            return {
                dialogVisible: true
            };
        },
        components: {
            UiDialogContent: {
                template: '<div></div>'
            }
        },
        methods: {
            close() {
                this.dialogVisible = false;
                this.$emit('beforeDestroy');
                this.$destroy();
            }
        },
        mounted() {
        },
        watch: {
        }
    };
</script>
