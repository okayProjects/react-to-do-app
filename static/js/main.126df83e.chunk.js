(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),o=a.n(r),c=(a(15),a(1)),l=a(2),i=a(3),d=a(5),u=a(4),m=a(6),k=(a(16),a(17),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.inputHandler=function(e){var t=e.target.type,n=e.target.value,s=e.target.checked,r=e.target.value;"date"===t?a.setState(function(e){return{date:e.date=r}}):"text"===t?a.setState(function(e){return{text:e.text=n}}):"checkbox"===t&&a.setState(function(e){return{checked:e.checked=s}})},a.addNewTaskHandler=function(){var e=a.state,t=e.text,n=e.date,s=e.checked;a.props.addTask(t,n,s)&&a.setState(function(e){return{checked:e.checked=!1,text:e.text="",date:e.date=a.minDate}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=+this.minDate.slice(0,4)+1+"-12-31";return s.a.createElement("div",{className:"AddTask"},s.a.createElement("div",{className:"Form"},s.a.createElement("input",{type:"text",value:this.state.text,placeholder:"Add your task",onChange:this.inputHandler}),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.inputHandler}),"Priority"),s.a.createElement("label",null,"Must be done until",s.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.inputHandler})),s.a.createElement("button",{onClick:this.addNewTaskHandler},"Add task")))}}]),t}(n.Component)),h=(a(18),function(e){var t=e.task,a=t.text,n=t.date,r=t.id,o=t.active,c=t.important,l=t.expiry;if(o)return s.a.createElement("div",{className:"ActiveTask"},s.a.createElement("div",null,s.a.createElement("span",{style:c?{color:"#fff",backgroundColor:"orange"}:null},a),s.a.createElement("span",null,"deadline: ",n," ")),s.a.createElement("div",{className:"ActiveTaskButtonsWrapper"},s.a.createElement("button",{onClick:function(){return e.change(r)}},"DONE"),s.a.createElement("button",{onClick:function(){return e.delete(r)}},"DELETE")));var i=new Date(l).toLocaleString();return s.a.createElement("div",{className:"DoneTask"},s.a.createElement("div",null,s.a.createElement("span",null,a),s.a.createElement("span",null,"inisial deadline: ",n),s.a.createElement("em",null,"Confirmed ",i)),s.a.createElement("button",{onClick:function(){return e.delete(r)}},"DELETE"))}),f=(a(19),a(20),function(e){var t=e.sortOptions.map(function(e){return s.a.createElement("option",{key:e.name,selected:e.selected,value:e.method},e.name)});return s.a.createElement("div",{className:"Sort"},s.a.createElement("label",null,"Sort by"),s.a.createElement("select",{onChange:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.selectName;return e.select(t.target.value,a)}},t))}),p=function(e){var t=e.activeTasks.map(function(t){return s.a.createElement(h,{key:t.id,task:t,delete:e.delete,change:e.change})}),a=e.doneTasks.map(function(t){return s.a.createElement(h,{key:t.id,task:t,delete:e.delete,change:e.change,showAllTasks:e.showAllTasks})});return s.a.createElement("div",{className:"TaskList"},s.a.createElement("div",{className:"ToDo"},s.a.createElement("div",{className:"ToDoHeading"},s.a.createElement("h1",null,"Things to be done"),s.a.createElement("h3",null,"You have ",e.activeTasks.length," things to do. "),e.activeTasks.length>1&&s.a.createElement(f,{selectName:"ToDo",select:e.select,sortOptions:[{name:"Task names from A to Z",method:"fromA"},{name:"Task names from Z to A",method:"fromZ"},{name:"Priority",method:"priority"}]})),e.activeTasks.length>0?t:s.a.createElement("span",{className:"Encouragement"},"You've got nothing to do. Start adding new tasks!")),s.a.createElement("div",{className:"Done"},s.a.createElement("div",{className:"DoneHeading"},s.a.createElement("h1",null,"Tasks already done"),s.a.createElement("h3",null,"You've managed to accomplish ",e.doneTasks.length," tasks"),e.doneTasks.length>1&&s.a.createElement(f,{selectName:"Done",select:e.select,sortOptions:[{name:"From the oldest",method:"fromOldest"},{name:"From the latest",method:"fromLatest"},{name:"Task names from A to Z",method:"fromA"},{name:"Task names from Z to A",method:"fromZ"}]})),e.doneTasks.length>3&&s.a.createElement("div",{className:"WarningWrapper"},s.a.createElement("span",{className:"Warning"},"only last three tasks are being displayed"),s.a.createElement("button",{onClick:e.showAllTasks},"Show all tasks")),e.displayTasks?a:a.splice(0,3)))},v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).counter=0,a.state={activeTasks:[],doneTasks:[],showAllTasks:!1},a.deleteTaskHandler=function(e){var t=Object(c.a)(a.state.activeTasks);t=t.filter(function(t){return t.id!==e}),a.setState({activeTasks:t});var n=Object(c.a)(a.state.doneTasks);n=n.filter(function(t){return t.id!==e}),a.setState({doneTasks:n})},a.changeTaskHandler=function(e){var t=Object(c.a)(a.state.doneTasks),n=Array.from(a.state.activeTasks);n.forEach(function(a){a.id===e&&(a.active=!1,a.expiry=(new Date).getTime(),t.push(a))}),n=n.filter(function(e){return e.active}),a.setState({activeTasks:n,doneTasks:t})},a.addTaskHandler=function(e,t,n){var s={id:a.counter++,text:e,date:t,important:n,active:!0,expiry:null};return a.setState(function(e){return{activeTasks:[].concat(Object(c.a)(e.activeTasks),[s])}}),!0},a.showAllTasks=function(e){a.state.showAllTasks?e.target.textContent="Show all tasks":e.target.textContent="Show last three tasks",a.setState(function(e){return{showAllTasks:e.showAllTasks=!e.showAllTasks}})},a.selectHandler=function(e,t){if("ToDo"===t){var n=Object(c.a)(a.state.activeTasks);switch(e){case"fromA":n.sort(function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0});break;case"fromZ":n.sort(function(e,t){return(e=e.text.toLowerCase())>(t=t.text.toLowerCase())?-1:e<t?1:0});break;case"fromOldest":n.sort(function(e,t){return e.expiry>t.expiry?-1:e.expiry<t.expiry?1:0});break;case"fromLatest":n.sort(function(e,t){return e.expiry<t.expiry?-1:e.expiry>t.expiry?1:0});break;case"priority":n.sort(function(e,t){return e.important&&!t.important?-1:!e.important&&t.important?1:0});break;default:n=a.state.activeTasks}a.setState(function(e){return{activeTasks:e.activeTasks=n}})}if("Done"===t){var s=Object(c.a)(a.state.doneTasks);switch(e){case"fromA":s.sort(function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0});break;case"fromZ":s.sort(function(e,t){return(e=e.text.toLowerCase())>(t=t.text.toLowerCase())?-1:e<t?1:0});break;case"fromOldest":s.sort(function(e,t){return e.expiry>t.expiry?-1:e.expiry<t.expiry?1:0});break;case"fromLatest":s.sort(function(e,t){return e.expiry<t.expiry?-1:e.expiry>t.expiry?1:0});break;default:s=a.state.doneTasks}a.setState(function(e){return{doneTasks:e.tasks=s}})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k,{addTask:this.addTaskHandler}),s.a.createElement(p,{activeTasks:this.state.activeTasks,doneTasks:this.state.doneTasks,displayTasks:this.state.showAllTasks,delete:this.deleteTaskHandler,change:this.changeTaskHandler,showAllTasks:this.showAllTasks,select:this.selectHandler}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.126df83e.chunk.js.map