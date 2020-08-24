import React,{ useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
  
  const products = [
    {name:"photoshop",price : "$90.89"},
    {name:"Illustator",price : "$60.89"},
    {name:"Adobe reader",price : "$6.89"},
    ]
   
  return (
    <div className="App">
      <header className="App-header">
      
       
        <Counter></Counter>
        <Users></Users>
        
        <Product product = {products[0]} ></Product>
        <Product product = {products[1]} ></Product>
        <Product product = {products[2]} ></Product>
         <Person name = "Khairul" job = "Teacher"></Person>
         <Person name = "Kamrul" job = "Doctor"></Person>
         <Person name = "Khorshed" job = "Forex-Trader"></Person>
          <Person></Person>
          <Person></Person>
          <Person></Person>
          <Person></Person>  
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {

    border : "1px solid gray",
    borderRadius : "5px",
    backgroundColor : "lightgray",
    height : '200px',
    width : '200px',
    float : 'left'
  }
  const {name, price} = props.product

  return (
    <div style = {productStyle}>
      <h3>{name}</h3>
    <h2>{price}</h2>
      <button>Buy now</button>


    </div>

  )

}


function Person(props){

  return (
    
  <div style = {{color:"yellow",border : "2px solid red",margin: "10px",padding :"10px",borderRadius:"10px"}}>
  <h1>Name :{props.name}</h1>
  <h3>Profession :{props.job}</h3>
  </div>

  )
  

}
function AyurMed(props){
  const {name, indication, dose} = props.ayurMed

return (

  
    <div style = {{color:"yellow",border : "2px solid red",margin: "10px",padding :"10px",borderRadius:"10px"}}>
    <h1>{name}</h1>
    <h3>{indication}</h3>
    <h3>{dose}</h3>
    </div>
  
)
}

function Counter(){
  const [count, setCount]=  useState(10);
  const HandleIncrease = () => setCount (count + 1);

  
  

  return(

    <div>
      <h1> Count :{count}</h1>
      <button onClick = {() =>setCount (count - 1)}>Dislike</button>
      <button onClick = {() =>setCount (count + 1)}>like</button>
    </div>

  )
}



function Users(){
  const [users, setUsers]=  useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));

  },[])
  return (
    
  <div>
  
  <h3>Dynamic user :{users.length}</h3>
  <ul>
    {
      users.map(user =><li>{user.name}</li>)
      
    }

  </ul>
  </div>

  )
  

}
export default App;
