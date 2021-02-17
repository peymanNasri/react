import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(){
        super();
        this.state = {data:[
            {'id':1 ,
                'name' : 'peyman'

        }

        ]}
    }
    render(){
        return(
            <div>hello my name ispe</div>
        )
    }
}
ReactDOM.render(<App /> , document.getElementById('root'))