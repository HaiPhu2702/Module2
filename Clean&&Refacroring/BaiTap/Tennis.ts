import {Player} from "./Player";


export class Tennis {
    score: string = '';

    public _Player1: Player;
    private _Player2: Player;
    listPlayer: Player[] = [];

    constructor(Player1: Player, Player2: Player) {
        this._Player1 = Player1;
        this._Player2 = Player2;
    }

    tempScore = 0;


    toEqualScore() {
        return this._Player1.score == this._Player2.score

    }

    showEqualScore() {
        switch (this._Player1.score) {
            case 0:
                return  "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            case 3:
                return "Forty-All";
            default:
                return "Deuce";
        }

    }

    advantageScore() {
        return this._Player1.score >= 4 || this._Player2.score >= 4
    }

    showAdvantageScore() {
        let farAway = this._Player1.score - this._Player2.score
        if (farAway == 1) return "Advantage player1";
        else if (farAway == -1) return "Advantage player2";
        else if (farAway >= 2) return "Win for player1";
        else return "Win for player2";
    }

    CompareToScore() {
        if (this.toEqualScore()) {
            return this.showEqualScore()
        } else if (this.advantageScore()) {
            return this.showAdvantageScore()
        } else {
           return this.score += this.showScore(this._Player1.score) +
                                "-" +this.showScore(this._Player2.score)
        }
    }

    showScore(score) {
            switch (score) {
                case 0:
                    return "Love";
                case 1:
                    return "Fifteen";
                case 2:
                    return "Thirty";
                case 3:
                    return "Forty";
            }
        }

}

