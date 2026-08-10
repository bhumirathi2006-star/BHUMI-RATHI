import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  X, 
  ChevronRight, 
  Compass, 
  Shield, 
  Sparkles, 
  Droplet, 
  Bird, 
  Palette, 
  Eye, 
  Flame, 
  Music,
  ArrowRight,
  Info,
  Layers,
  Map as MapIcon
} from 'lucide-react';

// Destination interface for More Destinations cards
interface MoreDestinationItem {
  id: string;
  name: string;
  nickName: string;
  tagline: string;
  description: string;
  category: 'Heritage' | 'Desert' | 'Lakes' | 'Nature' | 'Holy' | 'Art';
  image: string;
  icon: React.ComponentType<any>;
  keyAttractions: string[];
  bestTimeToVisit: string;
  recommendedDays: number;
}

// 9 destinations requested in the main prompt
const moreDestinationsData: MoreDestinationItem[] = [
  {
    id: 'chittorgarh',
    name: 'Chittorgarh',
    nickName: 'The Land of Sacrifice',
    tagline: 'Home to the magnificent Chittorgarh Fort, Vijay Stambh, and rich Rajput history.',
    description: 'Chittorgarh echoes with the heroic tales of Rajput chivalry, romance, and sacrifice. The colossal Chittorgarh Fort, spreading over a high hilltop, is the largest fort complex in India and a UNESCO World Heritage site. Its ancient stone ramparts have witnessed several historic sieges, celebrated in local folk balads.',
    category: 'Heritage',
    image: 'https://i.ibb.co/yFStqRhd/35.jpg',
    icon: Shield,
    keyAttractions: ['Chittorgarh Fort Complex', 'Vijay Stambh (Tower of Victory)', 'Kirti Stambh (Tower of Fame)', 'Rana Kumbha Palace', 'Padmini\'s Floating Palace'],
    bestTimeToVisit: 'October to March (Pleasant for fort exploration)',
    recommendedDays: 1
  },
  {
    id: 'ranakpur',
    name: 'Ranakpur',
    nickName: 'The Marble Marvel',
    tagline: 'Known for the beautiful Ranakpur Jain Temple with intricate marble architecture.',
    description: 'Deep within a quiet valley of the Aravali Range lies Ranakpur, home to one of the most spectacular Jain temple complexes in the world. Built in the 15th century, the main temple is constructed entirely of light-colored marble and features 1,444 uniquely carved pillars, no two of which are identical.',
    category: 'Holy',
    image: 'https://i.ibb.co/GvkJp8n1/Chaumukha-Jain-temple-at-Ranakpur-in-Aravalli-range-near-Udaipur-Rajasthan-India.jpg',
    icon: Sparkles,
    keyAttractions: ['Chaturmukha Dharana Vihara (Main Temple)', 'Sun Temple', 'Sadri Town Nature Trails', 'Muchhal Mahavir Temple'],
    bestTimeToVisit: 'October to March (Cool afternoon temperatures)',
    recommendedDays: 1
  },
  {
    id: 'kumbhalgarh',
    name: 'Kumbhalgarh',
    nickName: 'The Mewar Bastion',
    tagline: 'Famous for Kumbhalgarh Fort and the world\'s second-longest continuous wall.',
    description: 'Kumbhalgarh boasts the formidable Kumbhalgarh Fort, which features a massive continuous wall stretching over 36 kilometers—second in length only to the Great Wall of China. Perched high in the Aravali Range, it was the birthplace of Mewar’s legendary warrior king, Maharana Pratap, and remained virtually impregnable.',
    category: 'Heritage',
    image: 'https://i.ibb.co/KzzcsScK/images-q-tbn-ANd9-Gc-T12s-Ggfz-Rwe-BPk-Iu-f0ou-Cx-Pyb-Uv-T6k-Mxar-Onj-T7-o4j5w-RKFGYTv3j-S-e-s-10.jpg',
    icon: Compass,
    keyAttractions: ['Kumbhalgarh Great Wall', 'Badal Mahal (Palace of Clouds)', 'Neelkanth Mahadev Temple', 'Kumbhalgarh Wildlife Sanctuary Safari'],
    bestTimeToVisit: 'October to March (Perfect for wall hiking and sanctuary wildlife sightings)',
    recommendedDays: 2
  },
  {
    id: 'bundi',
    name: 'Bundi',
    nickName: 'The City of Stepwells',
    tagline: 'A charming heritage town known for Taragarh Fort, stepwells, and colorful murals.',
    description: 'Bundi is a hidden gem tucked away in a narrow gorge. It is famous for its narrow blue streets, magnificent stepwells (baoris) that acted as water reservoirs, and the glorious Garh Palace, which houses the world-famous Chitrashala—a gallery of exquisite royal miniature frescoes.',
    category: 'Lakes',
    image: 'https://i.ibb.co/1YWmc3C6/taragarh-fort-bundi-rajasthan-1-attr-nearby-qlt-82-ts-1726660777403.jpg',
    icon: Droplet,
    keyAttractions: ['Taragarh Fort ruins', 'Raniji ki Baori (Queen\'s Stepwell)', 'Garh Palace & Chitrashala Frescoes', 'Sukh Mahal on Jait Sagar Lake'],
    bestTimeToVisit: 'September to March (Lakes are full and weather is misty)',
    recommendedDays: 2
  },
  {
    id: 'alwar',
    name: 'Alwar',
    nickName: 'The Gateway to Rajasthan',
    tagline: 'Famous for Bala Quila, Siliserh Lake, and Sariska Tiger Reserve.',
    description: 'Alwar is one of the oldest cities in Rajasthan, nestled among the rugged peaks of the Aravali Hills. It offers a rich mix of history and wild nature—from the grand hilltop Bala Quila fort and the serene waters of Siliserh Lake, to the dense forests of Sariska where Bengal tigers roam.',
    category: 'Nature',
    image: 'https://i.ibb.co/TMM1kgH6/moosi-maharani-ki-chhatri-alwar-rajasthan-1-attr-nearby-qlt-82-ts-1726658830998.jpg',
    icon: Eye,
    keyAttractions: ['Sariska Tiger Reserve Wildlife Safari', 'Bala Quila (Hilltop Alwar Fort)', 'Siliserh Lake Palace & Boating', 'City Palace & Moosi Maharani Chhatri'],
    bestTimeToVisit: 'October to May (Best tiger-spotting chances in spring)',
    recommendedDays: 2
  },
  {
    id: 'bikaner',
    name: 'Bikaner',
    nickName: 'The Camel Country',
    tagline: 'Known for Junagarh Fort, camel safaris, Karni Mata Temple, and Bikaneri snacks.',
    description: 'Bikaner, founded by Rao Bika in 1488, rises directly out of the Thar Desert. It is world-famous for its majestic Junagarh Fort—which was never captured in history—its vast camel breeding farms, the legendary Karni Mata "Rat Temple" in Deshnoke, and crispy Bikaneri Bhujia savories.',
    category: 'Desert',
    image: 'https://i.ibb.co/zVcGFPpy/330px-Rampuriya-Havelis-Bikaner-Rajasthan-DSC0004-cropped.jpg',
    icon: Flame,
    keyAttractions: ['Junagarh Fort & Museum', 'Lalgarh Palace', 'National Research Centre on Camels', 'Karni Mata Temple (Deshnoke)', 'Bikaneri Bazaars for Bhujia'],
    bestTimeToVisit: 'October to March (Cool desert days; includes January Camel Festival)',
    recommendedDays: 2
  }
];

