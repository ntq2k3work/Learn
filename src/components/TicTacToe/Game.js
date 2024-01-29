import React, { useState } from 'react';
import { calculatorWinner } from '../../TicTacToe';
import Board from './Board';
import "./GameStyle.css";

const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [xIsNext,setXIsNext] = useState(true);
    const winner = calculatorWinner(board);
    const handleClick = (index) =>{
        const boardCoppy = [...board]; //tạo mảng coppy để lưu giá trị mảng cũ
        if(winner || boardCoppy[index]) return;
        boardCoppy[index] = (xIsNext ? 'X' : 'O');
        setBoard(boardCoppy);
        setXIsNext(!xIsNext); 
    }
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
    }
    return (
        <div id='TicTacToe'>
            <h2>{winner ? `The winner is ${winner}`  : ''}</h2>
            <Board cells = {board} onClick={handleClick}></Board>
            <button className='game-reset' onClick={handleResetGame}>Reset game</button>
        </div>
    );
}

export default Game;