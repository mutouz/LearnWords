webpackJsonp([4],{"8/IA":function(t,a){},ljMb:function(t,a){},ypjg:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Xxa5"),s=e.n(n),l=e("exGp"),i=e.n(l),r=e("1h8J"),o={name:"cus",data:function(){return{sel:{team_id:0,pre_page:10,page_num:1},topData:{},value:"",radio:"",time:"",isDia:!1,tabName:"创建",size:8,count:100,total:100,tableData:[]}},components:{},computed:{},created:function(){},activated:function(){},deactivated:function(){},mounted:function(){var t=this;return i()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.sel.team_id=t.$route.query.team_id,t.changeDate();case 2:case"end":return a.stop()}},a,t)}))()},methods:{changeDate:function(){var t=this;return i()(s.a.mark(function a(){var e;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(r.o)(t.sel);case 2:if(0==(e=a.sent).code){a.next=6;break}return t.$message({type:"error",message:e.msg}),a.abrupt("return");case 6:t.topData=e.data,t.tableData=e.data.list,t.total=e.data.total;case 9:case"end":return a.stop()}},a,t)}))()},indexMethod:function(t){return t+1},closeSetPas:function(){this.isDia=!1},handleCurrentChange:function(t){this.sel.page_num=t,this.changeDate()},ret:function(){this.$router.push({path:"/team",query:{sel:this.$route.params.sel}})}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("div",{staticClass:"menu-top"},[e("el-button",{staticClass:"el-icon-arrow-left return",on:{click:function(a){return t.ret()}}}),t._v("团队详情\n  ")],1),t._v(" "),e("div",{staticClass:"table-top radius_8"},[e("div",{staticClass:"table-top-con"},[e("div",{staticClass:"table-top-con-span"},[e("span",[t._v("团队名称")]),t._v(" "),e("p",[t._v(t._s(t.topData.team_name?t.topData.team_name:"无"))])]),t._v(" "),e("div",{staticClass:"table-top-con-span"},[e("span",[t._v("客户数量")]),t._v(" "),e("p",[t._v(t._s(t.topData.user_nums?t.topData.user_nums:0))])]),t._v(" "),e("div",{staticClass:"table-top-con-span"},[e("span",[t._v("创建时间")]),t._v(" "),e("p",[t._v(t._s(t.topData.create_time?t.topData.create_time:"无"))])]),t._v(" "),e("div",{staticClass:"table-top-con-span"},[e("span",[t._v("项目")]),t._v(" "),e("p",[t._v(t._s(t.topData.build_name?t.topData.build_name:"无"))])]),t._v(" "),e("div",{staticClass:"table-top-con-span"},[e("span",[t._v("团队人数")]),t._v(" "),e("p",[t._v(t._s(t.topData.team_nums?t.topData.team_nums:0))])]),t._v(" "),e("div",{staticClass:"table-top-con-span"},[e("span",[t._v("负责人")]),t._v(" "),e("p",[t._v(t._s(t.topData.leader?t.topData.leader:"无"))])]),t._v(" "),e("div",{staticClass:"table-top-con-span"},[e("span",[t._v("联系方式")]),t._v(" "),e("p",[t._v(t._s(t.topData.saller_tel?t.topData.saller_tel:"无"))])])])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"table-btn"},[[e("el-table",{staticClass:"font_size_16",staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{label:"序号",width:"100",align:"center",type:"index",index:t.indexMethod}}),t._v(" "),e("el-table-column",{attrs:{prop:"saller_name",label:"成员",width:"260"}}),t._v(" "),e("el-table-column",{attrs:{prop:"saller_tel",label:"账号",width:"260"}}),t._v(" "),e("el-table-column",{attrs:{prop:"nums",width:"260",label:"客户数量"}}),t._v(" "),e("el-table-column",{attrs:{prop:"title",width:"260",label:"职位"}}),t._v(" "),e("el-table-column",{attrs:{prop:"entry_date",width:"260",label:"加入时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"build_name",width:"260",label:"负责项目"}})],1)],t._v(" "),e("div",{staticClass:"page"},[e("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next,jumper","current-page":t.sel.page_num,"page-size":t.size,"page-count":t.count,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],2)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"menu-small-top"},[a("span",{staticClass:"font_size_weight_600"},[this._v("团队列表")])])}]};var p=e("VU/8")(o,c,!1,function(t){e("8/IA"),e("ljMb")},"data-v-544c6313",null);a.default=p.exports}});
//# sourceMappingURL=4.062fdbe4927854f3dfe1.js.map