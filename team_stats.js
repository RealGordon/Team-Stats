/*a program to create and extract information
 about your favorite sports team
 _author: gordon
 *fscp-javascript-syntax-part-ii*
*/
const team={
  _players:[{
  firstName: 'Asamoah',
  lastName: 'Gyan',
  age: 30
},{
  firstName: 'Michael',
  lastName: 'Essien',
  age: 35
},{
  firstName: 'Steven',
  lastName: ' Appiah',
  age: 37
}
],
  _games:[{
  opponent: 'Broncos',
  teamPoints: 36,
  opponentPoints: 27
},
{
  opponent: 'Chelsea',
  teamPoints: 12,
  opponentPoints: 46
},
{
  opponent: 'Abusua Dwarfs',
  teamPoints: 50,
  opponentPoints: 10
}
],
get games(){
 return this._games 
},
get players(){
  return this._players
},
addPlayer(firstName, lastName, age){
  const player={
  firstName,lastName,age
}
this.players.push(player)
},
addGame(opponent,teamPoints,opponentPoints){
const game={
  opponent,teamPoints,opponentPoints
}
this.games.push(game)
}
};
team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs','Bunny' ,76);

team.addGame('hearts of oak',23,44);
team.addGame('Mediama FC',38,35);
team.addGame('bafanabafana',44,21);

console.log('players:')
console.log(team.players)
console.log('\ngames:')
console.log(team.games)
console.log("***************")

//print number of games
console.log("Total number of games: "+team.games.length)

//print number of wins
console.log("Total number of wins: "+
team.games.reduce((a,v)=>{
return +(v.teamPoints>v.opponentPoints)+a
},0))
