
// const canvas = document.querySelector('canvas');

// // context => canvas에 그림을 그릴 수 있는 '붓'이라고 할 수 있음 

// const ctx = canvas.getContext('2d');

// canvas.width = 800;
// canvas.height = 800;

// make rectangle and fill it 

// ctx.fillRect(50,50,100,200) //fillRect => 단축함수 ( stroke + fill)
// ctx.rect(50,50,100,100)
// ctx.rect(150,150,100,100)
// ctx.rect(250,250,100,100)
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350,350,100,100)
// ctx.rect(450,450,100,100)
// ctx.fillStyle = "red"
// ctx.fill();


// ctx.rect(50,50,100,100)

// moveTo => 선을 긋지 않으면서 위치 이동
// lineTo => 선을 그으면서  위치 이동
    
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(150,150);
// ctx.lineTo(50,150);
// ctx.lineTo(50,50);
// ctx.fill()


// // ** 집만들기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);

// // 지붕
// ctx.moveTo(200,200); // x:200, y:200 좌표로 이동
// ctx.lineTo(325,100);
// ctx.lineTo(450,200);
// ctx.fill()

// 사람그리기
// 몸통
// ctx.fillRect(210 - 40,200 - 20,15,100);
// ctx.fillRect(400 - 40,200 - 20,15,100);
// ctx.fillRect(260 - 40,200 - 20,60,200)


// // 얼굴
// // ctx.arc( x , y ,radius , starting angle, finish angle)
// ctx.arc(250, 100, 50, 0, 2*Math.PI);
// ctx.fill();

// ctx.beginPath(); // 색상 변경을 위해 
// ctx.strokeStyle = 'white';

// ctx.arc(270+3,80, 8, 1*Math.PI, 2*Math.PI);
// ctx.moveTo(220, 80);
// ctx.arc(225+3,80, 8, 1*Math.PI, 2*Math.PI);

// ctx.stroke();

// 입
// ctx.beginPath(); // 색상 변경을 위해 
// ctx.strokeStyle = '#fff';
// ctx.arc(250,100, 25, 2*Math.PI, 1*Math.PI);
// ctx.stroke();






