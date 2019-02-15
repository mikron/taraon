import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import G from './app/something';

const app = new App();
const app1 = new App();
const app2 = new G();
console.log(app.t);
console.log(app1.t);
console.log(app2.t);
const o1 = {a:4};
const o2 = {...o1,j:5}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome2 extends React.Component{
    render(a) {
        console.log(a);
        return <div>Hello0, {this.props.name}</div>
    }
}
function Wellcome3 (){
    re
}
//const element = <Welcome name="Sara" />;
//const element2 = <Welcome2 name="Sara"/>;

//console.log(element.type(4));
//console.log(new element2.type(73).render(43));

////React.createElement()
ReactDOM.render([<div><span><a><h1></h1></a></span><Welcome/></div>],
   document.getElementById('root')
);