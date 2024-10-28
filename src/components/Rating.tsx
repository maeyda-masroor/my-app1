"use client"
import Rating from 'react-star-rating-component';
import { useState } from 'react';
function StarRating(){
    const [rating, setRating] = useState(0);
    const handleStarClick = (nextValue:any, prevValue:any, name:any) => {
       setRating(nextValue);
       console.log(nextValue)
    }
    return (
       <div className="text-9xl">
          <Rating
             name='c'
             value={rating}
             onStarClick={(nextValue, prevValue, name) => handleStarClick(nextValue, prevValue, name)}
             starCount={5}
             starColor={'#ffb400'}
             emptyStarColor={'#ccc'} 
          />
       </div>
    )
 }
 export default StarRating;