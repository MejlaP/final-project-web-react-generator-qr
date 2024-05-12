// Moje uživatelské jméno na discordu je Miloš P.

import React, { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../img/logo.jpg";

import AllInformations from "../components/AllInformations";
import FilteredPlayers from "../components/FilteredPlayers";

import allInformations from "../data/dataClub";
import allPlayers from "../data/dataPlayers"
import positions from "../data/positions"
import nicknames from "../data/nicknames"


const getRandomNickname = () => {
    return nicknames[Math.floor(Math.random() * nicknames.length)];
};

const Home = () => {
    const [nickname] = useState(getRandomNickname());
    const [playerPosition, setPlayerPosition] = useState("Brankáři")
    const [activeButton, setActiveButton] = useState("0");


    const filteredPlayers = allPlayers.filter(onePlayer => {
        return onePlayer.position === playerPosition
    })

    return <>
        <header>
            <img src={logo} alt="flag_logo" className="logo-flag" />
            <h1>Real Madrid CF</h1>
            <h2>{nickname}</h2>
        </header>
        <main>
            <h3>Hlavní informace o klubu</h3>
            <div className="information-section">
                {allInformations.map(information => {
                    const { id } = information
                    return <AllInformations {...information} key={id} />
                })
                }
            </div>
            <h4>Soupiska pro rok 2023/2024</h4>
            <div className="positions">
                {
                    positions.map((position, index) => {
                        return <button key={index} className={activeButton === index.toString() ? "active" : undefined} id={index} onClick={(event) => { setPlayerPosition(position); setActiveButton(event.target.id) }}>
                            {position}
                        </button>
                    })
                }
            </div>
            <div>
                {
                    filteredPlayers.map((player) => {
                        const { id } = player
                        return <FilteredPlayers {...player} key={id} />
                    })
                }
            </div>
        </main>
        <footer>
            <p>Vyzkoušejte náš <Link className="link-styles" to="/qrgenerator" >generátor QR kódu</Link>, kam můžete zadat text nebo jakoukoli url adresu (např. pokud budete chtít vyhledat více informací o klubu <strong>Real Madrid CF</strong>) a bude Vám vygenerován QR kód pro použití v mobilním telefonu.</p>
            <p><Link className="link-styles" to="/qrgenerator">Další strana</Link></p>
        </footer>
    </>
}

export default Home