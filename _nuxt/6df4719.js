(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{892:function(e,t,r){"use strict";r.r(t);var c=r(1),o=r(0),n=r(30),l=(r(25),r(15),r(17),r(7),r(6),r(3),r(2),r(8),r(4),r(9),r(5));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={data:function(){return{models:[{text:"เลือกประเภทการเรียนรู้ (Select training type)",value:null}].concat(Object(n.a)(this.$extensions.map((function(e){return{text:e.title,value:e.id}})))),selectType:null,projectList:[],projectToDelete:null}},created:function(){},computed:j(j(j({},Object(l.e)("project",["project","listProjectModal","isLoading","isSaving"])),Object(l.e)(["currentDevice"])),{},{projectState:function(){return"BROWSER"==this.currentDevice?!!this.project.id:!!this.projectToDelete}}),methods:j(j(j(j({},Object(l.d)("project",["setProject"])),Object(l.d)("dataset",["setDataset"])),Object(l.b)("dataset",["clearDataset"])),{},{clearForm:function(){this.selectType=null,this.projectToDelete=null,this.projectList=[]},deleteProject:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BROWSER"!=e.currentDevice){t.next=5;break}return e.setDataset({project:"",datasetType:null,data:[],baseURL:""}),t.next=4,e.clearDataset();case 4:e.setProject({name:"",description:"",id:null,projectType:null,lastUpdate:null,dataset:[],model:null,labelFile:"",modelLabel:[],labels:"",pretrained:"",tfjs:"",edgetpu:"",options:{},code:"",workspace:"",anchors:[]});case 5:case"end":return t.stop()}}),t)})))()},fetchProject:function(){}})},O=r(11),component=Object(O.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{id:"delete-project-modal",title:"ลบโปรเจค","ok-disabled":!e.projectState},on:{show:e.clearForm,hidden:e.clearForm,ok:e.deleteProject}},["BROWSER"==e.currentDevice?r("p",{staticClass:"p-notice-color"},[e._v("ข้อมูลโปรเจคนี้ทั้งหมดจะหายไป! ต้องการที่จะลบโปรเจคหรือไม่ ?")]):r("form",{on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[r("b-form-group",{attrs:{label:"Project type"}},[r("b-form-select",{attrs:{id:"project-type",options:e.models,required:""},model:{value:e.selectType,callback:function(t){e.selectType=t},expression:"selectType"}})],1),e._v(" "),r("p",{staticClass:"p-notice-color small"},[e._v("* เลือกโปรเจคที่ต้องการลบ")])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);