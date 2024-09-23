import React from "react";
import "./Game.css";

const Game = (props) => {
  return (
    <div class="card">
      <img src={props.picture} alt="Game Image" class="card-image" />
      <p class="date-time">Date & Time: {props.dateTime}</p>
      <p class="opponent">Opponent: {props.opponent}</p>
      <a href={props.ticketInfo} class="ticket-button" target="_blank">
        Tickets: $25 - $1250 &nbsp; &nbsp;
        <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  );
};

export default Game;
