import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button style={{ color: props.winningSquare ? "red" : "" }} className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        let win_squares = this.props.winningSquares ? this.props.winningSquares.slice() : [];
        return <Square key={i}
            winningSquare={win_squares.find(square => square === i) !== undefined}
            value={this.props.squares[i]}
            onClick={(() => this.props.onClick(i))} />;
    }

    render() {
        var boardRows = [];
        for (let i = 0; i < 9; i += 3) {
            let boardRow = [];
            for (let j = 0; j < 3; j++) {
                boardRow.push(this.renderSquare(i + j));
            }
            boardRows.push((
                <div key={i} className='board-row'>{boardRow}</div>
            ));
        }
        return (
            <div>
                <div className="status">{this.props.status}</div>
                {boardRows}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveSortingAscending: true,
            stepNumber: 0,
            xIsNext: true,
            history: [
                {
                    squares: Array(9).fill(null),
                    move: null
                }
            ]
        }
        console.log(this.state.history);
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i])
            return;
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const move = i;
        this.setState({
            history: history.concat([{ squares: squares, move: move }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    jumpTo(i) {
        this.setState({
            stepNumber: i,
            xIsNext: (i % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winningSquares = calculateWinner(current.squares);

        const moves = history.map((step, moveIndex) => {
            let desc = moveIndex ?
                'Go to moveIndex #' + moveIndex :
                'Go to game start';
            step.move !== null ? desc += ` (Move made: x:${step.move % 3 + 1} y:${3 - Math.floor(step.move / 3)})` : desc += '';
            return (
                <li key={moveIndex}>
                    <button onClick={() => this.jumpTo(moveIndex)}>
                        {(this.state.stepNumber === moveIndex) ? <b>{desc}</b> : desc}
                    </button>
                </li>
            );
        });
        let status;
        if (winningSquares) {
            let winner = current.squares[winningSquares[0]];
            status = 'Winner: ' + winner;
        }
        else if (this.state.stepNumber === 9) {
            status = 'Draw';
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winningSquares={winningSquares}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.toggleMoveSorting()}>Toggle moves order</button>
                    <ol>{this.state.moveSortingAscending ? moves : moves.reverse()}</ol>
                </div>
            </div>
        );
    }

    toggleMoveSorting() {
        this.setState({ moveSortingAscending: !this.state.moveSortingAscending });
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return lines[i];
    }
    return null;
}
// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
