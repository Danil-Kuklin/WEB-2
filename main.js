const div = document.querySelector('.threejs');
let mesh;

document.forms[0].addEventListener('change', (e) => {
  mesh.material.color.set(e.target.value);
})

window.addEventListener('resize', onWindowResize);

function onWindowResize() {

  camera.aspect = div.clientWidth / div.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(div.clientWidth, div.clientHeight);

}

const clock = new THREE.Clock();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(120, div.clientWidth / div.clientHeight, 0.1, 100);
camera.position.set(-1, 2, 1);
cameraTarget = new THREE.Vector3(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(div.clientWidth, div.clientHeight);

div.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

// //свет фронт тени
const spotLight1 = new THREE.SpotLight(0xFBE7ED, 0.6);
spotLight1.position.set(0, 2, 15);
spotLight1.angle = 0.8;
spotLight1.castShadow = true;
scene.add(spotLight1);

// //свет фронт диагональ
const directionalLight = new THREE.DirectionalLight( 0xA6F45D, 0.7 );
directionalLight.position.set( -30, 3, 18 );
scene.add( directionalLight );
directionalLight.castShadow = true;

//свет бэк диагональ
const spotLight2 = new THREE.SpotLight(0xFBE7ED, 0.6);
spotLight2.position.set(12, 8, -1);
spotLight2.angle = 0.8;
spotLight2.castShadow = true;
scene.add(spotLight2);



//бэк, туман
scene.background = new THREE.Color(0xC0C0C0);

//нижняя пл
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(4000, 4000),
  new THREE.MeshPhongMaterial({ color: 0xC0C0C0, dithering: true })
);
plane.rotation.x = - Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

//плоскость фон
let geometry11 = new THREE.BufferGeometry();
const vertices1 = new Float32Array( [
-8.0, -2, 0,
8.0, -2, 0,
8.0, 6.0, 0,

8.0, 6.0, 0,
-8.0, 6.0, 0,
-8.0, -2, 0,
]);
geometry11.setAttribute('position', new THREE.Float32BufferAttribute( vertices1, 3 ));
geometry11.computeVertexNormals();
const material11 = new THREE.MeshPhongMaterial( { color: 0xffffff, side:THREE.DoubleSide } );
const plane2 = new THREE.Mesh( geometry11, material11 );
plane2.receiveShadow=true;
scene.add( plane2 );
plane2.position.set(1, 1, -3);


//параметры сферы
const geometry = new THREE.SphereGeometry( 0.8, 32, 32 );
const material = new THREE.MeshPhongMaterial( {color: 0x324588} );

const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
sphere.position.set(0, 2, -1);
sphere.castShadow = true;

//тетраэдер
let geometry2 = new THREE.BufferGeometry();
const vertices2 = new Float32Array( [
    0, 0, 0.9,
    0.9, 0,  0,
    -0.81, -Math.sqrt(0.9*0.9-0.81*0.81),  0,

    0, 0, 0.9,
    0.9, 0, 0,
    -0.81, Math.sqrt(0.9*0.9-0.81*0.81),  0,

    0, 0, 0.9,  
    -0.81, -Math.sqrt(0.9*0.9-0.81*0.81),  0,
    -0.81, Math.sqrt(0.9*0.9-0.81*0.81),  0,

    0.9, 0,  0,
    -0.81, -Math.sqrt(0.9*0.9-0.81*0.81),  0,
    -0.81, Math.sqrt(0.9*0.9-0.81*0.81),  0,
] );
geometry2.setAttribute('position', new THREE.Float32BufferAttribute( vertices2, 3));
geometry2.computeVertexNormals();
const material22 = new THREE.MeshPhongMaterial( { color: 0x61a41e, side:THREE.DoubleSide } );
const pyramid = new THREE.Mesh( geometry2, material22 );
pyramid.castShadow=true;
pyramid.position.set(2.5  , 2, -1.2)
scene.add(pyramid);


function render(time) {
  time*=0.001;
  
  sphere.rotation.z = time;
  sphere.rotation.y = time;


  pyramid.rotation.x = time;
  pyramid.rotation.z = time;


  renderer.render(scene, camera);

  requestAnimationFrame(render);

}

requestAnimationFrame(render);