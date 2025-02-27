"use strict"; /*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  const entries = Object.entries(game.scored)
for (const [key, names] of entries) {
  console.log(`Goal ${key} : ${names}`);
}
const odds = Object.values(game.odds)
let average = 0;
for (const odd of odds) {
  average += odd;

}
console.log(average /= odds.length); 
document.getElementById("openModalBtn").onclick = function() {
  document.getElementById("myModal").style.display = "block";
}

// document.getElementsByClassName("close")[0].onclick = function() {
//   document.getElementById("myModal").style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == document.getElementById("myModal")) {
//       document.getElementById("myModal").style.display = "none";
//   }
// }
// */
// document.addEventListener('DOMContentLoaded', () => {
//   // Function to count up
//   function countUp(elementId, endValue, duration) {
//     let startValue = 0;
//     const element = document.getElementById(elementId);
//     const startTime = performance.now();

//     function updateCounter(currentTime) {
//       const elapsedTime = currentTime - startTime;
//       const progress = Math.min(elapsedTime / duration, 1);
//       startValue = Math.floor(progress * endValue);
//       element.textContent = startValue;

//       if (progress < 1) {
//         requestAnimationFrame(updateCounter);
//       }
//     }

//     requestAnimationFrame(updateCounter);
//   }

//   // Intersection Observer options
//   const options = {
//     root: null, // Use the viewport as the root
//     threshold: 0.1 // 10% of the element must be visible
//   };

//   // Callback function for the observer
//   const callback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         countUp('count', 8 , 1000); // Start counting up to 8 over 2 seconds
//         observer.unobserve(entry.target); // Stop observing after the animation starts
//       }
//     });
//   };

//   // Create an Intersection Observer
//   const observer = new IntersectionObserver(callback, options);

//   // Start observing the count element
//   const target = document.getElementById('count');
//   if (target) {
//     observer.observe(target);
//   }
// });
// const flower = document.querySelector('.flower');

// flower.addEventListener('mouseover', () => {
//     document.querySelector('.glow').style.background = 'radial-gradient(circle, rgba(255, 255, 153, 0.1), transparent 70%)';
// });

// flower.addEventListener('mouseout', () => {
//     document.querySelector('.glow').style.background = 'radial-gradient(circle, rgba(255, 153, 51, 0.1), transparent 70%)';
// });

// onload = () => {
//   const c = setTimeout(() => {
//     document.body.classList.remove("not-loaded");
//     clearTimeout(c);
//   }, 1000);
// };
// script.js

// window.requestAnimationFrame =
//     window.__requestAnimationFrame ||
//         window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         window.msRequestAnimationFrame ||
//         (function () {
//             return function (callback, element) {
//                 var lastTime = element.__lastTime;
//                 if (lastTime === undefined) {
//                     lastTime = 0;
//                 }
//                 var currTime = Date.now();
//                 var timeToCall = Math.max(1, 33 - (currTime - lastTime));
//                 window.setTimeout(callback, timeToCall);
//                 element.__lastTime = currTime + timeToCall;
//             };
//         })();
// window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(((navigator.userAgent || navigator.vendor || window.opera)).toLowerCase()));
// var loaded = false;
// var init = function () {
//     if (loaded) return;
//     loaded = true;
//     var mobile = window.isDevice;
//     var koef = mobile ? 0.5 : 1;
//     var canvas = document.getElementById('star');
//     var ctx = canvas.getContext('2d');
//     var width = canvas.width = koef * innerWidth;
//     var height = canvas.height = koef * innerHeight;
//     var rand = Math.random;
//     ctx.fillStyle = "rgba(0,0,0,1)";
//     ctx.fillRect(0, 0, width, height);

//     var starPosition = function (rad, innerRadius, outerRadius) {
//         return [
//             Math.cos(rad) * outerRadius,
//             Math.sin(rad) * outerRadius,
//             Math.cos(rad + Math.PI / 5) * innerRadius,
//             Math.sin(rad + Math.PI / 5) * innerRadius
//         ];
//     };

//     var scaleAndTranslate = function (pos, sx, sy, dx, dy) {
//         return [dx + pos[0] * sx, dy + pos[1] * sy];
//     };

//     window.addEventListener('resize', function () {
//         width = canvas.width = koef * innerWidth;
//         height = canvas.height = koef * innerHeight;
//         ctx.fillStyle = "rgba(0,0,0,1)";
//         ctx.fillRect(0, 0, width, height);
//     });

//     var traceCount = mobile ? 20 : 50;
//     var pointsOrigin = [];
//     var i;
//     var dr = mobile ? 0.3 : 0.1;
//     var innerRadius = 70;
//     var outerRadius = 150;
//     for (i = 0; i < Math.PI * 2; i += dr) {
//         var p = starPosition(i, innerRadius, outerRadius);
//         pointsOrigin.push(scaleAndTranslate([p[0], p[1]], 1, 1, 0, 0)); // outer points
//         pointsOrigin.push(scaleAndTranslate([p[2], p[3]], 1, 1, 0, 0)); // inner points
//     }
//     var starPointsCount = pointsOrigin.length;

//     var targetPoints = [];
//     var pulse = function (kx, ky) {
//         for (i = 0; i < pointsOrigin.length; i++) {
//             targetPoints[i] = [];
//             targetPoints[i][0] = kx * pointsOrigin[i][0] + width / 2;
//             targetPoints[i][1] = ky * pointsOrigin[i][1] + height / 2;
//         }
//     };

