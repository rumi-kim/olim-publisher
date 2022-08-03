

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


// 마우스가 눌려있는 채로 움직일 때부터 손가락을 뗄 때까지 그림 그리기

function onMove(event){
 console.log('ddd')
}

function onCLick(event){
  ctx.moveTo(event.offsetX, event.offsetY);

 
 
}

canvas.addEventListener('mouseup',onMove)

canvas.addEventListener('mousedown',onCLick)