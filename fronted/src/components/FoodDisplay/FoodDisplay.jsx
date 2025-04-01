import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext)


    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.map((Item,index) =>{
                    if(category==="All" || category===Item.category){
                        return<FoodItem key={index} id={Item._id} name={Item.name} description={Item.description} price={Item.price} image={Item.image}/>

                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
