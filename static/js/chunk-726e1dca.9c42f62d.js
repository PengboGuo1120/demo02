(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-726e1dca"],{"542f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticStyle:{margin:"20px 0px"}},[a("CategorySelect",{attrs:{show:!t.isShowTable},on:{getCategoryId:t.getCategoryId}})],1),a("el-card",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowTable,expression:"isShowTable"}]},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.category3Id},on:{click:t.addAttr}},[t._v("添加属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.attrList}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"attrName",label:"属性名称",width:"150"}}),a("el-table-column",{attrs:{prop:"prop",label:"属性值列表",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;e.$index;return t._l(r.attrValueList,(function(e,r){return a("el-tag",{key:e.id,staticStyle:{margin:"0px 20px"},attrs:{type:"success"}},[t._v(t._s(e.valueName))])}))}}])}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;e.$index;return[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.updateAttr(r)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"}})]}}])})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowTable,expression:"!isShowTable"}]},[a("el-form",{ref:"form",attrs:{inline:!0,"label-width":"80px",model:t.attrInfo}},[a("el-form-item",{attrs:{label:"属性名"}},[a("el-input",{attrs:{placeholder:"请输入属性名"},model:{value:t.attrInfo.attrName,callback:function(e){t.$set(t.attrInfo,"attrName",e)},expression:"attrInfo.attrName"}})],1)],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.attrInfo.attrName},on:{click:t.addAttrValue}},[t._v("添加属性值")]),a("el-button",{on:{click:function(e){t.isShowTable=!0}}},[t._v("取消")]),a("el-table",{staticStyle:{width:"100%",margin:"20px 0px"},attrs:{border:"",data:t.attrInfo.attrValueList}},[a("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"80"}}),a("el-table-column",{attrs:{width:"width",prop:"prop",label:"属性值名称"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row,n=e.$index;return[r.flag?a("el-input",{ref:n,attrs:{placeholder:"请输入属性值名称",size:"mini"},on:{blur:function(e){return t.toLook(r)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.toLook(r)}},model:{value:r.valueName,callback:function(e){t.$set(r,"valueName",e)},expression:"row.valueName"}}):a("span",{staticStyle:{display:"block"},on:{click:function(e){return t.toEdit(r,n)}}},[t._v(t._s(r.valueName))])]}}])}),a("el-table-column",{attrs:{width:"width",prop:"prop",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row,n=e.$index;return[a("el-popconfirm",{attrs:{title:"确定删除"+r.valueName+"?"},on:{onConfirm:function(e){return t.deleteAttrValue(n)}}},[a("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",size:"mini"},slot:"reference"})],1)]}}])})],1),a("el-button",{attrs:{type:"primary",disabled:t.attrInfo.attrValueList.length<1},on:{click:t.addOrUpdateAttr}},[t._v("保存")]),a("el-button",{on:{click:function(e){t.isShowTable=!0}}},[t._v("取消")])],1)])],1)},n=[],i=a("1da1"),o=(a("d3b7"),a("159b"),a("498a"),a("a434"),a("4de4"),a("96cf"),a("0644")),l=a.n(o),s={name:"Attr",data:function(){return{category1Id:"",category2Id:"",category3Id:"",attrList:[],isShowTable:!0,attrInfo:{attrName:"",attrValueList:[],categoryId:0,categoryLevel:3}}},methods:{getCategoryId:function(t){var e=t.categoryId,a=t.level;1==a?(this.category1Id=e,this.category2Id="",this.category3Id=""):2==a?(this.category2Id=e,this.category3Id=""):(this.category3Id=e,this.getAttrList())},getAttrList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.category1Id,r=t.category2Id,n=t.category3Id,e.next=3,t.$API.attr.reqAttrList(a,r,n);case 3:i=e.sent,200==i.code&&(t.attrList=i.data);case 5:case"end":return e.stop()}}),e)})))()},addAttrValue:function(){var t=this;this.attrInfo.attrValueList.push({attrId:this.attrInfo.id,valueName:"",flag:!0}),this.$nextTick((function(){t.$refs[t.attrInfo.attrValueList.length-1].focus()}))},addAttr:function(){this.isShowTable=!1,this.attrInfo={attrName:"",attrValueList:[],categoryId:this.category3Id,categoryLevel:3}},updateAttr:function(t){var e=this;this.isShowTable=!1,this.attrInfo=l()(t),this.attrInfo.attrValueList.forEach((function(t){e.$set(t,"flag",!1)}))},toLook:function(t){if(""!=t.valueName.trim()){var e=this.attrInfo.attrValueList.some((function(e){if(t!==e)return t.valueName==e.valueName}));e||(t.flag=!1)}else this.$message("请你输入一个正常的属性值")},toEdit:function(t,e){var a=this;t.flag=!0,this.$nextTick((function(){a.$refs[e].focus()}))},deleteAttrValue:function(t){this.attrInfo.attrValueList.splice(t,1)},addOrUpdateAttr:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.attrInfo.attrValueList=t.attrInfo.attrValueList.filter((function(t){if(""!=t.valueName)return delete t.flag,!0})),e.prev=1,e.next=4,t.$API.attr.reqAddOrUpdateAttr(t.attrInfo);case 4:t.isShowTable=!0,t.$message({type:"success",message:"保存成功"}),t.getAttrList(),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},c=s,u=a("2877"),d=Object(u["a"])(c,r,n,!1,null,"4ea4fec3",null);e["default"]=d.exports},a434:function(t,e,a){"use strict";var r=a("23e7"),n=a("23cb"),i=a("a691"),o=a("50c4"),l=a("7b0b"),s=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,m=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var a,r,u,d,f,p,y=l(this),v=o(y.length),w=n(t,v),I=arguments.length;if(0===I?a=r=0:1===I?(a=0,r=v-w):(a=I-2,r=m(h(i(e),0),v-w)),v+a-r>g)throw TypeError(b);for(u=s(y,r),d=0;d<r;d++)f=w+d,f in y&&c(u,d,y[f]);if(u.length=r,a<r){for(d=w;d<v-r;d++)f=d+r,p=d+a,f in y?y[p]=y[f]:delete y[p];for(d=v;d>v-r+a;d--)delete y[d-1]}else if(a>r)for(d=v-r;d>w;d--)f=d+r-1,p=d+a-1,f in y?y[p]=y[f]:delete y[p];for(d=0;d<a;d++)y[d+w]=arguments[d+2];return y.length=v-r+a,u}})}}]);