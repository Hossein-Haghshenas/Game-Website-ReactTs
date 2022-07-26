import { ReactElement } from "react";
import { Game } from "../types/Games.types";
import GameCard from "./GameCards";

interface Props {
  err?: string;
  games: Game[];
}

function GameListRender({ err, games }: Props): ReactElement {
  err ? (
    <p>Unable to fetch games</p>
  ) : games?.length ? (
    <p>No games available</p>
  ) : (
    <></>
  );
  return (
    <ul>
      {games.map((game) => {
        return (
          <li key={game.id}>
            <GameCard content={game} />
          </li>
        );
      })}
    </ul>
  );
}

export default GameListRender;