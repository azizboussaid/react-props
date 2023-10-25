import React from "react";
import Player from "./Player.js";
import players from "./players.js";

const PlayersList =() => {
    return(
        <> 
        {players.map((el,index) =>(
                <Player key={index} {...el} />))
        } 
        </>
    )
}
export default PlayersList ;