!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t){TrelloPowerUp.Promise;var n=TrelloPowerUp.iframe({appKey:"bd1e7e486269d148ecd1be71ad5a3f1a",appName:"Streak - habit tracker"}),r=function(e,t){t&&(document.getElementById("auth-btn").classList.add("u-hidden"),document.getElementById("filter-input").removeAttribute("disabled")),document.querySelectorAll("#settings_form [name='daysInWeek']")[0].value=e.daysInWeek,document.querySelectorAll("#settings_form [name='firstDayOfWeek']")[0].value=e.firstDayOfWeek,document.querySelectorAll("#settings_form [name='commentFilter']")[0].value=e.commentFilter||"",document.getElementById("disabled-form").classList.add("u-hidden"),document.getElementById("enabled-form").classList.remove("u-hidden")};n.render((function(){n.get("card","shared").then((function(e){e.habitTrackerSettings&&e.habitTrackerSettings.daysInWeek?r(e.habitTrackerSettings,e.habitTrackerUseComments):document.getElementById("disabled-form").classList.remove("u-hidden")})).catch((function(e){console.log("Error rendering settings",e)})).finally((function(){n.sizeTo(document.body)}))})),document.getElementById("save-btn").addEventListener("click",(function(){const e=document.querySelectorAll("#settings_form [name='daysInWeek']")[0].value,t=document.querySelectorAll("#settings_form [name='firstDayOfWeek']")[0].value,r=document.querySelectorAll("#settings_form [name='commentFilter']")[0].value;return n.set("card","shared","habitTrackerSettings",{daysInWeek:e,firstDayOfWeek:t,commentFilter:r}).then((function(){n.closePopup()})).catch((function(){}))})),document.getElementById("remove-btn").addEventListener("click",(function(){return n.set("card","shared","habitTrackerSettings",null).then((function(){n.closePopup()})).catch((function(){}))})),document.getElementById("how-to-use").addEventListener("click",(function(){return n.modal({url:"./modal.html",height:360,fullscreen:!1,title:"Streak - habit tracker"})})),document.getElementById("how-to-use-before-enable").addEventListener("click",(function(){return n.modal({url:"./modal.html",height:360,fullscreen:!1,title:"Streak - habit tracker"})}));var o=function(){n.set("card","shared","habitTrackerUseComments",!0),document.getElementById("auth-btn").classList.add("u-hidden"),document.getElementById("filter-input").removeAttribute("disabled")},a=function(){n.set("member","private","authToken",Trello.token()),o()};document.getElementById("auth-btn").addEventListener("click",(function(){n.get("member","private","authToken").then((function(e){e?o():Trello.authorize({type:"popup",name:"Streak - habit tracker",expiration:"never",success:a,error:()=>{}})}))})),document.getElementById("enable-btn").addEventListener("click",(function(){const e={daysInWeek:7,firstDayOfWeek:"SUNDAY",commentFilter:""};return n.set("card","shared","habitTrackerSettings",e).then((function(){r(e,!1)})).catch((function(){})).finally((function(){n.sizeTo(document.body)}))}))}});