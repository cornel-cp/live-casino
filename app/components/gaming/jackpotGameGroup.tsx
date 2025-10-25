import JackpotGame from "./jackpotGame"

const JackpotGameGroup = () => {


    return (
        <div>
            <div className="flex">
                <div className="flex-4">
                    <JackpotGame icon="three_card" name="THREE_CARD_POKER" />
                </div>
                <div className="flex-4">
                    <JackpotGame icon="baccarat" name="Baccarat" />
                </div>
                <div className="flex-4">
                    <JackpotGame icon="pure" name="Pure 21.5 Blackjack" />
                </div>
            </div>
            <div className="flex">
                <div className="flex-4">
                    <JackpotGame icon="aka" name="AKA PAI GOW POKER" />
                </div>
                <div className="flex-4">
                    <JackpotGame icon="ultimate" name="ULTIMATE TEXAS HOLDEM" />
                </div>
                <div className="flex-4">
                    <JackpotGame icon="pri" name="PAI GOW TILES" />
                </div>
            </div>
            <div className="flex">
                <div className="flex-4">
                    <JackpotGame icon="casino" name="CASINO WAR" />
                </div>
                <div className="flex-4">
                    <JackpotGame icon="aka" name="AKA PAI GOW POKER" />
                </div>
                <div className="flex-4"></div>
            </div>

        </div>
    )
}

export default JackpotGameGroup