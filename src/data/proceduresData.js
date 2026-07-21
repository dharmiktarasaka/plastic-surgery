export const procedureCategories = [
  {
    id: 'face',
    title: 'Facial Harmony & Sculpting',
    shortDesc: 'Refining facial contours with anatomical precision and natural aesthetics.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    procedures: [
      {
        id: 'rhinoplasty',
        name: 'Structural Rhinoplasty',
        tagline: 'Sculptural nose refinement balancing proportions & airway function.',
        duration: '2.5 - 3.5 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '10 - 14 Days',
        overview: 'Custom nose sculpting tailored to facial structure, ethnicity, and functional breathing requirements. Our surgeons utilize open structural and preservation rhinoplasty techniques for natural, long-lasting outcomes.',
        keyBenefits: ['Harmonized facial profile', 'Enhanced structural support', 'Improved airway performance', 'Permanent natural contour'],
        suitableFor: 'Patients seeking refinement of nasal bridge, tip projection, symmetry, or post-traumatic restoration.'
      },
      {
        id: 'facelift',
        name: 'Deep-Plane Facelift & SMAS Lift',
        tagline: 'Restoring youthful midface & jawline contours without artificial tightness.',
        duration: '4.0 - 5.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '14 - 21 Days',
        overview: 'The deep-plane facelift addresses deep structural tissues rather than pulling surface skin. Re-elevating ligamentous facial attachments provides long-lasting, smooth rejuvenation.',
        keyBenefits: ['Restored cheek volumes', 'Sharp neck-to-jawline angle', 'No wind-swept pulled look', 'Invisible micro-incision placement'],
        suitableFor: 'Patients experiencing mid-face sag, jowling, or skin laxity desiring anatomical rejuvenation.'
      },
      {
        id: 'eyelid-surgery',
        name: 'Blepharoplasty (Eyelid Surgery)',
        tagline: 'Rejuvenating tired eyes through micro-precision fat & skin repositioning.',
        duration: '1.5 - 2.0 Hours',
        anesthesia: 'Local w/ Sedation or General',
        recoveryTime: '7 - 10 Days',
        overview: 'Upper and lower eyelid procedures remove excess skin and carefully redistribute orbital fat pads to eliminate hooding and under-eye bags.',
        keyBenefits: ['Brighter, rested appearance', 'Unobstructed upper field of vision', 'Smooth lower lid-cheek transition', 'Hidden natural crease incisions'],
        suitableFor: 'Individuals with droopy upper lids, puffy lower bags, or tired orbital contours.'
      },
      {
        id: 'chin-neck-lift',
        name: 'Chin Augmentation & Neck Sculpting',
        tagline: 'Defining the lower third profile with implants, fat grafting, or submentoplasty.',
        duration: '2.0 - 3.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '10 - 12 Days',
        overview: 'Creates an elegant profile balance by augmenting a weak chin and eliminating double-chin fullness through deep neck muscle tightening and targeted contouring.',
        keyBenefits: ['Streamlined neck contour', 'Harmonized jawline balance', 'Eradication of submental fullness'],
        suitableFor: 'Patients looking for jawline definition and neck smoothing.'
      }
    ]
  },
  {
    id: 'breast',
    title: 'Breast Aesthetics & Reconstruction',
    shortDesc: 'Artistic breast proportions, natural feel, and microsurgical reconstruction.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    procedures: [
      {
        id: 'breast-augmentation',
        name: 'Dual-Plane Breast Augmentation',
        tagline: 'Custom ergonomic silicone or autologous fat transfer for natural breast volume.',
        duration: '1.5 - 2.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '7 - 10 Days',
        overview: 'Utilizes subfascial or dual-plane placement with nano-textured or smooth ergonomic implants to ensure soft, natural tissue integration and cleavage dynamics.',
        keyBenefits: ['Natural movement & soft touch', 'Tailored implant volume & projection', 'Minimal scar placement'],
        suitableFor: 'Patients seeking increased breast fullness, symmetry correction, or volume restoration.'
      },
      {
        id: 'breast-lift',
        name: 'Mastopexy (Breast Lift)',
        tagline: 'Re-elevating sagging breast tissue and restoring youthful upper pole fullness.',
        duration: '2.5 - 3.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '10 - 14 Days',
        overview: 'Removes excess stretched skin while reshaping internal breast parenchyma to lift the breast envelope and reposition the nipple-areola complex higher.',
        keyBenefits: ['Youthful conical shape', 'Repositioned, centered areolas', 'Firm upper pole projection'],
        suitableFor: 'Post-pregnancy, weight loss, or age-related breast ptosis.'
      },
      {
        id: 'breast-reduction',
        name: 'Reduction Mammaplasty',
        tagline: 'Alleviating physical discomfort and sculpting proportionate breast dimensions.',
        duration: '3.0 - 4.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '14 Days',
        overview: 'Resects heavy breast tissue, fat, and skin to relieve back, shoulder, and neck strain while creating lightweight, aesthetically balanced breasts.',
        keyBenefits: ['Relief from chronic neck & shoulder pain', 'Improved athletic posture', 'Symmetrical proportional shape'],
        suitableFor: 'Patients experiencing physical strain or emotional discomfort from disproportionately large breasts.'
      }
    ]
  },
  {
    id: 'body',
    title: 'Body Contouring & Silhouette',
    shortDesc: 'Sculpting sleek body proportions through High-Definition VASER liposuction and body lifts.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    procedures: [
      {
        id: 'vaser-liposuction',
        name: 'HD VASER Liposculpture',
        tagline: 'Precision ultrasound-assisted fat removal highlighting athletic musculature.',
        duration: '2.0 - 4.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '7 - 12 Days',
        overview: 'Employs targeted ultrasound waves to emulsify fat deposits while preserving blood vessels and nerves, enabling detailed sculpting of abdominal, flank, and thigh contours.',
        keyBenefits: ['High-definition athletic etching', 'Tightened skin contraction', 'Preservation of surrounding tissues'],
        suitableFor: 'Fit individuals desiring refined muscular definition and stubborn fat removal.'
      },
      {
        id: 'tummy-tuck',
        name: 'Abdominoplasty (Tummy Tuck)',
        tagline: 'Repairing abdominal muscle diastasis and removing loose skin fold.',
        duration: '3.0 - 4.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '14 - 21 Days',
        overview: 'Surgically tightens separated abdominal rectus muscles (diastasis recti) and removes overstretched lower abdominal skin and fat for a flat, firm midsection.',
        keyBenefits: ['Restored core stability', 'Ultra-flat midsection contour', 'New natural low-placed belly button'],
        suitableFor: 'Post-pregnancy women or individuals with significant weight loss laxity.'
      },
      {
        id: 'mommy-makeover',
        name: 'Bespoke Mommy Makeover',
        tagline: 'Combining breast restoration, abdominal tightening, and body contouring.',
        duration: '4.0 - 5.5 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '2 - 3 Weeks',
        overview: 'A personalized combination surgery designed to restore pre-pregnancy physique in a single safe, coordinated procedure.',
        keyBenefits: ['Comprehensive physical restoration', 'Single recovery timeline', 'Tailored procedure combination'],
        suitableFor: 'Women looking to address post-childbearing body changes.'
      }
    ]
  },
  {
    id: 'hair',
    title: 'Micro-Follicular Hair Restoration',
    shortDesc: 'Natural hairline architecture using robotic FUE and dense graft placement.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
    procedures: [
      {
        id: 'fue-hair-transplant',
        name: 'Micro-FUE Hair Transplantation',
        tagline: 'Individually extracted follicular units placed with anatomical hairline angling.',
        duration: '5.0 - 8.0 Hours',
        anesthesia: 'Local Anesthesia',
        recoveryTime: '5 - 7 Days',
        overview: 'Extracts single follicular units from the donor zone and implants them into thinning areas with ultra-fine micro-blades matching natural growth direction.',
        keyBenefits: ['Undetectable natural hairline', 'No linear donor scars', 'Permanent hair growth'],
        suitableFor: 'Men and women suffering from androgenic alopecia or hairline recession.'
      }
    ]
  },
  {
    id: 'skin',
    title: 'Skin & Aesthetic Dermatology',
    shortDesc: 'Laser resurfacing, regenerative exosomes, and deep skin glow treatments.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    procedures: [
      {
        id: 'co2-laser',
        name: 'Fractional CO2 Laser Resurfacing',
        tagline: 'Dermal micro-ablation stimulating intense collagen renewal & skin texture smoothing.',
        duration: '45 - 60 Mins',
        anesthesia: 'Topical Numbing Cream',
        recoveryTime: '4 - 7 Days',
        overview: 'Delivers microscopic laser beams into deep skin layers to eliminate pigmentation, fine lines, acne scars, and pore enlargement.',
        keyBenefits: ['Luminous smooth texture', 'Significant collagen contraction', 'Pore & wrinkle reduction'],
        suitableFor: 'Patients seeking texture refinement and reversal of sun damage.'
      }
    ]
  },
  {
    id: 'reconstructive',
    title: 'Reconstructive Microsurgery',
    shortDesc: 'Restoring form, symmetry, and vital function after trauma, burns, or oncological resection.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    procedures: [
      {
        id: 'facial-reconstruction',
        name: 'Microvascular Facial Reconstruction',
        tagline: 'Free tissue transfer & nerve repair restoring anatomical contour and facial expressiveness.',
        duration: '6.0 - 9.0 Hours',
        anesthesia: 'General Anesthesia',
        recoveryTime: '3 - 6 Weeks',
        overview: 'Sophisticated microsurgical techniques connecting microscopic blood vessels to reconstruct complex facial bone and soft tissue defects.',
        keyBenefits: ['Restoration of vital functions', 'Anatomical facial symmetry', 'Compassionate surgical care'],
        suitableFor: 'Patients needing reconstruction following tumor excision or severe facial trauma.'
      }
    ]
  },
  {
    id: 'non-surgical',
    title: 'Non-Surgical Medical Aesthetics',
    shortDesc: 'Subtle facial harmonization with hyaluronic dermal fillers and neuromodulators.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    procedures: [
      {
        id: 'dermal-fillers',
        name: 'Anatomical Dermal Harmonization',
        tagline: 'Strategic hyaluronic acid placement enhancing cheekbones, lips, and jawline structure.',
        duration: '30 - 45 Mins',
        anesthesia: 'Topical Numbing',
        recoveryTime: 'Immediate / 24 Hours',
        overview: 'Uses medical-grade HA fillers to subtly restore facial volume loss, sculpt cheekbones, and balance chin projection without surgery.',
        keyBenefits: ['Instant natural volume', 'Reversible & safe', 'No downtime'],
        suitableFor: 'Anyone wanting subtle facial refresh without surgical recovery.'
      }
    ]
  }
];
