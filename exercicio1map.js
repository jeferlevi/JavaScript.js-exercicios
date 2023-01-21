const list = [
    {name: "Rodolfo", vip: true},
    {name: "Maria", vip: false},
   {name: "João", vip: true},
    {name: "Bruno", vip: true},
    {name: "Carla", vip: false},
    {name: "Ana", vip: true},
    {name: "Julio", vip: false},
];
const newList = list.map( client => {
    const newList = {
       name: client.name,
       vip: client.vip,
       sector: client.vip ? 'black' : 'green'
    }
   return newList
})
console.log(newList)

//const list = [
   // {name: "Rododlfo", vip: true, sector: "black"},
   // {name: "Maria", vip: false, sector: "green"},
   // {name: "João", vip: true, sector: "black"},
   // {name: "Bruno", vip: true, sector: "black"},
  // {name: "Carla", vip: false, sector: "green"},
  //  {name: "Ana", vip: true, sector: "black"},
  //  {name: "Julio", vip: false, sector: "green"},

//];