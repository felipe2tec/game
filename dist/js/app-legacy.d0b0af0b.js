(function(){"use strict";var t={2068:function(t,i,e){e(6992),e(8674),e(9601),e(7727);var s=e(144),n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div")},r=[],o=(e(1539),e(4747),e(3948),e(3087)),a=e(2833),h=e.p+"img/spriteStandRight.10dfd89b.png",p=e.p+"img/spriteStandLeft.62dbdc1f.png",c=e.p+"img/spriteRunRight.ea32a842.png",l=e.p+"img/spriteRunLeft.d275e7e5.png",u=function(){function t(i,e,s){(0,o.Z)(this,t),this.canvas=i,this.ctx=e,this.gravity=s,this.width=66,this.height=150,this.frames=0,this.sprite="",this.croopSprite=177,this.sprites={stand:{right:new Image,left:new Image,croopWidth:177,width:66},run:{right:new Image,left:new Image,croopWidth:340,width:127}},this.position={x:100,y:250},this.velocity={x:0,y:1},this.keys={right:{pressed:!1},left:{pressed:!1}},this.listenKeys(),this.initSprites()}return(0,a.Z)(t,[{key:"initSprites",value:function(){this.sprites.stand.right.src=h,this.sprites.stand.left.src=p,this.sprites.run.right.src=c,this.sprites.run.left.src=l,this.sprite=this.sprites.stand.right}},{key:"movimentPlayer",value:function(){this.keys.right.pressed&&this.position.x<800?this.velocity.x=5:this.keys.left.pressed&&this.position.x>100?this.velocity.x=-5:this.velocity.x=0}},{key:"draw",value:function(){this.ctx.drawImage(this.sprite,this.croopSprite*this.frames,0,this.croopSprite,400,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.frames++,this.frames>28&&(this.frames=0),this.draw(),this.position.y+=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.height+this.velocity.y<=this.canvas.height?this.velocity.y+=this.gravity:this.velocity.y=0}},{key:"listenKeys",value:function(){var t=this;addEventListener("keydown",(function(i){var e=i.keyCode;switch(e){case 65:t.keys.right.pressed||(console.log("left"),t.keys.left.pressed=!0,t.sprite=t.sprites.run.left,t.croopSprite=340,t.width=t.sprites.run.width);break;case 83:console.log("down");break;case 68:t.keys.left.pressed||(console.log("right"),t.keys.right.pressed=!0,t.sprite=t.sprites.run.right,t.croopSprite=340,t.width=t.sprites.run.width);break;case 87:console.log("up"),t.velocity.y=-20;break}})),addEventListener("keyup",(function(i){var e=i.keyCode;switch(e){case 65:console.log("left"),t.keys.left.pressed=!1,t.sprite=t.sprites.stand.left,t.croopSprite=177,t.width=t.sprites.stand.width;break;case 83:console.log("down");break;case 68:console.log("right"),t.keys.right.pressed=!1,t.sprite=t.sprites.stand.right,t.croopSprite=177,t.width=t.sprites.stand.width;break;case 87:console.log("up"),t.velocity.y-=5;break}}))}}]),t}(),f=function(){function t(i,e,s,n,r,a){(0,o.Z)(this,t),this.canvas=i,this.ctx=e,this.gravity=s,this.image=a,this.width=a.width,this.height=a.height,this.position={x:n,y:r}}return(0,a.Z)(t,[{key:"draw",value:function(){this.ctx.drawImage(this.image,this.position.x,this.position.y)}}]),t}(),y=function(){function t(i,e,s,n,r){(0,o.Z)(this,t),this.canvas=i,this.ctx=e,this.image=r,this.width=r.width,this.height=r.height,this.position={x:s,y:n}}return(0,a.Z)(t,[{key:"draw",value:function(){this.ctx.drawImage(this.image,this.position.x,this.position.y)}}]),t}(),g=e.p+"img/platform.157e62d6.png",d=e.p+"img/background.9c332479.png",v=e.p+"img/hills.918bf781.png",m={name:"App",data:function(){return{canvas:document.querySelector("#canvas"),gravity:2,ctx:"",player:"",platform:[],genericObjects:[],platImage:new Image,backgroundImg:new Image,hillsImage:new Image,spritStandRightImage:new Image}},created:function(){var t=this;this.platImage.src=g,this.backgroundImg.src=d,this.hillsImage.src=v,setTimeout((function(){t.init(),console.log(g)}),1e3)},methods:{init:function(){this.ctx=this.canvas.getContext("2d"),this.canvas.width=1024,this.canvas.height=576,this.player=new u(this.canvas,this.ctx,this.gravity),this.genericObjects.push(new y(this.canvas,this.ctx,-130,0,this.backgroundImg)),this.genericObjects.push(new y(this.canvas,this.ctx,-130,0,this.hillsImage)),this.platform.push(new f(this.canvas,this.ctx,this.gravity,0,452,this.platImage)),this.platform.push(new f(this.canvas,this.ctx,this.gravity,300,150,this.platImage)),this.platform.push(new f(this.canvas,this.ctx,this.gravity,800,350,this.platImage)),this.platform.push(new f(this.canvas,this.ctx,this.gravity,1500,450,this.platImage)),this.platform.push(new f(this.canvas,this.ctx,this.gravity,1900,150,this.platImage)),this.platform.push(new f(this.canvas,this.ctx,this.gravity,2300,350,this.platImage)),console.log(this.player.position.x-this.firstPlat),this.animate()},colisionPLayerWithPlatforms:function(t){this.player.position.y+this.player.height<=t.position.y&&this.player.position.y+this.player.height+this.player.velocity.y>=t.position.y&&this.player.position.x+this.player.width>=t.position.x&&this.player.position.x<=t.width+t.position.x&&(this.player.velocity.y=0)},drawGenericObjects:function(){var t=this;this.genericObjects.forEach((function(i){t.player.keys.right.pressed&&t.player.position.x<800||t.player.keys.left.pressed&&t.player.position.x>100||(t.player.keys.right.pressed?i.position.x-=3:t.player.keys.left.pressed&&t.player.position.x-t.firstPlat!=-100&&(i.position.x+=3)),i.draw()}))},drawPlatforms:function(){var t=this;this.platform.forEach((function(i){t.player.keys.right.pressed&&t.player.position.x<800||t.player.keys.left.pressed&&t.player.position.x>100||(t.player.keys.right.pressed?i.position.x-=5:t.player.keys.left.pressed&&t.player.position.x-t.firstPlat!=-100&&(i.position.x+=5)),i.draw(),t.colisionPLayerWithPlatforms(i)}))},animate:function(){requestAnimationFrame(this.animate),this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawGenericObjects(),this.drawPlatforms(),this.player.update(),this.player.movimentPlayer()}},components:{},computed:{firstPlat:function(){return this.platform[0].position.x}}},w=m,x=e(3736),k=(0,x.Z)(w,n,r,!1,null,null,null),b=k.exports,I=e(2365);s.Z.use(I.Z);var S=new I.Z({}),O=e(629);s.Z.use(O.ZP);var P=new O.ZP.Store({state:{hash:"1c495f75a8a08406cde3fd1785f747f2",queues:"",departaments:"",test:!1,showMoreInfo:!1,moreInfoTo:!1,showTrunks:!1,trunks:[],moreInfoToCall:"",infoCall:""}}),Z=P;s.Z.config.productionTip=!1,new s.Z({vuetify:S,store:Z,render:function(t){return t(b)}}).$mount("#app")}},i={};function e(s){var n=i[s];if(void 0!==n)return n.exports;var r=i[s]={exports:{}};return t[s](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(i,s,n,r){if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],r=t[c][2];for(var a=!0,h=0;h<s.length;h++)(!1&r||o>=r)&&Object.keys(e.O).every((function(t){return e.O[t](s[h])}))?s.splice(h--,1):(a=!1,r<o&&(o=r));if(a){t.splice(c--,1);var p=n();void 0!==p&&(i=p)}}return i}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,n,r]}}(),function(){e.d=function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,s){var n,r,o=s[0],a=s[1],h=s[2],p=0;if(o.some((function(i){return 0!==t[i]}))){for(n in a)e.o(a,n)&&(e.m[n]=a[n]);if(h)var c=h(e)}for(i&&i(s);p<o.length;p++)r=o[p],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},s=self["webpackChunkgame"]=self["webpackChunkgame"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(2068)}));s=e.O(s)})();
//# sourceMappingURL=app-legacy.d0b0af0b.js.map