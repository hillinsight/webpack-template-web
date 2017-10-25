<template>
    <div class="v-league-add">
        <el-form ref="form" :model="form" :rules="rules" label-position="left" label-width="100px">
            <el-form-item label="赛事logo" prop="logo">
                <h-uploader class="avatar-uploader" v-model="form.logo">
                    <img v-if="form.logo" :src="form.logo" class="avatar">
                    <i v-else class="el-icon-upload"></i>
                </h-uploader>
            </el-form-item>
            <el-form-item label="赛事封面" prop="banner">
                <h-uploader class="avatar-uploader" v-model="form.banner">
                    <img v-if="form.banner" :src="form.banner" class="avatar">
                    <i v-else class="el-icon-upload"></i>
                </h-uploader>
            </el-form-item>
            <el-form-item label="赛事名称" prop="name">
                <el-input v-model.trim="form.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="赛事日期" prop="date">
                <el-date-picker
                        v-model="form.date"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="赛事地点" prop="address">
                <el-input v-model.trim="form.address" size="small"></el-input>
            </el-form-item>
            <el-form-item label="主办方" prop="organizer">
                <el-input v-model.trim="form.organizer" size="small"></el-input>
            </el-form-item>
            <el-form-item label="赞助商" prop="sponsor">
                <el-input v-model.trim="form.sponsor" size="small"></el-input>
            </el-form-item>
            <el-form-item class="h-dialog-form-footer">
                <el-button @click.prevent="close" size="small">取消</el-button>
                <el-button type="primary" @click.prevent="submit" size="small">添加</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
</style>
<script>
    /**!
     * Copyright (c) 2017 hillinsight.com, Inc. All Rights Reserved
     *
     * @author lifayu(fyli@hillinsight.com)
     * @since 2017-10-21 14:40
     */
    export default {
        data() {
            return {
                form: {
                    name: '',
                    date: '',
                    address: '',
                    organizer: '',
                    logo: '',
                    sponsor: '',
                    banner: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ],
                    organizer: [
                        { required: true, message: '请输入主办方', trigger: 'blur' }
                    ],
                    sponsor: [
                        { required: true, message: '请输入赞助商', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入比赛地点', trigger: 'blur' }
                    ],
                    date: [
                        { type: 'date', required: true, message: '请选择比赛日期', trigger: 'change' }
                    ],
                    logo: [
                        { required: true, message: '请上传logo', trigger: 'change' }
                    ],
                    banner: [
                        { required: true, message: '请上传封面', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.saveLeague();
                    } else {
                        return false;
                    }
                });
            },
            close() {
                this.$parent.close();
            },
            saveLeague() {

            }
        }
    };
</script>
