function canvas()
{
document.title="Команды JavaScript/Canvas";
styleHtml()
document.getElementById("Txt").innerHTML="\
<br>\
<br>ctx.beginPath();\
<br>ctx.moveTo(25, 25);\
<br>ctx.lineTo(105, 25);\
<br>ctx.lineTo(25, 105);\
<br>ctx.fill();\
<br>\
<br>ctx.beginPath();\
<br>ctx.moveTo(25, 25);\
<br>ctx.lineTo(105, 25);\
<br>ctx.lineTo(25, 105);\
<br>ctx.fill();\
<br>\
<br>ctx.beginPath();\
<br>ctx.moveTo(125, 125);\
<br>ctx.lineTo(205, 125);\
<br>ctx.lineTo(125, 205);\
<br>ctx.fill();\
<br>\
<br>// Stroked triangle\
<br>ctx.beginPath();\
<br>ctx.moveTo(125, 125);\
<br>ctx.lineTo(125, 45);\
<br>ctx.lineTo(45, 125);\
<br>ctx.closePath();\
<br>ctx.stroke();\
<br>\
<br>ctx.font = '48px serif';\
<br>ctx.textBaseline = 'hanging';\
<br>ctx.strokeText('Hello world', 100, 100);\
<br>\
<br>ctx.fillStyle = '#09F';\
<br>ctx.fillRect(150, 150, 150, 150);\
<br>\
<br>\
<br>ctx.save();\
<br>ctx.fillStyle = 'Coral';\
<br>ctx.globalAlpha = 0.5;\
<br>ctx.fillRect(30, 30, 90, 90);\
<br>\
<br>// Create gradients\
<br>var lingrad = ctx.createLinearGradient(0, 0, 0, 150);\
<br>lingrad.addColorStop(0, '#00ABEB');\
<br>lingrad.addColorStop(0.5, '#fff');\
<br>lingrad.addColorStop(0.5, '#26C000');\
<br>lingrad.addColorStop(1, '#fff');\
<br>\
<br>var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);\
<br>lingrad2.addColorStop(0.5, '#000');\
<br>lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');\
<br>\
<br>// assign gradients to fill and stroke styles\
<br>ctx.fillStyle = lingrad;\
<br>ctx.strokeStyle = lingrad2;\
<br>\
<br>// draw shapes\
<br>ctx.fillRect(10, 10, 130, 130);\
<br>ctx.strokeRect(50, 50, 50, 50);\
<br>\
<br>// Цикл квадратов\
<br>for (var i = 0; i < 3; i++) {\
<br>for (var j = 0; j < 3; j++) {\
<br>ctx.save();\
<br>ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';\
<br>ctx.translate(10 + j * 50, 10 + i * 50);\
<br>ctx.fillRect(0, 0, 25, 25);\
<br>ctx.restore();\
<br>}\
<br>}\
<br>\
<br>// Create gradients\
<br>var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);\
<br>radgrad.addColorStop(0, '#A7D30C');\
<br>radgrad.addColorStop(0.9, '#019F62');\
<br>radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');\
<br>\
<br>var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);\
<br>radgrad2.addColorStop(0, '#FF5F98');\
<br>radgrad2.addColorStop(0.75, '#FF0188');\
<br>radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');\
<br>\
<br>var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);\
<br>radgrad3.addColorStop(0, '#00C9FF');\
<br>radgrad3.addColorStop(0.8, '#00B5E2');\
<br>radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');\
<br>\
<br>var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);\
<br>radgrad4.addColorStop(0, '#F4F201');\
<br>radgrad4.addColorStop(0.8, '#E4C700');\
<br>radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');\
<br>\
<br>// draw shapes\
<br>ctx.fillStyle = radgrad4;\
<br>ctx.fillRect(0, 0, 150, 150);\
<br>ctx.fillStyle = radgrad3;\
<br>ctx.fillRect(0, 0, 150, 150);\
<br>ctx.fillStyle = radgrad2;\
<br>ctx.fillRect(0, 0, 150, 150);\
<br>ctx.fillStyle = radgrad;\
<br>ctx.fillRect(0, 0, 150, 150);\
<br>\
<br>// SMS\
<br>ctx.beginPath();\
<br>ctx.moveTo(75, 25);\
<br>ctx.quadraticCurveTo(25, 25, 25, 62.5);\
<br>ctx.quadraticCurveTo(25, 100, 50, 100);\
<br>ctx.quadraticCurveTo(50, 120, 30, 125);\
<br>ctx.quadraticCurveTo(60, 120, 65, 100);\
<br>ctx.quadraticCurveTo(125, 100, 125, 62.5);\
<br>ctx.quadraticCurveTo(125, 25, 75, 25);\
<br>ctx.stroke();\
<br>\
<br>function clock() {\
<br>var now = new Date();\
<br>var ctx = document.getElementById('canvas').getContext('2d');\
<br>ctx.save();\
<br>ctx.clearRect(0, 0, 150, 150);\
<br>ctx.translate(75, 75);\
<br>ctx.scale(0.4, 0.4);\
<br>ctx.rotate(-Math.PI / 2);\
<br>ctx.strokeStyle = 'black';\
<br>ctx.fillStyle = 'white';\
<br>ctx.lineWidth = 8;\
<br>ctx.lineCap = 'round';\
<br>\
<br>// Hour marks\
<br>ctx.save();\
<br>for (var i = 0; i < 12; i++) {\
<br>ctx.beginPath();\
<br>ctx.rotate(Math.PI / 6);\
<br>ctx.moveTo(100, 0);\
<br>ctx.lineTo(120, 0);\
<br>ctx.stroke();\
<br>}\
<br>ctx.restore();\
<br>\
<br>// Minute marks\
<br>ctx.save();\
<br>ctx.lineWidth = 5;\
<br>for (i = 0; i < 60; i++) {\
<br>if (i % 5!= 0) {\
<br>ctx.beginPath();\
<br>ctx.moveTo(117, 0);\
<br>ctx.lineTo(120, 0);\
<br>ctx.stroke();\
<br>}\
<br>ctx.rotate(Math.PI / 30);\
<br>}\
<br>ctx.restore();\
<br>\
<br>var sec = now.getSeconds();\
<br>var min = now.getMinutes();\
<br>var hr  = now.getHours();\
<br>hr = hr >= 12 ? hr - 12 : hr;\
<br>\
<br>ctx.fillStyle = 'black';\
<br>\
<br>// write Hours\
<br>ctx.save();\
<br>ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);\
<br>ctx.lineWidth = 14;\
<br>ctx.beginPath();\
<br>ctx.moveTo(-20, 0);\
<br>ctx.lineTo(80, 0);\
<br>ctx.stroke();\
<br>ctx.restore();\
<br>\
<br>// write Minutes\
<br>ctx.save();\
<br>ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);\
<br>ctx.lineWidth = 10;\
<br>ctx.beginPath();\
<br>ctx.moveTo(-28, 0);\
<br>ctx.lineTo(112, 0);\
<br>ctx.stroke();\
<br>ctx.restore();\
<br>\
<br>// Write seconds\
<br>ctx.save();\
<br>ctx.rotate(sec * Math.PI / 30);\
<br>ctx.strokeStyle = '#D40000';\
<br>ctx.fillStyle = '#D40000';\
<br>ctx.lineWidth = 6;\
<br>ctx.beginPath();\
<br>ctx.moveTo(-30, 0);\
<br>ctx.lineTo(83, 0);\
<br>ctx.stroke();\
<br>ctx.beginPath();\
<br>ctx.arc(0, 0, 10, 0, Math.PI * 2, true);\
<br>ctx.fill();\
<br>ctx.beginPath();\
<br>ctx.arc(95, 0, 10, 0, Math.PI * 2, true);\
<br>ctx.stroke();\
<br>ctx.fillStyle = 'rgba(0, 0, 0, 0)';\
<br>ctx.arc(0, 0, 3, 0, Math.PI * 2, true);\
<br>ctx.fill();\
<br>ctx.restore();\
<br>\
<br>ctx.beginPath();\
<br>ctx.lineWidth = 14;\
<br>ctx.strokeStyle = '#325FA2';\
<br>ctx.arc(0, 0, 142, 0, Math.PI * 2, true);\
<br>ctx.stroke();\
<br>\
<br>ctx.restore();\
<br>\
<br>window.requestAnimationFrame(clock);\
<br>}\
<br>\
<br>window.requestAnimationFrame(clock);\
<br>\
<br>// Set line width\
<br>ctx.lineWidth = 10;\
<br>\
<br>// Wall\
<br>ctx.strokeRect(75, 140, 150, 110);\
<br>\
<br>// Door\
<br>ctx.fillRect(130, 190, 40, 60);\
<br>\
<br>// Roof\
<br>ctx.moveTo(50, 140);\
<br>ctx.lineTo(150, 60);\
<br>ctx.lineTo(250, 140);\
<br>ctx.closePath();\
<br>ctx.stroke();\
<br>\
<br>// draw background\
<br>ctx.fillStyle = '#FD0';\
<br>ctx.fillRect(0, 0, 75, 75);\
<br>ctx.fillStyle = '#6C0';\
<br>ctx.fillRect(75, 0, 75, 75);\
<br>ctx.fillStyle = '#09F';\
<br>ctx.fillRect(0, 75, 75, 75);\
<br>ctx.fillStyle = '#F30';\
<br>ctx.fillRect(75, 75, 75, 75);\
<br>ctx.fillStyle = '#FFF';\
<br>\
<br>// set transparency value\
<br>ctx.globalAlpha = 0.2;\
<br>\
<br>// Draw semi transparent circles\
<br>for (var i = 0; i < 7; i++) {\
<br>ctx.beginPath();\
<br>ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);\
<br>ctx.fill();\
<br>}\
<br>\
<br>// Кольцо\
<br>ctx.beginPath(); \
<br>ctx.arc(50, 50, 30, 0, Math.PI * 2, true);\
<br>ctx.arc(50, 50, 15, 0, Math.PI * 2, true);\
<br>ctx.fill('evenodd');\
<br>\
<br>// left rectangles, rotate from canvas origin\
<br>ctx.save();\
<br>// blue rect\
<br>ctx.fillStyle = '#0095DD';\
<br>ctx.fillRect(30, 30, 100, 100); \
<br>ctx.rotate((Math.PI / 180) * 25);\
<br>// grey rect\
<br>ctx.fillStyle = '#4D4E53';\
<br>ctx.fillRect(30, 30, 100, 100);\
<br>ctx.restore();\
<br>\
<br>// right rectangles, rotate from rectangle center\
<br>// draw blue rect\
<br>ctx.fillStyle = '#0095DD';\
<br>ctx.fillRect(150, 30, 100, 100);  \
<br>\
<br>ctx.translate(200, 80); // translate to rectangle center \
<br>// x = x + 0.5 * width\
<br>// y = y + 0.5 * height\
<br>ctx.rotate((Math.PI / 180) * 25); // rotate\
<br>ctx.translate(-200, -80); // translate back\
<br>\
<br>// draw grey rect\
<br>ctx.fillStyle = '#4D4E53';\
<br>ctx.fillRect(150, 30, 100, 100);\
<br>\
<br>// draw a simple rectangle, but scale it.\
<br>ctx.save();\
<br>ctx.scale(10, 3);\
<br>ctx.fillRect(1, 10, 10, 10);\
<br>ctx.restore();\
<br>\
<br>// mirror horizontally\
<br>ctx.scale(-1, 1);\
<br>ctx.font = '48px serif';\
<br>ctx.fillText('MDN', -135, 120);\
<br>\
<br>var ctx = document.getElementById('canvas').getContext('2d');\
<br>\
<br>ctx.shadowOffsetX = 2;\
<br>ctx.shadowOffsetY = 2;\
<br>ctx.shadowBlur = 2;\
<br>ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';\
<br>\
<br>ctx.font = '20px Times New Roman';\
<br>ctx.fillStyle = 'Black';\
<br>ctx.fillText('Sample String', 5, 30);\
<br>\
<br>// Кружочки цикл\
<br>for (var i = 0; i < 4; i++) {\
<br>for (var j = 0; j < 3; j++) {\
<br>ctx.beginPath();\
<br>var x = 25 + j * 50; // x coordinate\
<br>var y = 25 + i * 50; // y coordinate\
<br>var radius = 20; // Arc radius\
<br>var startAngle = 0; // Starting point on circle\
<br>var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle\
<br>var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise\
<br>ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);\
<br>if (i > 1) {\
<br>ctx.fill();\
<br>} else {\
<br>ctx.stroke();\
<br>}\
<br>}\
<br>}\
<br>\
<br>ctx.beginPath();\
<br>ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle\
<br>ctx.moveTo(110, 75);\
<br>ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)\
<br>ctx.moveTo(65, 65);\
<br>ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye\
<br>ctx.moveTo(95, 65);\
<br>ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye\
<br>ctx.stroke();\
<br>\
<br>for (var i = 0; i < 6; i++) {\
<br>for (var j = 0; j < 6; j++) {\
<br>ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +\
<br>Math.floor(255 - 42.5 * j) + ', 0)';\
<br>ctx.fillRect(j * 25, i * 25, 25, 25);\
<br>}\
<br>}\
<br>\
<br>var sin = Math.sin(Math.PI / 6);\
<br>var cos = Math.cos(Math.PI / 6);\
<br>ctx.translate(100, 100);\
<br>var c = 0;\
<br>for (var i = 0; i <= 12; i++) {\
<br>c = Math.floor(255 / 12 * i);\
<br>ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';\
<br>ctx.fillRect(0, 0, 100, 10);\
<br>ctx.transform(cos, sin, -sin, cos, 0, 0);\
<br>}\
<br>\
<br>ctx.setTransform(-1, 0, 0, 1, 100, 100);\
<br>ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';\
<br>ctx.fillRect(0, 50, 100, 100);\
<br>\
<br>var offset = 0;\
<br>function draw() {\
<br>ctx.clearRect(0, 0, canvas.width, canvas.height);\
<br>ctx.setLineDash([4, 2]);\
<br>ctx.lineDashOffset = -offset;\
<br>ctx.strokeRect(10, 10, 100, 100);\
<br>}\
<br>function march() {\
<br>offset++;\
<br>if (offset > 16) {\
<br>offset = 0;\
<br>}\
<br>draw();\
<br>setTimeout(march, 20);\
<br>}\
<br>march();\
<br>\
<br>// create new image object to use as pattern\
<br>var img = new Image();\
<br>img.src = 'H6.png';\
<br>img.onload = function() {\
<br>// create pattern\
<br>var ptrn = ctx.createPattern(img, 'repeat');\
<br>ctx.fillStyle = ptrn;\
<br>ctx.fillRect(0, 0, 150, 150);\
<br>}\
<br>\
<br>var img = new Image();\
<br>img.onload = function() {\
<br>ctx.drawImage(img, 0, 0);\
<br>ctx.beginPath();\
<br>ctx.moveTo(30, 96);\
<br>ctx.lineTo(70, 66);\
<br>ctx.lineTo(103, 76);\
<br>ctx.lineTo(170, 15);\
<br>ctx.stroke();\
<br>};\
<br>img.src = 'H6.png';\
<br>\
<br>var raf;\
<br>var ball = {\
<br>x: 100,\
<br>y: 100,\
<br>vx: 5,\
<br>vy: 2,\
<br>radius: 25,\
<br>color: 'blue',\
<br>draw: function() {\
<br>ctx.beginPath();\
<br>ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\
<br>ctx.closePath();\
<br>ctx.fillStyle = this.color;\
<br>ctx.fill();\
<br>}\
<br>};\
<br>function draw() {\
<br>ctx.clearRect(0,0, canvas.width, canvas.height);\
<br>ball.draw();\
<br>ball.x += ball.vx;\
<br>ball.y += ball.vy;\
<br>ball.vy *= .99;\
<br>ball.vy += .25;\
<br>if (ball.y + ball.vy > canvas.height ||\
<br>ball.y + ball.vy < 0) {\
<br>ball.vy = -ball.vy;\
<br>}\
<br>if (ball.x + ball.vx > canvas.width ||\
<br>ball.x + ball.vx < 0) {\
<br>ball.vx = -ball.vx;\
<br>}\
<br>raf = window.requestAnimationFrame(draw);\
<br>}\
<br>canvas.addEventListener('mouseover', function(e) {\
<br>raf = window.requestAnimationFrame(draw);\
<br>});\
<br>canvas.addEventListener('mouseout', function(e) {\
<br>window.cancelAnimationFrame(raf);\
<br>});\
<br>\
<br>ball.draw();\
<br>\
<br>var raf;\
<br>var running = false;\
<br>var ball = {\
<br>x: 100,\
<br>y: 100,\
<br>vx: 5,\
<br>vy: 1,\
<br>radius: 25,\
<br>color: 'blue',\
<br>draw: function() {\
<br>ctx.beginPath();\
<br>ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\
<br>ctx.closePath();\
<br>ctx.fillStyle = this.color;\
<br>ctx.fill();\
<br>}\
<br>};\
<br>function clear() {\
<br>ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';\
<br>ctx.fillRect(0,0,canvas.width,canvas.height);\
<br>}\
<br>function draw() {\
<br>clear();\
<br>ball.draw();\
<br>ball.x += ball.vx;\
<br>ball.y += ball.vy;\
<br>if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {\
<br>ball.vy = -ball.vy;\
<br>}\
<br>if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {\
<br>ball.vx = -ball.vx;\
<br>}\
<br>raf = window.requestAnimationFrame(draw);\
<br>}\
<br>canvas.addEventListener('mousemove', function(e) {\
<br>if (!running) {\
<br>clear();\
<br>ball.x = e.clientX;\
<br>ball.y = e.clientY;\
<br>ball.draw();\
<br>}\
<br>});\
<br>canvas.addEventListener('click', function(e) {\
<br>if (!running) {\
<br>raf = window.requestAnimationFrame(draw);\
<br>running = true;\
<br>}\
<br>});\
<br>canvas.addEventListener('mouseout', function(e) {\
<br>window.cancelAnimationFrame(raf);\
<br>running = false;\
<br>});\
<br>ball.draw();\
<br>\
<br>var raf;\
<br>var ball = {\
<br>x: 100,\
<br>y: 100,\
<br>vx: 5,\
<br>vy: 2,\
<br>radius: 25,\
<br>color: 'blue',\
<br>draw: function() {\
<br>ctx.beginPath();\
<br>ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\
<br>ctx.closePath();\
<br>ctx.fillStyle = this.color;\
<br>ctx.fill();\
<br>}\
<br>};\
<br>function draw() {\
<br>ctx.clearRect(0,0, canvas.width, canvas.height);\
<br>ball.draw();\
<br>ball.x += ball.vx;\
<br>ball.y += ball.vy;\
<br>if (ball.y + ball.vy > canvas.height ||\
<br>ball.y + ball.vy < 0) {\
<br>ball.vy = -ball.vy;\
<br>}\
<br>if (ball.x + ball.vx > canvas.width ||\
<br>ball.x + ball.vx < 0) {\
<br>ball.vx = -ball.vx;\
<br>}\
<br>raf = window.requestAnimationFrame(draw);\
<br>}\
<br>canvas.addEventListener('mouseover', function(e) {\
<br>raf = window.requestAnimationFrame(draw);\
<br>});\
<br>canvas.addEventListener('mouseout', function(e) {\
<br>window.cancelAnimationFrame(raf);\
<br>});\
<br>ball.draw();\
<br>\
<br>var raf;\
<br>var ball = {\
<br>x: 100,\
<br>y: 100,\
<br>vx: 5,\
<br>vy: 2,\
<br>radius: 25,\
<br>color: 'blue',\
<br>draw: function() {\
<br>ctx.beginPath();\
<br>ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\
<br>ctx.closePath();\
<br>ctx.fillStyle = this.color;\
<br>ctx.fill();\
<br>}\
<br>};\
<br>function draw() {\
<br>ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';\
<br>ctx.fillRect(0, 0, canvas.width, canvas.height);\
<br>ball.draw();\
<br>ball.x += ball.vx;\
<br>ball.y += ball.vy;\
<br>ball.vy *= .99;\
<br>ball.vy += .25;\
<br>if (ball.y + ball.vy > canvas.height ||\
<br>ball.y + ball.vy < 0) {\
<br>ball.vy = -ball.vy;\
<br>}\
<br>if (ball.x + ball.vx > canvas.width ||\
<br>ball.x + ball.vx < 0) {\
<br>ball.vx = -ball.vx;\
<br>}\
<br>raf = window.requestAnimationFrame(draw);\
<br>}\
<br>canvas.addEventListener('mouseover', function(e) {\
<br>raf = window.requestAnimationFrame(draw);\
<br>});\
<br>canvas.addEventListener('mouseout', function(e) {\
<br>window.cancelAnimationFrame(raf);\
<br>});\
ball.draw();\
<br>\
<br>var img = new Image();\
<br>img.onload = function() {\
<br>for (var i = 0; i < 4; i++) {\
<br>for (var j = 0; j < 3; j++) {\
<br>ctx.drawImage(img, j * 50, i * 38, 50, 38);\
<br>}\
<br>}\
<br>};\
<br>img.src = 'Trans.png';\
<br>\
<br>var img = new Image();\
<br>\
<br>// User Variables - customize these to change the image being scrolled, its\
<br>// direction, and the speed.\
<br>img.src = 'FB_IMG.jpg';\
<br>var CanvasXSize = 800;\
<br>var CanvasYSize = 200;\
<br>var speed = 30; // lower is faster\
<br>var scale = 1.05;\
<br>var y = -4.5; // vertical offset\
<br>// Main program\
<br>var dx = 0.75;\
<br>var imgW;\
<br>var imgH;\
<br>var x = 0;\
<br>var clearX;\
<br>var clearY;\
<br>var ctx;\
<br>img.onload = function() {\
<br>imgW = img.width * scale;\
<br>imgH = img.height * scale;\
<br>if (imgW > CanvasXSize) {\
<br>// image larger than canvas\
<br>x = CanvasXSize - imgW;\
<br>}\
<br>if (imgW > CanvasXSize) {\
<br>// image width larger than canvas\
<br>clearX = imgW;\
<br>} else {\
<br>clearX = CanvasXSize;\
<br>}\
<br>if (imgH > CanvasYSize) {\
<br>// image height larger than canvas\
<br>clearY = imgH;\
<br>} else {\
<br>clearY = CanvasYSize;\
<br>}\
<br>// get canvas context\
<br>ctx = document.getElementById('canvas').getContext('2d');\
<br>// set refresh rate\
<br>return setInterval(draw, speed);\
<br>}\
<br>function draw() {\
<br>ctx.clearRect(0, 0, clearX, clearY); // clear the canvas\
<br>// if image is <= Canvas Size\
<br>if (imgW <= CanvasXSize) {\
<br>// reset, start from beginning\
<br>if (x > CanvasXSize) {\
<br>x = -imgW + x;\
<br>}\
<br>// draw additional image1\
<br>if (x > 0) {\
<br>ctx.drawImage(img, -imgW + x, y, imgW, imgH);\
<br>}\
<br>// draw additional image2\
<br>if (x - imgW > 0) {\
<br>ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);\
<br>}\
<br>}\
<br>// image is > Canvas Size\
<br>else {\
<br>// reset, start from beginning\
<br>if (x > (CanvasXSize)) {\
<br>x = CanvasXSize - imgW;\
<br>}\
<br>// draw aditional image\
<br>if (x > (CanvasXSize-imgW)) {\
<br>ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);\
<br>}\
<br>}\
<br>// draw image\
<br>ctx.drawImage(img, x, y,imgW, imgH);\
<br>// amount to move\
<br>x += dx;\
<br>}\
<br>\
<br>var deg2rad = Math.PI / 180.0; //градусы в радианы\
<br>var depth = 11; //глубина рекурсии\
<br>ctx.lineWidth = 3; //толщина линий\
<br>ctx.strokeStyle='#330000'; //стиль рисования (цвет)\
<br>var step = 8.; //коэффициент масштабирования\
<br>var startAngle = -90; //начальный угол; -90 = прямо вверх\
<br>var slopeAngle = 25; //угол разворота ветвей; 0 = прямо вверх, дерево выродится в прямую\
<br>function drawLine (x1, y1, x2, y2) { //рисование линии на канве\
<br>ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);\
<br>}\
<br>function drawTree(x1, y1, angle, depth) { //рекурсивное рисование дерева\
<br>if (depth) {\
<br>var x2 = x1 + (Math.cos(angle * deg2rad) * depth * step);\
<br>var y2 = y1 + (Math.sin(angle * deg2rad) * depth * step);\
<br>drawLine(x1, y1, x2, y2);\
<br>drawTree(x2, y2, angle-slopeAngle, depth - 1);\
<br>drawTree(x2, y2, angle+slopeAngle, depth - 1);\
<br>}\
<br>}\
<br>//Как рисоовать на канве: \
<br>ctx.beginPath(); //начать\
<br>drawTree(400, 549, startAngle, depth); //метод отрисовки\
<br>ctx.closePath(); //закончить\
<br>ctx.stroke(); //отобразить\
<br>\
<br>ctx.beginPath();\
<br>ctx.moveTo(0,0);\
<br>ctx.quadraticCurveTo(500,400,500,0);\
<br>ctx.stroke();\
<br>\
<br>for (var i = 0; i < 100; i++) {\
<br>ctx.beginPath();\
<br>ctx.moveTo(49 + i / 100, i);\
<br>ctx.lineTo(49 + i / 100, i + 1);\
<br>ctx.closePath();\
<br>ctx.stroke();\
<br>}\
<br>\
<br>for (var i = 0; i < 100; i++) {\
<br>ctx.beginPath();\
<br>ctx.moveTo(i, 49 + i / 100);\
<br>ctx.lineTo(i + 1, 49 + i / 100);\
<br>ctx.closePath();\
<br>ctx.stroke();\
<br>}\
<br>\
<br>ctx.save();\
<br>ctx.strokeStyle = 'black';\
<br>ctx.lineWidth = 1;\
<br>ctx.beginPath();\
<br>ctx.moveTo(50, 50);\
<br>ctx.quadraticCurveTo(0, 0, 25, 75);\
<br>ctx.quadraticCurveTo(50, 0, 50, 50);\
<br>ctx.stroke();\
<br>ctx.restore();\
<br>\
<br>ctx.save();\
<br>ctx.translate(-56, -24);\
<br>ctx.scale(3.5, 1.5);\
<br>ctx.strokeStyle = '#ddd';\
<br>ctx.lineWidth = 1;\
<br>ctx.beginPath();\
<br>ctx.moveTo(50, 50);\
<br>ctx.quadraticCurveTo(0, 0, 25, 75);\
<br>ctx.quadraticCurveTo(50, 0, 50, 50);\
<br>ctx.stroke();\
<br>ctx.restore();\
<br>\
<br>ctx.beginPath();\
<br>ctx.lineWidth=\"3\";\
<br>ctx.arc(250,250,200,0,Math.PI,false);\
<br>ctx.stroke();\
<br>\
<br>ctx.beginPath();\
<br>ctx.lineWidth = \"3\";\
<br>ctx.arc(250,250,200,0,Math.PI/2, false);\
<br>ctx.stroke();\
<br>\
<br>ctx.beginPath();\
<br>ctx.lineWidth = \"3\";\
<br>ctx.arc(250,250,200,0,Math.PI*2, false);\
<br>ctx.stroke();\
<br>\
<br>ctx.strokeStyle = 'black';\
<br>ctx.strokeRect(0, 0, 100, 100);\
<br>\
<br>ctx.beginPath();\
<br>ctx.moveTo(0, 50);\
<br>ctx.lineTo(50, 100);\
<br>ctx.lineTo(100, 50);\
<br>ctx.strokeRect(100.5, 125.5, 49, 49);\
<br>ctx.fillRect(50, 125, 50, 50);\
<br>ctx.lineTo(50, 0);\
<br>ctx.clearRect(50, 125, 100, 50);\
<br>ctx.lineTo(0, 50);\
<br>ctx.stroke();\
<br>\
<br>var canvas = document.getElementsByTagName('canvas')[0],\
<br>ctx = null,\
<br>grad = null,\
<br>body = document.getElementsByTagName('body')[0],\
<br>color = 255;\
<br>\
<br>if (canvas.getContext('2d')) {\
<br>ctx = canvas.getContext('2d');\
<br>ctx.clearRect(0, 0, 600, 600);\
<br>ctx.save();\
<br>\
<br>// создание радиального градиента\
<br>grad = ctx.createRadialGradient(0,0,0,0,0,600); \
<br>grad.addColorStop(0, '#DFDFDF');\
<br>grad.addColorStop(1, 'rgb(' + color + ', ' + color + ', ' + color + ')');\
<br>\
<br>// сам фон-градиент\
<br>ctx.fillStyle = grad;\
<br>\
<br>body.onmousemove = function (event) {\
<br>var width = window.innerWidth, \
<br>height = window.innerHeight, \
<br>x = event.clientX, \
<br>y = event.clientY,\
<br>rx = 600 * x / width,\
<br>ry = 600 * y / height;\
<br>\
<br>var xc = ~~(256 * x / width);\
<br>var yc = ~~(256 * y / height);\
<br>\
<br>grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, 500);  //размер мышки\
<br>grad.addColorStop(0, '#478CFB'); //цвет мышки\
<br>grad.addColorStop(1, ['rgb(', xc, ', ', (255 - xc), ', ', yc, ')'].join(''));\
<br>// ctx.restore();\
<br>ctx.fillStyle = grad;\
<br>ctx.fillRect(0,0,600,600);\
<br>// ctx.save();\
<br>};\
<br>}\
<br>\
<br>var g1 = ctx.createLinearGradient(0, 0, 300, 200);\
<br>g1.addColorStop(0.0, 'rgba(0, 255, 0, 0.0)');\
<br>g1.addColorStop(1.0, 'rgba(0, 255, 0, 1.0)');\
<br>var g2 = ctx.createLinearGradient(0, 0, 100, 200);\
<br>g2.addColorStop(0.0, 'rgba(0, 255, 0, 1.0)');\
<br>g2.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');\
<br>ctx.fillStyle=g1;\
<br>ctx.fillRect(0,0,100,100);\
<br>ctx.fillStyle=g2;\
<br>ctx.fillRect(0,100,100,100);\
<br>\
<br>var g = ctx.createLinearGradient(100,0,0,0);\
<br>g.addColorStop(0,'#000');\
<br>g.addColorStop(1,'#fff');\
<br>ctx.fillStyle = g;\
<br>ctx.fillRect(0,0,100,100);\
<br>\
<br>gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);\
<br>gradient.addColorStop(\"0\",\"magenta\");\
<br>gradient.addColorStop(\".25\",\"blue\");\
<br>gradient.addColorStop(\".50\",\"green\");\
<br>gradient.addColorStop(\".75\",\"yellow\");\
<br>gradient.addColorStop(\"1.0\",\"red\");\
<br>ctx.fillStyle = gradient;\
<br>ctx.fillRect (0,0,500,500);\
<br>\
<br>ctx.fillStyle=\"#cbc\";\
<br>ctx.strokeStyle=\"#0b0\";\
<br>ctx.beginPath();\
<br>ctx.moveTo(0,0);\
<br>ctx.lineTo(400,150);\
<br>ctx.bezierCurveTo(160,70,60,70,50,400);\
<br>ctx.fill();\
<br>ctx.stroke();\
<br>\
<br>var ctx = canvas.getContext(\"2d\");\
<br>ctx.fillStyle=\"Black\";\
<br>ctx.fillRect(0,0,100,100);\
<br>var ctx = canvas.getContext(\"2d\");\
<br>ctx.fillStyle=\"White\";\
<br>ctx.fillRect(50,50,150,150);\
<br>\
<br>var context = canvas.getContext('2d');\
<br>var rectWidth=300;\
<br>var rectHeight=300;\
<br>// translate context to center of canvas\
<br>context.translate(canvas.width/2, canvas.height/2);\
<br>// rotate 45 degrees clockwise\
<br>context.rotate(Math.PI/4);\
<br>context.fillStyle = 'Black';\
<br>context.fillRect(rectWidth /-2, rectHeight /-2, rectWidth, rectHeight);\
<br>\
<br>var context = canvas.getContext('2d');\
<br>context.rect(10,10,100,100);\
<br>context.fillStyle = 'red';\
<br>context.shadowColor = '#C71585';\
<br>context.shadowBlur=30;\
<br>context.shadowOffsetX=10;\
<br>context.shadowOffsetY=20;\
<br>context.fill();\
<br>\
<br>var canvas = document.getElementById(\"canvas\");\
<br>var ctx = canvas.getContext('2d');\
<br>canvas.width  = 400;\
<br>canvas.height = 400; \
<br>ctx.fillRect(20, 20, 256, 256); // *3\
<br>for (i=0; i<8; i+=2) // *4\
<br>for (j=0; j<8; j+=2) \
<br>{\
<br>ctx.clearRect(20+i*32, 20+j*32, 32, 32);\
<br>ctx.clearRect(20+(i+1)*32, 20+(j+1)*32, 32, 32);\
<br>}\
<br>\
<br>var context = canvas.getContext('2d');\
<br>context.beginPath();\
<br>context.rect(10,10,100,100);\
<br>context.fillStyle='yellow';\
<br>context.fill();\
<br>context.lineWidth=10;\
<br>context.strokeStyle='black';\
<br>context.stroke();\
<br>\
<br>var g = ctx.createLinearGradient(0, 0, 300, 0);\
<br>g.addColorStop(0,'#000');\
<br>g.addColorStop(1,'#fff');\
<br>ctx.fillStyle = g;\
<br>ctx.fillRect(0,0,300,200);\
<br>\
<br>{cv=document.getElementById(\"canvas\");ctx=cv.getContext(\"2d\");l();}\
<br>var cv,ctx,size=1;\
<br>function l()\
<br>{size=(size+1)%50;\
<br>cv.width=Number(size+1);\
<br>setTimeout(l,10);}\
<br>\
<br>var canvas = document.getElementById('canvas');\
<br>var ctx = canvas.getContext(\"2d\");\
<br>ctx.fillStyle = \"#00F\";\
<br>ctx.strokeStyle = \"#F00\";\
<br>ctx.font = \"italic 30pt Arial\";\
<br>///////ctx.fillText(\"Fill text\", 20, 50);\
<br>ctx.font = 'bold 30px sans-serif';\
<br>ctx.strokeText(\"Бибилотека JAVASCRIPT\", 20, 100);\
<br>\
<br>ctx.font=\"30px Arial\";\
<br>ctx.strokeText(\"Библиотека JAVASCRIPT\",10,50);\
<br>\
<br>ctx.font='15px Verdana';\
<br>ctx.fillStyle='#60016d';\
<br>ctx.fillText(\"Теперь Вы можете отображать\", 10, 40);  \
<br>\
<br>ctx.font='25px Arial';\
<br>ctx.fillStyle='#007439';\
<br>ctx.fillText(\"произвольный текст\", 10, 80);\
<br>\
<br>ctx.fillStyle='#a67800'; \
<br>ctx.font='20px Comic Sans MS';\
<br>ctx.fillText(\"в элементе canvas.\", 50, 120);\
<br>\
<br>\
<br>\
<br>\
<br>\
<br>//  Процедура инициализации окна формы\
<br>function WindowOnLoad()\
<br>  { var iWidth = 1380, iHeight = 736; // Размер окна\
<br>   \
<br>// Изменение размера окна и его центрирование\
<br>    var iLeft = (  screen.availWidth - iWidth)  / 2;\
<br>    var iTop  = ( screen.availHeight - iHeight) / 2 - 16;\
<br>    focus();\
<br>    resizeTo (iWidth, iHeight);\
<br>    moveTo ( iLeft, iTop );\
<br>}\
<br>// \
<br>document.title='Canvas textarea';\
<br>document.bgColor=DimGray';\
<br>// \
<br>var canvas = document.getElementById('canvas');\
<br>var ctx = canvas.getContext('2d');\
<br>var textarea = document.getElementById('code');\
<br>var reset = document.getElementById('reset');\
<br>var edit = document.getElementById('edit');\
<br>var code = textarea.value;\
<br>\
<br>function drawCanvas()\
<br>{\
<br>ctx.clearRect(0, 0, canvas.width, canvas.height);\
<br>eval(textarea.value);\
<br>}\
<br>\
<br>reset.addEventListener('click', function() {\
<br>  textarea.value = code;\
<br>  drawCanvas();\
<br>});\
<br>\
<br>edit.addEventListener('click', function() {\
<br>  textarea.focus();\
<br>})\
<br>\
<br>textarea.addEventListener('input', drawCanvas);\
<br>window.addEventListener('load', drawCanvas);\
<br>\
"
}