//     var e = [];
//     for (i = 0; i < starPointsCount; i++) {
//         var x = rand() * width;
//         var y = rand() * height;
//         e[i] = {
//             vx: 0,
//             vy: 0,
//             R: 2,
//             speed: rand() + 5,
//             q: ~~(rand() * starPointsCount),
//             D: 2 * (i % 2) - 1,
//             force: 0.2 * rand() + 0.7,
//             f: "hsla(0," + ~~(40 * rand() + 60) + "%," + ~~(60 * rand() + 20) + "%,.3)",
//             trace: []
//         };
//         for (var k = 0; k < traceCount; k++) e[i].trace[k] = {x: x, y: y};
//     }

//     var config = {
//         traceK: 0.4,
//         timeDelta: 0.01
//     };

//     var time = 0;
//     var loop = function () {
//         var n = -Math.cos(time);
//         pulse((1 + n) * .5, (1 + n) * .5);
//         time += ((Math.sin(time)) < 0 ? 9 : (n > 0.8) ? .2 : 1) * config.timeDelta;
//         ctx.fillStyle = "rgba(0,0,0,.1)";
//         ctx.fillRect(0, 0, width, height);
//         for (i = e.length; i--;) {
//             var u = e[i];
//             var q = targetPoints[u.q];
//             var dx = u.trace[0].x - q[0];
//             var dy = u.trace[0].y - q[1];
//             var length = Math.sqrt(dx * dx + dy * dy);
//             if (10 > length) {
//                 if (0.95 < rand()) {
//                     u.q = ~~(rand() * starPointsCount);
//                 }
//                 else {
//                     if (0.99 < rand()) {
//                         u.D *= -1;
//                     }
//                     u.q += u.D;
//                     u.q %= starPointsCount;
//                     if (0 > u.q) {
//                         u.q += starPointsCount;
//                     }
//                 }
//             }
//             u.vx += -dx / length * u.speed;
//             u.vy += -dy / length * u.speed;
//             u.trace[0].x += u.vx;
//             u.trace[0].y += u.vy;
//             u.vx *= u.force;
//             u.vy *= u.force;
//             for (k = 0; k < u.trace.length - 1;) {
//                 var T = u.trace[k];
//                 var N = u.trace[++k];
//                 N.x -= config.traceK * (N.x - T.x);
//                 N.y -= config.traceK * (N.y - T.y);
//             }
//             ctx.fillStyle = u.f;
//             for (k = 0; k < u.trace.length; k++) {
//                 ctx.fillRect(u.trace[k].x, u.trace[k].y, 1, 1);
//             }
//         }
//         window.requestAnimationFrame(loop, canvas);
//     };
//     loop();
// };

// var s = document.readyState;
// if (s === 'complete' || s === 'loaded' || s === 'interactive') init();
// else document.addEventListener('DOMContentLoaded', init, false);
// window.requestAnimationFrame =
//     window.__requestAnimationFrame ||
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     window.oRequestAnimationFrame ||
//     window.msRequestAnimationFrame ||
//     (function () {
//         return function (callback, element) {
//             var lastTime = element.__lastTime;
//             if (lastTime === undefined) {
//                 lastTime = 0;
//             }
//             var currTime = Date.now();
//             var timeToCall = Math.max(1, 33 - (currTime - lastTime));
//             window.setTimeout(callback, timeToCall);
//             element.__lastTime = currTime + timeToCall;
//         };
//     })();

// window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test((navigator.userAgent || navigator.vendor || window.opera).toLowerCase()));

// var loaded = false;
// var init = function () {
//     if (loaded) return;
//     loaded = true;

//     var mobile = window.isDevice;
//     var koef = mobile ? 0.5 : 1;
//     var canvas = document.getElementById('eye');
//     var ctx = canvas.getContext('2d');
//     var width = canvas.width = koef * innerWidth;
//     var height = canvas.height = koef * innerHeight;
//     var rand = Math.random;
//     ctx.fillStyle = "rgba(0,0,0,1)";
//     ctx.fillRect(0, 0, width, height);

//     // Define eye-like shape (elliptical petals)
//     var eyePosition = function (rad) {
//         var k = 10;  // Number of petal-like shapes
//         var rX = 100 + 50 * Math.sin(k * rad);  // Horizontal radius for petal-like shape
//         var rY = 60 + 30 * Math.cos(k * rad);  // Vertical radius for petal-like shape
//         return [rX * Math.cos(rad), rY * Math.sin(rad)];
//     };

//     var scaleAndTranslate = function (pos, sx, sy, dx, dy) {
//         return [dx + pos[0] * sx, dy + pos[1] * sy];
//     };

//     window.addEventListener('resize', function () {
//         width = canvas.width = koef * innerWidth;
//         height = canvas.height = koef * innerHeight;
//         ctx.fillStyle = "rgba(0,0,0,1)";
//         ctx.fillRect(0, 0, width, height);
//     });

//     var traceCount = mobile ? 50 : 120;  // Smoother path with more points
//     var pointsOrigin = [];
//     var i;
//     var dr = mobile ? 0.3 : 0.1;
//     for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(eyePosition(i), 250, 250, 0, 0));
//     var eyePointsCount = pointsOrigin.length;

//     var targetPoints = [];
//     var pulse = function (kx, ky) {
//         for (i = 0; i < pointsOrigin.length; i++) {
//             targetPoints[i] = [];
//             targetPoints[i][0] = kx * pointsOrigin[i][0] + width / 2;
//             targetPoints[i][1] = ky * pointsOrigin[i][1] + height / 2;
//         }
//     };

//     var e = [];
//     for (i = 0; i < eyePointsCount; i++) {
//         var x = rand() * width;
//         var y = rand() * height;
//         e[i] = {
//             vx: 0,
//             vy: 0,
//             R: 2,
//             speed: rand() + 4,
//             q: ~~(rand() * eyePointsCount),
//             D: 2 * (i % 2) - 1,
//             force: 0.1 * rand() + 0.8,
//             f: "hsla(" + ~~(200 + 160 * rand()) + ", 100%, 60%, 0.8)", // Vibrant eye colors (blues, greens)
//             trace: []
//         };
//         for (var k = 0; k < traceCount; k++) e[i].trace[k] = { x: x, y: y };
//     }

