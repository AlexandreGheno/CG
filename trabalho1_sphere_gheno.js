var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

var sphere;
var ring;
var velocidadeSphereX = 0.2;
var velocidadeSphereY = 0.18;
var velocidadeRingX = 0.2;
var velocidadeRingY = 0.15;

var createForm = function(){
	let geometria = new THREE.SphereGeometry(1, 32, 32);
	let material = new THREE.MeshBasicMaterial({color: "blue"});
	
	sphere = new THREE.Mesh(geometria, material);
	ring = new THREE.Mesh(new THREE.RingGeometry(2, 2.1, 2), new THREE.MeshBasicMaterial({color: "red"}));
	
	scene.add(sphere);
	scene.add(ring);
};

var animationSphere = function (){
	requestAnimationFrame(animationSphere); //adiciona o método na fila de renderização

	if (this.sphere.position.x >= 30 || this.sphere.position.x <= -10){
        velocidadeSphereX = velocidadeSphereX * -1;
    }
    if (this.sphere.position.y >= 18 || this.sphere.position.y <= -0.15){
        velocidadeSphereY = velocidadeSphereY * -1;
    }
    this.sphere.position.x += velocidadeSphereX;
    this.sphere.position.y += velocidadeSphereY;
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
};

var animationRing = function (){
	requestAnimationFrame(animationRing); //adiciona o método na fila de renderização

	if (this.ring.position.x >= 25 || this.ring.position.x <= -5){
        velocidadeRingX = velocidadeRingX * -1;
    }
    if (this.ring.position.y >= 15 || this.ring.position.y <= -0.20){
        velocidadeRingY = velocidadeRingY * -1;
    }
    this.ring.position.x += velocidadeRingX;
    this.ring.position.y += velocidadeRingY;
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
};

var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 20, 100);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z = 30;
	camera.position.x = 10;
	camera.position.y = 10;

	createForm();
	animationSphere();
	animationRing();
};
window.onload = this.init