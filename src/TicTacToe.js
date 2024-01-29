export function calculatorWinner(cells){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8]
    ];
    for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index];
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            return cells[a];
        }
    }
    return null;
}