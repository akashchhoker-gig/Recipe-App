import React,{useEffect,useState} from 'react';
import Recipes from './Recipes';
import './App.css';


const App=() => {

const App_ID = "3e35a9fa";
const App_Key = "a87e6d2971732348761a6a3074ba68bd";
const[recipes, setRecipes] = useState([]);
//const[counter, setCounter] = useState(0);
const [Search, setSearch] = useState("");
const [query, setQuery] = useState("chicken");
useEffect(()=>{
  getRecipes();
  },[query]);//use empty for load page once

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${'3e35a9fa'}&app_key=${'a87e6d2971732348761a6a3074ba68bd'}`);
  const data = await response.json();
  setRecipes(data.hits)
  console.log(recipes)
  console.log(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(Search)
  console.log(Search)
  console.log(query)
  setSearch('');
}

  return(
    <div className ="App">

      <form className= {"search-form"} onSubmit={getSearch}>
        <input
        className = {"search-bar"}
        type = "text" value={Search} 
        onChange={updateSearch}
        />
        <button className = {"search-button"} type = "submit">
           Search
        </button>
      </form>
      <div className ="recipes">
        {recipes.map(recipes =>(
          <Recipes 
          key={recipes.recipe.label}
          title={recipes.recipe.label} 
          calories={recipes.recipe.calories}
          image={recipes.recipe.image}
          ingredients={recipes.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <h1>hello</h1>
//   );
// }

export default App;
