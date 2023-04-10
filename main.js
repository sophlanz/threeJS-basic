import * as THREE from  "../node_modules/three/build/three.module.js";

const scene = new THREE.Scene();
//field of view(deg). aspect ratio(always use width/height or it'll look squished),near and far
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
//width and height we want to fill
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement )
//cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//three.js comes with various materials
const material = new THREE.MeshBasicMaterial( { color: 0x00F52BA } );
//object that takes a geometry, and applies a material to it
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
//when we add to the scene it's at coordingates (0,0,0), so move camera to avoid camera and cube inside of eachother
camera.position.z = 5;

function animate() {
    //pauses when user navigates to another browser tab, so better than set interval
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();