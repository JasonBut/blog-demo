(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225f45"],{e730:function(t,e,l){"use strict";l.r(e);var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("el-card",[l("el-table",{attrs:{data:t.list}},[l("el-table-column",{attrs:{label:"分类",prop:"category","min-width":"5%",filters:t.filters.filterOptions,"filter-method":t.filters.method,"filtered-value":t.filters.defaultValue}}),l("el-table-column",{attrs:{label:"标题",prop:"title","min-width":"20%"}}),l("el-table-column",{attrs:{label:"日期",prop:"date","min-width":"10%",sortable:""}}),l("el-table-column",{attrs:{label:"操作","min-width":"15%"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[l("router-link",{attrs:{to:{name:"manage-post",params:{id:i.id}}}},[l("el-button",{attrs:{size:"mini"}},[t._v("\n            查看文章\n          ")])],1),l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.handleEdit(i)}}},[t._v("编辑")]),l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.$emit("on-delete",i)}}},[t._v("删除")])]}}])})],1),t._t("pagination")],2)},n=[],a=(l("cadf"),l("551c"),l("097d"),{name:"BackPostListUI",inject:["handleEdit"],props:{list:{type:Array,required:!0},filters:{type:Object,required:!0}}}),r=a,o=l("2877"),s=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d225f45.03e0e5c0.js.map