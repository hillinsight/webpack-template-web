<template>
    <div id="viewport">
        <header class="header">
            <el-menu class="header-menu" :default-active="activeIndex" mode="horizontal" theme="dark" router>
                <li class="header-logo">
                    <img src="../common/img/logo.png" height="40" width="153" alt="">
                </li>
                <el-menu-item index="league" :route="{path: '/league/list'}">赛事管理</el-menu-item>
                <el-menu-item index="team" :route="{path: '/team/list'}">球队管理</el-menu-item>
            </el-menu>
        </header>
        <router-view class="v-page"></router-view>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    #viewport {
        display: flex;
        flex-direction: column;
        min-width: 1000px;
        height: 100%;
    }
    .header-menu {
        border-radius: 0;
    }
    .header-logo {
        float: left;
        padding: 10px 20px;
        img {
            vertical-align: middle;
        }
    }
    .v-page {
        height: 100%;
        flex: 1;
        position: relative;
        overflow-y: auto;
        > .el-breadcrumb {
            padding: 8px 10px;
            font-size: 12px;
            background: #fff;
            box-shadow: 0 2px 6px #eee;
        }
        > .v-container {
            margin: 10px;
        }
    }
    .v-table-header {
        margin-bottom: 10px;
    }
</style>
<script>
    export default{
        name: '{{ name }}',
        data() {
            return {
                activeIndex: ''
            };
        },
        methods: {
        },
        watch: {
            $route() {
                this.activeIndex = this.$route.meta.mainMenu;
            }
        }
    }
</script>
