import Heart from "react-animated-heart"
import React, { useState } from "react";

const Intro=(props)=>{
    return (
        <div className="shadow-md rounded-md flex space-x-3 mx-20 my-5 px-2 py-3 w-[50%]">
            <div className="w-[30%]">
            <img className="rounded-md " src="/p.jpeg"></img>
            </div>
            <div className="w-[70%]" >
             <h1 className="text-xl text-pink-500 main my-2">Will you be my date for the day?</h1>
             <p className="italic">Hey, Preyanshi  we have known each other for years ,we have been through every phase we can from friends to best friends and now emarking ahead on this journey</p>
             <p className="italic">
                I want to make this day a memorable one for both of us but i want you to plan it out,so lets make this the best date ever.
             </p>
             <button className="mx-[30%] my-4 main bg-pink-500 text-white py-1 rounded-sm px-4" onClick={props.clickHandler}>BOOK DATE</button>
            
            </div>
        </div>
    )
}
export default Intro