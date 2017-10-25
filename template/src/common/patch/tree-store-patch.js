/**
 * Created by janez on 2017/7/31.
 */
// element-ui-component-patch

import TreeStore from 'element-ui/packages/tree/src/model/tree-store';
// tree
// 修改原始过滤方法
TreeStore.prototype.filter = function (value) {
    const filterNodeMethod = this.filterNodeMethod;
    const setChildVisible = function (child) {
        if (child.childNodes.length) {
            child.childNodes.forEach((item) => {
                item.visible = true;
                setChildVisible(item);
            });
        }
    };
    const traverse = function (node) {
        const childNodes = node.root ? node.root.childNodes : node.childNodes;
        childNodes.forEach((child) => {
            child.visible = filterNodeMethod.call(child, value, child.data, child);
            if (!child.visible) {
                traverse(child);
            }
            else {
                setChildVisible(child);
            }
        });

        if (!node.visible && childNodes.length) {
            let allHidden = true;

            childNodes.forEach((child) => {
                if (child.visible) allHidden = false;
            });

            if (node.root) {
                node.root.visible = allHidden === false;
            }
            else {
                node.visible = allHidden === false;
            }
        }

        if (node.visible && !node.isLeaf) node.expand();
    };
    traverse(this);
    // this.$emit('rootVisibleChange', this.root ? this.root.visible : this.visible);
};
