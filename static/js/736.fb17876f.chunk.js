"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,c,u,i=r(885),s=r(2791),o=r(470),p=r(6044),f=r(168),h=r(82),l=h.ZP.ul(e||(e=(0,f.Z)(["\n  list-style: none;\n"]))),d=h.ZP.li(a||(a=(0,f.Z)(["\n  margin: 10px 0 16px;\n  padding: 2px 8px;\n  //box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);\n"]))),g=h.ZP.h3(c||(c=(0,f.Z)(["\n  margin: 8px 0;\n"]))),v=h.ZP.p(u||(u=(0,f.Z)(["\n  margin: 0;\n"]))),x=r(184),m=function(){var n=(0,s.useState)([]),t=(0,i.Z)(n,2),r=t[0],e=t[1],a=(0,o.UO)().movieId;if((0,s.useEffect)((function(){(0,p.bp)(a).then(e)}),[a]),r)return(0,x.jsx)(l,{children:r.length>0?r.map((function(n){var t=n.id,r=n.name,e=n.profile_path,a=n.character;return(0,x.jsxs)(d,{children:[(0,x.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200".concat(e):"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,x.jsx)(g,{children:r}),(0,x.jsxs)(v,{children:[" Character: ",a]})]},t)})):"Sorry, there isn't any info :("})}},6044:function(n,t,r){r.d(t,{Bu:function(){return p},Df:function(){return s},Jh:function(){return h},Pg:function(){return o},bp:function(){return f}});var e=r(5861),a=r(4687),c=r.n(a),u=r(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="621fcee78f56c436770adc2b5b61fa26",s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i)).catch((function(n){throw new Error("Oops... seems like an error occured.")}));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.fb17876f.chunk.js.map