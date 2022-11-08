const canvas = document.querySelector('.webgl');

const sizes = {
  width: 800,
  height: 600,
};

// Scene contains actors, cameras, etc
const scene = new THREE.Scene();

// Creating cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Creating material (using recommended hexadecimal color)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Creating mesh and adding it to the scene
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // Field of view (vision angle), aspect ratio
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
