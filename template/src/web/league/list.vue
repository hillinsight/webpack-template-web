<template>
    <div class="v-league-list">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>赛事管理</el-breadcrumb-item>
            <el-breadcrumb-item>赛事列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="v-container">
            <div class="v-table-header">
                <el-button type="primary" size="small" @click="addLeague">添加赛事</el-button>
            </div>
            <div class="v-table-body">
                <el-table :data="listData" style="width: 100%">
                    <el-table-column prop="id" label="ID" width="80" align="center"></el-table-column>
                    <el-table-column prop="name" label="名称" width="180">
                        <template scope="scope">
                            <router-link :to="{name: 'leagueMatch', params: {id: scope.row.id}}">{{scope.row.name}}</router-link>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="日期" align="center"></el-table-column>
                    <el-table-column prop="sponsor" label="主办方"></el-table-column>
                    <el-table-column prop="address" label="地点"></el-table-column>
                    <el-table-column label="操作" width="100" align="center">
                        <template scope="scope">
                            <el-button type="text" size="small" @click="editLeague(scope.row)">修改</el-button>
                            <el-button type="text" size="small" @click="deleteLeague(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: right">
                    <el-pagination small v-show="pageData.totalCount>0"
                                   :current-page.sync="pageData.pageNo"
                                   :page-size="pageData.pageSize"
                                   :total="pageData.totalCount"
                                   @current-change="handleCurrentChange"
                                   layout="prev, pager, next, total"></el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
</style>
<script>
    /**!
     * Copyright (c) 2017 hillinsight.com, Inc. All Rights Reserved
     *
     * @author lifayu(fyli@hillinsight.com)
     * @since 2017-10-21 11:08
     */
    import LeagueAddView from './add.vue';
    import ListView from '@common/mixins/ListView';
    export default {
        mixins: [ListView],
        metaInfo: {
            title: '赛事',
            bodyAttrs: {
            }
        },
        data() {
            return {
            };
        },
        request: 'listLeague',
        methods: {
            handleCurrentChange(page) {
                this.handleQueryChange(page);
            },
            addLeague() {
                this.$showDialog(LeagueAddView, {}, {
                    title: '添加赛事',
                    width: 500
                });
            },
            editLeague(row) {
                this.$showDialog(LeagueAddView, {
                    data() {
                        return {
                            id: row.id
                        };
                    }
                }, {
                    title: '修改赛事',
                    width: 500
                });
            },
            deleteLeague() {
                this.$confirm('确认要删除该场赛事吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                }).catch(() => {});
            }
        },
        created() {
            this.fetch();
        }
    };
</script>
