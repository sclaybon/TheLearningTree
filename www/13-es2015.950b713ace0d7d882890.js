(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{FuQ6:function(n,i,e){"use strict";e.r(i),e.d(i,"SignInPageModule",(function(){return f}));var t=e("ofXK"),o=e("TEn/"),r=e("3Pt+"),s=e("0+S0"),a=e("fXoL"),c=e("UbJi"),g=e("tyNb");function b(n,i){if(1&n&&(a.Nb(0,"div",19),a.Jb(1,"ion-icon",20),a.Nb(2,"span"),a.fc(3),a.Mb(),a.Mb()),2&n){const n=a.Wb().$implicit;a.yb(3),a.gc(n.message)}}function d(n,i){if(1&n&&(a.Lb(0),a.ec(1,b,4,1,"div",18),a.Kb()),2&n){const n=i.$implicit,e=a.Wb();a.yb(1),a.Zb("ngIf",e.signInForm.get("email").hasError(n.type)&&(e.signInForm.get("email").dirty||e.signInForm.get("email").touched))}}function l(n,i){if(1&n&&(a.Nb(0,"div",19),a.Jb(1,"ion-icon",20),a.Nb(2,"span"),a.fc(3),a.Mb(),a.Mb()),2&n){const n=a.Wb().$implicit;a.yb(3),a.gc(n.message)}}function p(n,i){if(1&n&&(a.Lb(0),a.ec(1,l,4,1,"div",18),a.Kb()),2&n){const n=i.$implicit,e=a.Wb();a.yb(1),a.Zb("ngIf",e.signInForm.get("password").hasError(n.type)&&(e.signInForm.get("password").dirty||e.signInForm.get("password").touched))}}function u(n,i){if(1&n&&(a.Nb(0,"div",11),a.Nb(1,"div",19),a.Jb(2,"ion-icon",20),a.Nb(3,"span"),a.fc(4),a.Mb(),a.Mb(),a.Mb()),2&n){const n=a.Wb();a.yb(4),a.gc(n.submitError)}}const m=function(){return["/sign-up"]},h=[{path:"",component:(()=>{class n{constructor(n,i,e,t){this.angularFire=n,this.router=i,this.ngZone=e,this.authService=t,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 6 characters long."}]},this.signInForm=new r.c({email:new r.a("",r.k.compose([r.k.required,r.k.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new r.a("",r.k.compose([r.k.minLength(6),r.k.required]))}),this.authRedirectResult=this.authService.getRedirectResult().subscribe(n=>{n.user?this.redirectLoggedUserToProfilePage():n.error&&(this.submitError=n.error)})}redirectLoggedUserToProfilePage(){this.ngZone.run(()=>{this.router.navigate(["profile"])})}signInWithEmail(){this.authService.signInWithEmail(this.signInForm.value.email,this.signInForm.value.password).then(n=>{this.redirectLoggedUserToProfilePage()}).catch(n=>{this.submitError=n.message})}facebookSignIn(){this.authService.signInWithFacebook().then(n=>{n.additionalUserInfo&&this.authService.setProviderAdditionalInfo(n.additionalUserInfo.profile),this.redirectLoggedUserToProfilePage()}).catch(n=>{console.log(n)})}googleSignIn(){this.authService.signInWithGoogle().then(n=>{n.additionalUserInfo&&this.authService.setProviderAdditionalInfo(n.additionalUserInfo.profile),this.redirectLoggedUserToProfilePage()}).catch(n=>{console.log(n)})}twitterSignIn(){this.authService.signInWithTwitter().then(n=>{n.additionalUserInfo&&this.authService.setProviderAdditionalInfo(n.additionalUserInfo.profile),this.redirectLoggedUserToProfilePage()}).catch(n=>{console.log(n)})}}return n.\u0275fac=function(i){return new(i||n)(a.Ib(c.a),a.Ib(g.g),a.Ib(a.z),a.Ib(s.a))},n.\u0275cmp=a.Cb({type:n,selectors:[["app-sign-in"]],decls:30,vars:8,consts:[[1,"sign-in-content"],["size","2"],[3,"src"],[1,"spacer"],[3,"formGroup","ngSubmit"],["lines","full",1,"inputs-list","transparentBackground"],[1,"input-item"],["type","email","placeholder","Email","formControlName","email","clearInput","","autocapitalize","off","inputmode","email"],["color","transparent",1,"error-container"],[4,"ngFor","ngForOf"],["type","password","placeholder","Password","formControlName","password"],[1,"error-container"],["color","secondary","type","submit","expand","block",1,"sign-in-btn",3,"disabled"],["class","error-container",4,"ngIf"],["size","4"],[1,"sign-in-hr"],[1,"sign-in-text"],["color","secondary","expand","block",1,"sign-up-btn","button-outline",3,"routerLink"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,i){1&n&&(a.Nb(0,"ion-content",0),a.Nb(1,"ion-row"),a.Jb(2,"ion-col",1),a.Nb(3,"ion-col"),a.Jb(4,"img",2),a.Mb(),a.Jb(5,"ion-col",1),a.Mb(),a.Jb(6,"div",3),a.Nb(7,"form",4),a.Ub("ngSubmit",(function(){return i.signInWithEmail()})),a.Nb(8,"ion-list",5),a.Nb(9,"ion-item",6),a.Jb(10,"ion-input",7),a.Mb(),a.Nb(11,"div",8),a.ec(12,d,2,1,"ng-container",9),a.Mb(),a.Nb(13,"ion-item",6),a.Jb(14,"ion-input",10),a.Mb(),a.Nb(15,"div",11),a.ec(16,p,2,1,"ng-container",9),a.Mb(),a.Mb(),a.Nb(17,"ion-button",12),a.fc(18," Sign In"),a.Mb(),a.ec(19,u,5,1,"div",13),a.Nb(20,"ion-row"),a.Nb(21,"ion-col",14),a.Jb(22,"hr",15),a.Mb(),a.Nb(23,"ion-col",14),a.Nb(24,"span",16),a.fc(25," or "),a.Mb(),a.Mb(),a.Nb(26,"ion-col",14),a.Jb(27,"hr",15),a.Mb(),a.Mb(),a.Nb(28,"ion-button",17),a.fc(29," Sign Up "),a.Mb(),a.Mb(),a.Mb()),2&n&&(a.yb(4),a.Zb("src","assets/Logo_Transparent.png",a.cc),a.yb(3),a.Zb("formGroup",i.signInForm),a.yb(5),a.Zb("ngForOf",i.validation_messages.email),a.yb(4),a.Zb("ngForOf",i.validation_messages.password),a.yb(1),a.Zb("disabled",!i.signInForm.valid),a.yb(2),a.Zb("ngIf",i.submitError),a.yb(9),a.Zb("routerLink",a.ac(7,m)))},directives:[o.f,o.m,o.e,r.l,r.i,r.d,o.k,o.j,o.i,o.w,r.h,r.b,t.h,o.b,t.i,o.v,g.h,o.h],styles:[".sign-in-content[_ngcontent-%COMP%]{--ion-background-color:linear-gradient(#5ddfc1,#fff 50%);text-align:center;--padding-bottom:16px;--padding-end:16px;--padding-start:16px;--padding-top:16px}.sign-in-content[_ngcontent-%COMP%]   .transparentBackground[_ngcontent-%COMP%]{background-color:transparent}.sign-in-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--ion-text-color:#757575;--border-color:#757575}.sign-in-content[_ngcontent-%COMP%]   .auth-title[_ngcontent-%COMP%]{font-weight:700;margin-bottom:64px;letter-spacing:.6px}.sign-in-content[_ngcontent-%COMP%]   .social-auth-options[_ngcontent-%COMP%]   .options-divider[_ngcontent-%COMP%]{text-align:center}.sign-in-content[_ngcontent-%COMP%]   .inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{margin:16px 0;display:flex;align-items:center;color:var(--ion-color-danger);font-size:14px}.sign-in-content[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;-webkit-padding-end:8px;padding-inline-end:8px}.sign-in-content[_ngcontent-%COMP%]   .sign-in-btn[_ngcontent-%COMP%], .sign-in-content[_ngcontent-%COMP%]   .sign-up-btn[_ngcontent-%COMP%]{margin:16px 0}.sign-in-content[_ngcontent-%COMP%]   .sign-in-hr[_ngcontent-%COMP%]{background-color:var(--ion-color-medium)}.sign-in-content[_ngcontent-%COMP%]   .sign-in-text[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.sign-in-content[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{height:50px}"]}),n})()}];let f=(()=>{class n{}return n.\u0275mod=a.Gb({type:n}),n.\u0275inj=a.Fb({factory:function(i){return new(i||n)},imports:[[t.b,r.e,r.j,o.r,g.i.forChild(h)]]}),n})()}}]);