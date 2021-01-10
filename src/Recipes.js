import React from 'react';
import style from'./recipes.module.css';
const Recipes = (props) => {
    const listingred=props.ingredients
    return(
        <div className={style.recipe}>
        <ol>
            {listingred.map(ingredients =>(
               <li>
                   {ingredients.text}
               </li> 
            ))}
        </ol>
        <h1 >{props.title}</h1>
        <p>{props.calories}</p>
        <img className={style.image} src={props.image} />
        </div>
    )
}

export default Recipes;
