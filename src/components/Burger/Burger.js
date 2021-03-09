import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
    console.log(props.ingredients);
    // Object.keys() method creates an array of the keys
    let transformedIngredients = Object.keys( props.ingredients )
        .map(igKey => { // Go through each key
            // console.log(props.ingredients);
            // The element: _, is not important, get the index or length
            return [...Array( props.ingredients[igKey] )].map( (_, i) => {
                // Internal map method: for each index, return the ingredient 
                return <BurgerIngredient key={igKey + i} type={igKey} />
            } );
        } )
        // Flattening the array of burger ingredients
        // .reduce - array function, takes in a function and two arguments, previous value and current value
        // Loops through all the elements
        .reduce((arr, el) => {
            // Loops through the elements and add to initial value 
            return arr.concat(el)
        }, []); //[] is the initial value
    
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients.</p>
        }

    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        
        </div>
    )
}

export default burger;