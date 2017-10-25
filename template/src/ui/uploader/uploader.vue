<template>
    <div class="h-upload">
        <el-upload class="h-uploader-view" action="/backend/oss-image/upload"
                   :show-file-list="false"
                   :on-success="handleUploadSuccess">
            <slot></slot>
        </el-upload>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    .h-upload {
        display: inline-block;
    }
</style>
<script>
    /**!
     * Copyright (c) 2017 hillinsight.com, Inc. All Rights Reserved
     *
     * @author lifayu(fyli@hillinsight.com)
     * @since 2017-10-21 15:48
     */
    import emitter from '../mixins/emitter';
    export default {
        name: 'HUploader',
        componentName: 'HUploader',
        mixins: [emitter],
        props: {
            value: String
        },
        data() {
            return {
            };
        },
        methods: {
            handleUploadSuccess(res) {
                if (res.success) {
                    let val = res.data.url;
                    this.$emit('input', val);
                    this.$emit('change', val);
                    this.dispatch('ElFormItem', 'el.form.change', val);
                }
                else {
                    this.$message.warning('上传失败');
                }
            }
        }
    };
</script>
