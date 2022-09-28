import React from 'react';
import "./SinglePlayer.css";

const SinglePlayer = ({player, cart,setCart}) => {


    const {strPlayer,idPlayer,strDescriptionEN,dateBorn,strGender, strCutout}=player;

    const handleAddToCart=()=>{
       
        const info={
            strPlayer,idPlayer,dateBorn,strGender,price:20000
            
        }
       if(cart?.length){
        setCart([...cart,info])
        return

       }else{
        setCart([info])
        return
       }
        
    }
    // console.log(cart)


    return (
        <div>
            <div className='player-cart'>
                <img  src={strCutout?strCutout:"No image found"} alt="pic"/>
                <h3>{strPlayer}</h3>
                <p>Description: {strDescriptionEN?strDescriptionEN.slice(0,100):"No data"}</p>
            <div className='cart-btn'>
                <button onClick={handleAddToCart}>Add To Cart</button>
                <button>Details</button>
                <button>Bookmarks</button>
            </div>
            </div>
            
        </div>
    );
};

export default SinglePlayer;