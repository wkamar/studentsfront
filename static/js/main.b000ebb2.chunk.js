(window.webpackJsonpnewstudent=window.webpackJsonpnewstudent||[]).push([[0],{38:function(e,t,a){e.exports=a(69)},43:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),r=a.n(o),s=(a(43),a(2)),c=a(3),m=a(5),i=a(4),d=a(6),u=a(13),h=a(11),p=(a(44),a(45),n.Component,function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"content"},l.a.createElement(u.b,{activeClassName:"selectedprofilelink",to:"/profile",className:"logo"},"Logo"),l.a.createElement("ul",null,l.a.createElement(u.b,{activeClassName:"selectedlink",exact:!0,to:"/"},"Home"),l.a.createElement(u.b,{activeClassName:"selectedlink",to:"/register"},"Register"),l.a.createElement(u.b,{activeClassName:"selectedlink",to:"/login"},"Login"))))}}]),t}(n.Component)),g=a(12),E=a.n(g),f=a(17),b=a(24),w=a(15),v=a.n(w),N="",y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).changeHandler=function(e){a.setState(Object(b.a)({},e.target.id,e.target.value)),a.validData(),console.log(Object(b.a)({},e.target.id,e.target.value))},a.submitHandler=function(e){a.validData()&&(console.log(a.state),console.log(N+"/stdapis/newuser"),v.a.post(N+"/stdapis/newuser",a.state).then(function(e){console.log(e),e.data.newid>0?(alert(e.data.message),r.a.render(l.a.createElement(k,null),document.getElementById("root"))):alert(e.data.message+"\n"+e.data.errmessage)}).catch(function(e){console.log(e)}))},a.radioClicked=function(e){a.setState({hire:0|!document.getElementById("work").checked})},a.validData=function(){return/^[0-9a-zA-Z]+$/.test(document.getElementById("firstname").value)?(document.getElementById("firstname").style.color="#000000",/^[0-9a-zA-Z]+$/.test(document.getElementById("lastname").value)?(document.getElementById("lastname").style.color="#000000",/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("inputEmail").value)?(document.getElementById("inputEmail").style.color="#000000",/^\d{10}$/.test(document.getElementById("Phone").value)?(document.getElementById("Phone").style.color="#000000",/^[A-Za-z]\w{5,14}$/.test(document.getElementById("inputPassword").value)?(document.getElementById("inputPassword").style.color="#000000",/^[A-Za-z]\w{5,14}$/.test(document.getElementById("inputPasswordConfirm").value)?document.getElementById("inputPassword").value!==document.getElementById("inputPasswordConfirm").value?(document.getElementById("inputPasswordConfirm").style.color="#ff0000",!1):(document.getElementById("inputPasswordConfirm").style.color="#000000",!0):(document.getElementById("inputPasswordConfirm").style.color="#ff0000",!1)):(document.getElementById("inputPassword").style.color="#ff0000",!1)):(document.getElementById("Phone").style.color="#ff0000",!1)):(document.getElementById("inputEmail").style.color="#ff0000",!1)):(document.getElementById("lastname").style.color="#ff0000",!1)):(document.getElementById("firstname").style.color="#ff0000",!1)},a.state={firstname:"",lastname:"",inputEmail:"",Phone:"",inputPassword:"",inputPasswordConfirm:"",hire:1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"fetchRandomData",value:function(){var e=Object(f.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3003/userslist");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),document.getElementById("firstname").value=a.results[0].name.first,document.getElementById("lastname").value=a.results[0].name.last;case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.firstname,a=e.lastname,n=e.inputEmail,o=e.Phone,r=e.inputPassword,s=e.inputPasswordConfirm;e.hire;return l.a.createElement("div",{className:"content-agileits"},l.a.createElement("h1",{className:"title"},"Student Registration Form"),l.a.createElement("div",{className:"left"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstname",className:"control-label"},"First Name:"),l.a.createElement("input",{type:"text",className:"form-control",id:"firstname",value:t,onChange:this.changeHandler,placeholder:"First Name","data-error":"Enter Your First Name",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastname",className:"control-label"},"Last Name:"),l.a.createElement("input",{type:"text",className:"form-control",id:"lastname",value:a,onChange:this.changeHandler,placeholder:"Last Name","data-error":"Enter Your Last Name",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputEmail",className:"control-label"},"Email:"),l.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail",value:n,onChange:this.changeHandler,placeholder:"Email","data-error":"This email address is invalid",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Phone",className:"control-label"},"Phone:"),l.a.createElement("input",{type:"text",className:"form-control",id:"Phone",value:o,onChange:this.changeHandler,placeholder:"Phone","data-error":"Enter Your Phone Number",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputPassword",className:"control-label"},"Password:"),l.a.createElement("div",{className:"form-inline row"},l.a.createElement("div",{className:"form-group col-sm-6 agileits-w3layouts"},l.a.createElement("input",{type:"password","data-minlength":6,className:"form-control",id:"inputPassword",value:r,onChange:this.changeHandler,placeholder:"Password",required:!0}),l.a.createElement("div",{className:"help-block"},"Minimum of 6 characters")),l.a.createElement("div",{className:"form-group col-sm-6 w3-agile"},l.a.createElement("input",{type:"password",className:"form-control",id:"inputPasswordConfirm",value:s,onChange:this.changeHandler,"data-match":"#inputPassword","data-match-error":"Whoops, these don't match",placeholder:"Confirm Password",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})))),l.a.createElement("div",{className:"form-group w3ls-opt"},l.a.createElement("label",{htmlFor:"Phone",className:"control-label"},"Gender"),l.a.createElement("label",{className:"w3layouts"},l.a.createElement("input",{type:"radio",name:"work",id:"hire",onClick:this.radioClicked,defaultChecked:!0}),"Male"),l.a.createElement("label",{className:"w3layouts label2"},l.a.createElement("input",{type:"radio",name:"work",id:"work",onClick:this.radioClicked}),"Female "))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-lg",id:"btnRegisterNewStudent",onClick:this.submitHandler},"submit"))),l.a.createElement("div",{className:"right"}),l.a.createElement("div",{className:"clear"}))}}]),t}(n.Component),k=(a(35),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).logout=function(){a.setState({isAuthenticated:!1,user:null,token:""})},a.responseFacebook=function(e){console.log(e)},a.responseGoogle=function(e){console.log(e)},a.onFailure=function(e){alert(e)},a.btnRegisterNewStudentClicked=function(){r.a.render(l.a.createElement(y,null),document.getElementById("root"))},a.btnloginwithfacebookClicked=function(){window.open("http://localhost:3003/auth/facebook","_self")},a.btnloginwithgoogleClicked=function(){window.open("http://localhost:3003/auth/google","_self")},a.state={isAuthenticated:!1,user:null,token:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"error"},"Student Login Form"),l.a.createElement("div",{className:"w3layouts-two-grids"},l.a.createElement("div",{className:"mid-class"},l.a.createElement("div",{className:"txt-left-side"},l.a.createElement("h2",null," Login Here "),l.a.createElement("form",{action:"#",method:"post"},l.a.createElement("div",{className:"form-left-to-w3l"},l.a.createElement("span",{className:"fa fa-envelope-o","aria-hidden":"true"}),l.a.createElement("input",{type:"email",name:"email",placeholder:"Email",required:!0}),l.a.createElement("div",{className:"clear"})),l.a.createElement("div",{className:"form-left-to-w3l "},l.a.createElement("span",{className:"fa fa-lock","aria-hidden":"true"}),l.a.createElement("input",{type:"password",name:"password",placeholder:"Password",required:!0}),l.a.createElement("div",{className:"clear"})),l.a.createElement("div",{className:"main-two-w3ls"},l.a.createElement("div",{className:"left-side-forget"},l.a.createElement("input",{type:"checkbox",className:"checked"}),l.a.createElement("span",{className:"remenber-me"},"Remember me ")),l.a.createElement("div",{className:"right-side-forget"},l.a.createElement("a",{to:"https://www.google.com/",className:"for"},"Forgot password...?"))),l.a.createElement("div",{className:"btnn"},l.a.createElement("button",{type:"submit"},"Login "))),l.a.createElement("div",{className:"w3layouts_more-buttn"},l.a.createElement("button",{type:"submit",className:"btn btn-lg",id:"btnloginwithfacebook",onClick:this.btnloginwithfacebookClicked},"Login with Facebook")),l.a.createElement("br",null),l.a.createElement("div",{className:"w3layouts_more-buttn"},l.a.createElement("button",{type:"submit",className:"btn btn-lg",id:"btnloginwithgoogle",onClick:this.btnloginwithgoogleClicked},"Login with Google")),l.a.createElement("div",{className:"w3layouts_more-buttn"},l.a.createElement("h3",null,"Don't Have an account..? ",l.a.createElement("button",{type:"submit",className:"btn btn-lg",id:"btnRegisterNewStudent",onClick:this.btnRegisterNewStudentClicked},"Register Here")," "))),l.a.createElement("div",{className:"img-right-side"},l.a.createElement("h3",null,"Welcome To Student Login Form"),l.a.createElement("img",{src:"images/b11.png",className:"img-fluid",alt:""})))),l.a.createElement("footer",{className:"copyrigh-wthree"},l.a.createElement("p",null,"footer footer footer footer footer footer footer footer footer footer")))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).btnlogoutclicked=function(){},a.renderRedirect=function(){return l.a.createElement(h.a,{to:"/login"})},a.state={code:-1,message:"",errmessage:"",loggedwith:"",user:{},cookies:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(fetch("http://localhost:3003/auth/facebook/success",{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Credentials":!0}}).then(function(t){if(200===t.status)return t.json();console.log("failed to authenticate user"),e.setState({code:0})}).then(function(t){console.log(".then(responseJson => {"),console.log(t),e.setState({code:t.code,message:t.message,errmessage:t.errmessage,loggedwith:t.loggedwith,user:t.user}),e.state.code>0&&(console.log("this.state.user.provider = "+e.state.user.provider),"google"===e.state.user.provider?(document.getElementById("firstname").value=e.state.user._json.given_name,document.getElementById("lastname").value=e.state.user._json.family_name,document.getElementById("inputEmail").value=e.state.user._json.email,document.getElementById("welcomeprofilename").innerText="Welcome "+e.state.user._json.given_name):"facebook"===e.state.user.provider&&(document.getElementById("firstname").value=e.state.user._json.first_name,document.getElementById("lastname").value=e.state.user._json.last_name,document.getElementById("inputEmail").value=e.state.user._json.email,document.getElementById("welcomeprofilename").innerText="Welcome "+e.state.user._json.first_name))}).catch(function(t){console.log("catch Error : "+t),e.setState({code:0})}),window.location.hash&&"#_=_"===window.location.hash)if(window.history)window.history.replaceState("",document.title,window.location.pathname);else{var t={top:document.body.scrollTop,left:document.body.scrollLeft};window.location.hash="",document.body.scrollTop=t.top,document.body.scrollLeft=t.left}}},{key:"render",value:function(){var e=this.state;e.code,e.message,e.errmessage,e.loggedwith,e.user,e.cookies;return console.log(this.state),-1===this.state.code?l.a.createElement("div",null,l.a.createElement("h1",null,"Logging...")):l.a.createElement("div",{className:"content-agileits"},this.state.code>0?l.a.createElement("h1",{className:"title",id:"welcomeprofilename"}," "):this.renderRedirect(),l.a.createElement("div",{className:"left"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstname",className:"control-label"},"First Name:"),l.a.createElement("input",{type:"text",className:"form-control",id:"firstname",value:"",onChange:this.changeHandler,placeholder:"First Name","data-error":"Enter Your First Name",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastname",className:"control-label"},"Last Name:"),l.a.createElement("input",{type:"text",className:"form-control",id:"lastname",value:"",onChange:this.changeHandler,placeholder:"Last Name","data-error":"Enter Your Last Name",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputEmail",className:"control-label"},"Email:"),l.a.createElement("input",{type:"email",className:"form-control",id:"inputEmail",value:"",onChange:this.changeHandler,placeholder:"Email","data-error":"This email address is invalid",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Phone",className:"control-label"},"Phone:"),l.a.createElement("input",{type:"text",className:"form-control",id:"Phone",value:"",onChange:this.changeHandler,placeholder:"Phone","data-error":"Enter Your Phone Number",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputPassword",className:"control-label"},"Password:"),l.a.createElement("div",{className:"form-inline row"},l.a.createElement("div",{className:"form-group col-sm-6 agileits-w3layouts"},l.a.createElement("input",{type:"password","data-minlength":6,className:"form-control",id:"inputPassword",value:"",onChange:this.changeHandler,placeholder:"Password",required:!0}),l.a.createElement("div",{className:"help-block"},"Minimum of 6 characters")),l.a.createElement("div",{className:"form-group col-sm-6 w3-agile"},l.a.createElement("input",{type:"password",className:"form-control",id:"inputPasswordConfirm",value:"",onChange:this.changeHandler,"data-match":"#inputPassword","data-match-error":"Whoops, these don't match",placeholder:"Confirm Password",required:!0}),l.a.createElement("div",{className:"help-block with-errors"})))),l.a.createElement("div",{className:"form-group w3ls-opt"},l.a.createElement("label",{htmlFor:"Phone",className:"control-label"},"Gender"),l.a.createElement("label",{className:"w3layouts"},l.a.createElement("input",{type:"radio",name:"work",id:"hire",onClick:this.radioClicked,defaultChecked:!0}),"Male"),l.a.createElement("label",{className:"w3layouts label2"},l.a.createElement("input",{type:"radio",name:"work",id:"work",onClick:this.radioClicked}),"Female "))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-lg",id:"btnRegisterNewStudent",onClick:this.submitHandler},"Update"))),l.a.createElement("div",{className:"right"}),l.a.createElement("div",{className:"clear"}))}}]),t}(n.Component),P=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"No match found"))},j=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/login",component:k}),l.a.createElement(h.b,{exact:!0,path:"/register",component:y}),l.a.createElement(h.b,{exact:!0,path:"/profile",component:C}),l.a.createElement(h.b,{exact:!0,path:"/",component:P}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.Component,n.Component;r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.b000ebb2.chunk.js.map