//     var config = {
//         traceK: 0.4,
//         timeDelta: 0.01
//     };

//     var time = 0;
//     var loop = function () {
//         var n = -Math.cos(time);
//         pulse((1 + n) * 0.5, (1 + n) * 0.5);
//         time += ((Math.sin(time)) < 0 ? 9 : (n > 0.8) ? 0.2 : 1) * config.timeDelta;
//         ctx.fillStyle = "rgba(0,0,0,0.1)";
//         ctx.fillRect(0, 0, width, height);

//         for (i = e.length; i--;) {
//             var u = e[i];
//             var q = targetPoints[u.q];
//             var dx = u.trace[0].x - q[0];
//             var dy = u.trace[0].y - q[1];
//             var length = Math.sqrt(dx * dx + dy * dy);
//             if (10 > length) {
//                 if (0.95 < rand()) {
//                     u.q = ~~(rand() * eyePointsCount);
//                 } else {
//                     if (0.99 < rand()) {
//                         u.D *= -1;
//                     }
//                     u.q += u.D;
//                     u.q %= eyePointsCount;
//                     if (0 > u.q) {
//                         u.q += eyePointsCount;
//                     }
//                 }
//             }
//             u.vx += -dx / length * u.speed;
//             u.vy += -dy / length * u.speed;
//             u.trace[0].x += u.vx;
//             u.trace[0].y += u.vy;
//             u.vx *= u.force;
//             u.vy *= u.force;

//             for (k = 0; k < u.trace.length - 1;) {
//                 var T = u.trace[k];
//                 var N = u.trace[++k];
//                 N.x -= config.traceK * (N.x - T.x);
//                 N.y -= config.traceK * (N.y - T.y);
//             }

//             ctx.fillStyle = u.f;
//             for (k = 0; k < u.trace.length; k++) {
//                 ctx.fillRect(u.trace[k].x, u.trace[k].y, 1, 1); // Thin lines for a delicate effect
//             }
//         }

//         window.requestAnimationFrame(loop, canvas);
//     };
//     loop();
// };

// var s = document.readyState;
// if (s === 'complete' || s === 'loaded' || s === 'interactive') init();
// else document.addEventListener('DOMContentLoaded', init, false);

// $(function () {
// 	var canvas = $("#canvas")[0];
// 	canvas.width = $(window).width();
// 	canvas.height = $(window).height();
// 	var ctx = canvas.getContext("2d");

// 	// resize
// 	$(window).on("resize", function () {
// 		canvas.width = $(window).width();
// 		canvas.height = $(window).height();
// 		ctx.fillStyle = "#000003";
// 		ctx.fillRect(0, 0, canvas.width, canvas.height);
// 		center = { x: canvas.width / 2, y: canvas.height / 2 };
// 	});

// 	// init
// 	ctx.fillStyle = "#000003";
// 	ctx.fillRect(0, 0, canvas.width, canvas.height);
// 	// objects
// 	var listFire = [];
// 	var listFirework = [];
// 	var listText = [];
// 	var listSpecial = [];
// 	var listSpark = [];
// 	var lights = [];
// 	var fireNumber = 10;
// 	var center = { x: canvas.width / 2, y: canvas.height / 2 };
// 	var range = 100;
// 	var fired = 0;
// 	var onHold = 0;
// 	var supprise = false;
// 	var textIndex = 0;
// 	var actions = [
// 		makeDoubleFullCircleFirework,
// 		makePlanetCircleFirework,
// 		makeFullCircleFirework,
// 		makeDoubleCircleFirework,
// 		makeHeartFirework,
// 		makeCircleFirework,
// 		makeRandomFirework
// 	];
// 	for (var i = 0; i < fireNumber; i++) {
// 		var fire = {
// 			x: (Math.random() * range) / 2 - range / 4 + center.x,
// 			y: Math.random() * range * 2.5 + canvas.height,
// 			size: Math.random() + 0.5,
// 			fill: "#ff3",
// 			vx: Math.random() - 0.5,
// 			vy: -(Math.random() + 4),
// 			ax: Math.random() * 0.06 - 0.03,
// 			delay: Math.round(Math.random() * range) + range * 4,
// 			hold: false,
// 			alpha: 1,
// 			far: Math.random() * range + (center.y - range)
// 		};
// 		fire.base = {
// 			x: fire.x,
// 			y: fire.y,
// 			vx: fire.vx,
// 			vy: fire.vy
// 		};
// 		//
// 		listFire.push(fire);
// 		// play sound
// 		playLaunchSound();
// 	}
// 	// define array of sound
// 	var listExpSound = $("audio.exp");
// 	var listLaunchSound = $("audio.launch");

