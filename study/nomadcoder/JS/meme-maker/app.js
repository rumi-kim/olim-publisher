

// 보드를 클릭할 때마다 선 그리기 구현하기 


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff"
]

// function onMove(event){
//   ctx.beginPath();
//   ctx.moveTo(0,0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke()
// }

function onMove(event){
  // const color = colors[Math.floor(Math.random() * colors.length)];
  // ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke()
}

function onCLick(event){
  ctx.beginPath(); //컬러 바꿔주기위해 리셋
  // ctx.moveTo(event.offsetX,event.offsetY);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  // ctx.lineTo(event.offsetX, event.offsetY);
  // ctx.stroke()
}

canvas.addEventListener('mousemove',onMove)

canvas.addEventListener('click',onCLick)