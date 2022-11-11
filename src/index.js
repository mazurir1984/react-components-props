import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Product (props) {
  return (<p> {props.name}. {props.descriptions}. Cost: {props.cost}.</p>);
}

/*root.render(<div>
  <Product name = "Programm" descriptions = "This programm about Linux" cost = "400 $"/>
</div>)*/


class ThisProduct extends React.Component {
  render () {
    const {name, descriptions, cost} = this.props;
    return (<p>{name}. {descriptions}. Cost: {cost}.</p>);
  }
}

root.render(<div>
  <ThisProduct name = "Book" descriptions = "This book about React" cost = "250 $"/>
</div>)


