import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Bacon',   type: 'bacon' },
    { label: 'Cheese',  type: 'cheese' },
    { label: 'Meat',    type: 'meat' },
    { label: 'Salad',   type: 'salad' },
]

const buildControls = (props) => (
    <div className='BuildControls'>
        <p><strong>Current Price: ${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)} 
                removed={() => props.ingredientRemoved(ctrl.type)} 
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button disabled={!props.purchasable} className='OrderButton'>ORDER NOW</button>
    </div>
);

export default buildControls;