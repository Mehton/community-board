import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <>
      <div class="header">
        <img
          src="Kings_Header.jpg"
          alt="Sacramento Kings"
          class="header-image"
        />
      </div>
      <h1>Sacramento Kings Home Games</h1>
      <div style={{ display: "ruby" }}>
        <Game
          picture="jersey.jpeg"
          dateTime="Oct 9, 2024 | 7:30 PM PST"
          opponent="Golden State Warriors"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA983B3F97?brand=Kings&camefrom=NBAKG_TM_EGKB1009_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_PREGM1&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_PREGM1"
        />
        <Game
          picture="180356.jpg"
          dateTime="Oct 13, 2024 | 3:00 PM PST"
          opponent="Portland Trail Blazers"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA98433F99?brand=Kings&camefrom=NBAKG_TM_EGKB1013_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_PREGM2&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_PREGM2"
        />
        <Game
          picture="180358.jpg"
          dateTime="Oct 24, 2024 | 7:00 PM PST"
          opponent="Minnesota Timberwolves"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA984A3FA8?brand=Kings&camefrom=NBAKG_TM_EGKB1024_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM1&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM1"
        />
        <Game
          picture="185581.jpg"
          dateTime="Oct 28, 2024 | 7:00 PM PST"
          opponent="Portland Trail Blazers"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA98513FD0?brand=Kings&camefrom=NBAKG_TM_EGKB1028_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM2&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM2"
        />
        <Game
          picture="Basketball.png"
          dateTime="Nov 6, 2024 | 7:00 PM PST"
          opponent="Toronto Raptors"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA98573FD4?brand=Kings&camefrom=NBAKG_TM_EGKB1106_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM3&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM3"
        />
        <Game
          picture="pexels-photo-358042.webp"
          dateTime="Nov 8, 2024 | 7:00 PM PST"
          opponent="LA Clippers"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA985C4029?brand=Kings&camefrom=NBAKG_TM_EGKB1108_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM4&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM4"
        />
        <Game
          picture="180356.jpg"
          dateTime="Nov 13, 2024 | 7:00 PM PST"
          opponent="Phoenix Suns"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA98624138?brand=Kings&camefrom=NBAKG_TM_EGKB1113_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM5&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM5"
        />
        <Game
          picture="sac_kings.webp"
          dateTime="Nov 15, 2024 | 7:00 PM PST"
          opponent="Minnesota Timberwolves  "
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA98684154?brand=Kings&camefrom=NBAKG_TM_EGKB1115_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM6&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM6"
        />
        <Game
          picture="sacramento-kings-2022-23-city-jersey.jpg"
          dateTime="Nov 16, 2024 | 7:00 PM PST"
          opponent="Utah Jazz"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA9871418F?brand=Kings&camefrom=NBAKG_TM_EGKB1116_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM7&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM7"
        />
        <Game
          picture="SacramentoKings.png"
          dateTime="Nov 18, 2024 | 7:00 PM PST"
          opponent="Atlanta Hawks"
          ticketInfo="https://www.ticketmaster.com/event/1C0060FA98764199?brand=Kings&camefrom=NBAKG_TM_EGKB1118_Schedule_OG&artistid=806010&wt.mc_id=NBA_TEAM_SAC_SCHED_PG_GM8&utm_source=NBA.com&utm_medium=client&utm_campaign=NBA_TEAM_SAC&utm_content=SINGLE_GAME_TICKETS_PG_GM8"
        />
      </div>
    </>
  );
}

export default App;
