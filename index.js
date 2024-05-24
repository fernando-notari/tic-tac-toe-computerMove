// module.exports.computerMove = async (event) => {
//     const { board, xIsNext } = JSON.parse(event.body);
//     let randomIndex;
  
//     do {
//       randomIndex = Math.floor(Math.random() * 9);
//     } while (board[randomIndex]); 
  
//     const newBoard = [...board]; 
//     newBoard[randomIndex] = xIsNext ? 'X' : 'O'; 
  
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         board: newBoard,
//         xIsNext: !xIsNext
//       }),
//     };
//   };

export const handler = async (event) => {

    const { board, xIsNext } = JSON.parse(event.body);
    let randomIndex;
  
    do {
      randomIndex = Math.floor(Math.random() * 9);
    } while (board[randomIndex]); 
  
    const newBoard = [...board]; 
    newBoard[randomIndex] = xIsNext ? 'X' : 'O'; 

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        board: newBoard,
        xIsNext: !xIsNext
      }),
    };
    return response;
  };