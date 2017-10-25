/**!
 * Copyright (c) 2017 hillinsight.com, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License"), you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * @file Title
 * @author lifayu(fyli@hillinsight.com)
 * @since 2017-08-29 10:45
 */

import TableBody from 'element-ui/packages/table/src/table-body';
import Table from 'element-ui/packages/table/src/table.vue';

Table.props.merge = {
    type: Array,
    default() {
        return [];
    }
};

/**
 * 同列值相同的行进行合并
 *
 * @param column
 * @param row
 * @param idx
 * @param data
 * @param vm
 * @return {*}
 */
function checkColumn(column, row, idx, data, vm) {
    column.colspan = 1;
    column.rowspan = 1;
    if (vm.table.merge.indexOf(column.property) !== -1) {
        let value = row[column.property];
        if (idx > 0) {
            let prev = data[idx - 1];
            if (prev && prev[column.property] === value) {
                column.rowspan = 0;
                return column;
            }
        }
        let from = idx;
        let next = data[from + 1];
        while (next && next[column.property] === value) {
            column.rowspan++;
            from++;
            next = data[from + 1];
        }
    }
    return column;
}

TableBody.render = function (h) {
    const columnsHidden = this.columns.map((column, index) => this.isColumnHidden(index));
    return (
        <table
            class="el-table__body"
            cellspacing="0"
            cellpadding="0"
            border="0">
            <colgroup>
                {
                    this._l(this.columns, column =>
                        <col
                            name={ column.id }
                            width={ column.realWidth || column.width }
                        />)
                }
            </colgroup>
            <tbody>
            {
                this._l(this.data, (row, $index) =>
                    [<tr
                        style={ this.rowStyle ? this.getRowStyle(row, $index) : null }
                        key={ this.table.rowKey ? this.getKeyOfRow(row, $index) : $index }
                        on-dblclick={ ($event) => this.handleDoubleClick($event, row) }
                        on-click={ ($event) => this.handleClick($event, row) }
                        on-contextmenu={ ($event) => this.handleContextMenu($event, row) }
                        on-mouseenter={ _ => this.handleMouseEnter($index) }
                        on-mouseleave={ _ => this.handleMouseLeave() }
                        class={ [this.getRowClass(row, $index)] }>
                        {
                            // this._l(filterColumns(this.columns, row, $index, this.data, this), (column, cellIndex) =>
                            this._l(this.columns, (column, cellIndex) =>
                                checkColumn(column, row, $index, this.data, this).rowspan > 0 ?
                                    <td
                                        class={ [column.id, column.align, column.className || '', columnsHidden[cellIndex] ? 'is-hidden' : ''] }
                                        colspan={ column.colspan }
                                        rowspan={ column.rowspan }
                                        on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                                        on-mouseleave={ this.handleCellMouseLeave }>
                                        {
                                            column.renderCell.call(this._renderProxy, h, {
                                                row,
                                                column,
                                                $index,
                                                store: this.store,
                                                _self: this.context || this.table.$vnode.context
                                            }, columnsHidden[cellIndex])
                                        }
                                    </td>
                                    : ''
                            )
                        }
                        {
                            !this.fixed && this.layout.scrollY && this.layout.gutterWidth ? <td class="gutter"/> : ''
                        }
                    </tr>,
                        this.store.states.expandRows.indexOf(row) > -1
                            ? (<tr>
                            <td colspan={ this.columns.length } class="el-table__expanded-cell">
                                { this.table.renderExpanded ? this.table.renderExpanded(h, {
                                    row,
                                    $index,
                                    store: this.store
                                }) : ''}
                            </td>
                        </tr>)
                            : ''
                    ]
                ).concat(
                    this._self.$parent.$slots.append
                ).concat(
                    <el-tooltip effect={ this.table.tooltipEffect } placement="top" ref="tooltip"
                                content={ this.tooltipContent }/>
                )
            }
            </tbody>
        </table>
    );
};
