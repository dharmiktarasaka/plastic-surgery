import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FacialModelCanvas() {
  const mountRef = useRef(null);
  const [selectedZone, setSelectedZone] = useState('nose');

  const facialZones = [
    {
      id: 'nose',
      name: 'Nasal Harmony & Profile',
      procedure: 'Structural Rhinoplasty',
      link: '/procedures/face#rhinoplasty',
      desc: 'Restoring structural nasal symmetry, tip projection, and unobstructed breathing channels aligned with facial proportions.',
      benefits: ['Preservation technique', 'Sub-millimeter refinement', 'Airway optimization']
    },
    {
      id: 'eyes',
      name: 'Orbital & Eyelid Architecture',
      procedure: 'Upper & Lower Blepharoplasty',
      link: '/procedures/face#eyelid-surgery',
      desc: 'Precision micro-removal of hooding skin and delicate orbital fat redistribution for bright, refreshed look.',
      benefits: ['Invisible crease scar placement', 'Elimination of heavy bags', 'Expanded peripheral vision']
    },
    {
      id: 'jawline',
      name: 'Mandibular Vector Definition',
      procedure: 'V-Line Jawline & Facelift',
      link: '/procedures/face#facelift',
      desc: 'Sharp jawline definition elevating deep facial SMAS layer without artificial surface tension.',
      benefits: ['Streamlined profile', 'Deep-plane structural support', 'Long-lasting natural contour']
    },
    {
      id: 'chin',
      name: 'Genioplasty & Projection',
      procedure: 'Chin Augmentation',
      link: '/procedures/face#chin-neck-lift',
      desc: 'Harmonizing lower-third proportions with biocompatible implants or autologous bone restructuring.',
      benefits: ['Balanced profile ratio', 'Enhanced lip-to-chin distance', 'Permanent alignment']
    },
    {
      id: 'cheeks',
      name: 'Malar Volume Elevation',
      procedure: 'Midface Lift & Fat Grafting',
      link: '/procedures/face#facelift',
      desc: 'Re-positioning cheek ligamentous tissues to restore youthful heart-shaped midface fullness.',
      benefits: ['Restored cheek highlights', 'Soft natural contours', 'No over-filled look']
    },
    {
      id: 'neck',
      name: 'Cervicomental Angles',
      procedure: 'Submentoplasty & Neck Lift',
      link: '/procedures/face#chin-neck-lift',
      desc: 'Eradicating submental fullness and tightening platysma muscle bands for a sleek neck silhouette.',
      benefits: ['90-degree neck angle', 'Smooth skin envelope', 'Zero jowl sag']
    }
  ];

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

    // Create a stylized 3D facial head mesh
    const headGroup = new THREE.Group();

    // Main head sphere scaled as oval
    const headGeo = new THREE.SphereGeometry(1.2, 32, 32);
    headGeo.scale(1, 1.35, 1);
    const headMat = new THREE.MeshBasicMaterial({
      color: 0x3A243F,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const headMesh = new THREE.Mesh(headGeo, headMat);
    headGroup.add(headMesh);

    // Glowing internal core
    const coreGeo = new THREE.SphereGeometry(0.9, 16, 16);
    coreGeo.scale(0.9, 1.2, 0.9);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xC5B3D3,
      transparent: true,
      opacity: 0.15
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    headGroup.add(coreMesh);

    scene.add(headGroup);

    // Mouse movement rotation
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
      headGroup.rotation.y += (mouseX - headGroup.rotation.y) * 0.05;
      headGroup.rotation.x += (-mouseY * 0.5 - headGroup.rotation.x) * 0.05;

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
      headGeo.dispose();
      headMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  const currentZoneData = facialZones.find(z => z.id === selectedZone) || facialZones[0];

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-6 sm:px-12 max-w-7xl mx-auto">
      
      {/* Left Column: Interactive 3D Model & Facial Zone Selector */}
      <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] flex items-center justify-center">
        <div ref={mountRef} className="absolute inset-0 z-0" />
        
        {/* Overlaid Zone Hotspot Pills around 3D canvas */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-4 pointer-events-auto">
          <div className="flex justify-around">
            <button
              onClick={() => setSelectedZone('eyes')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedZone === 'eyes' ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-105' : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              • Orbital & Eyes
            </button>
            <button
              onClick={() => setSelectedZone('nose')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedZone === 'nose' ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-105' : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              • Nasal Profile
            </button>
          </div>

          <div className="flex justify-between items-center px-2">
            <button
              onClick={() => setSelectedZone('cheeks')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedZone === 'cheeks' ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-105' : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              • Cheek malar
            </button>
            <button
              onClick={() => setSelectedZone('jawline')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedZone === 'jawline' ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-105' : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              • Jawline Vector
            </button>
          </div>

          <div className="flex justify-around">
            <button
              onClick={() => setSelectedZone('chin')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedZone === 'chin' ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-105' : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              • Chin Point
            </button>
            <button
              onClick={() => setSelectedZone('neck')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedZone === 'neck' ? 'bg-[#3A243F] text-[#FBEFEF] shadow-lg scale-105' : 'glass-panel-light text-[#262126] hover:bg-[#FFE2E2]'
              }`}
            >
              • Cervico Neck
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Zone Detailed Information Card */}
      <div className="lg:col-span-6 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentZoneData.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel-light p-8 rounded-3xl shadow-xl border border-[#FFE2E2]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono tracking-widest text-[#3A243F] uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5B3D3]" /> Anatomical Focus Zone
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[#FFE2E2] text-[#3A243F] font-medium">
                Medical Precision
              </span>
            </div>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#3A243F] font-bold mb-1">
              {currentZoneData.name}
            </h3>
            <p className="text-xs font-semibold text-[#C5B3D3] uppercase tracking-wider mb-4">
              Primary Procedure: {currentZoneData.procedure}
            </p>

            <p className="text-sm text-[#262126]/80 leading-relaxed mb-6">
              {currentZoneData.desc}
            </p>

            <div className="space-y-2 mb-8">
              {currentZoneData.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#3A243F]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5B3D3]" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <Link
              to={currentZoneData.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A243F] text-[#FBEFEF] text-xs uppercase tracking-wider font-semibold hover:bg-[#262126] transition-all shadow-md"
            >
              <span>Explore Procedure Details</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
