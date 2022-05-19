"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tennis = void 0;
var Tennis = /** @class */ (function () {
    function Tennis(Player1, Player2) {
        this.score = '';
        this.listPlayer = [];
        this.tempScore = 0;
        this._Player1 = Player1;
        this._Player2 = Player2;
    }
    Tennis.prototype.toEqualScore = function () {
        return this._Player1.score == this._Player2.score;
    };
    Tennis.prototype.showEqualScore = function () {
        switch (this._Player1.score) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            case 3:
                return "Forty-All";
            default:
                return "Deuce";
        }
    };
    Tennis.prototype.advantageScore = function () {
        return this._Player1.score >= 4 || this._Player2.score >= 4;
    };
    Tennis.prototype.showAdvantageScore = function () {
        var farAway = this._Player1.score - this._Player2.score;
        if (farAway == 1)
            return "Advantage player1";
        else if (farAway == -1)
            return "Advantage player2";
        else if (farAway >= 2)
            return "Win for player1";
        else
            return "Win for player2";
    };
    Tennis.prototype.CompareToScore = function () {
        if (this.toEqualScore()) {
            return this.showEqualScore();
        }
        else if (this.advantageScore()) {
            return this.showAdvantageScore();
        }
        else {
            return this.score += this.showScore(this._Player1.score) +
                "-" + this.showScore(this._Player2.score);
        }
    };
    Tennis.prototype.showScore = function (score) {
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
    };
    return Tennis;
}());
exports.Tennis = Tennis;
