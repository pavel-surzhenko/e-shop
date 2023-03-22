(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{335:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var r=a(27),i=a(56),c=a(19),n=a(51),s=a(176);const o=new i.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});var l=a(42),d=a(131),j=a(177),x=a.n(j);const b=Object.freeze({SET_TOKEN:"SET_TOKEN",SET_ERROR:"SET_ERROR",RESET_ERROR:"RESET_ERROR"}),h=Object.freeze({FETCH_ITEMS:"FETCH_ITEMS",START_FETCHING:"START_FETCHING",STOP_FETCHING:"STOP_FETCHING"}),p=Object.freeze({SET_IS_CART_OPEN:"SET_IS_CART_OPEN",SET_ITEMS:"SET_ITEMS",ADD_TO_CART:"ADD_TO_CART",REMOVE_FROM_CART:"REMOVE_FROM_CART",INCREASE_COUNT:"INCREASE_COUNT",DECREASE_COUNT:"DECREASE_COUNT"}),O={token:"",errorMessage:"",error:!1},u={id:"",items:[],isFetching:!1},m={isCartOpen:!1,cart:[],items:[]},g=Object(l.b)({auth:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.SET_TOKEN:return{...e,token:t.payload,error:!1,errorMessage:""};case b.RESET_ERROR:return{...e,error:!1,errorMessage:""};case b.SET_ERROR:return{...e,error:!0,errorMessage:t.payload};default:return e}},productList:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.START_FETCHING:return{...e,isFetching:!0};case h.STOP_FETCHING:return{...e,isFetching:!1};case h.FETCH_ITEMS:return{...e,isFetching:!0,items:null===t||void 0===t?void 0:t.payload};default:return e}},cart:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.SET_ITEMS:return{...e,items:null===t||void 0===t?void 0:t.payload};case p.ADD_TO_CART:{const a=t.payload.item,r=e.cart.find((e=>e.id===a.id)),i=r?e.cart.map((e=>e.id===r.id?{...e,count:e.count+1}:e)):[...e.cart,{...a,count:1}];return{...e,cart:i}}case p.REMOVE_FROM_CART:return{...e,cart:e.cart.filter((e=>e.id!==(null===t||void 0===t?void 0:t.payload.id)))};case p.INCREASE_COUNT:return{...e,cart:e.cart.map((e=>e.id===(null===t||void 0===t?void 0:t.payload.id)?{...e,count:e.count+1}:e))};case p.DECREASE_COUNT:return{...e,cart:e.cart.map((e=>e.id===(null===t||void 0===t?void 0:t.payload.id)&&e.count>1?{...e,count:e.count-1}:e))};case p.SET_IS_CART_OPEN:return{...e,isCartOpen:!e.isCartOpen};default:return e}}});var v=a(178),f=a(179);Object(v.createLogger)({duration:!0,collapsed:!0,colors:{title:e=>e.error?"firebrick":"deepskyblue",prevState:()=>"#1C5FAF",action:()=>"#149945",nextState:()=>"#A47104",error:()=>"#ff0005"}}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;const y=l.c,C=[f.a];const E={key:"root",storage:x.a,whitelist:["cart"]},S=Object(d.a)(E,g),T=Object(l.d)(S,y(Object(l.a)(...C))),w=Object(d.b)(T);var _=a(0),R=a.n(_),I=a(13),k=a(104),F=a(390),N=a(411),A=a(429),W=a(419),M=a(386),D=a(388),B=a(430),$=a(431),P=a(114),z=a(432),L=a(414),H=a(433),V=a(185),G=a.n(V);const q=Object.freeze({resetError:()=>({type:b.RESET_ERROR}),setError:e=>({type:b.SET_ERROR,error:!0,payload:e}),setToken:e=>({type:b.SET_TOKEN,payload:e})});var U=a(405);const K="https://fakestoreapi.com",Q={carts:{async getCarts(){const{data:e}=await U.a.get(`${K}/products`);return e},async getCartsCategory(e){const{data:t}=await U.a.get(`${K}/products/category/${e}`);return t},async getCartsById(e){const{data:t}=await U.a.get(`${K}/products/${e}`);return t}}},J=Object.freeze({startFetching:()=>({type:h.START_FETCHING}),stopFetching:()=>({type:h.STOP_FETCHING}),fetchCards:e=>({type:h.FETCH_ITEMS,payload:e}),fetchCardsAsync:()=>async e=>{try{e(J.startFetching());const t=await Q.carts.getCarts();e(J.fetchCards(t))}catch(t){const{message:a}=t;e(q.setError(a))}finally{e(J.stopFetching())}}}),X=Object.freeze({setItems:e=>({type:p.SET_ITEMS,payload:e}),addToCart:e=>({type:p.ADD_TO_CART,payload:{item:e}}),removeFromCart:e=>({type:p.REMOVE_FROM_CART,payload:{id:e}}),increaseCount:e=>({type:p.INCREASE_COUNT,payload:{id:e}}),decreaseCount:e=>({type:p.DECREASE_COUNT,payload:{id:e}}),setIsCartOpen:()=>({type:p.SET_IS_CART_OPEN})}),Y=e=>e.auth.errorMessage,Z=e=>e.productList.items,ee=e=>e.cart.isCartOpen,te=e=>e.cart.cart;var ae=a(4),re=a(340),ie=a(31);const ce=Object(ae.a)("div")((e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(re.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(re.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(1),width:"auto"}}})),ne=Object(ae.a)("div")((e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),se=Object(ae.a)(ie.c)((e=>{let{theme:t}=e;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:`calc(1em + ${t.spacing(4)})`,transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"40ch"}}}}}));var oe=a(1);const le=()=>{const e=Object(I.m)(),t=Object(c.b)(),a=Object(c.c)(te),r=Object(c.c)(Z),[i,n]=Object(_.useState)(""),s=r.filter((e=>e.title.toLowerCase().includes(i.toLowerCase())&&i)),o=s.map((t=>Object(oe.jsxs)(R.a.Fragment,{children:[Object(oe.jsxs)(N.a,{onMouseDown:()=>e(`/item/${t.id}`),sx:{gap:"10px",cursor:"pointer"},children:[Object(oe.jsx)(A.a,{children:Object(oe.jsx)(W.a,{sx:{width:"60px",height:"60px"},alt:t.title,src:t.image})}),Object(oe.jsx)(M.a,{color:"text.main",primary:t.title})]}),Object(oe.jsx)(D.a,{})]},t.id)));return Object(oe.jsx)(B.a,{position:"static",children:Object(oe.jsxs)($.a,{children:[Object(oe.jsx)(P.a,{onClick:()=>e("/"),variant:"h6",component:"span",sx:{minWidth:"70px",marginRight:"auto",cursor:"pointer"},children:"E-Shop"}),Object(oe.jsxs)(ce,{children:[Object(oe.jsx)(ne,{children:Object(oe.jsx)(G.a,{})}),Object(oe.jsx)(se,{onFocus:e=>n(e.target.value),onBlur:()=>n(""),onChange:e=>n(e.target.value),type:"search",placeholder:"Search\u2026",inputProps:{"aria-label":"search"}}),Object(oe.jsxs)(z.a,{disablePadding:!0,sx:{minWidth:"275px",maxWidth:"500px",maxHeight:"150px",overflowY:"scroll",position:"absolute",left:"0",top:"40px",backgroundColor:"primary.main",borderRadius:"3px",zIndex:"100",display:i?"block":"none"},children:[0===s.length&&i&&Object(oe.jsx)(N.a,{children:Object(oe.jsx)(M.a,{color:"text.main",primary:"Nothing was found according to your request. Refine your request"})}),s.length>0&&o]})]}),Object(oe.jsx)(L.a,{badgeContent:a.length,color:"error",invisible:0===a.length,sx:{right:5,top:5,padding:"0 3px",height:"14px",minWidth:"13px"},children:Object(oe.jsx)(H.a,{color:"inherit",sx:{marginLeft:"20px"},onClick:()=>t(X.setIsCartOpen()),children:Object(oe.jsx)(F.a,{})})})]})})};var de=a(438),je=a(424),xe=a(439),be=a(440),he=a(415),pe=a(406),Oe=a(426),ue=a(421),me=a(434),ge=a(435),ve=a(436),fe=a(412),ye=a(437),Ce=a(422),Ee=a(391);const Se=e=>{const{image:t,title:a,category:r,price:i,rating:n,id:s}=e,o=Object(c.b)(),l=Object(I.m)();return Object(oe.jsx)(ue.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(oe.jsxs)(me.a,{sx:{maxWidth:350,padding:"10px",height:"100%",margin:"0 auto",display:"flex",flexDirection:"column"},children:[Object(oe.jsx)(P.a,{gutterBottom:!0,variant:"body2",color:"text.secondary",sx:{textAlign:"right"},children:r}),Object(oe.jsx)(ge.a,{component:"img",alt:a,height:"150",image:`${t}`,sx:{objectFit:"contain",cursor:"pointer"},onClick:()=>l(`/item/${s}`)}),Object(oe.jsx)(ve.a,{sx:{flexGrow:1},children:Object(oe.jsx)(P.a,{onClick:()=>l(`/item/${s}`),gutterBottom:!0,variant:"subtitle1",component:"div",sx:{cursor:"pointer"},children:a})}),Object(oe.jsx)(fe.a,{name:"read-only",value:n.rate,readOnly:!0}),Object(oe.jsxs)(ye.a,{sx:{justifyContent:"space-between"},children:[Object(oe.jsxs)(P.a,{variant:"h6",children:[i,"$"]}),Object(oe.jsx)(Ce.a,{size:"medium",color:"primary",variant:"contained",endIcon:Object(oe.jsx)(Ee.a,{}),onClick:()=>{o(X.addToCart({...e,count:1})),o(X.setIsCartOpen())},children:"Buy"})]})]})})};var Te=a(423);const we=Array.from({length:4},((e,t)=>Object(oe.jsx)(ue.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(oe.jsxs)(de.a,{sx:{maxWidth:350,padding:"10px",height:"100%",margin:"0 auto",display:"flex",flexDirection:"column"},children:[Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:"100%",height:150,sx:{mb:"15px"}}),Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:"100%",height:50,sx:{mb:"15px"}}),Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:"40%",height:50,sx:{mb:"15px"}}),Object(oe.jsxs)(de.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:"30%",height:50,sx:{mb:"15px"}}),Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:"30%",height:50,sx:{mb:"15px"}})]})]})},t))),_e=()=>{const[e,t]=Object(_.useState)("all"),[a,r]=Object(_.useState)([]),[i,n]=Object(_.useState)(""),s=Object(c.c)(Z);Object(_.useEffect)((()=>{r([...s])}),[s]);const o=a.map((e=>Object(oe.jsx)(Se,{...e},e.id)));return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsxs)(de.a,{sx:{display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row"}},children:[Object(oe.jsxs)(je.a,{fullWidth:!0,size:"small",color:"info",value:e,exclusive:!0,onChange:(e,a)=>{n(""),null!==a&&(t(a),r(s.filter((e=>e.category===a))),"all"===a&&r([...s]))},"aria-label":"Platform",sx:{mb:"20px",mr:"20px"},children:[Object(oe.jsx)(xe.a,{value:"all",children:"All"}),Object(oe.jsx)(xe.a,{value:"men's clothing",children:"Men`s"}),Object(oe.jsx)(xe.a,{value:"women's clothing",children:"Women"}),Object(oe.jsx)(xe.a,{value:"jewelery",children:"Jewelry"}),Object(oe.jsx)(xe.a,{value:"electronics",children:"Electronics"})]}),Object(oe.jsxs)(be.a,{sx:{minWidth:"100px",mb:"20px"},size:"small",children:[Object(oe.jsx)(he.a,{id:"filter",children:"filter"}),Object(oe.jsxs)(pe.a,{autoWidth:!0,labelId:"filter",value:i,label:"price",onChange:e=>{if(n(e.target.value),"priceDown"===e.target.value){const e=a.sort(((e,t)=>e.price-t.price));r(e)}else if("priceUp"===e.target.value){const e=a.sort(((e,t)=>t.price-e.price));r(e)}else if("rating"===e.target.value){const e=a.sort(((e,t)=>t.rating.rate-e.rating.rate));r(e)}},sx:{color:"primary.main"},children:[Object(oe.jsx)(Oe.a,{sx:{color:"primary.main"},value:"priceDown",children:"Price \u2193"}),Object(oe.jsx)(Oe.a,{sx:{color:"primary.main"},value:"priceUp",children:"Price \u2191"}),Object(oe.jsx)(Oe.a,{sx:{color:"primary.main"},value:"rating",children:"Rating"})]})]})]}),Object(oe.jsx)(ue.a,{container:!0,spacing:2,children:a.length?o:we})]})};var Re=a(393),Ie=a(394),ke=a(395),Fe=a(443),Ne=a(444),Ae=a(427);const We=()=>Object(oe.jsx)(de.a,{sx:{backgroundColor:"#1976d2",height:"64px"},children:Object(oe.jsxs)(Fe.a,{sx:{display:"flex",alignItems:"center",height:"100%",justifyContent:"space-between"},children:[Object(oe.jsx)(P.a,{color:"#fff",children:"\xa92023. E-Shop. All rights reserved."}),Object(oe.jsxs)(Ne.a,{direction:"row",spacing:2,children:[Object(oe.jsx)(Ae.a,{href:"https://twitter.com/",children:Object(oe.jsx)(Re.a,{sx:{color:"#fff"}})}),Object(oe.jsx)(Ae.a,{href:"https://instagram.com/",children:Object(oe.jsx)(Ie.a,{sx:{color:"#fff"}})}),Object(oe.jsx)(Ae.a,{href:"https://facebook.com/",children:Object(oe.jsx)(ke.a,{sx:{color:"#fff"}})})]})]})}),Me=e=>{var t,a;const r=Object(c.b)(),{data:i,isFetched:n}=e;return Object(oe.jsx)(de.a,{children:Object(oe.jsxs)(me.a,{sx:{display:"flex",justifyContent:"space-around",flexDirection:{xs:"column",sm:"column",md:"row"}},children:[n?Object(oe.jsx)(ge.a,{component:"img",image:null===i||void 0===i?void 0:i.image,alt:null===i||void 0===i?void 0:i.title,sx:{maxWidth:"300px",height:"400px",objectFit:"contain",margin:"20px auto"}}):Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:300,height:400,sx:{m:"20px auto"}}),Object(oe.jsx)(de.a,{sx:{display:"flex",flexDirection:"column",flexBasis:"50%"},children:Object(oe.jsxs)(ve.a,{sx:{flex:"1 0 auto"},children:[n?Object(oe.jsx)(P.a,{textAlign:"center",gutterBottom:!0,component:"div",variant:"h5",children:null===i||void 0===i?void 0:i.title}):Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:500,height:50,sx:{mb:"15px"}}),n?Object(oe.jsx)(P.a,{textAlign:"center",gutterBottom:!0,variant:"subtitle1",color:"text.secondary",component:"div",children:null===i||void 0===i?void 0:i.description}):Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:500,height:200,sx:{mb:"15px"}}),n?Object(oe.jsx)(fe.a,{name:"read-only",value:null!==(t=null===i||void 0===i||null===(a=i.rating)||void 0===a?void 0:a.rate)&&void 0!==t?t:1,readOnly:!0}):Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:200,height:50}),Object(oe.jsxs)(ye.a,{sx:{justifyContent:"space-between"},children:[n?Object(oe.jsxs)(P.a,{variant:"h6",children:[null===i||void 0===i?void 0:i.price,"$"]}):Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:150,height:50,sx:{ml:"-8px"}}),n?Object(oe.jsx)(Ce.a,{size:"medium",color:"primary",variant:"contained",endIcon:Object(oe.jsx)(Ee.a,{}),onClick:()=>{r(X.addToCart({...i,count:1})),r(X.setIsCartOpen())},children:"Buy"}):Object(oe.jsx)(Te.a,{animation:"wave",variant:"rectangular",width:150,height:50})]})]})})]})})};var De=a(110),Be=a(396),$e=a(397),Pe=a(398),ze=a(409);const Le=Object(De.a)(de.a)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,He=()=>{const e=Object(I.m)(),t=Object(c.b)(),a=Object(c.c)(te),r=Object(c.c)(ee),i=a.reduce(((e,t)=>e+t.count*t.price),0).toFixed(2),n=a.map((a=>Object(oe.jsxs)(de.a,{children:[Object(oe.jsxs)(Le,{padding:"15px 0",gap:"10px",children:[Object(oe.jsx)(de.a,{flex:"1 1 40%",onClick:()=>{e(`/item/${a.id}`),t(X.setIsCartOpen())},sx:{cursor:"pointer"},children:Object(oe.jsx)("img",{alt:a.title,width:"123px",height:"164px",src:a.image,style:{objectFit:"contain",maxWidth:"100%"}})}),Object(oe.jsxs)(de.a,{flex:"1 1 60%",children:[Object(oe.jsxs)(Le,{mb:"5px",children:[Object(oe.jsx)(P.a,{fontWeight:"bold",children:a.title}),Object(oe.jsx)(H.a,{onClick:()=>t(X.removeFromCart(a.id)),children:Object(oe.jsx)(Be.a,{})})]}),Object(oe.jsxs)(Le,{m:"15px 0",children:[Object(oe.jsxs)(de.a,{display:"flex",alignItems:"center",border:"1.5px solid primary",children:[Object(oe.jsx)(H.a,{onClick:()=>t(X.decreaseCount(a.id)),children:Object(oe.jsx)($e.a,{})}),Object(oe.jsx)(P.a,{children:a.count}),Object(oe.jsx)(H.a,{onClick:()=>t(X.increaseCount(a.id)),children:Object(oe.jsx)(Pe.a,{})})]}),Object(oe.jsxs)(P.a,{fontWeight:"bold",children:["$",a.price]})]})]})]},a.id),Object(oe.jsx)(D.a,{})]},a.id)));return Object(oe.jsx)(ze.a,{anchor:"right",open:r,onOpen:()=>t(X.setIsCartOpen()),onClose:()=>t(X.setIsCartOpen()),children:Object(oe.jsxs)(de.a,{padding:"30px",overflow:"auto",height:"100%",sx:{width:{xs:"100%",sm:"400px"}},children:[Object(oe.jsxs)(Le,{mb:"15px",children:[Object(oe.jsx)(P.a,{variant:"h4",children:"Shopping bag"}),Object(oe.jsx)(H.a,{onClick:()=>t(X.setIsCartOpen()),children:Object(oe.jsx)(Be.a,{})})]}),Object(oe.jsx)(de.a,{children:n}),Object(oe.jsxs)(de.a,{m:"20px 0",children:[Object(oe.jsxs)(Le,{m:"20px 0",children:[Object(oe.jsx)(P.a,{fontWeight:"bold",variant:"h6",children:"TOTAL"}),Object(oe.jsxs)(P.a,{fontWeight:"bold",variant:"h6",children:["$",i]})]}),Object(oe.jsx)(Ce.a,{disabled:!a.length,color:"primary",variant:"contained",sx:{borderRadius:0,minWidth:"100%",padding:"20px 40px",m:"20px 0"},onClick:()=>{e("/checkout"),t(X.setIsCartOpen())},children:"CHECKOUT"})]})]})})};var Ve=a(399),Ge=a(400),qe=a(187);a(236);const Ue=()=>{const e=Object(c.c)(Z),t=Object(I.m)(),a=null===e||void 0===e?void 0:e.map((e=>Object(oe.jsx)(de.a,{sx:{mb:"15px",overflow:"hidden"},children:Object(oe.jsx)(ge.a,{image:e.image,sx:{width:{xs:"150px",md:"350px"},height:{xs:"200px",md:"400px"},m:"0 auto",backgroundSize:"contain",cursor:"pointer"},onClick:()=>t(`/item/${e.id}`)})},`carousel-image-${e.id}`)));return Object(oe.jsxs)(de.a,{m:"25px auto",children:[Object(oe.jsx)(qe.Carousel,{swipeable:!0,transitionTime:1e3,autoPlay:!0,interval:3e3,infiniteLoop:!0,showThumbs:!1,showIndicators:!1,showStatus:!1,renderArrowPrev:e=>Object(oe.jsx)(H.a,{onClick:e,sx:{position:"absolute",top:"50%",left:"0",color:"black",p:"5px",zIndex:"10"},children:Object(oe.jsx)(Ve.a,{color:"primary",sx:{fontSize:40}})}),renderArrowNext:e=>Object(oe.jsx)(H.a,{onClick:e,sx:{position:"absolute",top:"50%",right:"0",color:"black",p:"5px",zIndex:"10"},children:Object(oe.jsx)(Ge.a,{color:"primary",sx:{fontSize:40}})}),children:a}),Object(oe.jsx)(P.a,{align:"center",variant:"h3",color:"primary",children:"Our products"})]})},Ke=Object.freeze({position:"top-right",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),Qe=e=>{const{category:t,id:a}=e,{data:r,isFetched:n}=(e=>{const{data:t,isFetched:a,error:r}=Object(i.useQuery)(["itemsByCategory",e],(()=>Q.carts.getCartsCategory(e)),{retry:!1}),n=Object(c.b)();return Object(_.useEffect)((()=>{r&&n(q.setError(null===r||void 0===r?void 0:r.message))}),[r,n]),{data:t||[],isFetched:a}})(t),s=r.filter((e=>e.id!==a)).map((e=>Object(oe.jsx)(Se,{...e},e.id)));return Object(oe.jsxs)(de.a,{m:"25px auto",children:[Object(oe.jsx)(P.a,{align:"center",variant:"h5",gutterBottom:!0,children:"Similar Products"}),Object(oe.jsx)(ue.a,{container:!0,spacing:2,children:n?s:we})]})};var Je=a(420),Xe=a(446),Ye=a(447),Ze=a(448),et=a(410),tt=a(416),at=a(417),rt=a(181),it=a(401),ct=a(72),nt=a(41),st=a(39);const ot=st.a().shape({email:st.b().email().required()}),lt=st.a().shape({city:st.b().min(2).required(),address:st.b().min(3).required(),phone:st.b().matches(/^\d+$/).min(10).max(13).required(),firstName:st.b().min(2).required(),lastName:st.b().min(2).required()}),dt=st.a().shape({card:st.b().matches(/^\d+$/).min(16).max(16).required(),expiration:st.b().matches(/^\d+$/).min(4).max(4).required(),cvv:st.b().matches(/^\d+$/).min(3).max(3).required()}),jt=Object(ae.a)("form")((()=>({display:"flex",flexDirection:"column",marginTop:"8px","& .MuiFormControl-root":{maxWidth:"45ch",marginBottom:"16px"}}))),xt=Object(ae.a)("div")((()=>({display:"flex",marginBottom:"16px",gap:"15px"}))),bt=e=>{let{onStepCompleted:t}=e;const{register:a,formState:r,trigger:i,setValue:c,handleSubmit:n}=Object(nt.d)({mode:"all",reValidateMode:"onChange",resolver:Object(ct.a)(ot)}),s=n((e=>{t()}));return Object(oe.jsxs)(Je.a,{variant:"outlined",sx:{p:"15px",backgroundColor:rt.a[100]},children:[Object(oe.jsxs)(et.a,{sx:{"& .MuiStepLabel-label":{fontSize:"20px",alignItems:"center",display:"flex"}},children:[Object(oe.jsx)(it.a,{sx:{mr:"5px"}})," Email"]}),Object(oe.jsxs)(tt.a,{children:[Object(oe.jsxs)(jt,{onSubmit:s,children:[Object(oe.jsx)(be.a,{sx:{m:"8px 0 16px 0",maxWidth:"50ch"},children:Object(oe.jsx)(at.a,{error:!!r.errors.email,...a("email"),type:"email",label:"Enter your email",variant:"outlined",onChange:e=>{i("email"),c("email",e.target.value,{shouldValidate:!0,shouldDirty:!0,shouldTouch:!0})}})}),Object(oe.jsx)(Ce.a,{type:"submit",variant:"contained",disabled:!r.isValid,sx:{alignSelf:"start",mb:"15px"},children:"Next"})]}),Object(oe.jsx)(P.a,{color:"text.secondary",variant:"body2",children:"By providing you email, you agree to our Privacy Policy"})]})]})};var ht=a(402),pt=a(445);const Ot=e=>{let{onStepCompleted:t,onStepBack:a}=e;const[r,i]=Object(_.useState)({card:"",expiration:"",cvv:""}),{handleSubmit:c,formState:{errors:n,isValid:s},register:o,trigger:l,setValue:d}=Object(nt.d)({mode:"all",resolver:Object(ct.a)(dt)}),j=e=>{i({...r,[e.target.name]:e.target.value}),l(e.target.name),d(e.target.name,e.target.value,{shouldValidate:!0,shouldDirty:!0,shouldTouch:!0})},x=c((e=>{t()}));return Object(oe.jsxs)(Je.a,{variant:"outlined",sx:{p:"15px",backgroundColor:rt.a[100]},children:[Object(oe.jsxs)(et.a,{sx:{"& .MuiStepLabel-label":{fontSize:"20px",alignItems:"center",display:"flex"}},children:[Object(oe.jsx)(ht.a,{sx:{mr:"5px"}})," Payment"]}),Object(oe.jsxs)(tt.a,{children:[Object(oe.jsxs)(jt,{onSubmit:x,children:[Object(oe.jsx)(at.a,{fullWidth:!0,label:"Card",error:!(null===n||void 0===n||!n.card),...o("card"),value:r.card,onChange:j}),Object(oe.jsxs)(pt.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",maxWidth:"45ch","& .MuiFormControl-root":{maxWidth:"20ch"}},children:[Object(oe.jsx)(at.a,{fullWidth:!0,label:"Expiration",error:!(null===n||void 0===n||!n.expiration),...o("expiration"),value:r.expiration,onChange:j}),Object(oe.jsx)(at.a,{type:"password",fullWidth:!0,label:"Cvv",error:!(null===n||void 0===n||!n.cvv),...o("cvv"),value:r.cvv,onChange:j})]}),Object(oe.jsxs)(xt,{children:[Object(oe.jsx)(Ce.a,{onClick:()=>a(),children:"Back"}),Object(oe.jsx)(Ce.a,{variant:"contained",color:"primary",type:"submit",disabled:!s,children:"Finish"})]})]}),Object(oe.jsx)(P.a,{color:"text.secondary",variant:"body2",children:"All information is protected and private"})]})]})};var ut=a(403);const mt=e=>{let{onStepCompleted:t,onStepBack:a}=e;const[r,i]=Object(_.useState)({city:"",address:"",phone:"",firstName:"",lastName:""}),{handleSubmit:c,formState:{errors:n,isValid:s},register:o,trigger:l,setValue:d}=Object(nt.d)({mode:"all",resolver:Object(ct.a)(lt)}),j=c((e=>{t()})),x=e=>{i({...r,[e.target.name]:e.target.value}),l(e.target.name),d(e.target.name,e.target.value,{shouldValidate:!0,shouldDirty:!0,shouldTouch:!0})};return Object(oe.jsxs)(Je.a,{variant:"outlined",sx:{p:"15px",backgroundColor:rt.a[100]},id:"2",children:[Object(oe.jsxs)(et.a,{sx:{"& .MuiStepLabel-label":{fontSize:"20px",alignItems:"center",display:"flex"}},children:[Object(oe.jsx)(ut.a,{sx:{mr:"5px"}}),"Shipping"]}),Object(oe.jsxs)(tt.a,{children:[Object(oe.jsxs)(jt,{onSubmit:j,children:[Object(oe.jsxs)(pt.a,{children:[Object(oe.jsx)(be.a,{children:Object(oe.jsx)(at.a,{fullWidth:!0,label:"City",error:!(null===n||void 0===n||!n.city),...o("city"),value:r.city,onChange:x})}),Object(oe.jsx)(be.a,{children:Object(oe.jsx)(at.a,{error:!(null===n||void 0===n||!n.address),label:"Address",...o("address"),value:r.address,onChange:x})}),Object(oe.jsx)(be.a,{children:Object(oe.jsx)(at.a,{label:"Phone",error:!(null===n||void 0===n||!n.phone),...o("phone"),type:"tel",value:r.phone,onChange:x})}),Object(oe.jsx)(be.a,{children:Object(oe.jsx)(at.a,{label:"First Name",error:!(null===n||void 0===n||!n.firstName),...o("firstName"),value:r.firstName,onChange:x})}),Object(oe.jsx)(be.a,{children:Object(oe.jsx)(at.a,{label:"Last Name",error:!(null===n||void 0===n||!n.lastName),...o("lastName"),value:r.lastName,onChange:x})})]}),Object(oe.jsxs)(xt,{children:[Object(oe.jsx)(Ce.a,{onClick:()=>a(),children:"Back"}),Object(oe.jsx)(Ce.a,{variant:"contained",color:"primary",type:"submit",disabled:!s,children:"Next"})]})]}),Object(oe.jsx)(P.a,{color:"text.secondary",variant:"body2",children:"Please check that the address and recipient are correct"})]})]})},gt=e=>{let{onComplete:t}=e;const[a,r]=Object(_.useState)(0),i=Object(c.c)(te),n=()=>{r((e=>e+1)),2===a&&i.length&&t()},s=()=>r((e=>e-1));return Object(oe.jsxs)(Je.a,{elevation:3,sx:{flex:"0 1 60%",p:"25px"},children:[Object(oe.jsx)(P.a,{textAlign:"center",variant:"h5",gutterBottom:!0,children:"Please enter all details for order"}),Object(oe.jsxs)(Xe.a,{connector:Object(oe.jsx)(Ye.a,{sx:{visibility:"hidden"}}),activeStep:a,orientation:"vertical",children:[Object(oe.jsx)(Ze.a,{children:Object(oe.jsx)(bt,{onStepCompleted:n})}),Object(oe.jsx)(Ze.a,{children:Object(oe.jsx)(mt,{onStepCompleted:n,onStepBack:s})}),Object(oe.jsx)(Ze.a,{children:Object(oe.jsx)(Ot,{onStepCompleted:n,onStepBack:s})})]})]})};var vt=a(404);const ft=()=>{const e=Object(c.b)(),t=Object(I.m)(),a=Object(c.c)(te).map((a=>Object(oe.jsxs)(de.a,{display:"flex",justifyContent:"space-between",gap:"10px",children:[Object(oe.jsx)(de.a,{sx:{objectFit:"contain",cursor:"pointer",flex:"0 0 30%",mr:"5px"},onClick:()=>t(`/item/${a.id}`),children:Object(oe.jsx)("img",{alt:a.title,height:"150px",src:a.image,style:{objectFit:"contain",maxWidth:"100%"}})}),Object(oe.jsxs)(de.a,{sx:{flex:"0 1 70%"},display:"flex",flexDirection:"column",children:[Object(oe.jsxs)(de.a,{display:"flex",justifyContent:"space-between",alignItems:"start",flexGrow:"1",children:[Object(oe.jsx)(P.a,{variant:"subtitle1",children:a.title}),Object(oe.jsx)(H.a,{onClick:()=>e(X.removeFromCart(a.id)),children:Object(oe.jsx)(vt.a,{})})]}),Object(oe.jsxs)(de.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(oe.jsxs)(P.a,{variant:"subtitle1",children:[a.price,"$"]}),Object(oe.jsxs)(de.a,{display:"flex",alignItems:"center",children:[Object(oe.jsx)(H.a,{onClick:()=>e(X.decreaseCount(a.id)),children:Object(oe.jsx)($e.a,{})}),Object(oe.jsx)(P.a,{children:a.count}),Object(oe.jsx)(H.a,{onClick:()=>e(X.increaseCount(a.id)),children:Object(oe.jsx)(Pe.a,{})})]})]})]})]},a.id)));return Object(oe.jsx)(de.a,{display:"flex",flexDirection:"column",gap:"20px",mb:"25px",children:a})},yt=()=>{const[e,t]=Object(_.useState)("");return Object(oe.jsxs)(de.a,{display:"flex",m:"15px 0",children:[Object(oe.jsx)(at.a,{value:e,onChange:e=>{t(e.target.value)},fullWidth:!0,id:"outlined-basic",label:"Promo code",variant:"outlined",sx:{"& .MuiInputBase-root":{borderRadius:"4px 0 0 4px"}}}),Object(oe.jsx)(Ce.a,{variant:"contained",sx:{borderRadius:"0 4px 4px 0"},disabled:!e.length,children:"Apply"})]})},Ct=()=>{const e=Object(c.c)(te),t=e.reduce(((e,t)=>e+t.count*t.price),0).toFixed(2);return Object(oe.jsxs)(Je.a,{elevation:3,sx:{flex:"0 1 40%",p:"30px 20px",ml:{xs:"0",md:"20px"}},children:[Object(oe.jsxs)(de.a,{display:"flex",justifyContent:"space-between",color:"primary.main",mb:"15px",children:[Object(oe.jsxs)(de.a,{display:"flex",alignItems:"center",children:[Object(oe.jsx)(F.a,{sx:{mr:"10px"}}),Object(oe.jsxs)(P.a,{variant:"h5",children:["Cart (",e.length,")"]})]}),Object(oe.jsxs)(P.a,{variant:"h5",children:["$",t]})]}),Object(oe.jsx)(ft,{}),Object(oe.jsx)(yt,{}),Object(oe.jsx)(D.a,{sx:{mb:"10px"}}),Object(oe.jsxs)(de.a,{display:"flex",justifyContent:"space-between",mb:"7px",children:[Object(oe.jsx)(P.a,{fontWeight:"400",variant:"h6",children:"Subtotal"}),Object(oe.jsxs)(P.a,{fontWeight:"400",variant:"h6",children:["$",t]})]}),Object(oe.jsxs)(de.a,{display:"flex",justifyContent:"space-between",mb:"7px",children:[Object(oe.jsx)(P.a,{fontWeight:"400",variant:"h6",children:"Discount"}),Object(oe.jsx)(P.a,{fontWeight:"400",variant:"h6",children:"$0"})]}),Object(oe.jsxs)(de.a,{display:"flex",justifyContent:"space-between",mb:"7px",children:[Object(oe.jsx)(P.a,{fontWeight:"500",variant:"h5",children:"Total"}),Object(oe.jsxs)(P.a,{fontWeight:"500",variant:"h5",children:["$",t]})]})]})},Et=()=>Object(oe.jsxs)(Fe.a,{maxWidth:"xl",sx:{margin:"25px auto",flexGrow:"1"},children:[Object(oe.jsx)(Ue,{}),Object(oe.jsx)(_e,{})]}),St=()=>{const{itemId:e}=Object(I.o)(),{data:t,isFetched:a}=(e=>{const{data:t,isFetched:a,error:r}=Object(i.useQuery)(["itemById",e],(()=>Q.carts.getCartsById(e)),{retry:!1}),n=Object(c.b)();return Object(_.useEffect)((()=>{r&&n(q.setError(null===r||void 0===r?void 0:r.message))}),[r,n]),{data:t||{},isFetched:a}})(e);return Object(oe.jsxs)(Fe.a,{maxWidth:"xl",sx:{margin:"25px auto",flexGrow:"1"},children:[Object(oe.jsx)(Me,{data:t,isFetched:a}),Object(oe.jsx)(Qe,{id:null===t||void 0===t?void 0:t.id,category:null===t||void 0===t?void 0:t.category})]})},Tt=()=>{const[e,t]=Object(_.useState)(!1);return Object(oe.jsxs)(Fe.a,{maxWidth:"xl",children:[Object(oe.jsxs)(de.a,{sx:{margin:"25px auto",flexGrow:"1",display:"flex",justifyContent:"space-between",flexDirection:{xs:"column",md:"row"},gap:"15px"},children:[Object(oe.jsx)(gt,{onComplete:()=>t(!e)}),Object(oe.jsx)(Ct,{})]}),Object(oe.jsx)(Ce.a,{fullWidth:!0,variant:"contained",color:"success",type:"submit",size:"large",sx:{mb:"15px",visibility:e?"visible":"hidden"},children:"Confirm order"})]})},wt=()=>{const{pathname:e}=Object(I.k)();return Object(_.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},_t=()=>{const e=Object(c.b)();return(()=>{const e=Object(c.c)(Y),t=Object(c.b)();Object(_.useEffect)((()=>{e&&(k.toast.error(e,Ke),t(q.resetError()))}),[t,e])})(),Object(_.useEffect)((()=>{e(J.fetchCardsAsync())}),[e]),Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(k.ToastContainer,{newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1}),Object(oe.jsx)(wt,{}),Object(oe.jsx)(le,{}),Object(oe.jsxs)(I.c,{children:[Object(oe.jsx)(I.a,{path:"/",element:Object(oe.jsx)(Et,{})}),Object(oe.jsx)(I.a,{path:"item/:itemId",element:Object(oe.jsx)(St,{})}),Object(oe.jsx)(I.a,{path:"/checkout",element:Object(oe.jsx)(Tt,{})})]}),Object(oe.jsx)(He,{}),Object(oe.jsx)(We,{})]})};a(335),a(336);Object(r.render)(Object(oe.jsx)(c.a,{store:T,children:Object(oe.jsx)(s.a,{loading:null,persistor:w,children:Object(oe.jsx)(i.QueryClientProvider,{client:o,children:Object(oe.jsx)(n.a,{children:Object(oe.jsx)(_t,{})})})})}),document.getElementById("root"),(()=>{console.log("%c \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e ","background: #00ff00; color: #000000; padding: 2.5px;")}))}},[[337,1,2]]]);
//# sourceMappingURL=main.3c7ba5d9.chunk.js.map