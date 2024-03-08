import  { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SmokeBg = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    
    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, w / h, 1, 1000);
    camera.position.z = 10;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);
    renderer.setClearColor(0xb72926, 1);
    
    mountRef.current.appendChild(renderer.domElement);
    // Light
    const light = new THREE.DirectionalLight(0xb72926, 0.1);
    light.position.set(-1, 3, 0.1);
    scene.add(light);
    
    // Smoke Particles
    let smokeParticles = [];
    const loader = new THREE.TextureLoader();
    loader.load("../../smoke.webp", (texture) => {
      const smokeGeo = new THREE.PlaneGeometry(300, 300);
      const smokeMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: 0.4,
      });
      
      for (let p = 0; p < 300; p++) {
        const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
      }
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      smokeParticles.forEach(p => { p.rotation.z += 0.001; });
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const mountNode = mountRef.current;
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div className='fixed top-0 w-full h-full -z-10' ref={mountRef} />;
};

export default SmokeBg;
