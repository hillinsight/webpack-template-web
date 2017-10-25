<template>
    <div class="v-match-list">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/league/list'}">赛事管理</el-breadcrumb-item>
            <el-breadcrumb-item>赛事详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="v-container">
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-card>
                        <div slot="header" class="clearfix">
                            赛事阶段
                        </div>
                        <div>
                            xx
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="18">
                    <el-card>
                        <div slot="header" class="clearfix">
                            <span>赛程</span>
                            <el-button type="primary" size="small" style="float: right;" @click="addMatch">添加比赛</el-button>
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
                                        <!--<el-button type="text" size="small" @click="editLeague(scope.row)">修改</el-button>-->
                                        <!--<el-button type="text" size="small" @click="deleteLeague(scope.row)">删除</el-button>-->
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
                    </el-card>
                </el-col>
            </el-row>
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
     * @since 2017-10-21 16:37
     */
    export default {
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
            getData(page) {
                this.query.pageNo = page || 1;
                this.$api.listLeague(this.query).then(data => {
                    this.listData = data.list;
                    this.pageData = data.page;
                });
            },
            handleCurrentChange(page) {
                this.getData(page);
            },
            addMatch() {

            }
        },
        created() {
            this.getData();
        }
    };
</script>
