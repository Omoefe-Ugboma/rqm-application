// import logo from './logo.svg';
import React from 'react';
import './App.css';


//1. get the API url
//2. create the layout (box + inner content)
//3. add event listeners
//4. style
//5. complete user stories

const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component{
  state = {
    quotes: [],
    index: 0
  }

  componentDidMount(){
    // call the API and update
    fetch(API).then(res => res.json())
    .then(res => {
     this.setState({
       quotes:res.quotes
     }, this.getRandomIndex);
    });
  }

  getRandomIndex = () =>{
    const { quotes } = this.state;
    if(quotes.length > 0){
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index
      })
    }

  }

  render(){
    const { quotes, index } = this.state;
    
    const quote = quotes[index];

    console.log(index);

    return(
      <div className="wrapper d-flex align-items-center 
      justify-content-center vh-100">
        <div className="col-6 box p-4 rounded">
            {
              quote && (
                <div className="mb-4">
                  <p>{quote.quote}</p>
                  <cite className="d-block text-right">
                  - {quote.author}
                  </cite>
              </div>
              )
            }
            <div className="d-flex justify-content-between">
              <a className="btn btn-primary" href="/">Tweet</a>
              <button className="btn btn-primary" onClick=
              {this.getRandomIndex}>
                Get Quote
                </button>
            </div>
        
        </div>

      </div>
    )
  }
}

export default App;
