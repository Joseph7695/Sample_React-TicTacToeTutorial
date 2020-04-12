(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(1),s=n(2),i=n(3),o=n(4),l=n(0),c=n.n(l),u=n(6),m=n.n(u);n(13);var v=function(e){var t=e.winningSquare?"#f00":"#0f0";return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},c.a.createElement("g",null,c.a.createElement("path",{class:"x__line__1",stroke:t,d:"M228 28 28 228"}),c.a.createElement("path",{class:"x__line__2",stroke:t,d:"M28 28 228 228"})))};var g=function(e){var t=e.winningSquare?"#f00":"#00f";return c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},c.a.createElement("circle",{className:"O__circle",stroke:t,fill:"none",cx:"128",cy:"128",r:"103"}))};function h(e){return c.a.createElement("button",{className:"square",onClick:e.onClick},"X"===e.value&&c.a.createElement(v,{winningSquare:e.winningSquare}),"O"===e.value&&c.a.createElement(g,{winningSquare:e.winningSquare}))}var f=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderSquare",value:function(e){var t=this,n=this.props.winningSquares?this.props.winningSquares.slice():[];return c.a.createElement(h,{key:e,winningSquare:void 0!==n.find((function(t){return t===e})),value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){for(var e=[],t=0;t<9;t+=3){for(var n=[],a=0;a<3;a++)n.push(this.renderSquare(t+a));e.push(c.a.createElement("div",{key:t,className:"board-row"},n))}return c.a.createElement("div",null,c.a.createElement("div",{className:"status"},this.props.status),e)}}]),n}(c.a.Component),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={moveSortingAscending:!0,stepNumber:0,xIsNext:!0,history:[{squares:Array(9).fill(null),move:null}]},console.log(a.state.history),a}return Object(s.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();if(!d(n)&&!n[e]){n[e]=this.state.xIsNext?"X":"O";var a=e;this.setState({history:t.concat([{squares:n,move:a}]),xIsNext:!this.state.xIsNext,stepNumber:t.length})}}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],r=d(a.squares),s=n.map((function(e,n){var a=n?"Go to moveIndex #"+n:"Go to game start";return null!==e.move?a+=" (Move made: x:".concat(e.move%3+1," y:").concat(3-Math.floor(e.move/3),")"):a+="",c.a.createElement("li",{key:n},c.a.createElement("button",{onClick:function(){return t.jumpTo(n)}},t.state.stepNumber===n?c.a.createElement("b",null,a):a))}));r?e="Winner: "+a.squares[r[0]]:e=9===this.state.stepNumber?"Draw":"Next player: "+(this.state.xIsNext?"X":"O");return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"game-board"},c.a.createElement(f,{winningSquares:r,squares:a.squares,onClick:function(e){return t.handleClick(e)}})),c.a.createElement("div",{className:"game-info"},c.a.createElement("div",null,e),c.a.createElement("button",{onClick:function(){return t.toggleMoveSorting()}},"Toggle moves order"),c.a.createElement("ol",null,this.state.moveSortingAscending?s:s.reverse())))}},{key:"toggleMoveSorting",value:function(){this.setState({moveSortingAscending:!this.state.moveSortingAscending})}}]),n}(c.a.Component);function d(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(a.a)(t[n],3),s=r[0],i=r[1],o=r[2];if(e[s]&&e[s]===e[i]&&e[s]===e[o])return t[n]}return null}m.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5819140d.chunk.js.map