(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{FTGJ:function(e,a,t){"use strict";var n=t("2srY"),r=t.n(n),i=t("pMrf"),l=t("ERkP"),c=t.n(l),o=t("qtPF"),s=t("GA1y"),m=t("TbWa"),u=t("SeT9"),g=t("0eM1"),d=t("A6W8"),p=t("0/Rv"),f=Object(s.a)((function(e){var a=e.item,t=e.index;return c.a.createElement(i.a,{forceCtx:!0},(function(e,n){return c.a.createElement(c.a.Fragment,null,n.debug((function(){n.set("@item",a),n.set("@index",t)})),c.a.createElement("div",null,c.a.createElement(m.a,null)))}))}),(function(e){var a=e.item;return[e.index,r()(a,"id")]})),b=function(){return c.a.createElement(i.a,{className:"component advisorListY 779BD3C8-CDF6-4067-A5A5-C1B320DFF758"},(function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mb-3"},c.a.createElement(u.a,{data:a.get("paginationModel.items",[]),renderItem:f,keyExtractor:function(e,a){return r()(e,"id")+"_"+a},horizontal:!0})),c.a.createElement("div",{className:"hidden sm:block border-t border-divider"}),c.a.createElement("div",{className:"py-6 flex space-x-4 justify-center sm:justify-end items-center sm:items-end",gutter:24},c.a.createElement("div",{className:"text-right"},c.a.createElement(p.a,{xs:{rerender:function(){return c.a.createElement(g.a,{className:"w-10 sm:w-32",onClick:a.get("paginationModel.onPreviousPage"),name:"ink",disabled:!a.get("paginationModel.hasPreviousPage"),icon:d.a.icons({name:"arrow-left",size:20,fill:d.a.colors.brownGrey,className:"inline-block"})})}},md:{rerender:function(){return c.a.createElement(g.a,{className:"w-10 sm:w-32",onClick:a.get("paginationModel.onPreviousPage"),name:"ink",disabled:!a.get("paginationModel.hasPreviousPage"),icon:d.a.icons({name:"arrow-left",size:20,fill:d.a.colors.grayScale300,className:"inline-block mr-2"})},a.apply("i18n.t","Selection.prevPage"))}}},(function(e){return!!e&&e.rerender()}))),c.a.createElement("div",{className:"self-center text-center"},c.a.createElement("span",{className:"text-base font-normal text-sub"},a.apply("i18n.t","ProfileAdvisor.page")+" \n          "+(a.get("paginationModel.page")+1))),c.a.createElement("div",null,c.a.createElement(p.a,{xs:{rerender:function(){return c.a.createElement(g.a,{className:"w-10 sm:w-32",onClick:a.get("paginationModel.onNextPage"),name:"ink",disabled:!a.get("paginationModel.hasNextPage"),icon:d.a.icons({name:"arrow-right",size:20,fill:d.a.colors.grayScale300,className:"inline-block"})})}},md:{rerender:function(){return c.a.createElement(g.a,{className:"w-10 sm:w-32",onClick:a.get("paginationModel.onNextPage"),reverse:"true",name:"ink",disabled:!a.get("paginationModel.hasNextPage"),icon:d.a.icons({name:"arrow-right",size:20,fill:d.a.colors.grayScale300,className:"inline-block ml-2"})},a.apply("i18n.t","Selection.nextPage"))}}},(function(e){return!!e&&e.rerender()})))))}))},v=Object(o.a)({component:{rules:[["data",{data:{paginationModel:Object(o.c)((function(e){return e.get("advisorFilterPagingModel")}))}}]]}})(b);a.a=v},JF5H:function(e,a,t){"use strict";t.r(a),t.d(a,"component",(function(){return be}));var n,r,i=t("2srY"),l=t.n(i),c=t("pMrf"),o=t("ERkP"),s=t.n(o),m=t("qtPF"),u=t("p0qn"),g=t("0M34"),d=t("caL3"),p=t("0Q7h"),f=t("fP9s"),b=Object(m.a)({FilterForm:{rules:[["data",{data:{priceRange:Object(m.c)((function(e){return e.get("priceRangeOptions")})),form:Object(m.c)((function(e){return e.get("advisorFilterForm")})),canSubmit:Object(m.c)((function(e){return e.get("form.isValid")&&!e.get("form.isSubmitting")})),nameCategory:Object(m.c)((function(){var e=Object(p.a)(),a=l()(e,"params",{});return l()(a,"displayName","")}))}}]]}}),v=(t("dd5r"),t("Hfs8"),t("S7b9")),E=t("VKn7"),x=t("uxIu"),y=t("SCaQ"),h=t("du8h"),w=t("Q0AH"),N=t("8xyv"),O=t("mIbM"),j=t("Wghe"),P=t("bzvT"),S=t("A6W8"),F=t("j/s1"),_=t("0/Rv");function k(e,a){return a||(a=e.slice(0)),e.raw=a,e}var M=F.a.div(n||(n=k(["\n  .ant-select {\n    &:not(.ant-select-customize-input) .ant-select-selector {\n      border-radius: 8px;\n    }\n  }\n"]))),R=F.a.div(r||(r=k(["\n  .ant-slider {\n    margin-top: 0;\n    .ant-slider-rail {\n      background-color: ",";\n    }\n    .ant-slider-track {\n      background-color: ",";\n    }\n    .ant-slider-handle {\n      width: 20px;\n      height: 20px;\n      border-width: 4px;\n      border-color: ",";\n      margin-top: -8px;\n    }\n  }\n"])),S.a.colors.brandb.lighter,S.a.colors.brandb500,S.a.colors.brandb500),C=b((function(){return s.a.createElement(c.a,{className:"FilterForm"},(function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"content"},s.a.createElement("h2",{className:"mb-0 sm:mb-3 px-6 sm:px-0 text-xl sm:text-4xl font-semibold text-center text-brandb500"},a.apply("i18n.t","CategoryDetail.categoryDetailTitle")),s.a.createElement("h3",{className:"mb-6 sm:mb-3 py-0 sm:py-4 text-base sm:text-2xl font-semibold text-center text-ellipsis-1"},a.get("nameCategory")),s.a.createElement("div",{className:"block sm:hidden border-b border-divider"}),s.a.createElement(M,{className:"pt-6 sm:pt-0 w-full"},s.a.createElement(j.a,{form:a.get("form")},s.a.createElement(h.a,{className:"filter-form",id:"filter-form"},s.a.createElement(v.a,{gutter:24},s.a.createElement(E.a,{className:"gutter-row",xs:24,lg:9},s.a.createElement(w.a,{className:"mb-0",name:"priceRange"},s.a.createElement(R,null,s.a.createElement(N.a,Object.assign({name:"priceRange",className:"mt-0",range:!0},a.get("priceRangeOptions",{})))),s.a.createElement("div",{className:"flex justify-between"},s.a.createElement("span",null,Object(P.c)(a.get("priceRangeOptions.min"))),s.a.createElement("span",null,Object(P.c)(a.get("priceRangeOptions.max")))))),s.a.createElement(E.a,{className:"gutter-row",xs:24,lg:9},s.a.createElement(w.a,{name:"rating"},s.a.createElement(O.a,{name:"rating",style:{width:"100%"},placeholder:a.apply("i18n.t","Selection.vote"),size:"large",className:"text-black shadow-sm w-full flex-nowrap"},s.a.createElement(O.a.Option,{value:""},a.apply("i18n.t","Selection.noApply")),s.a.createElement(O.a.Option,{value:"2"},s.a.createElement(x.a,{disabled:!0,allowHalf:!0,value:1})),s.a.createElement(O.a.Option,{value:"4"},s.a.createElement(x.a,{disabled:!0,allowHalf:!0,value:2})),s.a.createElement(O.a.Option,{value:"6"},s.a.createElement(x.a,{disabled:!0,allowHalf:!0,value:3})),s.a.createElement(O.a.Option,{value:"8"},s.a.createElement(x.a,{disabled:!0,allowHalf:!0,value:4})),s.a.createElement(O.a.Option,{value:"10"},s.a.createElement(x.a,{disabled:!0,allowHalf:!0,value:5}))))),s.a.createElement(E.a,{className:"text-right gutter-row",xs:24,lg:6},s.a.createElement(_.a,{xs:{size:"small"},lg:{size:"medium"}},(function(e){return s.a.createElement(y.a,Object.assign({onClick:a.get("form.handleSubmit"),disabled:!a.get("canSubmit"),loading:a.get("form.isSubmitting"),block:!0,icon:S.a.icons({name:"filter",fill:S.a.colors.brandb500,className:"inline-block mr-2"})},e),a.apply("i18n.t","Selection.filterDetail"))})))))))))}))})),A=(t("/sgr"),t("YJP+"),t("HiP7"),t("Y7xb"),t("LnO1"),t("97js"),t("izFX"),t("ND9x")),z=t.n(A);function H(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return L(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var D=Object(m.a)({banner:{rules:[["data",{data:{categoryInfomation:Object(m.c)((function(){var e=Object(p.a)(),a=l()(e,"params",{}),t=l()(a,[].concat(H(z()("image")),["fixed"]),[]);return"https:"+l()(t,"src","//via.placeholder.com/1600x50")}))}}]]}}),I=t("EPq7"),q=t("cDDm"),V=D((function(){return s.a.createElement(c.a,{className:"banner"},(function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"relative content"},s.a.createElement(q.a,{opacity:30}),s.a.createElement(_.a,{md:{ratio:.5,width:768,height:384},xs:{ratio:.6,width:420,height:252},lg:function(){return{ratio:.4,width:1200,height:480}}},(function(e){return s.a.createElement(I.a,Object.assign({size:"cover",src:a.get("categoryInfomation"),className:"w-full hero-image",alt:"banner",background:!0},e))}))))}))})),J=t("FTGJ"),Q=t("hjqa"),T=function(){return s.a.createElement(c.a,{className:"pageContainer"},(function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement(V,null),s.a.createElement("div",{className:"pb-0 wrapper app-row"},s.a.createElement("div",{className:"py-0"},s.a.createElement(C,null)),s.a.createElement("div",{className:"my-2"},s.a.createElement("p",{className:"font-normal text-base sm:font-semibold text-main"},a.get("advisorFilterPagingModel.items.length")," ",a.apply("i18n.t","Selection.result")),s.a.createElement("div",{className:"block sm:hidden border-t border-divider"}))),s.a.createElement("div",{className:"sm:wrapper app-row"},s.a.createElement(J.a,null)),s.a.createElement("div",{className:"none-container"},s.a.createElement(f.a,null,(function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null,(function(a,t){return s.a.createElement(s.a.Fragment,null,t.debug((function(){var a=e.for("categories")(t.get("categories"),[]);t.set("categories",a)})),s.a.createElement(Q.a,null))})))}))))}))},G=(t("4VHr"),t("whR3")),W=t.n(G),Y=t("MG70"),B=t.n(Y),$=t("uZih"),K=t.n($),U=t("EnJe"),X=t.n(U),Z=t("3dHC"),ee=t.n(Z),ae=t("mbB6"),te=t.n(ae),ne=t("VtSi"),re=t.n(ne),ie=(t("586z"),t("58i5"),t("jqpZ")),le=t("23rs"),ce=t("s2aS"),oe=t("O+QE"),se=t("ljKo"),me=t("L7b9"),ue=t("g1Gz");function ge(e,a,t,n,r,i,l){try{var c=e[i](l),o=c.value}catch(s){return void t(s)}c.done?a(o):Promise.resolve(o).then(n,r)}function de(e){return function(){var a=this,t=arguments;return new Promise((function(n,r){var i=e.apply(a,t);function l(e){ge(i,n,r,l,c,"next",e)}function c(e){ge(i,n,r,l,c,"throw",e)}l(void 0)}))}}var pe=Object(m.a)({pageContainer:{rules:[["data",{data:{loadingModel:Object(m.c)(Object(ie.a)((function(){return{fetchProfile:!0}}))),categories:Object(m.c)((function(e){var a=e.apply("ctf.getNodes","allContentfulCategory.nodes",[]),t=te()(a,"id").map((function(e){return'"'+e+'"'})).join(",");return Object(ue.a)((function(){return de(re.a.mark((function e(){var a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le.a.find("where: { id: {_in: ["+t+"]}}, limit: 20","id avatar_url display_name icon slug");case 3:return a=e.sent,e.abrupt("return",a.toObject());case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))}),[],[])})),priceRangeOptions:Object(m.c)((function(){var e={min:1e5,max:5e6};return e.step=(e.max-e.min)/20,e.defaultValue=[e.min+e.step,e.max-e.step],e})),advisorFilterForm:Object(m.c)((function(e){var a,t=Object(p.a)(),n=l()(t,"params",{}),r=l()(n,"id",""),i=ee()(X()(l()(n,"service",""))),c=Object(se.e)({initialValues:{category:r,priceRange:[l()(n,"min",e.get("priceRangeOptions.min",0)),l()(n,"max",e.get("priceRangeOptions.max",0))],rating:"",service:i},onSubmit:(a=de(re.a.mark((function a(n,r){var i,l,o,s;return re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(i=e.apply("REF.getRef","advisorFilterPagingModel"))){a.next=5;break}return a.next=5,i.onLoadPage(0);case 5:l=c.values.priceRange,o=l[0],s=l[1],t.navigate(t.to(t.location.pathname,Object.assign({},K()(c.values,["priceRange"]),{min:o,max:s}))),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),r.setStatus({error:a.t0});case 13:case"end":return a.stop()}}),a,null,[[0,10]])}))),function(e,t){return a.apply(this,arguments)}),validationSchema:me.object().shape({})});return c})),getFilterArgs:Object(m.c)((function(e){return function(){var a=e.get("advisorFilterForm.values",{}),t=l()(a,"priceRange.0",""),n=l()(a,"priceRange.1",""),r=l()(a,"rating","");return Object.assign({category:X()(l()(a,"category","")).join(","),service:X()(l()(a,"service","")).join(",")},t?{min_service_price:B()(t)}:{},n?{max_service_price:B()(n)}:{},r?{min_review_score:B()(r)}:{})}})),advisorFilterPagingModel:Object(m.c)((function(e){var a=s.a.useRef({});W()(a.current,{getFilterArgs:e.get("getFilterArgs")});var t=s.a.useMemo((function(){return ce.a.fromConfig({Model:oe.a,dataQuery:"\n                    search_advisor(args: $args, where: {is_active: {_eq: true}}, order_by: {review_agg: {avg_score: desc}}) {\n                      id\n                      profile {\n                        id\n                        display_name\n                        avatar_url\n                        ref_ctf_eid\n                        advisor_id\n                        created_at\n                        intro_text\n                        detail_html\n                        slug\n                        advisor_number\n                        appraisal_type\n                        advisor {\n                          transactions_aggregate {\n                            aggregate {\n                              count\n                            }\n                          }\n                        }\n                      }\n                      services {\n                        price {\n                          per_unit\n                          per_amount\n                          price_currency\n                          price_amount\n                          id\n                          service {\n                            id\n                          }\n                        }\n                      }\n                      services_aggregate {\n                        aggregate {\n                          count\n                        }\n                      }\n                      review_agg {\n                        avg_score\n                      }\n                    }\n                  ",aggQuery:"\n                    search_advisor_aggregate(args: $args) {\n                      aggregate {\n                        count\n                      }\n                    }\n                  ",pageSize:12,varsList:"$args: search_advisor_args!",getVars:function(){return{args:a.current.getFilterArgs()}}})}),[a]);t.hookState(),s.a.useEffect((function(){t.onLoadPageHandler(0)}),[t]);var n={items:t.useState("items"),page:t.useState("page"),total:t.useState("total"),isLoading:t.useState("isLoading"),hasPreviousPage:t.useState("hasPreviousPage"),hasNextPage:t.useState("hasNextPage"),onRefresh:function(){return t.onRefresh.apply(t,arguments)},onPreviousPage:function(){return t.onPreviousPageHandler.apply(t,arguments)},onNextPage:function(){return t.onNextPageHandler.apply(t,arguments)},onLoadPage:function(){return t.onLoadPageHandler.apply(t,arguments)}};return e.apply("REF.setRef","advisorFilterPagingModel",n),n}))}}]]},isLoading:{rules:[["display",{display:Object(m.c)((function(e){return e.apply("loadingModel.isLoading")}))}]]},notLoading:{rules:[["display",{display:Object(m.c)((function(e){return!e.apply("loadingModel.isLoading")}))}]]}})(T),fe=t("bQnF"),be=function(e){var a=l()(e,"pageContext");return Object(p.a)().setPageContext(a),s.a.createElement(u.a,null,s.a.createElement(d.a,{location:e.location,PageData:fe.a},s.a.createElement(c.a,null,(function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{pageData:a.apply("ctf.findPage",{name:"Homepage"})}),s.a.createElement(d.a.POS,{name:"app-header"},a.apply("ctf.renderSection",{name:"articleNavbarSection"})),s.a.createElement(d.a.POS,{name:"app-body"},s.a.createElement(pe,null)),s.a.createElement(d.a.POS,{name:"app-footer"},a.apply("ctf.renderSection",{name:"articleFooterSection"})))}))))};a.default=be},MG70:function(e,a,t){var n=t("IBsm"),r=t("dw5g"),i=/^\s+/,l=n.parseInt;e.exports=function(e,a,t){return t||null==a?a=0:a&&(a=+a),l(r(e).replace(i,""),a||0)}},hjqa:function(e,a,t){"use strict";var n=t("EnJe"),r=t.n(n),i=t("3dHC"),l=t.n(i),c=t("2srY"),o=t.n(c),s=(t("cW0p"),t("7lS7"),t("yVXO"),t("qtPF")),m=t("0Q7h"),u=Object(s.a)({FilterCategories:{rules:[["data",{data:{categoryOptions:Object(s.c)((function(e){var a=Object(m.a)(),t=o()(a,"params",{}),n=e.get("categories",[]),i=l()(r()(o()(t,"id","")));return n.filter((function(e){return!i.includes(e.id)}))}))}}]]}}),g=(t("586z"),t("pMrf")),d=t("ERkP"),p=t.n(d),f=t("S7b9"),b=t("VKn7"),v=t("A6W8"),E=t("NNSM"),x=function(){return p.a.createElement(g.a,{className:"FilterCategories"},(function(e,a){return p.a.createElement(p.a.Fragment,null,!!a.get("categoryOptions.length")&&p.a.createElement("div",{className:"bg-background1 py-6 sm:py-16"},p.a.createElement("div",{className:"text-brandb500 px-6 sm:px-0 font-semibold sm:font-medium text-xl sm:text-4xl text-center mb-3"},a.apply("i18n.t","Category.suggestionCategoriesTitle")),p.a.createElement("div",{className:"wrapper app-row"},p.a.createElement(f.a,{gutter:[24,24]},a.get("categoryOptions",[]).map((function(e){return p.a.createElement(b.a,{lg:8,md:12,sm:24,xs:12,key:e.id},p.a.createElement(E.a,{to:a.apply("routeStore.toUrl","category",e)},p.a.createElement("div",{className:"py-4 text-center rounded-xl bg-transparent sm:bg-brandb-lightest hover:bg-brandb-lighter"},p.a.createElement("div",{className:"flex justify-center align-center mb-3"},v.a.icons({name:o()(e,"icon",""),size:48,fill:v.a.colors.brandb500})),p.a.createElement("p",{className:"text-brandb500 font-semibold text-sm sm:text-xl"},o()(e,"display_name","")))))}))))))}))};a.a=u(x)}}]);
//# sourceMappingURL=component---src-templates-category-index-js-709b40e82950cd772df7.js.map