// Map Destination interface for the interactive map (incorporating 12 request cities)
interface MapDestination {
  id: string;
  name: string;
  nickName: string;
  tagline: string;
  description: string;
  image: string;
  category: string;
  keyAttractions: string[];
  bestTimeToVisit: string;
  recommendedDays: number;
  x: number; // custom SVG X percentage (0-100)
  y: number; // custom SVG Y percentage (0-100)
}

// 12 destinations required for the interactive map
const mapDestinationsData: MapDestination[] = [
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    nickName: 'The Golden City',
    tagline: 'A fairytale rising out of the golden sands of the Thar Desert.',
    description: 'An ancient trading outpost built entirely of glowing golden sandstone. Its crown jewel is the majestic, living Jaisalmer Fort, standing tall against the shifting sand dunes of the Thar.',
    image: 'https://i.ibb.co/VpSjLqQk/jaisalmer.jpg',
    category: 'Desert',
    keyAttractions: ['Living Jaisalmer Fort', 'Sam Sand Dunes Safari', 'Patwon ki Haveli'],
    bestTimeToVisit: 'November to February',
    recommendedDays: 2,
    x: 12,
    y: 44
  },
  {
    id: 'bikaner',
    name: 'Bikaner',
    nickName: 'The Camel Country',
    tagline: 'A desert citadel renowned for impregnable forts and royal snacks.',
    description: 'Surrounded by the Thar Desert, Bikaner houses the perfectly preserved Junagarh Fort, incredible camel breeding sanctuaries, and a rich legacy of vibrant music and fiery snacks.',
    image: 'https://i.ibb.co/zVcGFPpy/330px-Rampuriya-Havelis-Bikaner-Rajasthan-DSC0004-cropped.jpg',
    category: 'Desert',
    keyAttractions: ['Junagarh Fort', 'Camel Research Centre', 'Karni Mata Temple'],
    bestTimeToVisit: 'October to March',
    recommendedDays: 2,
    x: 34,
    y: 24
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    nickName: 'The Blue City',
    tagline: 'Crowned by the perpendicular cliffs of Mehrangarh Fort.',
    description: 'An ocean of indigo-blue box houses nestled below the mighty Mehrangarh Fort. Jodhpur represents the zenith of Marwari valor, architecture, and spicy thalis.',
    image: 'https://i.ibb.co/7BZH3sb/jodhpur-hero-qlt-82-ts-1726661024132.jpg',
    category: 'Heritage',
    keyAttractions: ['Mehrangarh Fort', 'Jaswant Thada', 'Toorji ka Jhalra stepwell'],
    bestTimeToVisit: 'October to March',
    recommendedDays: 2,
    x: 31,
    y: 49
  },
  {
    id: 'mountabu',
    name: 'Mount Abu',
    nickName: 'The Oasis in the Hills',
    tagline: 'Rajasthan\'s lush, cool hilltop retreat with marble marvels.',
    description: 'Perched on a rocky plateau in the Aravali Range, Mount Abu features the sacred Nakki Lake and the breathtakingly intricate carved marble of Dilwara Temples.',
    image: 'https://i.ibb.co/pjVz2Wfc/m-Mount-Abu-tv-destination-img-1-l-709-1065.jpg',
    category: 'Nature',
    keyAttractions: ['Dilwara Jain Temples', 'Nakki Lake boating', 'Guru Shikhar Peak'],
    bestTimeToVisit: 'September to March',
    recommendedDays: 2,
    x: 19,
    y: 84
  },
  {
    id: 'ranakpur',
    name: 'Ranakpur',
    nickName: 'The Marble Marvel',
    tagline: 'Deep valleys hiding the pinnacle of Jain temple architecture.',
    description: 'Famous for the breathtaking 15th-century Chaturmukha temple constructed entirely of white marble with 1,444 uniquely hand-carved pillars.',
    image: 'https://i.ibb.co/GvkJp8n1/Chaumukha-Jain-temple-at-Ranakpur-in-Aravalli-range-near-Udaipur-Rajasthan-India.jpg',
    category: 'Holy',
    keyAttractions: ['Ranakpur Jain Temple', 'Sadri Forest Trails', 'Sun Temple'],
    bestTimeToVisit: 'October to March',
    recommendedDays: 1,
    x: 29,
    y: 73
  },
  {
    id: 'kumbhalgarh',
    name: 'Kumbhalgarh',
    nickName: 'The Mewar Bastion',
    tagline: 'Guarding Mewar with the world\'s second-longest defensive wall.',
    description: 'This formidable hilltop fortress has a massive continuous wall spanning 36 kilometers. Perched high, it offers beautiful panoramic views of the Aravali valley.',
    image: 'https://i.ibb.co/KzzcsScK/images-q-tbn-ANd9-Gc-T12s-Ggfz-Rwe-BPk-Iu-f0ou-Cx-Pyb-Uv-T6k-Mxar-Onj-T7-o4j5w-RKFGYTv3j-S-e-s-10.jpg',
    category: 'Heritage',
    keyAttractions: ['Kumbhalgarh Fort Wall', 'Badal Mahal', 'Wildlife Sanctuary'],
    bestTimeToVisit: 'October to March',
    recommendedDays: 2,
    x: 35,
    y: 73
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    nickName: 'The City of Lakes',
    tagline: 'The romantic Venice of the East cradled by blue lakes.',
    description: 'A romantic valley surrounded by water, featuring white palaces floating on peaceful lakes, majestic royal courts, and lush traditional gardens.',
    image: 'https://i.ibb.co/nqWJYhWp/i-Stock-2197451116-2-HEADER-MOBILE.jpg',
    category: 'Lakes',
    keyAttractions: ['Lake Pichola Palaces', 'Grand City Palace', 'Sajjangarh Monsoon Palace'],
    bestTimeToVisit: 'September to March',
    recommendedDays: 3,
    x: 38,
    y: 82
  },
  {
    id: 'chittorgarh',
    name: 'Chittorgarh',
    nickName: 'The Fort of Chivalry',
    tagline: 'The epic hilltop capital of the Mewar kings.',
    description: 'The ultimate symbol of Rajput courage and chivalry. Spans over a 700-acre hilltop, filled with historical towers, temples, and palaces.',
    image: 'https://i.ibb.co/yFStqRhd/35.jpg',
    category: 'Heritage',
    keyAttractions: ['Chittorgarh Fort', 'Vijay Stambh', 'Padmini\'s Palace'],
    bestTimeToVisit: 'October to March',
    recommendedDays: 1,
    x: 48,
    y: 80
  },
  {
    id: 'bundi',
    name: 'Bundi',
    nickName: 'The Stepwell Capital',
    tagline: 'A poetic blue town filled with stepwells and royal murals.',
    description: 'A charming valley of blue-washed homes, home to exquisite stepwells and the majestic Garh Palace, boasting some of India\'s finest murals.',
    image: 'https://i.ibb.co/1YWmc3C6/taragarh-fort-bundi-rajasthan-1-attr-nearby-qlt-82-ts-1726660777403.jpg',
    category: 'Lakes',
    keyAttractions: ['Raniji ki Baori stepwell', 'Taragarh Fort', 'Garh Palace murals'],
    bestTimeToVisit: 'September to March',
    recommendedDays: 2,
    x: 58,
    y: 68
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    nickName: 'The Pink City',
    tagline: 'A royal symphony of heritage, astronomy, and pink sandstone.',
    description: 'The capital of Rajasthan, part of the Golden Triangle. Known for grand honeycombed palaces, hilltop defense fortresses, and bustling gem bazaars.',
    image: 'https://i.ibb.co/L4S1TMg/jaipur.jpg',
    category: 'Heritage',
    keyAttractions: ['Hawa Mahal', 'Amer Fort & Sheesh Mahal', 'City Palace'],
    bestTimeToVisit: 'October to March',
    recommendedDays: 3,
    x: 62,
    y: 44
  },
  {
    id: 'alwar',
    name: 'Alwar',
    nickName: 'The Gateway Citadel',
    tagline: 'Rugged hill fortresses bordering deep tiger forests.',
    description: 'Located in the shadow of the Aravali Range, Alwar features the mighty Bala Quila fort, tranquil lake reserves, and the wild leopards of Sariska Sanctuary.',
    image: 'https://i.ibb.co/TMM1kgH6/moosi-maharani-ki-chhatri-alwar-rajasthan-1-attr-nearby-qlt-82-ts-1726658830998.jpg',
    category: 'Nature',
    keyAttractions: ['Sariska Tiger Reserve', 'Bala Quila Fort', 'Siliserh Lake Palace'],
    bestTimeToVisit: 'October to May',
    recommendedDays: 2,
    x: 74,
    y: 30
  }
];

