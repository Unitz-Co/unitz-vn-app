(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{gHPf:function(e,t,a){"use strict";a.r(t);var n,r=a("pMrf"),l=a("ERkP"),c=a.n(l),i=a("qtPF"),s=a("fP9s"),o=a("2srY"),m=a.n(o),u=(a("Hfs8"),a("GA1y")),d=a("TbWa"),g=a("SeT9"),f=a("S7b9"),p=a("VKn7"),x=a("SCaQ"),b=a("0/Rv"),E=Object(u.a)((function(e){var t=e.item,a=e.index;return c.a.createElement(r.a,{forceCtx:!0},(function(e,n){return c.a.createElement(c.a.Fragment,null,n.debug((function(){n.set("@item",t),n.set("@index",a)})),c.a.createElement("div",null,c.a.createElement(d.a,null)))}))}),(function(e){var t=e.item;return[e.index,m()(t,"id")]})),v=function(){return c.a.createElement(r.a,{className:"component advisorListX 779BD3C8-CDF6-4067-A5A5-C1B320DFF758"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"sm:w-full py-6 lg:py-16"},c.a.createElement("h2",{className:"mb-6 lg:mb-10 text-xl md:text-2xl lg:text-4xl font-semibold text-center text-main"},t.get("sectionData.section.shortText")),c.a.createElement("div",{className:"block mx-4 md:mx-0 lg:hidden py-0 border-b"}),c.a.createElement(g.a,{data:t.get("paginationModel.items",[]),renderItem:E,keyExtractor:function(e,t){return m()(e,"id")+"_"+t},horizontal:!0}),c.a.createElement("div",{className:"sm:app-row px-4 lg:px-0 py-0"},c.a.createElement(f.a,{className:"sm:justify-center mt-6 lg:mt-14",gutter:{xs:10,md:10,lg:24}},t.get("paginationModel.hasNextPage")&&c.a.createElement(p.a,{xs:12,md:12,lg:6},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({block:!0,onClick:t.get("paginationModel.onLoadMore"),loading:t.get("paginationModel.isLoading")},e),t.apply("i18n.t","Advisor.watchMore"))}))),c.a.createElement(p.a,{xs:12,md:12,lg:6},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({block:!0,onClick:t.get("advisorSearchForm.submitForm")},e),t.apply("i18n.t","Advisor.fitWithYou"))})))))))}))},y=Object(i.a)({component:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"HighlightAdvisor"})}})),paginationModel:Object(i.c)((function(e){return e.get("advisorPagingModel")}))}}]]}})(v),h=(a("dd5r"),a("NNSM")),N=a("j/s1"),w=a("A6W8"),j=a("of1U");var O,S,T,k=N.a.div(n||(O=["\n  p {\n    p {\n      font-weight: 400;\n      color: ",";\n      margin-bottom: 0;\n      span {\n        color: ",";\n        font-weight: 400;\n      }\n    }\n  }\n"],S||(S=O.slice(0)),O.raw=S,n=O),w.a.colors.main,w.a.colors.main),C=function(){return c.a.createElement(r.a,{className:"categoryItem"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{to:t.apply("routeStore.toUrl","category",t.get("@item"))},c.a.createElement(f.a,{className:"py-1 sm:py-3",gutter:24},c.a.createElement(p.a,{xs:6,md:6,lg:5},c.a.createElement("div",{className:"sm:flex sm:justify-center sm:items-center"},c.a.createElement(s.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{size:{xs:68,sm:50,md:72,lg:72,xl:72,xxl:100},src:t.get("@item.avatarUrl")}))})))),c.a.createElement(p.a,{xs:18,md:17,lg:18},c.a.createElement("div",null,c.a.createElement("h5",{className:"mb-0 text-sm sm:text-base font-semibold sm:font-medium text-main"},t.get("@item.displayName")),c.a.createElement(k,null,c.a.createElement("div",{className:"mb-2 text-sm sm:text-base text-ellipsis-3 text-main"},t.get("@item.description"))))))))}))},F=a("tTwn"),_={displayName:function(){return function(e){return m()(e,"displayName","--")}},id:function(){return function(e){return m()(e,"sys.id","")}},name:function(){return function(e){return m()(e,"sys.id","")}},photoUrl:function(e){return function(t){var a=_.displayName(e)(t);return m()(t,"avatarUrl.url","https://ui-avatars.com/api/?name="+a)}},avatarUrl:function(e){return function(t){var a=_.displayName(e)(t);return m()(t,"avatarUrl.fixed.src","https://ui-avatars.com/api/?name="+a)}},renderHTMLText:function(){return function(e){var t=m()(e,"longText.longText","");if(!t)return"";var a=F(t);return c.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}})}},icon:function(){return function(e){return m()(e,"icon","")}},longText:function(){return function(e){var t=m()(e,"longText","");return t?F(t):""}}},P=_,L=Object(i.a)({categoryItem:{rules:[["data",{data:{"@item":Object(i.c)((function(e){var t=e.get("@item");return Object.assign({},t,{avatarUrl:P.avatarUrl(e)(t),displayName:P.displayName(e)(t),description:P.renderHTMLText(e)(t)})}))}}]]}})(C),M=Object(u.a)((function(e){var t=e.item,a=e.index;return c.a.createElement(p.a,{lg:12,md:12,sm:24,className:"mb-4 sm:mb-0 border-b sm:border-b-0 lg:px-0"},c.a.createElement(r.a,{forceCtx:!0},(function(e,n){return c.a.createElement(c.a.Fragment,null,n.debug((function(){n.set("@item",t),n.set("@index",a)})),c.a.createElement(L,null))})))}),(function(e){var t=e.item;return[e.index,m()(t,"id")]})),D=function(){return c.a.createElement(r.a,{className:"component advisorListX 779BD3C8-CDF6-4067-A5A5-C1B320DFF758"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper app-row md:px-4 lg:mx-0 sm:w-full py-6 lg:py-16"},c.a.createElement("h2",{className:"font-semibold text-main text-xl md:text-2xl lg:text-4xl text-center mb-8 sm:mb-10"},t.get("sectionData.section.shortText")),c.a.createElement(g.a,{as:f.a,data:t.get("ctfCategories",[]),renderItem:M,keyExtractor:function(e,t){return m()(e,"id")+"_"+t}}),c.a.createElement(f.a,{className:"justify-center mt-3 sm:mt-9",gutter:24},c.a.createElement(p.a,{xs:24,md:12,lg:12},c.a.createElement(h.a,{to:"/filter?category=&service=video&min=345000&max=4755000"},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({block:!0},e,{onClick:t.get("form.onSubmit")}),c.a.createElement("h5",{className:"mb-0 text-base font-semibold text-brandb500"},t.apply("i18n.t","Category.allCategory")))})))))))}))},z=a("15pl"),A=a.n(z),H=Object(i.a)({component:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"Categories"})}})),items:Object(i.c)((function(e){return e.get("ctfCategories")||A()(2,(function(e){return{id:e}}))}))}}]]}})(D),U=a("x24N"),q=a("5TtN"),R=(a("586z"),Object(i.a)({questionList:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){var t=e.apply("ctf.findSection",{name:"FAQSection"});return{section:t,children:m()(t,"sections",[]).map((function(t){return e.apply("ctf.findEntry",t)}))}}))}}]]}}));var I,Q=N.a.div(T||(T=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  p > p {\n    color: ",";\n    font-weight: 400;\n  }\n"])),w.a.colors.main),V=R((function(){return c.a.createElement(r.a,{className:"questionList"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper app-row md:px-4 lg:mx-0 sm:w-full py-6 lg:py-16"},c.a.createElement("h2",{className:"mb-6 font-semibold text-main text-xl md:text-2xl lg:text-4xl text-center"},t.get("sectionData.section.shortText")),c.a.createElement(f.a,{className:"justify-center mb-6"},c.a.createElement(p.a,{lg:18,sm:24,className:"text-left sm:text-center"},c.a.createElement(Q,null,t.apply("ctf.renderHTMLText",{name:t.get("sectionData.section.name")},"longText.longText",{className:"text-sm sm:text-base",as:"p"})))),c.a.createElement("div",{className:"wrapper sm:px-4 md:w-full lg:mx-6 py-0 mb-10"},c.a.createElement(f.a,{gutter:[16,15]},t.get("sectionData.children",[]).slice(0,6).map((function(e){return c.a.createElement(p.a,{key:e.id,lg:12,md:12,sm:24},c.a.createElement(h.a,{className:"list-item list-disc px-2",to:"/faqs#"+e.slug},c.a.createElement("p",{className:"mb-0 font-normal text-sm sm:text-base text-brandb500"},e.shortText)))})))),c.a.createElement(f.a,{className:"justify-center",gutter:24},c.a.createElement(p.a,{xs:24,md:12,lg:12},c.a.createElement(h.a,{to:"/faqs"},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({},e,{onClick:t.get("form.onSubmit"),block:!0}),c.a.createElement("h5",{className:"mb-0 text-base font-semibold text-brandb500"},t.apply("i18n.t","Question.more")))})))))))}))})),B=Object(i.a)({handbook:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"HandBookSection"})}}))}}]]}}),W=a("vVVv"),K=a("EPq7");var X,Y=N.a.div(I||(I=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  p > p {\n    margin-bottom: 16px;\n    color: ",";\n  }\n"])),w.a.colors.main),G=B((function(){return c.a.createElement(r.a,{className:"handbook"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{className:"wrapper app-row md:px-4 lg:px-0 sm:w-full md:py-6 lg:py-8"},c.a.createElement(p.a,{lg:12,md:12,sm:24},c.a.createElement("div",{className:"w-full sm:w-11/12"},c.a.createElement(K.a,{className:"rounded-xl sm:rounded-none overflow-hidden",size:"cover",src:t.apply("ctf.findImage",t.get("sectionData.section"),"image",""),alt:"handbook"}))),c.a.createElement(p.a,{lg:12,md:12,sm:24},c.a.createElement("div",{className:"flex h-full w-full justify-center items-center"},c.a.createElement("div",null,c.a.createElement("h2",{className:"my-4 md:my-0 md:mb-2 lg:mb-8 text-xl text-center lg:text-left md:text-2xl lg:text-4xl font-semibold text-main"},t.get("sectionData.section.shortText")),c.a.createElement(Y,null,t.apply("ctf.renderHTMLText",{name:t.get("sectionData.section.name")},"longText.longText",{className:"text-sm sm:text-base font-normal",as:"p"})),c.a.createElement(h.a,{to:"/beginner-guide"},c.a.createElement(W.b,null,c.a.createElement("h5",{className:"mb-0 text-base font-semibold text-brandb500"},t.apply("i18n.t","Handbook.detail")),w.a.icons({name:"arrow-right2",size:20,fill:w.a.colors.brandb500}))))))))}))})),J=a("lLK0"),Z=a("qnec"),$=a.n(Z),ee=(a("izFX"),function(e){var t=e.itemData;return c.a.createElement(r.a,{className:"carouselItem"},(function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"border-b md:border-b-0 lg:border-b-0 mx-5 py-3 lg:py-2 text-center grid grid-flow-col grid-cols-2 gap-4 lg:block"},c.a.createElement("div",{className:"col-span-6 block lg:flex lg:items-center lg:justify-center mb-5"},c.a.createElement(j.a,{size:{xs:60,sm:60,md:60,lg:64,xl:60,xxl:100},src:m()(t,"image.fixed.src","")})),c.a.createElement("div",null,c.a.createElement("h5",{className:"text-base text-main text-left mb-0 lg:mb-1 lg:text-center text-semibold"},m()(t,"shortText","")),a.apply("ctf.renderHTMLText",{name:t.name},"longText.longText",{className:"text-sm font-normal mb-1 lg:mb-7 text-left lg:text-center text-sub",as:"p"}),c.a.createElement("p",{className:"text-xs lg:text-base font-normal text-left lg:text-center text-main"},a.apply("ctf.renderRichText",{name:t.name},"richText",null)))))}))}),te=Object(i.a)({carouselItem:{rules:[["data",{data:{}}]]}})(ee),ae=function(e){var t=e.onClick;return c.a.createElement(r.a,{className:"carouselNext"},(function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"absolute rounded-full shadow-sm cursor-pointer bottom-2/4 -right-5 -translate-y-3/4 hover:opacity-90",onClick:t},c.a.createElement("div",{className:"flex items-center justify-center w-10 h-10 rounded-full bg-black100"},w.a.icons({name:"arrow-right",size:25,fill:w.a.colors.white500}))))}))},ne=Object(i.a)({carouselNext:{rules:[["data",{data:{}}]]}})(ae),re=function(e){var t=e.onClick;return c.a.createElement(r.a,{className:"carouselPrev"},(function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"absolute rounded-full shadow-sm cursor-pointer bottom-2/4 -left-6 -translate-y-3/4 hover:opacity-90",onClick:t},c.a.createElement("div",{className:"flex items-center justify-center w-10 h-10 rounded-full bg-black100"},w.a.icons({name:"arrow-left",size:25,fill:w.a.colors.white500}))))}))},le=Object(i.a)({carouselPrev:{rules:[["data",{data:{}}]]}})(re);var ce,ie=N.a.div(X||(X=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  .slick-slider {\n    .slick-dots {\n      li {\n        width: 8px;\n        height: 8px;\n        margin: 0 5px;\n        button {\n          background: ",";\n          border-radius: 50%;\n          width: 8px;\n          height: 8px;\n        }\n        &.slick-active {\n          button {\n            background: ",";\n          }\n        }\n      }\n    }\n  }\n"])),w.a.colors.brandb.lighter,w.a.colors.brandb500),se=function(){return c.a.createElement(ie,null,c.a.createElement(r.a,{className:"carouselContainer"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"py-8 md:py-6 lg:py-14 md:mx-4 lg:mx-0 border-b-2 md:border-b-0 lg:border-b-0 rounded-none sm:rounded-xl bg-brandb-lightest"},c.a.createElement("h2",{className:"text-xl md:text-2xl lg:text-4xl font-semibold text-center text-main"},t.get("sectionData.section.shortText")),c.a.createElement("div",{className:"lg:wrapper app-row px-0 py-4 md:px-8 lg:px-12"},c.a.createElement($.a,Object.assign({className:"relative"},t.get("carouselOptions"),{nextArrow:c.a.createElement(ne,{onClick:!0}),prevArrow:c.a.createElement(le,{onClick:!0})}),t.get("sectionData.children",[]).map((function(e,t){return c.a.createElement(te,{key:t,itemData:e})}))))))})))},oe=Object(i.a)({carouselContainer:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){var t=e.apply("ctf.findSection",{name:"TestimonialSection"});return{section:t,children:m()(t,"sections",[]).map((function(t){return e.apply("ctf.findEntry",t)}))}})),carouselOptions:Object(i.c)((function(){return{dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0,arrows:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1,swipeToSlide:!0,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,arrows:!1}}]}}))}}]]}})(se),me=Object(i.a)({whyUs:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"WhyUsSection"})}}))}}]]}});var ue=N.a.div(ce||(ce=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  p {\n    margin-bottom: 0;\n    span {\n      color: ",";\n      font-weight: 400;\n      margin-top: 0 !important;\n      margin-bottom: 0 !important;\n    }\n  }\n"])),w.a.colors.main),de=me((function(){return c.a.createElement(r.a,{className:"whyUs"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper app-row lg:mx-0 lg:w-full lg:py-16"},c.a.createElement("h2",{className:"mb-2 sm:mb-8 text-xl md:text-2xl lg:text-4xl text-center text-main font-semibold"},t.get("sectionData.section.shortText")),c.a.createElement(f.a,{className:"justify-center"},c.a.createElement(p.a,{xs:24,lg:18,className:"text-left sm:text-center"},c.a.createElement(ue,null,t.apply("ctf.renderHTMLText",{name:t.get("sectionData.section.name")},"detailText.detailText",{className:"text-sm sm:text-base",as:"p"}))))))}))})),ge=function(){return c.a.createElement(r.a,{className:"pageContainer"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"relative none-container"},c.a.createElement(U.a,null),c.a.createElement(b.a,{sm:{className:"static"},lg:{className:"absolute z-50 w-full bottom-24"}},(function(e){return c.a.createElement("div",e,c.a.createElement(s.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("categories")(a.get("categories"),[]);a.set("categories",t)})),c.a.createElement(q.a,null))})))})))}))),c.a.createElement("div",{className:"py-0 sm:wrapper app-row"},c.a.createElement(s.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("highlightAdvisors")(a.get("highlightAdvisors"),[]);a.set("advisorsList",t)})),c.a.createElement(y,null))})))})),c.a.createElement("div",{className:"border-b-2"}),c.a.createElement(s.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("ctfCategories")(a.get("ctfCategories"),[]);a.set("ctfCategories",t)})),c.a.createElement(H,null))})))})),c.a.createElement("div",{className:"md:mx-4 lg:mx-0 border-b-2"}),c.a.createElement(V,null),c.a.createElement("div",{className:"md:mx-4 lg:mx-0 border-b-2"}),c.a.createElement(G,null),c.a.createElement("div",{className:"md:mx-4 lg:mx-0 border-b-2"}),c.a.createElement(J.a,null),c.a.createElement(oe,null),c.a.createElement(de,null),c.a.createElement(s.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("onlineAdvisors")(a.get("onlineAdvisors"),[]),n=e.for("newAdvisors")(a.get("newAdvisors"),[]);a.set("advisorsMap",{newAdvisors:n,onlineAdvisors:t})})))})))}))))}))},fe=a("mbB6"),pe=a.n(fe),xe=a("uZih"),be=a.n(xe),Ee=a("VtSi"),ve=a.n(Ee),ye=(a("HiP7"),a("Y7xb"),a("LnO1"),a("58i5"),a("4VHr"),a("jqpZ")),he=a("ljKo"),Ne=a("L7b9"),we=a("0Q7h"),je=a("s2aS"),Oe=a("O+QE"),Se=a("23rs"),Te=a("g1Gz");function ke(e,t,a,n,r,l,c){try{var i=e[l](c),s=i.value}catch(o){return void a(o)}i.done?t(s):Promise.resolve(s).then(n,r)}function Ce(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function c(e){ke(l,n,r,c,i,"next",e)}function i(e){ke(l,n,r,c,i,"throw",e)}c(void 0)}))}}var Fe=Object(i.a)({pageContainer:{rules:[["data",{data:{loadingModel:Object(i.c)(Object(ye.a)((function(){return{fetchProfile:!0}}))),priceRangeOptions:Object(i.c)((function(e){var t={min:1e5,max:5e6};return t.step=(t.max-t.min)/20,t.defaultValue=[t.min+t.step,t.max-t.step],t})),advisorSearchForm:Object(i.c)((function(e){var t,a=Object(we.a)(),n=Object(he.e)({initialValues:{category:"",service:"video",priceRange:e.get("priceRangeOptions.defaultValue")},onSubmit:(t=Ce(ve.a.mark((function e(t,r){var l,c,i;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{l=n.values.priceRange,c=l[0],i=l[1],a.navigate(a.to("/filter",Object.assign({},be()(n.values,["priceRange"]),{min:c,max:i})))}catch(t){r.setStatus({error:t})}case 1:case"end":return e.stop()}}),e)}))),function(e,a){return t.apply(this,arguments)}),validationSchema:Ne.object().shape({})});return n})),categories:Object(i.c)((function(e){var t=e.apply("ctf.getNodes","allContentfulCategory.nodes",[]),a=pe()(t,"id").map((function(e){return'"'+e+'"'})).join(",");return Object(Te.a)((function(){return Ce(ve.a.mark((function e(){var t;return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Se.a.find("where: { id: {_in: ["+a+"]}}, limit: 20","id avatar_url display_name icon slug");case 3:return t=e.sent,e.abrupt("return",t.toObject());case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))}),[],[])})),ctfCategories:Object(i.c)((function(e){return e.apply("ctf.getNodes","allContentfulCategory.nodes",[])})),advisorPagingModel:Object(i.c)((function(e){var t=c.a.useMemo((function(){return je.a.fromConfig({Model:Oe.a,dataQuery:"\n                    search_advisor(args: {}, where: {is_active: {_eq: true}}, order_by: {profile: {updated_at: desc}}) {\n                      id\n                      profile { \n                        id\n                        display_name\n                        avatar_url\n                        ref_ctf_eid\n                        advisor_id\n                        created_at\n                        intro_text\n                        detail_html\n                        slug\n                        advisor_number\n                        appraisal_type\n                        advisor {\n                          transactions_aggregate {\n                            aggregate {\n                              count\n                            }\n                          }\n                        }\n                      }\n                      services {\n                        price {\n                          per_unit\n                          per_amount\n                          price_currency\n                          price_amount\n                          id\n                          service {\n                            id\n                          }\n                        }\n                      }\n                      services_aggregate {\n                        aggregate {\n                          count\n                        }\n                      }\n                      review_agg {\n                        avg_score\n                      }\n                      presence{\n                        status\n                      }\n                      readiness{\n                        is_ready\n                        on_transaction_id\n                        is_accept_service\n                      }\n                    }\n                  ",aggQuery:"\n                    search_advisor_aggregate(args: {}) {\n                      aggregate {\n                        count\n                      }\n                    }\n                  ",pageSize:8})}),[]);return t.hookState(),c.a.useEffect((function(){t.onLoadPageHandler(0)}),[t]),{items:t.useState("items"),page:t.useState("page"),isLoadMore:t.useState("isLoadMore"),isLoading:t.useState("isLoading"),hasPreviousPage:t.useState("hasPreviousPage"),hasNextPage:t.useState("hasNextPage"),hasLoadMore:t.useState("hasLoadMore"),onLoadMore:function(){return t.onLoadMore()},onRefresh:function(){return t.onRefresh()},onPreviousPage:function(){return t.onPreviousPageHandler()},onNextPage:function(){return t.onNextPageHandler()},onLoadPage:function(e){return t.onLoadPageHandler(e)}}}))}}]]},isLoading:{rules:[["display",{display:Object(i.c)((function(e){return e.apply("loadingModel.isLoading")}))}]]},notLoading:{rules:[["display",{display:Object(i.c)((function(e){return!e.apply("loadingModel.isLoading")}))}]]}})(ge),_e=a("p0qn"),Pe=a("caL3"),Le=a("0M34"),Me=a("bQnF");t.default=function(e){return c.a.createElement(_e.a,null,c.a.createElement(Pe.a,{location:e.location,PageData:Me.a},c.a.createElement(r.a,null,(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Le.a,{pageData:t.apply("ctf.findPage",{name:"Homepage"})}),c.a.createElement(Pe.a.POS,{name:"app-header"},t.apply("ctf.renderSection",{name:"articleNavbarSection"})),c.a.createElement(Pe.a.POS,{name:"app-body"},c.a.createElement(Fe,null)),c.a.createElement(Pe.a.POS,{name:"app-footer"},t.apply("ctf.renderSection",{name:"articleFooterSection"})))}))))}}}]);
//# sourceMappingURL=component---src-pages-home-js-4af73c71762d32727298.js.map