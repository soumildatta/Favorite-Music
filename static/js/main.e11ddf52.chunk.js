(this["webpackJsonpfavorite-music"]=this["webpackJsonpfavorite-music"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/heart.32d5e34b.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/emptyHeart.cd6a5112.svg"},function(e,t,a){e.exports=a.p+"static/media/search.f9719b88.svg"},function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),s=a(14),o=a.n(s),c=(a(23),a(1)),i=a(2),l=a(4),u=a(3),m=a(6),f=a.n(m);a(24);f.a.initializeApp({apiKey:"AIzaSyDMbLY91aJKM9mnq2zMLhAsKy_-f8rVXRs",authDomain:"favorite-music-678e1.firebaseapp.com",databaseURL:"https://favorite-music-678e1.firebaseio.com",projectId:"favorite-music-678e1",storageBucket:"favorite-music-678e1.appspot.com",messagingSenderId:"619773047361",appId:"1:619773047361:web:17d158d44961a87a4b0cc0"}),f.a.firestore();var h=f.a,p=(a(27),a(28),a(8)),d=a.n(p),v=a(15),g=a.n(v),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={click:0,logo:d.a},e.handleIncrement=function(){var t=e.state.click;t<1?(e.setState({click:t+1}),e.updateFirestoreLikes(1,e.props.likes)):(e.setState({click:t-1}),e.updateFirestoreLikes(0,e.props.likes))},e}return Object(i.a)(a,[{key:"updateFirestoreLikes",value:function(e,t){1===e?h.firestore().collection("songs").doc(this.props.name).set({likes:t+1},{merge:!0}):h.firestore().collection("songs").doc(this.props.name).set({likes:t-1},{merge:!0})}},{key:"formatHeart",value:function(){return 0===this.state.click?d.a:g.a}},{key:"render",value:function(){return r.a.createElement("div",{className:"text-center liker-items"},r.a.createElement("img",{className:"like-button",onClick:this.handleIncrement,src:this.formatHeart(),alt:"like button"}),r.a.createElement("h6",null,this.props.likes))}}]),a}(n.Component),b=(a(29),a(16)),E=a.n(b),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"form-inline d-flex justify-content-center md-form form-sm pb-5"},r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{onChange:function(t){return e.props.search(t)},className:"search_input",type:"text",name:"",placeholder:"Search song or artist"}),r.a.createElement("a",{href:"#",className:"search_icon"},r.a.createElement("img",{src:E.a,alt:"Search icon"}))))}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={search:null},e.search=function(t){var a=t.target.value;e.setState({search:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.songs.filter((function(t){return null==e.state.search||t.artist.toLowerCase().includes(e.state.search.toLowerCase())||t.name.toLowerCase().includes(e.state.search.toLowerCase())?t:[]})).map((function(e){return r.a.createElement("div",{key:e.id,className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("img",{src:e.cover,alt:"abba art",className:"cover-art"}),r.a.createElement("div",{className:"flex-grow-1 text-justify song-info"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h5",{className:"card-title"},e.name)),r.a.createElement("h6",{className:"card-subtitle text-muted"},e.artist)),r.a.createElement(k,{likes:e.likes,name:e.name}))))}));return r.a.createElement("div",{className:"song-list"},r.a.createElement(y,{search:this.search}),t)}}]),a}(n.Component),j=(a(30),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={songs:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted");var t=h.firestore();t.collection("songs").get().then((function(t){var a=[];t.forEach((function(e){var t=e.data();a.push(t)})),e.setState({songs:a})})).catch((function(e){return console.log(e)})),t.collection("songs").onSnapshot((function(t){t.docChanges().forEach((function(t){if("modified"===t.type){var a=e.state.songs;a.find((function(e){return e.id===t.doc.data().id&&(e.likes=t.doc.data().likes,!0)}))&&e.setState({songs:a})}}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",null,"Soumil's Favorite Songs"),r.a.createElement("p",null,"This is a list of my current favorite songs. In case youre curious if I like a certain song, use the search bar below. Leave a like on songs to let me know you like them too! You can also see the total number of people that have liked the song :)"),r.a.createElement("div",{className:"song-cards"},r.a.createElement(w,{className:"songs",songs:this.state.songs}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.e11ddf52.chunk.js.map