// 	// define array position of text
// 	var textString = "happynewyear2025";
// 	var textMatrix = [
// 		4.5,
// 		0,
// 		5.5,
// 		0,
// 		6.5,
// 		0,
// 		7.5,
// 		0,
// 		8.5,
// 		0,
// 		0,
// 		1,
// 		1,
// 		1,
// 		2,
// 		1,
// 		3,
// 		1,
// 		4,
// 		1,
// 		6,
// 		1,
// 		7,
// 		1,
// 		8,
// 		1,
// 		10,
// 		1,
// 		11,
// 		1,
// 		12,
// 		1,
// 		13,
// 		1,
// 		5,
// 		2,
// 		6,
// 		2,
// 		7,
// 		2,
// 		8,
// 		2
// 	];
// 	var chars = {
// 		h: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			1,
// 			3,
// 			2,
// 			3,
// 			3,
// 			3,
// 			4,
// 			3,
// 			5,
// 			0,
// 			5,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			5,
// 			4,
// 			5,
// 			5,
// 			5,
// 			6,
// 			5,
// 			7
// 		],
// 		a: [
// 			2,
// 			0,
// 			2,
// 			1,
// 			2,
// 			2,
// 			1,
// 			2,
// 			1,
// 			3,
// 			1,
// 			4,
// 			1,
// 			5,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			2,
// 			5,
// 			3,
// 			0,
// 			3,
// 			1,
// 			3,
// 			2,
// 			4,
// 			2,
// 			4,
// 			3,
// 			4,
// 			4,
// 			4,
// 			1,
// 			5,
// 			5,
// 			5,
// 			6,
// 			5,
// 			7,
// 			3,
// 			5
// 		],
// 		p: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			1,
// 			5,
// 			2,
// 			4,
// 			3,
// 			3,
// 			4,
// 			2,
// 			4,
// 			1,
// 			4
// 		],
// 		y: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			1,
// 			1,
// 			1,
// 			2,
// 			1,
// 			3,
// 			2,
// 			3,
// 			2,
// 			4,
// 			2,
// 			5,
// 			2,
// 			6,
// 			2,
// 			7,
// 			3,
// 			2,
// 			3,
// 			3,
// 			4,
// 			1,
// 			4,
// 			2,
// 			5,
// 			0,
// 			5,
// 			1
// 		],
// 		l: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			1,
// 			7,
// 			2,
// 			7,
// 			3,
// 			7,
// 			4,
// 			7,
// 			5,
// 			7
// 		],
// 		u: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			1,
// 			7,
// 			2,
// 			7,
// 			3,
// 			7,
// 			4,
// 			7,
// 			5,
// 			0,
// 			5,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			5,
// 			4,
// 			5,
// 			5,
// 			5,
// 			6
// 		],
// 		n: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			1,
// 			1,
// 			1,
// 			2,
// 			2,
// 			2,
// 			2,
// 			3,
// 			2,
// 			4,
// 			3,
// 			4,
// 			3,
// 			5,
// 			4,
// 			5,
// 			4,
// 			6,
// 			5,
// 			0,
// 			5,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			5,
// 			4,
// 			5,
// 			5,
// 			5,
// 			6,
// 			5,
// 			7
// 		],
// 		e: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			1,
// 			3,
// 			2,
// 			3,
// 			3,
// 			3,
// 			4,
// 			3,
// 			1,
// 			7,
// 			2,
// 			7,
// 			3,
// 			7,
// 			4,
// 			7,
// 			5,
// 			7
// 		],
// 		w: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			1,
// 			6,
// 			2,
// 			1,
// 			2,
// 			2,
// 			2,
// 			3,
// 			2,
// 			4,
// 			2,
// 			5,
// 			2,
// 			6,
// 			2,
// 			7,
// 			3,
// 			7,
// 			5,
// 			0,
// 			5,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			5,
// 			4,
// 			5,
// 			5,
// 			4,
// 			5,
// 			4,
// 			6
// 		],
// 		r: [
// 			0,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			1,
// 			5,
// 			2,
// 			4,
// 			3,
// 			3,
// 			4,
// 			2,
// 			4,
// 			1,
// 			4,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			6,
// 			4,
// 			6,
// 			5,
// 			7
// 		],
// 		2: [
// 			0,
// 			1,
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			5,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			4,
// 			3,
// 			3,
// 			3,
// 			2,
// 			3,
// 			2,
// 			4,
// 			1,
// 			4,
// 			1,
// 			5,
// 			0,
// 			5,
// 			0,
// 			6,
// 			0,
// 			7,
// 			1,
// 			7,
// 			2,
// 			7,
// 			3,
// 			7,
// 			4,
// 			7,
// 			5,
// 			7,
// 			5,
// 			6
// 		],
// 		0: [
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			6,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			1,
// 			7,
// 			2,
// 			7,
// 			3,
// 			7,
// 			4,
// 			7,
// 			5,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			5,
// 			4,
// 			5,
// 			5,
// 			5,
// 			6
// 		],
// 		1: [
// 			1,
// 			2,
// 			2,
// 			2,
// 			2,
// 			1,
// 			3,
// 			1,
// 			3,
// 			0,
// 			4,
// 			0,
// 			4,
// 			1,
// 			4,
// 			2,
// 			4,
// 			3,
// 			4,
// 			4,
// 			4,
// 			5,
// 			4,
// 			6,
// 			4,
// 			7,
// 			1,
// 			7,
// 			2,
// 			7,
// 			3,
// 			7,
// 			5,
// 			7
// 		],
// 		7: [
// 			0,
// 			0,
// 			1,
// 			0,
// 			2,
// 			0,
// 			3,
// 			0,
// 			4,
// 			0,
// 			5,
// 			0,
// 			5,
// 			1,
// 			5,
// 			2,
// 			5,
// 			3,
// 			4,
// 			3,
// 			4,
// 			4,
// 			3,
// 			4,
// 			3,
// 			5,
// 			3,
// 			6,
// 			3,
// 			7
// 		]
// 	};

