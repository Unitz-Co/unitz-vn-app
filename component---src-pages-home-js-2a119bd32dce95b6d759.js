(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DfbZ:function(e,t,a){"use strict";a("dd5r"),a("Hfs8");var n,r=a("fP9s"),l=a("pMrf"),c=a("ERkP"),i=a.n(c),o=a("qtPF"),s=a("NNSM"),m=a("j/s1"),u=a("A6W8"),d=a("of1U"),g=a("vVVv"),f=a("0/Rv");var p,x,b=m.a.div(n||(p=["\n  p {\n    p {\n      font-weight: 400;\n      color: ",";\n      margin-bottom: 0;\n      span {\n        color: ",";\n        font-weight: 400;\n      }\n    }\n  }\n"],x||(x=p.slice(0)),p.raw=x,n=p),u.a.colors.main,u.a.colors.main),E=function(){return i.a.createElement(l.a,{className:"categoryItem"},(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"py-1 border-b sm:border-b-0 sm:py-3"},i.a.createElement("div",{className:"table-cell align-top"},i.a.createElement(r.a,null,(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{size:{xs:68,sm:72,md:72,lg:72,xl:72,xxl:100},style:{backgroundColor:u.a.colors.brandb500,display:"flex",alignItems:"center",justifyContent:"center"},icon:i.a.createElement(f.a,{xs:{size:42},md:{size:48},lg:{size:48},xxl:{size:65}},(function(e){return u.a.icons(Object.assign({name:t.get("@item.icon"),size:48,fill:u.a.colors.white500},e))}))}))}))),i.a.createElement("div",{className:"table-cell mb-6 align-top pl-5"},i.a.createElement(s.a,{to:t.apply("routeStore.toUrl","category",t.get("@item"))},i.a.createElement("h5",{className:"mb-2 text-sm sm:text-base font-semibold text-main"},t.get("@item.displayName")),i.a.createElement(b,null,i.a.createElement("div",{className:"mb-6 text-sm sm:text-base text-ellipsis-3 text-main"},t.get("@item.description")))),i.a.createElement(s.a,{to:t.apply("routeStore.toUrl","category",t.get("@item"))},i.a.createElement(g.b,{size:"small"},i.a.createElement("h5",{className:"text-base mb-0 text-brandb500 font-semibold"},t.apply("i18n.t","Category.discoverMore")),u.a.icons({name:"arrow-right2",size:24,fill:u.a.colors.brandb500}))))))}))},v=a("DL3M"),y=a.n(v),h=a("mbB6"),N=a.n(h),w=a("taLD"),j=a.n(w),S=a("2srY"),T=a.n(S),O=(a("586z"),a("tTwn")),k={displayName:function(){return function(e){return T()(e,"displayName","--")}},id:function(){return function(e){return T()(e,"sys.id","")}},name:function(){return function(e){return T()(e,"sys.id","")}},photoUrl:function(e){return function(t){var a=k.displayName(e)(t);return T()(t,"avatarUrl.url","https://ui-avatars.com/api/?name="+a)}},avatarUrl:function(e){return function(t){var a=k.displayName(e)(t);return T()(t,"avatarUrl.fixed.src","https://ui-avatars.com/api/?name="+a)}},renderHTMLText:function(){return function(e){var t=T()(e,"longText.longText","");if(!t)return"";var a=O(t);return i.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}})}},icon:function(){return function(e){return T()(e,"icon","")}},longText:function(){return function(e){var t=T()(e,"longText","");return t?O(t):""}},isFinalLevel:function(){return function(e){return!T()(e,"chidlrenCollection.items.length",!1)}},buildCategoryHierarchy:function(e){return function(e){var t=j()(e,(function(e){return T()(e,"sys.id")}));return e.map((function(e){N()(T()(e,"chidlrenCollection.items",[]),(function(a){var n=T()(a,"sys.id");y()(t,n+".parent",e)}))})),e.map((function(e){var a=[],n=e;do{var r=T()(n,"parent");r?(a.unshift(r),n=t[T()(r,"sys.id")]):n=null}while(n&&a.length<=10);y()(e,"parents",a)})),e}}},C=k,P=a("ubX1"),_=Object(o.a)({categoryItem:{rules:[["data",{data:{"@item":Object(o.c)((function(e){var t=e.get("@item");return Object.assign({},t,{avatarUrl:C.avatarUrl(e)(t),displayName:C.displayName(e)(t),description:P.a.longText(e)(t)})}))}}]]}})(E);t.a=_},gHPf:function(e,t,a){"use strict";a.r(t);var n,r=a("pMrf"),l=a("ERkP"),c=a.n(l),i=a("qtPF"),o=a("fP9s"),s=a("2srY"),m=a.n(s),u=(a("Hfs8"),a("GA1y")),d=a("TbWa"),g=a("SeT9"),f=a("S7b9"),p=a("VKn7"),x=a("SCaQ"),b=a("0/Rv"),E=Object(u.a)((function(e){var t=e.item,a=e.index;return c.a.createElement(r.a,{forceCtx:!0},(function(e,n){return c.a.createElement(c.a.Fragment,null,n.debug((function(){n.set("@item",t),n.set("@index",a)})),c.a.createElement("div",null,c.a.createElement(d.a,null)))}))}),(function(e){var t=e.item;return[e.index,m()(t,"id")]})),v=function(){return c.a.createElement(r.a,{className:"component advisorListX 779BD3C8-CDF6-4067-A5A5-C1B320DFF758"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"sm:w-full py-6 lg:py-16"},c.a.createElement("h2",{className:"mb-6 lg:mb-10 text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-main"},t.get("sectionData.section.shortText")),c.a.createElement("div",{className:"block mx-4 sm:mx-0 xl:hidden py-0 border-b"}),c.a.createElement(g.a,{data:t.get("paginationModel.items",[]),renderItem:E,keyExtractor:function(e,t){return m()(e,"id")+"_"+t},horizontal:!0}),c.a.createElement("div",{className:"sm:app-row px-4 xl:px-0 py-0"},c.a.createElement(f.a,{className:"justify-center mt-6 xl:mt-14",gutter:{xs:10,sm:16,md:10,lg:24}},t.get("paginationModel.hasNextPage")&&c.a.createElement(p.a,{xs:12,md:12,lg:12,xl:6},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({block:!0,onClick:t.get("paginationModel.onLoadMore"),loading:t.get("paginationModel.isLoading")},e),t.apply("i18n.t","Advisor.watchMore"))}))),c.a.createElement(p.a,{xs:12,md:12,lg:12,xl:6},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({block:!0,onClick:t.get("advisorSearchForm.submitForm")},e),t.apply("i18n.t","Advisor.fitWithYou"))})))))))}))},y=Object(i.a)({component:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"HighlightAdvisor"})}})),paginationModel:Object(i.c)((function(e){return e.get("advisorPagingModel")}))}}]]}})(v),h=a("DfbZ"),N=a("NNSM"),w=Object(u.a)((function(e){var t=e.item,a=e.index;return c.a.createElement(p.a,{lg:12,md:12,sm:24,className:"mb-4 md:mb-0 xl:px-0"},c.a.createElement(r.a,{forceCtx:!0},(function(e,n){return c.a.createElement(c.a.Fragment,null,n.debug((function(){n.set("@item",t),n.set("@index",a)})),c.a.createElement(h.a,null))})))}),(function(e){var t=e.item;return[e.index,m()(t,"id")]})),j=function(){return c.a.createElement(r.a,{className:"component advisorListX 779BD3C8-CDF6-4067-A5A5-C1B320DFF758"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper app-row sm:px-4 xl:mx-0 sm:w-full py-6 lg:py-16"},c.a.createElement("h2",{className:"font-semibold text-main text-xl sm:text-2xl lg:text-4xl text-center mb-8 sm:mb-10"},t.get("sectionData.section.shortText")),c.a.createElement(g.a,{as:f.a,gutter:24,data:t.get("ctfCategories",[]),renderItem:w,keyExtractor:function(e,t){return m()(e,"id")+"_"+t}}),c.a.createElement(f.a,{className:"justify-center mt-3 md:mt-9",gutter:24},c.a.createElement(p.a,{xs:24,md:12,lg:12},c.a.createElement(N.a,{to:"/category"},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({block:!0},e,{onClick:t.get("form.onSubmit")}),c.a.createElement("h5",{className:"mb-0 text-base font-semibold text-brandb500"},t.apply("i18n.t","Category.allCategory")))})))))))}))},S=a("15pl"),T=a.n(S),O=Object(i.a)({component:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"Categories"})}})),items:Object(i.c)((function(e){return e.get("ctfCategories")||T()(2,(function(e){return{id:e}}))}))}}]]}})(j),k=a("x24N"),C=a("5TtN"),P=(a("586z"),Object(i.a)({questionList:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){var t=e.apply("ctf.findSection",{name:"FAQSection"});return{section:t,children:m()(t,"sections",[]).map((function(t){return e.apply("ctf.findEntry",t)}))}}))}}]]}})),_=(a("dd5r"),a("j/s1")),F=a("A6W8");var L,M,z,D=_.a.div(n||(L=["\n  p > p {\n    color: ",";\n    font-weight: 400;\n  }\n"],M||(M=L.slice(0)),L.raw=M,n=L),F.a.colors.main),H=P((function(){return c.a.createElement(r.a,{className:"questionList"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper app-row sm:px-4 lg:mx-0 sm:w-full py-6 lg:py-16"},c.a.createElement("h2",{className:"mb-6 font-semibold text-main text-xl sm:text-2xl lg:text-4xl text-center"},t.get("sectionData.section.shortText")),c.a.createElement(f.a,{className:"justify-center mb-6"},c.a.createElement(p.a,{lg:18,sm:24,className:"text-left sm:text-center"},c.a.createElement(D,null,t.apply("ctf.renderHTMLText",{name:t.get("sectionData.section.name")},"longText.longText",{className:"text-sm sm:text-base",as:"p"})))),c.a.createElement("div",{className:"wrapper sm:px-4 sm:w-full xl:mx-6 py-0 mb-10"},c.a.createElement(f.a,{gutter:[16,15]},t.get("sectionData.children",[]).slice(0,6).map((function(e){return c.a.createElement(p.a,{key:e.id,lg:12,md:12,sm:24},c.a.createElement(N.a,{className:"list-item list-disc px-2",to:"/faqs#"+e.slug},c.a.createElement("p",{className:"mb-0 font-normal text-sm sm:text-base text-brandb500"},e.shortText)))})))),c.a.createElement(f.a,{className:"justify-center",gutter:24},c.a.createElement(p.a,{xs:24,md:12,lg:12},c.a.createElement(N.a,{to:"/faqs"},c.a.createElement(b.a,{xs:{size:"small"},md:{size:"medium"},lg:{size:"large"}},(function(e){return c.a.createElement(x.a,Object.assign({},e,{onClick:t.get("form.onSubmit"),block:!0}),c.a.createElement("h5",{className:"mb-0 text-base font-semibold text-brandb500"},t.apply("i18n.t","Question.more")))})))))))}))})),A=Object(i.a)({handbook:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"HandBookSection"})}}))}}]]}}),R=a("vVVv"),U=a("EPq7");var I,q=_.a.div(z||(z=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  p > p {\n    margin-bottom: 16px;\n    color: ",";\n  }\n"])),F.a.colors.main),V=A((function(){return c.a.createElement(r.a,{className:"handbook"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{className:"wrapper app-row sm:px-4 xl:px-0 sm:w-full md:py-6 xl:py-8"},c.a.createElement(p.a,{lg:12,md:12,sm:24},c.a.createElement("div",{className:"w-full md:w-11/12"},c.a.createElement(U.a,{className:"rounded-xl md:rounded-none overflow-hidden",size:"cover",src:t.apply("ctf.findImage",t.get("sectionData.section"),"image",""),alt:"handbook"}))),c.a.createElement(p.a,{lg:12,md:12,sm:24},c.a.createElement("div",{className:"flex h-full w-full justify-center items-center"},c.a.createElement("div",null,c.a.createElement("h2",{className:"my-4 md:my-0 sm:mb-2 lg:mb-8 text-xl text-center lg:text-left md:text-2xl lg:text-4xl font-semibold text-main"},t.get("sectionData.section.shortText")),c.a.createElement(q,null,t.apply("ctf.renderHTMLText",{name:t.get("sectionData.section.name")},"longText.longText",{className:"text-sm sm:text-base font-normal",as:"p"})),c.a.createElement(N.a,{to:"beginner-guide"},c.a.createElement(R.b,null,c.a.createElement("h5",{className:"mb-0 text-base font-semibold text-brandb500"},t.apply("i18n.t","Handbook.detail")),F.a.icons({name:"arrow-right2",size:20,fill:F.a.colors.brandb500}))))))))}))})),Q=a("lLK0"),B=a("qnec"),W=a.n(B),X=(a("izFX"),a("of1U")),Y=function(e){var t=e.itemData;return c.a.createElement(r.a,{className:"carouselItem"},(function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"border-b md:border-b-0 lg:border-b-0 mx-5 py-3 lg:py-2 text-center grid grid-flow-col grid-cols-2 gap-4 lg:block"},c.a.createElement("div",{className:"col-span-6 block lg:flex lg:items-center lg:justify-center mb-5"},c.a.createElement(X.a,{size:{xs:60,sm:60,md:60,lg:64,xl:60,xxl:100},src:m()(t,"image.fixed.src","")})),c.a.createElement("div",null,c.a.createElement("h5",{className:"text-base text-main text-left mb-0 lg:mb-1 lg:text-center text-semibold"},m()(t,"shortText","")),a.apply("ctf.renderHTMLText",{name:t.name},"longText.longText",{className:"text-sm font-normal mb-1 lg:mb-7 text-left lg:text-center text-sub",as:"p"}),c.a.createElement("p",{className:"text-xs lg:text-base font-normal text-left lg:text-center text-main"},a.apply("ctf.renderRichText",{name:t.name},"richText",null)))))}))},Z=Object(i.a)({carouselItem:{rules:[["data",{data:{}}]]}})(Y),J=function(e){var t=e.onClick;return c.a.createElement(r.a,{className:"carouselNext"},(function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"absolute rounded-full shadow-sm cursor-pointer bottom-2/4 -right-5 -translate-y-3/4 hover:opacity-90",onClick:t},c.a.createElement("div",{className:"flex items-center justify-center w-10 h-10 rounded-full bg-black100"},F.a.icons({name:"arrow-right",size:25,fill:F.a.colors.white500}))))}))},K=Object(i.a)({carouselNext:{rules:[["data",{data:{}}]]}})(J),G=function(e){var t=e.onClick;return c.a.createElement(r.a,{className:"carouselPrev"},(function(e,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"absolute rounded-full shadow-sm cursor-pointer bottom-2/4 -left-6 -translate-y-3/4 hover:opacity-90",onClick:t},c.a.createElement("div",{className:"flex items-center justify-center w-10 h-10 rounded-full bg-black100"},F.a.icons({name:"arrow-left",size:25,fill:F.a.colors.white500}))))}))},$=Object(i.a)({carouselPrev:{rules:[["data",{data:{}}]]}})(G);var ee,te=_.a.div(I||(I=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  .slick-slider {\n    .slick-dots {\n      li {\n        width: 8px;\n        height: 8px;\n        margin: 0 5px;\n        button {\n          background: ",";\n          border-radius: 50%;\n          width: 8px;\n          height: 8px;\n        }\n        &.slick-active {\n          button {\n            background: ",";\n          }\n        }\n      }\n    }\n  }\n"])),F.a.colors.brandb.lighter,F.a.colors.brandb500),ae=function(){return c.a.createElement(te,null,c.a.createElement(r.a,{className:"carouselContainer"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"py-8 md:py-6 lg:py-14 md:mx-4 lg:mx-0 border-b-2 md:border-b-0 lg:border-b-0 rounded-none sm:rounded-xl bg-brandb-lightest"},c.a.createElement("h2",{className:"text-xl sm:text-2xl lg:text-4xl font-semibold text-center text-main"},t.get("sectionData.section.shortText")),c.a.createElement("div",{className:"lg:wrapper app-row px-0 py-4 md:px-8 lg:px-12"},c.a.createElement(W.a,Object.assign({className:"relative"},t.get("carouselOptions"),{nextArrow:c.a.createElement(K,{onClick:!0}),prevArrow:c.a.createElement($,{onClick:!0})}),t.get("sectionData.children",[]).map((function(e,t){return c.a.createElement(Z,{key:t,itemData:e})}))))))})))},ne=Object(i.a)({carouselContainer:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){var t=e.apply("ctf.findSection",{name:"TestimonialSection"});return{section:t,children:m()(t,"sections",[]).map((function(t){return e.apply("ctf.findEntry",t)}))}})),carouselOptions:Object(i.c)((function(){return{dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0,arrows:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1,swipeToSlide:!0,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,swipeToSlide:!0,arrows:!1}}]}}))}}]]}})(ae),re=Object(i.a)({whyUs:{rules:[["data",{data:{sectionData:Object(i.c)((function(e){return{section:e.apply("ctf.findSection",{name:"WhyUsSection"})}}))}}]]}});var le=_.a.div(ee||(ee=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}(["\n  p {\n    margin-bottom: 0;\n    span {\n      color: ",";\n      font-weight: 400;\n      margin-top: 0 !important;\n      margin-bottom: 0 !important;\n    }\n  }\n"])),F.a.colors.main),ce=re((function(){return c.a.createElement(r.a,{className:"whyUs"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper app-row lg:mx-0 lg:w-full lg:py-16"},c.a.createElement("h2",{className:"mb-2 sm:mb-8 text-xl sm:text-2xl lg:text-4xl text-center text-main font-semibold"},t.get("sectionData.section.shortText")),c.a.createElement(f.a,{className:"justify-center"},c.a.createElement(p.a,{xs:24,lg:18,className:"text-left sm:text-center"},c.a.createElement(le,null,t.apply("ctf.renderHTMLText",{name:t.get("sectionData.section.name")},"detailText.detailText",{className:"text-sm sm:text-base",as:"p"}))))))}))})),ie=function(){return c.a.createElement(r.a,{className:"pageContainer"},(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"relative none-container"},c.a.createElement(k.a,null),c.a.createElement(b.a,{xs:{className:"static"},xl:{className:"absolute z-50 w-full bottom-12"},xxl:{className:"absolute z-50 w-full bottom-20"}},(function(e){return c.a.createElement("div",e,c.a.createElement(o.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("ctfCategories")(a.get("ctfCategories"),[]);a.set("categories",t)})),c.a.createElement(C.a,null))})))})))}))),c.a.createElement("div",{className:"py-0 sm:wrapper app-row"},c.a.createElement(o.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("highlightAdvisors")(a.get("highlightAdvisors"),[]);a.set("advisorsList",t)})),c.a.createElement(y,null))})))})),c.a.createElement("div",{className:"border-b-2"}),c.a.createElement(o.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("ctfCategories")(a.get("ctfCategories"),[]);a.set("ctfCategories",t)})),c.a.createElement(O,null))})))})),c.a.createElement("div",{className:"md:mx-4 xl:mx-0 border-b-2"}),c.a.createElement(H,null),c.a.createElement("div",{className:"md:mx-4 xl:mx-0 border-b-2"}),c.a.createElement(V,null),c.a.createElement("div",{className:"md:mx-4 xl:mx-0 border-b-2"}),c.a.createElement(Q.a,null),c.a.createElement(ne,null),c.a.createElement(ce,null),c.a.createElement(o.a,null,(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,null,(function(t,a){return c.a.createElement(c.a.Fragment,null,a.debug((function(){var t=e.for("onlineAdvisors")(a.get("onlineAdvisors"),[]),n=e.for("newAdvisors")(a.get("newAdvisors"),[]);a.set("advisorsMap",{newAdvisors:n,onlineAdvisors:t})})))})))}))))}))},oe=a("+DnP"),se=a.n(oe),me=a("mbB6"),ue=a.n(me),de=a("uZih"),ge=a.n(de),fe=a("VtSi"),pe=a.n(fe),xe=(a("HiP7"),a("Y7xb"),a("LnO1"),a("58i5"),a("4VHr"),a("jqpZ")),be=a("ljKo"),Ee=a("L7b9"),ve=a("0Q7h"),ye=a("s2aS"),he=a("O+QE"),Ne=a("23rs"),we=a("g1Gz");function je(e,t,a,n,r,l,c){try{var i=e[l](c),o=i.value}catch(s){return void a(s)}i.done?t(o):Promise.resolve(o).then(n,r)}function Se(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function c(e){je(l,n,r,c,i,"next",e)}function i(e){je(l,n,r,c,i,"throw",e)}c(void 0)}))}}var Te=Object(i.a)({pageContainer:{rules:[["data",{data:{loadingModel:Object(i.c)(Object(xe.a)((function(){return{fetchProfile:!0}}))),priceRangeOptions:Object(i.c)((function(e){var t={min:1e5,max:5e6};return t.step=(t.max-t.min)/20,t.defaultValue=[t.min+t.step,t.max-t.step],t})),advisorSearchForm:Object(i.c)((function(e){var t,a=Object(ve.a)(),n=m()(a.getPageContext(),"lang",""),r=Object(be.e)({initialValues:{category:"",service:"video",priceRange:e.get("priceRangeOptions.defaultValue")},onSubmit:(t=Se(pe.a.mark((function e(t,l){var c,i,o;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c=r.values.priceRange,i=c[0],o=c[1],a.navigate(a.to("/"+n+"/filter",Object.assign({},ge()(r.values,["priceRange"]),{min:i,max:o})))}catch(t){l.setStatus({error:t})}case 1:case"end":return e.stop()}}),e)}))),function(e,a){return t.apply(this,arguments)}),validationSchema:Ee.object().shape({})});return r})),categories:Object(i.c)((function(e){var t=e.apply("ctf.getNodes","allContentfulCategory.nodes",[]),a=ue()(t,"id").map((function(e){return'"'+e+'"'})).join(",");return Object(we.a)((function(){return Se(pe.a.mark((function e(){var t;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ne.a.find("where: { id: {_in: ["+a+"]}}, limit: 20","id avatar_url display_name icon slug");case 3:return t=e.sent,e.abrupt("return",t.toObject());case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))}),[],[])})),ctfCategories:Object(i.c)((function(e){var t=e.apply("ctf.buildCategoryHierarchy");return c.a.useMemo((function(){return se()(t,(function(e){return!m()(e,"parent")}))}),[t])})),advisorPagingModel:Object(i.c)((function(e){var t=c.a.useMemo((function(){return ye.a.fromConfig({Model:he.a,dataQuery:"\n                    search_advisor(args: {}, where: {is_active: {_eq: true}}) {\n                      id\n                      profile { \n                        id\n                        display_name\n                        avatar_url\n                        ref_ctf_eid\n                        advisor_id\n                        created_at\n                        intro_text\n                        detail_html\n                        years_experience\n                        slug\n                        advisor_number\n                        appraisal_type\n                        advisor {\n                          transactions_aggregate {\n                            aggregate {\n                              count\n                            }\n                          }\n                        }\n                      }\n                      services {\n                        price {\n                          per_unit\n                          per_amount\n                          price_currency\n                          price_amount\n                          id\n                          service {\n                            id\n                          }\n                        }\n                      }\n                      services_aggregate {\n                        aggregate {\n                          count\n                        }\n                      }\n                      review_agg {\n                        avg_score\n                      }\n                      presence{\n                        status\n                      }\n                      readiness{\n                        is_ready\n                        on_transaction_id\n                        is_accept_service\n                      }\n                    }\n                  ",aggQuery:"\n                    search_advisor_aggregate(args: {}) {\n                      aggregate {\n                        count\n                      }\n                    }\n                  ",pageSize:8})}),[]);return t.hookState(),c.a.useEffect((function(){t.onLoadPageHandler(0)}),[t]),{items:t.useState("items"),page:t.useState("page"),isLoadMore:t.useState("isLoadMore"),isLoading:t.useState("isLoading"),hasPreviousPage:t.useState("hasPreviousPage"),hasNextPage:t.useState("hasNextPage"),hasLoadMore:t.useState("hasLoadMore"),onLoadMore:function(){return t.onLoadMore()},onRefresh:function(){return t.onRefresh()},onPreviousPage:function(){return t.onPreviousPageHandler()},onNextPage:function(){return t.onNextPageHandler()},onLoadPage:function(e){return t.onLoadPageHandler(e)}}}))}}]]},isLoading:{rules:[["display",{display:Object(i.c)((function(e){return e.apply("loadingModel.isLoading")}))}]]},notLoading:{rules:[["display",{display:Object(i.c)((function(e){return!e.apply("loadingModel.isLoading")}))}]]}})(ie),Oe=a("IkJg"),ke=a("p0qn"),Ce=a("caL3"),Pe=a("0M34"),_e=a("bQnF"),Fe=Object(Oe.a)((function(e){return c.a.createElement(ke.a,null,c.a.createElement(Ce.a,{location:e.location,PageData:_e.a},c.a.createElement(r.a,null,(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Pe.a,{pageData:t.apply("ctf.findPage",{name:"Homepage"})}),c.a.createElement(Ce.a.POS,{name:"app-header"},t.apply("ctf.renderSection",{name:"articleNavbarSection"})),c.a.createElement(Ce.a.POS,{name:"app-body"},c.a.createElement(Te,null)),c.a.createElement(Ce.a.POS,{name:"app-footer"},t.apply("ctf.renderSection",{name:"articleFooterSection"})))}))))}));t.default=Fe},ubX1:function(e,t,a){"use strict";var n=a("2srY"),r=a.n(n),l=a("ERkP"),c=a.n(l),i=a("tTwn"),o={renderHTML:function(){return function(e){if(!e)return"";var t=i(e);return c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t}})}},longText:function(){return function(e){var t=r()(e,"longText.longText","");if(!t)return"";var a=i(t);return c.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}})}}};t.a=o}}]);
//# sourceMappingURL=component---src-pages-home-js-2a119bd32dce95b6d759.js.map