import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroSculptureCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create an elegant 3D organic sculptural shape (Icosahedron / TorusKnot mix)
    const geometry = new THREE.IcosahedronGeometry(2, 4);
    
    // Apply soft wave deformation to vertices to simulate facial contour curves
    const positionAttribute = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      const wave = Math.sin(vertex.x * 2) * 0.15 + Math.cos(vertex.y * 2) * 0.15;
      vertex.multiplyScalar(1 + wave * 0.1);
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    geometry.computeVertexNormals();

    // Soft wireframe material with Plum color glow
    const material = new THREE.MeshBasicMaterial({
      color: 0x3A243F,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Subtle inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(1.4, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xC5B3D3,
      transparent: true,
      opacity: 0.15
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mesh.rotation.y += 0.003;
      mesh.rotation.x = targetY * 0.3;
      mesh.rotation.z = targetX * 0.3;

      innerSphere.rotation.y -= 0.002;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full pointer-events-none" />;
}