// 	function initText() {
// 		var i = textIndex;
// 		var velocity = Math.random() * 0.25 + 1;
// 		var shift = { x: -(Math.random() + 2), y: -(Math.random() + 3) };
// 		var char = chars[textString[i]];
// 		var width = 80;
// 		var half = 6.5 * width;
// 		var left = textMatrix[i * 2] * width - half;
// 		var top = textMatrix[i * 2 + 1] * range * 1.2 - range * 2.4;
// 		for (var j = 0; j < fireNumber * char.length * 0.25; j++) {
// 			var rand = Math.floor(Math.random() * char.length * 0.5);
// 			var x = char[rand * 2] + shift.x;
// 			var y = char[rand * 2 + 1] + shift.y;
// 			var text = {
// 				x: center.x + left * 0.9,
// 				y: center.y + top,
// 				left: center.x + left,
// 				size: Math.random() + 0.5,
// 				fill: "#ff3",
// 				vx: x * (velocity + (Math.random() - 0.5) * 0.5),
// 				vy: y * (velocity + (Math.random() - 0.5) * 0.5),
// 				ay: 0.08,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			text.base = {
// 				life: text.life,
// 				size: text.size
// 			};
// 			text.direct = (text.left - text.x) * 0.08;
// 			listText.push(text);
// 		}
// 		// play sound
// 		playExpSound();
// 		//
// 		lights.push({
// 			x: center.x + left * 0.9,
// 			y: center.y + top,
// 			color: text.fill,
// 			radius: range * 2
// 		});
// 		if (++textIndex < textString.length) {
// 			setTimeout(initText, 10);
// 		} else {
// 			textIndex = 0;
// 		}
// 	}

// 	function initSpark() {
// 		var x = Math.random() * range * 3 - range * 1.5 + center.x;
// 		var vx = Math.random() - 0.5;
// 		var vy = -(Math.random() + 4);
// 		var ax = Math.random() * 0.04 - 0.02;
// 		var far = Math.random() * range * 4 - range + center.y;
// 		var direct = ax * 10 * Math.PI;
// 		var max = fireNumber * 0.5;
// 		for (var i = 0; i < max; i++) {
// 			var special = {
// 				x: x,
// 				y: Math.random() * range * 0.25 + canvas.height,
// 				size: Math.random() + 2,
// 				fill: "#ff3",
// 				vx: vx,
// 				vy: vy,
// 				ax: ax,
// 				direct: direct,
// 				alpha: 1
// 			};
// 			special.far = far - (special.y - canvas.height);
// 			listSpecial.push(special);
// 			// play sound
// 			playLaunchSound();
// 		}
// 	}

// 	function randColor() {
// 		var r = Math.floor(Math.random() * 256);
// 		var g = Math.floor(Math.random() * 256);
// 		var b = Math.floor(Math.random() * 256);
// 		var color = "rgb($r, $g, $b)";
// 		color = color.replace("$r", r);
// 		color = color.replace("$g", g);
// 		color = color.replace("$b", b);
// 		return color;
// 	}

// 	function playExpSound() {
// 		var sound = listExpSound[Math.floor(Math.random() * listExpSound.length)];
// 		sound.volume = Math.random() * 0.4 + 0.1;
// 		sound.play();
// 	}

// 	function playLaunchSound() {
// 		setTimeout(function () {
// 			var sound =
// 				listLaunchSound[Math.floor(Math.random() * listLaunchSound.length)];
// 			sound.volume = 0.05;
// 			sound.play();
// 		}, 200);
// 	}

// 	function makeCircleFirework(fire) {
// 		var color = randColor();
// 		var velocity = Math.random() * 2 + 6;
// 		var max = fireNumber * 5;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.04,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 2
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		return color;
// 	}

// 	function makeDoubleCircleFirework(fire) {
// 		var color = randColor();
// 		var velocity = Math.random() * 2 + 8;
// 		var max = fireNumber * 3;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.04,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		color = randColor();
// 		velocity = Math.random() * 3 + 4;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.04,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		return color;
// 	}

// 	function makePlanetCircleFirework(fire) {
// 		var color = "#aa0609";
// 		var velocity = Math.random() * 2 + 4;
// 		var max = fireNumber * 2;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.04,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		max = fireNumber * 4;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity * Math.random(),
// 				vy: Math.sin(rad) * velocity * Math.random(),
// 				ay: 0.04,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		max = fireNumber * 3;
// 		color = "#ff9";
// 		var rotate = Math.random() * Math.PI * 2;
// 		var vx = velocity * (Math.random() + 2);
// 		var vy = velocity * 0.6;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			// calc x, y for ellipse
// 			var cx = Math.cos(rad) * vx + (Math.random() - 0.5) * 0.5;
// 			var cy = Math.sin(rad) * vy + (Math.random() - 0.5) * 0.5;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: cx * Math.cos(rotate) - cy * Math.sin(rotate), // rotate x ellipse
// 				vy: cx * Math.sin(rotate) + cy * Math.cos(rotate), // rotate y ellipse
// 				ay: 0.02,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		return "#aa0609";
// 	}

// 	function makeFullCircleFirework(fire) {
// 		var color = randColor();
// 		var velocity = Math.random() * 8 + 8;
// 		var max = fireNumber * 3;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.06,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		max = fireNumber * Math.round(Math.random() * 4 + 4);
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity * Math.random(),
// 				vy: Math.sin(rad) * velocity * Math.random(),
// 				ay: 0.06,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		return color;
// 	}

// 	function makeDoubleFullCircleFirework(fire) {
// 		var color = randColor();
// 		var velocity = Math.random() * 8 + 8;
// 		var max = fireNumber * 3;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.04,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		color = randColor();
// 		velocity = Math.random() * 3 + 4;
// 		max = fireNumber * 2;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.06,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		max = fireNumber * 4;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity * Math.random(),
// 				vy: Math.sin(rad) * velocity * Math.random(),
// 				ay: 0.06,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		return color;
// 	}

