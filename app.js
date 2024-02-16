/*

<div id="parent">
<div id="child">
<h1>"i am something"</h1>
<h2>"same same"</h2>
</div>
</div>
*/

const newd= React.createElement("div",
    {id :"parent"},
    React.createElement("div",{id:"child"},
   [React.createElement("h1",{},"i am something"),React.createElement("h2",{},"same same")] ))


const heading=React.createElement(
    "h1",{id :"heading"},"HELLO WORLD!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(newd);
// root.render(heading);