webpackJsonp([2],{"1o9q":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),l=a.n(s),r=a("Xxa5"),n=a.n(r),i=a("exGp"),u=a.n(i),o=a("yclV"),c=a("1h8J"),p={name:"cus",data:function(){return{user:null,dis:!1,isLoad:!1,total:100,value:"",radio:"",time:"",isDia:!1,sel:{user_name:null,user_tel:null,create_time:null,user_status:null,channel:null,saller_name:null,pre_page:10,page_num:1},tabName:"创建团队",data:{user_id:0,memo:null},rules:{memo:[{required:!0,message:"跟进内容不可为空",trigger:"blur"},{min:2,max:300,message:"长度在 2 到 300 个字符",trigger:"blur"}]},channels:[{val:null,lab:"全部"},{val:"微信",lab:"微信"},{val:"实体广告",lab:"实体广告"},{val:"朋友推荐",lab:"朋友推荐"},{val:"自己发现",lab:"自己发现"},{val:"其他售楼处推荐",lab:"其他售楼处推荐"},{val:"电话咨询",lab:"电话咨询"},{val:"顾问邀请",lab:"顾问邀请"}],status:[{val:null,lab:"全部"},{val:"A类",lab:"A类"},{val:"B类",lab:"B类"},{val:"C类",lab:"C类"},{val:"垃圾",lab:"垃圾"},{val:"签约",lab:"签约"},{val:"认筹",lab:"认筹"},{val:"认购",lab:"认购"},{val:"回款",lab:"回款"}],options:[],leaders:[],tableData:[]}},components:{},computed:{},created:function(){this.getUser()},mounted:function(){var e=this;return u()(n.a.mark(function t(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$route.query.sel&&(e.sel=e.$route.query.sel),t.next=3,e.changeDate();case 3:return t.next=5,e.chanLeader();case 5:case"end":return t.stop()}},t,e)}))()},activated:function(){},deactivated:function(){},methods:{getUser:function(){var e=Object(o.a)("user"),t=e?JSON.parse(e):{};this.user=t},init:function(){this.isLoad=!1,this.data={user_id:0,memo:null}},changeDate:function(){var e=this;return u()(n.a.mark(function t(){var a,s,r,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=l()(e.sel),(s=JSON.parse(a)).create_time&&(r=new Date(s.create_time),s.create_time=r.toLocaleDateString()),t.next=5,Object(c.h)(s);case 5:if(0==(i=t.sent).code){t.next=9;break}return e.$message({type:"error",message:i.msg}),t.abrupt("return");case 9:e.tableData=i.data.list,e.total=i.data.total;case 11:case"end":return t.stop()}},t,e)}))()},indexMethod:function(e){return e+1},handleCurrentChange:function(e){this.sel.page_num=e,this.changeDate()},set:function(e){var t=this;return u()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.tabName="新建跟进",t.dis=!0,t.data.user_id=e.user_id,t.isDia=!0,t.isLoad=!1;case 5:case"end":return a.stop()}},a,t)}))()},showTab:function(e){var t=this;return u()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.$router.push({name:"followUpRecord",query:{user_id:e.user_id},params:{sel:t.sel}});case 1:case"end":return a.stop()}},a,t)}))()},add:function(){this.isDia=!0,this.tabName="新建跟进",this.init(),this.dis=!1},closeSet:function(){this.isDia=!1,this.$refs.ruleForm&&this.$refs.ruleForm.resetFields()},upOk:function(e){var t=this;return u()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.$refs[e].validate(function(){var e=u()(n.a.mark(function e(a){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=21;break}if(t.data.memo){e.next=4;break}return t.$message({type:"error",message:"跟进内容不可为空"}),e.abrupt("return");case 4:if(!(t.data.memo.length>300)){e.next=7;break}return t.$message({type:"error",message:"跟进内容不可大于300"}),e.abrupt("return");case 7:if(t.isLoad=!0,s=void 0,"新建跟进"!=t.tabName){e.next=13;break}return e.next=12,Object(c.b)(t.data);case 12:s=e.sent;case 13:if(t.isLoad=!1,0==s.code){e.next=17;break}return t.$message({type:"error",message:s.msg}),e.abrupt("return");case 17:t.$message({type:"success",message:"设置成功"}),t.init(),t.changeDate(),t.isDia=!1;case 21:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}},a,t)}))()},reset:function(){var e=this.sel;e.user_name=null,e.user_tel=null,e.create_time=null,e.user_status=null,e.channel=null,e.saller_name=null,this.sel=e},chanTeam:function(){var e=this;return u()(n.a.mark(function t(){var a,s,l;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(o.a)("user"),s=a?JSON.parse(a):{},t.next=4,selectGroups({build_id:s.build_id});case 4:if(0==(l=t.sent).code){t.next=8;break}return e.$message({type:"error",message:l.msg}),t.abrupt("return");case 8:Array.isArray(l.data)?e.options=l.data:e.options=[],e.options.unshift(null);case 10:case"end":return t.stop()}},t,e)}))()},chanLeader:function(){var e=this;return u()(n.a.mark(function t(){var a,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.n)({});case 2:if(0==(a=t.sent).code){t.next=6;break}return e.$message({type:"error",message:a.msg}),t.abrupt("return");case 6:for(Array.isArray(a.data)||(e.leaders=[]),s=0;s<a.data.length;s++)e.leaders.push(a.data[s][1]);e.leaders.unshift(null);case 9:case"end":return t.stop()}},t,e)}))()}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%",height:"100%"}},[a("div",{staticClass:"menu-top"},[e._v("客户管理")]),e._v(" "),a("div",{staticClass:"table-top radius_8"},[a("div",{staticClass:"table-top-left"},[a("div",{staticClass:"table-top-left-top"},[a("div",{staticClass:"div_p"},[a("span",{staticClass:"font_size_20"},[e._v("客户名称")]),e._v(" "),a("el-input",{staticClass:"inp",attrs:{placeholder:"请输入内容"},model:{value:e.sel.user_name,callback:function(t){e.$set(e.sel,"user_name",t)},expression:"sel.user_name"}})],1),e._v(" "),a("div",{staticClass:"div_p"},[a("span",{staticClass:"font_size_20"},[e._v("联系方式")]),e._v(" "),a("el-input",{staticClass:"inp",attrs:{placeholder:"请输入内容"},model:{value:e.sel.user_tel,callback:function(t){e.$set(e.sel,"user_tel",t)},expression:"sel.user_tel"}})],1),e._v(" "),a("div",{staticClass:"div_p"},[a("span",{staticClass:"font_size_20"},[e._v("创建时间")]),e._v(" "),a("el-date-picker",{staticClass:"inp",attrs:{type:"date",placeholder:"选择日期"},model:{value:e.sel.create_time,callback:function(t){e.$set(e.sel,"create_time",t)},expression:"sel.create_time"}})],1)]),e._v(" "),a("div",{staticClass:"table-top-left-btn"},[a("div",{staticClass:"div_p"},[a("span",{staticClass:"font_size_20"},[e._v("状态")]),e._v(" "),a("el-select",{staticClass:"inp",attrs:{placeholder:"请选择"},model:{value:e.sel.user_status,callback:function(t){e.$set(e.sel,"user_status",t)},expression:"sel.user_status"}},e._l(e.status,function(e){return a("el-option",{key:e.lab,attrs:{label:e.lab,value:e.val}})}),1)],1),e._v(" "),a("div",{staticClass:"div_p"},[a("span",{staticClass:"font_size_20"},[e._v("渠道")]),e._v(" "),a("el-select",{staticClass:"inp",attrs:{placeholder:"请选择"},model:{value:e.sel.channel,callback:function(t){e.$set(e.sel,"channel",t)},expression:"sel.channel"}},e._l(e.channels,function(e){return a("el-option",{key:e.lab,attrs:{label:e.lab,value:e.val}})}),1)],1),e._v(" "),a("div",{staticClass:"div_p"},[a("span",{staticClass:"font_size_20"},[e._v("销售顾问")]),e._v(" "),a("el-select",{staticClass:"inp",attrs:{placeholder:"请选择"},model:{value:e.sel.saller_name,callback:function(t){e.$set(e.sel,"saller_name",t)},expression:"sel.saller_name"}},e._l(e.leaders,function(e,t){return a("el-option",{key:t,attrs:{label:null==e?"全部":e,value:e}})}),1)],1)])]),e._v(" "),a("div",{staticClass:"table-top-rig"},[a("el-button",{staticClass:"but",on:{click:function(t){return e.reset()}}},[e._v("重置")]),e._v(" "),a("el-button",{staticClass:"but",attrs:{type:"primary"},on:{click:function(t){return e.changeDate()}}},[e._v("查询")])],1)]),e._v(" "),a("div",{staticClass:"menu-small-top"},[e._v("客户列表")]),e._v(" "),a("div",{staticClass:"table-btn"},[[a("el-table",{staticClass:"font_size_16",staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{label:"序号",width:"100",align:"center",prop:"NO"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_name",label:"客户名称",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_tel",label:"联系方式",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",width:"150",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_status",width:"150",label:"客户状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"source",width:"150",label:"客户来源"}}),e._v(" "),a("el-table-column",{attrs:{prop:"channel",width:"150",label:"获取渠道"}}),e._v(" "),a("el-table-column",{attrs:{prop:"purpose",width:"150",label:"购房用途"}}),e._v(" "),a("el-table-column",{attrs:{prop:"saller_name",width:"150",label:"销售顾问"}}),e._v(" "),a("el-table-column",{attrs:{prop:"follow_time",width:"150",label:"上次跟进时间"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[100!=e.user.auth?a("el-button",{staticClass:"font_size_14",attrs:{type:"text",size:"small"},on:{click:function(a){return e.showTab(t.row)}}},[e._v("查看详情")]):e._e(),e._v(" "),200==e.user.auth?a("el-button",{staticClass:"font_size_14",attrs:{type:"text",size:"small"},on:{click:function(a){return e.set(t.row)}}},[e._v("新建跟进")]):e._e()]}}])})],1)],e._v(" "),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"total,prev, pager, next,jumper","page-size":e.sel.pre_page,"current-page":e.sel.page_num,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],2),e._v(" "),a("el-dialog",{attrs:{"modal-append-to-body":!1,title:e.tabName,visible:e.isDia,width:"420px","before-close":e.closeSet},on:{"update:visible":function(t){e.isDia=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.data,rules:e.rules,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"新建跟进",prop:"memo"}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.data.memo,callback:function(t){e.$set(e.data,"memo",t)},expression:"data.memo"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeSet()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.isLoad},on:{click:function(t){return e.upOk("ruleForm")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var v=a("VU/8")(p,d,!1,function(e){a("EI5x"),a("Lo6Y")},"data-v-b0d2a328",null);t.default=v.exports},EI5x:function(e,t){},Lo6Y:function(e,t){}});
//# sourceMappingURL=2.e15b9d0b2412e8950fb4.js.map