// 	function makeHeartFirework(fire) {
// 		var color = randColor();
// 		var velocity = Math.random() * 3 + 3;
// 		var max = fireNumber * 5;
// 		var rotate = Math.random() * Math.PI * 2;
// 		for (var i = 0; i < max; i++) {
// 			var rad = (i * Math.PI * 2) / max + rotate;
// 			var v, p;
// 			if (rad - rotate < Math.PI * 0.5) {
// 				p = (rad - rotate) / (Math.PI * 0.5);
// 				v = velocity + velocity * p;
// 			} else if (rad - rotate > Math.PI * 0.5 && rad - rotate < Math.PI) {
// 				p = (rad - rotate - Math.PI * 0.5) / (Math.PI * 0.5);
// 				v = velocity * (2 - p);
// 			} else if (rad - rotate > Math.PI && rad - rotate < Math.PI * 1.5) {
// 				p = (rad - rotate - Math.PI) / (Math.PI * 0.5);
// 				v = velocity * (1 - p);
// 			} else if (rad - rotate > Math.PI * 1.5 && rad - rotate < Math.PI * 2) {
// 				p = (rad - rotate - Math.PI * 1.5) / (Math.PI * 0.5);
// 				v = velocity * p;
// 			} else {
// 				v = velocity;
// 			}
// 			v = v + (Math.random() - 0.5) * 0.25;
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.cos(rad) * v,
// 				vy: Math.sin(rad) * v,
// 				ay: 0.02,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 1.5
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		return color;
// 	}

// 	function makeRandomFirework(fire) {
// 		var color = randColor();
// 		for (var i = 0; i < fireNumber * 5; i++) {
// 			var firework = {
// 				x: fire.x,
// 				y: fire.y,
// 				size: Math.random() + 1.5,
// 				fill: color,
// 				vx: Math.random() * 15 - 7.5,
// 				vy: Math.random() * -15 + 5,
// 				ay: 0.05,
// 				alpha: 1,
// 				life: Math.round((Math.random() * range) / 2) + range / 2
// 			};
// 			firework.base = {
// 				life: firework.life,
// 				size: firework.size
// 			};
// 			listFirework.push(firework);
// 		}
// 		return color;
// 	}

// 	function makeSpark(special) {
// 		var color = special.fill;
// 		var velocity = Math.random() * 6 + 12;
// 		var max = fireNumber;
// 		for (var i = 0; i < max; i++) {
// 			var rad =
// 				Math.random() * Math.PI * 0.3 + Math.PI * 0.35 + Math.PI + special.direct;
// 			var spark = {
// 				x: special.x,
// 				y: special.y,
// 				size: Math.random() + 1,
// 				fill: color,
// 				vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 				ay: 0.02,
// 				alpha: 1,
// 				rad: rad,
// 				direct: special.direct,
// 				chain: Math.round(Math.random() * 2) + 2,
// 				life: Math.round((Math.random() * range) / 2) + range / 2
// 			};
// 			spark.base = {
// 				life: spark.life,
// 				velocity: velocity
// 			};
// 			listSpark.push(spark);
// 		}
// 		return color;
// 	}

// 	function chainSpark(parentSpark) {
// 		var color = parentSpark.fill;
// 		if (parentSpark.chain > 0) {
// 			var velocity = parentSpark.base.velocity * 0.6;
// 			var max = Math.round(Math.random() * 5);
// 			for (var i = 0; i < max; i++) {
// 				var rad =
// 					Math.random() * Math.PI * 0.3 -
// 					Math.PI * 0.15 +
// 					parentSpark.rad +
// 					parentSpark.direct;
// 				var spark = {
// 					x: parentSpark.x,
// 					y: parentSpark.y,
// 					size: parentSpark.size * 0.6,
// 					fill: color,
// 					vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 					vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
// 					ay: 0.02,
// 					alpha: 1,
// 					rad: rad,
// 					direct: parentSpark.direct,
// 					chain: parentSpark.chain,
// 					life: parentSpark.base.life * 0.8
// 				};
// 				spark.base = {
// 					life: spark.life,
// 					size: spark.size,
// 					velocity: velocity
// 				};
// 				listSpark.push(spark);
// 			}

// 			if (Math.random() > 0.9 && parentSpark.chain > 1) {
// 				// play sound
// 				playExpSound();
// 			}
// 		}
// 		return color;
// 	}

// 	(function loop() {
// 		requestAnimationFrame(loop);
// 		update();
// 		draw();
// 	})();

// 	function update() {
// 		// update fire logic
// 		for (var i = 0; i < listFire.length; i++) {
// 			var fire = listFire[i];
// 			//
// 			if (fire.y <= fire.far) {
// 				// play sound
// 				playExpSound();
// 				// case add firework
// 				fired++;
// 				var color = actions[Math.floor(Math.random() * actions.length)](fire);
// 				// light
// 				lights.push({ x: fire.x, y: fire.y, color: color, radius: range * 2 });
// 				// reset
// 				fire.y = fire.base.y;
// 				fire.x = fire.base.x;
// 				// special
// 				if (fired % 33 == 0) {
// 					initSpark();
// 				}
// 				// on hold
// 				supprise = fired % 100 == 0 ? true : supprise;
// 				if (supprise) {
// 					fire.vx = 0;
// 					fire.vy = 0;
// 					fire.ax = 0;
// 					fire.hold = true;
// 					onHold++;
// 				} else {
// 					fire.vx = fire.base.vx;
// 					fire.vy = fire.base.vy;
// 					fire.ax = Math.random() * 0.06 - 0.03;
// 					// play sound
// 					playLaunchSound();
// 				}
// 			}
// 			//
// 			if (fire.hold && fire.delay <= 0) {
// 				onHold--;
// 				fire.hold = false;
// 				fire.delay = Math.round(Math.random() * range) + range * 4;
// 				fire.vx = fire.base.vx;
// 				fire.vy = fire.base.vy;
// 				fire.ax = Math.random() * 0.06 - 0.03;
// 				fire.alpha = 1;
// 				// play sound
// 				playLaunchSound();
// 			} else if (fire.hold && fire.delay > 0) {
// 				fire.delay--;
// 			} else {
// 				fire.x += fire.vx;
// 				fire.y += fire.vy;
// 				fire.vx += fire.ax;
// 				fire.alpha = (fire.y - fire.far) / fire.far;
// 			}
// 		}

