(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76a70d8c"],{"0fd3e":function(t,e,a){},"1d33":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-button",{staticStyle:{margin:"10px 0px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.showDialog}},[t._v("添加")]),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.list}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80px",align:"center"}}),a("el-table-column",{attrs:{prop:"tmName",label:"品牌名称",width:"width"}}),a("el-table-column",{attrs:{prop:"logoUrl",label:"品牌LOGO",width:"width"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;t.$index;return[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.logoUrl,alt:""}})]}}])}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;e.$index;return[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.updateTradeMark(r)}}},[t._v("修改")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.deleteTradeMark(r)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":t.page,total:t.total,"page-size":t.limit,"pager-count":7,"page-sizes":[3,5,10],layout:"prev, pager, next, jumper,->,sizes,total"},on:{"current-change":t.getPageList,"size-change":t.handleSizeChange}}),a("el-dialog",{attrs:{title:t.tmForm.id?"修改品牌":"添加品牌",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"ruleForm",staticStyle:{width:"80%"},attrs:{model:t.tmForm,rules:t.rules}},[a("el-form-item",{attrs:{label:"品牌名称","label-width":"100px",prop:"tmName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.tmForm.tmName,callback:function(e){t.$set(t.tmForm,"tmName",e)},expression:"tmForm.tmName"}})],1),a("el-form-item",{attrs:{label:"品牌LOGO","label-width":"100px",prop:"logoUrl"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/dev-api/admin/product/fileUpload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.tmForm.logoUrl?a("img",{staticClass:"avatar",attrs:{src:t.tmForm.logoUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg/png文件，且不超过500kb ")])])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addOrUpdateTradeMark}},[t._v("确 定")])],1)],1)],1)},i=[],o=a("5530"),n=a("1da1"),l=(a("96cf"),{name:"tradeMark",data:function(){var t=function(t,e,a){e.length<2||e.length>10?a(new Error("品牌名称2-10位")):a()};return{page:1,limit:3,total:0,list:[],dialogFormVisible:!1,tmForm:{tmName:"",logoUrl:""},rules:{tmName:[{required:!0,message:"请输入品牌名称",trigger:"blur"},{validator:t,trigger:"change"}],logoUrl:[{required:!0,message:"请选择品牌的图片"}]}}},mounted:function(){this.getPageList()},methods:{getPageList:function(){var t=arguments,e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,i,o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,e.page=r,i=e.page,o=e.limit,a.next=5,e.$API.trademark.reqTradeMarkList(i,o);case 5:n=a.sent,200==n.code&&(e.total=n.data.total,e.list=n.data.records);case 7:case"end":return a.stop()}}),a)})))()},handleSizeChange:function(t){this.limit=t,this.getPageList()},showDialog:function(){this.dialogFormVisible=!0,this.tmForm={tmName:"",logoUrl:""}},updateTradeMark:function(t){this.dialogFormVisible=!0,this.tmForm=Object(o["a"])({},t)},handleAvatarSuccess:function(t,e){this.tmForm.logoUrl=t.data},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},addOrUpdateTradeMark:function(){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return t.dialogFormVisible=!1,e.next=4,t.$API.trademark.reqAddOrUpdateTradeMark(t.tmForm);case 4:r=e.sent,200==r.code&&(t.$message({type:"success",message:t.tmForm.id?"修改品牌成功":"添加品牌成功"}),t.getPageList(t.tmForm.id?t.page:1)),e.next=10;break;case 8:return console.log("error submit!!"),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},deleteTradeMark:function(t){var e=this;this.$confirm("你确定删除".concat(t.tmName,"?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$API.trademark.reqDeleteTradeMark(t.id);case 2:r=a.sent,200==r.code&&(e.$message({type:"success",message:"删除成功!"}),e.getPageList(e.list.length>1?e.page:e.page-1));case 4:case"end":return a.stop()}}),a)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}}),s=l,c=(a("f64b"),a("2877")),u=Object(c["a"])(s,r,i,!1,null,null,null);e["default"]=u.exports},f64b:function(t,e,a){"use strict";a("0fd3e")}}]);