export default function MoreDestinations() {
  const [activeModal, setActiveModal] = useState<MoreDestinationItem | null>(null);
  const [selectedMapCity, setSelectedMapCity] = useState<MapDestination>(
    mapDestinationsData.find(c => c.id === 'jaipur') || mapDestinationsData[0]
  );
  const [isHoveredMapId, setIsHoveredMapId] = useState<string | null>(null);

  return (
    <section id="more-destinations" className="py-24 bg-white dark:bg-slate-900 text-brand-navy dark:text-brand-cream transition-colors duration-300 relative overflow-hidden">
      
      {/* Decorative Traditional Border Motifs */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-brand-navy dark:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 px-4 py-1.5 sharp-card bg-brand-gold/15 mb-4">
            Off The Beaten Path
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-brand-navy dark:text-brand-cream tracking-tight uppercase font-serif">
            Explore More Destinations of Rajasthan
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4" />
          <p className="text-brand-navy/80 dark:text-brand-cream/80 mt-6 text-sm sm:text-base font-sans font-medium tracking-wide leading-relaxed">
            Venturing deep into the heart of northern India to explore pristine marble temples, hidden fortress walls that span miles, beautifully painted havelis, and wild avian nesting sanctuaries.
          </p>
        </div>

        {/* 9 Responsive Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {moreDestinationsData.map((dest, idx) => {
            const IconComponent = dest.icon;
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="group relative bg-white dark:bg-slate-950 rounded-2xl border-2 border-brand-navy/10 dark:border-brand-gold/15 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2 hover:scale-[1.015]"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-brand-navy/95 dark:bg-slate-900 border border-brand-gold text-brand-gold text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
                    <IconComponent className="h-3.5 w-3.5" />
                    <span>{dest.category}</span>
                  </div>
                  {/* Soft Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-black uppercase tracking-wide text-brand-navy dark:text-brand-gold mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-[10px] uppercase font-bold text-brand-gold tracking-widest mb-4">
                      {dest.nickName}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-navy/70 dark:text-brand-cream/70 font-medium leading-relaxed mb-6 font-sans">
                      {dest.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveModal(dest)}
                    className="w-full py-3 border-2 border-brand-navy dark:border-brand-gold text-brand-navy dark:text-brand-gold hover:bg-brand-navy hover:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-brand-navy font-black uppercase tracking-widest text-[10px] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium Interactive Map of Rajasthan (Bonus Prompt) */}
        <div className="border-t-2 border-brand-navy/10 dark:border-brand-gold/15 pt-20">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-brand-navy dark:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 px-4 py-1.5 sharp-card bg-brand-gold/15 mb-4">
              Premium Map Experience
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-brand-navy dark:text-brand-cream tracking-tight uppercase font-serif">
              Interactive Heritage Map
            </h3>
            <div className="w-16 h-1 bg-brand-gold mx-auto mt-4" />
            <p className="text-brand-navy/80 dark:text-brand-cream/80 mt-4 text-xs sm:text-sm font-sans font-medium leading-relaxed">
              Click on any legendary royal fortress, lakeside retreat, or wildlife sanctuary to map your journey, inspect monuments, and preview local weather conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col (7/12 width on Large Screen): The Interactive Map */}
            <div className="lg:col-span-7 bg-brand-cream/20 dark:bg-slate-950 border-2 border-brand-navy dark:border-brand-gold/30 rounded-2xl p-4 sm:p-6 shadow-lg relative flex flex-col justify-between overflow-hidden min-h-[450px] sm:min-h-[550px]">
              
              {/* Cartographer Grid Background Lines (Graticule) */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.08]">
                <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border-b border-r border-brand-navy dark:border-brand-gold" />
                  ))}
                </div>
              </div>

              {/* Decorative Compass & Map Legend */}
              <div className="absolute top-4 right-4 pointer-events-none z-10 hidden sm:flex flex-col items-center select-none bg-white/40 dark:bg-slate-900/40 p-2.5 rounded-xl border border-brand-navy/10 dark:border-brand-gold/10">
                <Compass className="h-8 w-8 text-brand-gold animate-[spin_20s_linear_infinite]" />
                <span className="text-[8px] uppercase tracking-widest font-black text-brand-navy/60 dark:text-brand-cream/60 mt-1">N • S</span>
              </div>

              <div className="absolute bottom-4 left-4 pointer-events-none z-10 hidden sm:block bg-white/60 dark:bg-slate-900/60 p-3 rounded-xl border border-brand-navy/10 dark:border-brand-gold/10">
                <p className="text-[8px] uppercase tracking-widest font-black text-brand-gold mb-1">Cartography Legend</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-gold inline-block animate-ping" />
                    <span className="text-[7px] uppercase tracking-widest font-bold text-brand-navy/80 dark:text-brand-cream/80">Selected Citadel</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy dark:bg-brand-gold inline-block" />
                    <span className="text-[7px] uppercase tracking-widest font-bold text-brand-navy/80 dark:text-brand-cream/80">Heritage Sites</span>
                  </div>
                </div>
              </div>

              {/* SVG Map Container */}
              <div className="relative w-full h-full flex-grow flex items-center justify-center py-6">
                
                {/* SVG vector outline of Rajasthan state (Stylized) */}
                <svg 
                  viewBox="0 0 800 600" 
                  className="w-full h-full max-w-[650px] stroke-brand-navy/10 dark:stroke-brand-gold/10 fill-brand-gold/5 dark:fill-brand-gold/2 transition-colors duration-500"
                >
                  {/* Decorative map boundary */}
                  <polygon 
                    points="220,100 450,70 650,140 730,230 700,380 570,510 400,530 280,500 150,420 110,290"
                    className="stroke-brand-navy/20 dark:stroke-brand-gold/20 stroke-[3] stroke-dasharray-[6,6] fill-brand-gold/[0.04] dark:fill-brand-gold/[0.02]"
                    style={{ strokeDasharray: '6,6' }}
                  />
                  {/* Inner state shadow */}
                  <polygon 
                    points="220,100 450,70 650,140 730,230 700,380 570,510 400,530 280,500 150,420 110,290"
                    className="fill-brand-gold/[0.02] dark:fill-brand-gold/[0.01]"
                  />
                </svg>

                {/* Plotting Pins onto the SVG Coordinate System */}
                {mapDestinationsData.map((city) => {
                  const isActive = selectedMapCity.id === city.id;
                  const isHovered = isHoveredMapId === city.id;

                  return (
                    <button
                      key={city.id}
                      onClick={() => setSelectedMapCity(city)}
                      onMouseEnter={() => setIsHoveredMapId(city.id)}
                      onMouseLeave={() => setIsHoveredMapId(null)}
                      style={{ left: `${city.x}%`, top: `${city.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none z-20"
                    >
                      {/* Ring pulsing animations */}
                      <span className={`absolute -inset-4 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-brand-gold/25 animate-ping scale-110' 
                          : isHovered 
                            ? 'bg-brand-navy/15 dark:bg-brand-gold/15 scale-100' 
                            : 'bg-transparent scale-50'
                      }`} />

                      {/* Map Pin Point */}
                      <div className={`relative flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 ${
                        isActive 
                          ? 'bg-brand-gold text-brand-navy border-brand-navy scale-110 shadow-lg' 
                          : 'bg-brand-navy dark:bg-slate-900 border-brand-gold/50 text-brand-gold hover:scale-105'
                      }`}>
                        <MapPin className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isActive ? 'scale-110 rotate-12' : 'group-hover/pin:scale-110'
                        }`} />
                      </div>

                      {/* City Mini Floating Label */}
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 shadow-md ${
                        isActive 
                          ? 'bg-brand-navy text-brand-gold opacity-100 border border-brand-gold visible -translate-y-0.5' 
                          : isHovered
                            ? 'bg-white dark:bg-slate-950 text-brand-navy dark:text-brand-cream border border-brand-navy/20 dark:border-brand-gold/20 opacity-100 visible -translate-y-0.5'
                            : 'opacity-0 invisible pointer-events-none translate-y-0'
                      }`}>
                        {city.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Responsive Bottom Tip */}
              <div className="text-center sm:text-left mt-2 flex items-center justify-center sm:justify-start gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy/60 dark:text-brand-cream/60 select-none">
                <Info className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Tap on any pulsing compass marker to view royal archives.</span>
              </div>
            </div>

            {/* Right Col (5/12 width on Large Screen): Destination Details Preview Panel */}
            <div className="lg:col-span-5 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMapCity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="flex-grow bg-white dark:bg-slate-950 border-2 border-brand-navy dark:border-brand-gold/30 rounded-2xl overflow-hidden shadow-lg flex flex-col h-full"
                >
                  {/* City High-Res Banner */}
                  <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
                    <img 
                      src={selectedMapCity.image} 
                      alt={selectedMapCity.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Nickname Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="inline-block text-[8px] font-black uppercase tracking-widest text-brand-gold bg-brand-navy/90 border border-brand-gold/40 px-2 py-0.5 rounded mb-1.5">
                        {selectedMapCity.category} Region
                      </span>
                      <h4 className="font-serif text-2xl font-black uppercase tracking-wide leading-none text-white">
                        {selectedMapCity.name}
                      </h4>
                      <p className="text-[9px] font-bold uppercase text-brand-gold tracking-widest mt-0.5">
                        {selectedMapCity.nickName}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <p className="text-[11px] font-bold uppercase text-brand-gold tracking-widest italic border-l-2 border-brand-gold pl-3">
                        "{selectedMapCity.tagline}"
                      </p>
                      
                      <p className="text-xs sm:text-sm text-brand-navy/85 dark:text-brand-cream/80 font-medium leading-relaxed font-sans">
                        {selectedMapCity.description}
                      </p>
                      
                      {/* Key Attractions Grid */}
                      <div className="pt-2 border-t border-brand-navy/10 dark:border-brand-gold/15">
                        <span className="block text-[10px] uppercase font-black text-brand-navy/40 dark:text-brand-cream/40 tracking-widest mb-2.5">
                          Key Attractions & Monuments
                        </span>
                        <ul className="grid grid-cols-1 gap-2">
                          {selectedMapCity.keyAttractions.map((attraction, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs font-semibold text-brand-navy dark:text-brand-cream">
                              <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold mt-1.5 shrink-0" />
                              <span>{attraction}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Travel Metadata and Call to Action */}
                    <div className="space-y-4 pt-4 border-t border-brand-navy/10 dark:border-brand-gold/15">
                      <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-wider text-brand-navy/60 dark:text-brand-cream/60">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-brand-gold shrink-0" />
                          <div>
                            <span className="block text-[8px] font-black text-brand-navy/40 dark:text-brand-cream/40 leading-none mb-0.5">Best Months</span>
                            <span className="text-[9px] text-brand-navy dark:text-brand-cream font-black">{selectedMapCity.bestTimeToVisit}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-brand-gold shrink-0" />
                          <div>
                            <span className="block text-[8px] font-black text-brand-navy/40 dark:text-brand-cream/40 leading-none mb-0.5">Duration</span>
                            <span className="text-[9px] text-brand-navy dark:text-brand-cream font-black">{selectedMapCity.recommendedDays} Full Days</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href="#contact"
                        className="w-full py-3.5 bg-brand-gold hover:bg-brand-navy text-brand-navy hover:text-white dark:bg-brand-gold dark:hover:bg-slate-900 dark:hover:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 font-black uppercase tracking-widest text-[10px] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-none"
                      >
                        <span>Enquire About {selectedMapCity.name}</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>

      {/* Modal Overlay sheet for detailed cards */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Sheet container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-950 border-2 border-brand-navy dark:border-brand-gold/50 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/50 hover:bg-black/80 text-white hover:text-brand-gold transition-colors duration-200 cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="overflow-y-auto flex-grow">
                {/* Banner Banner */}
                <div className="relative h-64 sm:h-72">
                  <img
                    src={activeModal.image}
                    alt={activeModal.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block text-[9px] font-black uppercase tracking-widest text-brand-gold bg-brand-navy/90 border border-brand-gold/40 px-3 py-1 rounded-lg mb-2">
                      {activeModal.category} Destination
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-black uppercase tracking-wide leading-none">
                      {activeModal.name}
                    </h3>
                    <p className="text-xs font-bold uppercase text-brand-gold tracking-widest mt-1">
                      {activeModal.nickName}
                    </p>
                  </div>
                </div>

                {/* Modal Info Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase font-black text-brand-navy/40 dark:text-brand-cream/40 tracking-widest">
                      Historical Chronicles & Background
                    </h4>
                    <p className="text-sm sm:text-base text-brand-navy dark:text-brand-cream font-medium leading-relaxed font-sans">
                      {activeModal.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-brand-navy/10 dark:border-brand-gold/15">
                    
                    {/* Left side: Attractions */}
                    <div>
                      <h4 className="text-[10px] uppercase font-black text-brand-navy/40 dark:text-brand-cream/40 tracking-widest mb-3 flex items-center gap-1">
                        <MapIcon className="h-4 w-4 text-brand-gold" />
                        <span>Monuments & Sights</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeModal.keyAttractions.map((attraction, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-semibold text-brand-navy dark:text-brand-cream leading-snug">
                            <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold mt-1.5 shrink-0" />
                            <span>{attraction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right side: Practical travel details */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase font-black text-brand-navy/40 dark:text-brand-cream/40 tracking-widest flex items-center gap-1">
                        <Layers className="h-4 w-4 text-brand-gold" />
                        <span>Expedition Advisory</span>
                      </h4>
                      
                      <div className="space-y-3 bg-brand-cream/15 dark:bg-slate-900/40 p-4 rounded-xl border border-brand-navy/5 dark:border-brand-gold/5">
                        <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy/70 dark:text-brand-cream/70">
                          <Calendar className="h-4 w-4 text-brand-gold shrink-0" />
                          <div>
                            <span className="block text-[8px] font-black text-brand-navy/40 dark:text-brand-cream/40 leading-none mb-0.5">Recommended Months</span>
                            <span className="text-brand-navy dark:text-brand-cream font-black">{activeModal.bestTimeToVisit}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy/70 dark:text-brand-cream/70">
                          <Clock className="h-4 w-4 text-brand-gold shrink-0" />
                          <div>
                            <span className="block text-[8px] font-black text-brand-navy/40 dark:text-brand-cream/40 leading-none mb-0.5">Stay Recommendation</span>
                            <span className="text-brand-navy dark:text-brand-cream font-black">{activeModal.recommendedDays} {activeModal.recommendedDays === 1 ? 'Day' : 'Days'} Tour</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-brand-navy/10 dark:border-brand-gold/15 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      onClick={() => setActiveModal(null)}
                      className="flex-1 py-3.5 bg-brand-gold hover:bg-brand-navy text-brand-navy hover:text-white dark:bg-brand-gold dark:hover:bg-slate-900 dark:hover:text-brand-gold border-2 border-brand-navy dark:border-brand-gold/40 font-black uppercase tracking-widest text-[10px] rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md hover:shadow-none"
                    >
                      <span>Plan My Journey Here</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="py-3.5 px-6 border-2 border-brand-navy/30 dark:border-brand-gold/30 hover:border-brand-navy dark:hover:border-brand-gold text-brand-navy dark:text-brand-cream hover:bg-brand-cream/10 rounded-xl font-black uppercase tracking-widest text-[10px] transition-colors duration-300 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
