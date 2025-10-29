import JackpotGame from "./jackpotGame"

const JackpotGameGroup = () => {


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 transition-all duration-1000">
                <JackpotGame icon="three_card" name="THREE_CARD_POKER" />
                <JackpotGame icon="baccarat" name="Baccarat" />
                <JackpotGame icon="pure" name="Pure 21.5 Blackjack" />
                <JackpotGame icon="aka" name="AKA PAI GOW POKER" />
                <JackpotGame icon="ultimate" name="ULTIMATE TEXAS HOLDEM" />
                <JackpotGame icon="pri" name="PAI GOW TILES" />
                <JackpotGame icon="casino" name="CASINO WAR" />
                <JackpotGame icon="aka" name="AKA PAI GOW POKER" />
            </div>
        </div>
    )
}

export default JackpotGameGroup