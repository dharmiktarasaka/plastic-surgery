import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FooterSculptureCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // TorusKnot geometry representing flowing luxury silk ribbon
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.45, 128, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0xC5B3D3,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 1.5;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.003;

      mesh.position.x += (mouseX * 0.5 - mesh.position.x) * 0.05;
      mesh.position.y += (-mouseY * 0.5 - mesh.position.y) * 0.05;

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

  return <div ref={mountRef} className="w-full h-full pointer-events-none opacity-40" />;
}