// 		// update firework logic
// 		for (var i = listFirework.length - 1; i >= 0; i--) {
// 			var firework = listFirework[i];
// 			if (firework) {
// 				firework.vx *= 0.9;
// 				firework.vy *= 0.9;
// 				firework.x += firework.vx;
// 				firework.y += firework.vy;
// 				firework.vy += firework.ay;
// 				firework.alpha = firework.life / firework.base.life;
// 				firework.size = firework.alpha * firework.base.size;
// 				firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
// 				//
// 				firework.life--;
// 				if (firework.life <= 0) {
// 					listFirework.splice(i, 1);
// 				}
// 			}
// 		}

// 		// supprise happy new year!
// 		if (supprise && onHold == 10) {
// 			supprise = false;
// 			setTimeout(initText, 3000);
// 		}

// 		// update text logic
// 		for (var i = listText.length - 1; i >= 0; i--) {
// 			var text = listText[i];
// 			text.vx *= 0.9;
// 			text.vy *= 0.9;
// 			text.direct *= 0.9;
// 			text.x += text.vx + text.direct;
// 			text.y += text.vy;
// 			text.vy += text.ay;
// 			text.alpha = text.life / text.base.life;
// 			text.size = text.alpha * text.base.size;
// 			text.alpha = text.alpha > 0.6 ? 1 : text.alpha;
// 			//
// 			text.life--;
// 			if (text.life <= 0) {
// 				listText.splice(i, 1);
// 			}
// 		}

// 		// update special logic
// 		for (var i = listSpecial.length - 1; i >= 0; i--) {
// 			var special = listSpecial[i];
// 			if (special.y <= special.far) {
// 				// play sound
// 				playExpSound();
// 				// light
// 				lights.push({
// 					x: special.x,
// 					y: special.y,
// 					color: special.fill,
// 					alpha: 0.02,
// 					radius: range * 2
// 				});
// 				//
// 				makeSpark(special);
// 				// remove from list
// 				listSpecial.splice(i, 1);
// 			} else {
// 				special.x += special.vx;
// 				special.y += special.vy;
// 				special.vx += special.ax;
// 				special.alpha = (special.y - special.far) / special.far;
// 			}
// 		}

// 		// update spark logic
// 		for (var i = listSpark.length - 1; i >= 0; i--) {
// 			var spark = listSpark[i];
// 			if (spark) {
// 				spark.vx *= 0.9;
// 				spark.vy *= 0.9;
// 				spark.x += spark.vx;
// 				spark.y += spark.vy;
// 				spark.vy += spark.ay;
// 				spark.alpha = spark.life / spark.base.life + 0.2;
// 				//
// 				spark.life--;
// 				if (spark.life < spark.base.life * 0.8 && spark.life > 0) {
// 					//
// 					spark.chain--;
// 					chainSpark(spark);
// 				}
// 				if (spark.life <= 0) {
// 					listSpark.splice(i, 1);
// 				}
// 			}
// 		}
// 	}

// 	function draw() {
// 		// clear
// 		ctx.globalCompositeOperation = "source-over";
// 		ctx.globalAlpha = 0.2;
// 		ctx.fillStyle = "#000003";
// 		ctx.fillRect(0, 0, canvas.width, canvas.height);

// 		// re-draw
// 		ctx.globalCompositeOperation = "screen";
// 		for (var i = 0; i < listFire.length; i++) {
// 			var fire = listFire[i];
// 			ctx.globalAlpha = fire.alpha;
// 			ctx.beginPath();
// 			ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
// 			ctx.closePath();
// 			ctx.fillStyle = fire.fill;
// 			ctx.fill();
// 		}

// 		for (var i = 0; i < listFirework.length; i++) {
// 			var firework = listFirework[i];
// 			ctx.globalAlpha = firework.alpha;
// 			ctx.beginPath();
// 			ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
// 			ctx.closePath();
// 			ctx.fillStyle = firework.fill;
// 			ctx.fill();
// 		}

// 		for (var i = 0; i < listSpecial.length; i++) {
// 			var special = listSpecial[i];
// 			ctx.globalAlpha = special.alpha;
// 			// ctx.beginPath();
// 			// ctx.arc(special.x, special.y, special.size, 0, Math.PI * 2);
// 			// ctx.closePath();
// 			// ctx.fill();
// 			ctx.fillStyle = special.fill;
// 			ctx.fillRect(
// 				special.x - special.size,
// 				special.y - special.size,
// 				special.size * 2,
// 				special.size * 2
// 			);
// 		}

// 		for (var i = 0; i < listSpark.length; i++) {
// 			var spark = listSpark[i];
// 			ctx.globalAlpha = spark.alpha;
// 			// ctx.beginPath();
// 			// ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
// 			// ctx.closePath();
// 			// ctx.fill();
// 			ctx.fillStyle = spark.fill;
// 			ctx.fillRect(
// 				spark.x - spark.size,
// 				spark.y - spark.size,
// 				spark.size * 2,
// 				spark.size * 2
// 			);
// 		}

// 		// light effect
// 		while (lights.length) {
// 			var light = lights.pop();
// 			var gradient = ctx.createRadialGradient(
// 				light.x,
// 				light.y,
// 				0,
// 				light.x,
// 				light.y,
// 				light.radius
// 			);
// 			gradient.addColorStop(0, "#fff");
// 			gradient.addColorStop(0.2, light.color);
// 			gradient.addColorStop(0.8, "rgba(0, 0, 0, 0)");
// 			gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
// 			ctx.globalAlpha = light.alpha ? light.alpha : 0.25;
// 			ctx.fillStyle = gradient;
// 			ctx.fillRect(
// 				light.x - light.radius,
// 				light.y - light.radius,
// 				light.radius * 2,
// 				light.radius * 2
// 			);
// 		}

// 		// supprise: HAPPY LUNAR NEW YEAR 2017!
// 		for (var i = 0; i < listText.length; i++) {
// 			var text = listText[i];
// 			ctx.globalAlpha = text.alpha;
// 			ctx.fillStyle = text.fill;
// 			ctx.fillRect(
// 				text.x - text.size,
// 				text.y - text.size,
// 				text.size * 2,
// 				text.size * 2
// 			);
// 		}
// 	}
// });
// Scroll reveal animation
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "-50px", // Trigger slightly before element comes into view
    threshold: 0.1, // Trigger when just 10% is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove blur immediately when element comes into view
        requestAnimationFrame(() => {
          entry.target.style.filter = "blur(0)";
          entry.target.style.opacity = "1";
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const elements = document.querySelectorAll(
    ".aboutme, .intro, .discription2, .list, .about_info"
  );

  elements.forEach((element) => {
    // Set initial styles
    element.style.filter = "blur(5px)";
    element.style.opacity = "0";
    element.style.transition = "all 0.5s ease-out";
    // Start observing
    observer.observe(element);
  });
});

// Header hide/show on scroll
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});

// Add loading bar
document.addEventListener("DOMContentLoaded", () => {
  const loading = document.createElement("div");
  loading.className = "loading";
  document.body.appendChild(loading);

  setTimeout(() => {
    loading.style.display = "none";
  }, 2000);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
});

// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.querySelector(".theme-toggle");
    this.prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.currentTheme = localStorage.getItem("theme") || "light";

    this.init();
  }

  init() {
    this.setTheme(this.currentTheme);
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
    this.prefersDark.addEventListener("change", (e) =>
      this.handleSystemThemeChange(e)
    );
  }

  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    this.updateToggleIcon(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
    this.currentTheme = newTheme;
  }

  updateToggleIcon(theme) {
    const icon = this.themeToggle.querySelector("i");
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  handleSystemThemeChange(e) {
    if (!localStorage.getItem("theme")) {
      this.setTheme(e.matches ? "dark" : "light");
    }
  }
}

// News Ticker
class NewsTicker {
  constructor() {
    this.ticker = document.querySelector(".ticker-wrapper");
    this.news = [
      "Breaking: Major tech breakthrough announced",
      "Markets reach all-time high",
      "New climate agreement signed",
      "Sports: Championship finals tonight",
    ];
    this.init();
  }

  init() {
    this.createTicker();
    this.animateTicker();
  }

  createTicker() {
    this.news.forEach((item) => {
      const newsItem = document.createElement("div");
      newsItem.className = "ticker-item";
      newsItem.textContent = item;
      this.ticker.appendChild(newsItem);
    });
  }

  animateTicker() {
    let currentIndex = 0;
    setInterval(() => {
      const items = this.ticker.querySelectorAll(".ticker-item");
      items[currentIndex].style.opacity = "0";
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].style.opacity = "1";
    }, 3000);
  }
}

// Infinite Scroll
class InfiniteScroll {
  constructor() {
    this.page = 1;
    this.loading = false;
    this.grid = document.querySelector(".stories-grid");
    this.loadMoreBtn = document.querySelector(".load-more");

    this.init();
  }

  init() {
    this.loadMoreBtn.addEventListener("click", () => this.loadMore());
    this.loadInitialStories();
  }

  async loadMore() {
    if (this.loading) return;

    this.loading = true;
    this.loadMoreBtn.textContent = "Loading...";

    try {
      const stories = await this.fetchStories();
      this.appendStories(stories);
      this.page++;
    } catch (error) {
      console.error("Error loading stories:", error);
    }

    this.loading = false;
    this.loadMoreBtn.textContent = "Load More Stories";
  }

  async fetchStories() {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            title: "New Story " + this.page,
            image: `https://source.unsplash.com/random/400x300?sig=${Math.random()}`,
            category: "Technology",
            description: "Lorem ipsum dolor sit amet...",
          },
          // Add more story objects
        ]);
      }, 1000);
    });
  }

  appendStories(stories) {
    stories.forEach((story) => {
      const card = this.createStoryCard(story);
      this.grid.appendChild(card);
    });
  }

  createStoryCard(story) {
    const card = document.createElement("article");
    card.className = "story-card";
    card.setAttribute("data-aos", "fade-up");

    card.innerHTML = `
            <img src="${story.image}" alt="${story.title}" loading="lazy">
            <div class="card-content">
                <span class="category">${story.category}</span>
                <h3>${story.title}</h3>
                <p>${story.description}</p>
            </div>
        `;

    return card;
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
  new NewsTicker();
  new InfiniteScroll();

  // Remove loading overlay
  setTimeout(() => {
    document.querySelector(".loading-overlay").style.opacity = "0";
    setTimeout(() => {
      document.querySelector(".loading-overlay").style.display = "none";
    }, 500);
  }, 1500);
});

// View toggle
document.querySelectorAll(".view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".view-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document
      .querySelector(".stories-grid")
      .classList.toggle("list-layout", btn.classList.contains("list-view"));
  });
});
