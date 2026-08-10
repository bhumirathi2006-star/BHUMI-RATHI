import { Destination, FoodItem, CulturalHighlight, Festival, FAQItem } from './types';

export const destinations: Destination[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    nickName: 'The Pink City',
    tagline: 'A royal symphony in pink sandstone, filled with majestic forts and royal palaces.',
    description: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is the capital of Rajasthan. Known as the Pink City due to the dominant color scheme of its ancient buildings, it forms part of India’s famous Golden Triangle. The city is a magnificent blend of heritage, cosmic observatory architecture, and bustling traditional bazaars filled with handicrafts and jewelry.',
    category: 'Heritage',
    image: 'https://i.ibb.co/yL0qzDk/jaipur.jpg',
    gallery: [
      'https://i.ibb.co/L4S1TMg/jaipur.jpg', // Hawa Mahal
      'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80', // Amber Fort
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80', // City Palace
      'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80'  // Jal Mahal
    ],
    keyAttractions: ['Hawa Mahal (Palace of Winds)', 'Amer Fort & Sheesh Mahal', 'City Palace', 'Jantar Mantar Observatory', 'Nahargarh Fort Sunset point', 'Johari Bazar'],
    bestTimeToVisit: 'October to March (Pleasant and cool winter weather)',
    recommendedDays: 3
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    nickName: 'The City of Lakes',
    tagline: 'The Venice of the East, cradled by tranquil waters and majestic Aravali hills.',
    description: 'Often referred to as the most romantic spot on the continent of India, Udaipur is a city of stunning white marble palaces rising directly out of serene blue lakes. Founded by Maharana Udai Singh II in 1559, Udaipur’s Lake Palace (now a luxury hotel) appears to float magically on Lake Pichola. The city represents the chivalry and refined tastes of the Mewar Dynasty.',
    category: 'Lakes',
    image: 'https://i.ibb.co/nqWJYhWp/i-Stock-2197451116-2-HEADER-MOBILE.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1585123334904-845d60e97b29?auto=format&fit=crop&w=800&q=80', // Pichola lake
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80', // Udaipur palace
      'https://images.unsplash.com/photo-1626082896492-766af4fc6595?auto=format&fit=crop&w=800&q=80', // Jagmandir
      'https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=80'  // Saheliyon ki Bari
    ],
    keyAttractions: ['Lake Pichola Boat Ride', 'Grand City Palace', 'Lake Palace (Jag Niwas)', 'Sajjangarh Monsoon Palace', 'Jagdish Temple', 'Saheliyon-ki-Bari Gardens'],
    bestTimeToVisit: 'September to March (Ideal for lakeside walks and sunsets)',
    recommendedDays: 3
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    nickName: 'The Golden City',
    tagline: 'A fairytale rising out of the golden sands of the great Thar Desert.',
    description: 'Located in the heart of the Thar Desert, Jaisalmer is constructed entirely of yellow sandstone which glows like liquid gold under the desert sun. Its defining feature is the Jaisalmer Fort (Sonar Qila) - a living medieval fort where a quarter of the city’s population still resides inside. Sand dunes, camel safaris, and exquisite havelis make this a desert wonderland.',
    category: 'Desert',
    image: 'https://i.ibb.co/VpSjLqQk/jaisalmer.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80', // Fort
      'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80', // Camp Desert
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80', // Camel caravan
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'  // Desert sunset
    ],
    keyAttractions: ['Living Jaisalmer Fort (Sonar Qila)', 'Sam Sand Dunes Camel Safari', 'Patwon ki Haveli', 'Gadisar Lake', 'Desert Camping & Folk Music Night', 'Kuldhara Abandoned Village'],
    bestTimeToVisit: 'November to February (Perfect cool breeze for desert camping)',
    recommendedDays: 2
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    nickName: 'The Blue City',
    tagline: 'Guarded by a giant clifftop fortress above a sea of striking indigo-blue houses.',
    description: 'Jodhpur, founded in 1459 by Rao Jodha, is crowned by the colossal Mehrangarh Fort, which stands perpendicular on a cliff 400 feet above the city skyline. Looking down from the fort reveals an endless sea of boxy houses painted in a uniform soothing shade of blue. This bright color originally indicated Brahmin houses and helps reflect the intense desert heat.',
    category: 'Heritage',
    image: 'https://i.ibb.co/7BZH3sb/jodhpur-hero-qlt-82-ts-1726661024132.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1595238228911-c3052277e7be?auto=format&fit=crop&w=800&q=80', // Mehrangarh Fort Entrance
      'https://i.ibb.co/7BZH3sb/jodhpur-hero-qlt-82-ts-1726661024132.jpg', // Blue city houses
      'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80', // Jaswant Thada carvings
      'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80'  // Stepwell details
    ],
    keyAttractions: ['Mehrangarh Fort Complex', 'Jaswant Thada Marble Cenotaph', 'Umaid Bhawan Palace', 'Toorji ka Jhalra (Stepwell)', 'Clock Tower & Sardar Market', 'Ziplining over Mehrangarh Moat'],
    bestTimeToVisit: 'October to March (Cool winters and clear blue skies)',
    recommendedDays: 2
  },
  {
    id: 'pushkar',
    name: 'Pushkar',
    nickName: 'The Holy City',
    tagline: 'A sacred lakeside town echoing with hymns, temple bells, and spiritual magic.',
    description: 'Cradled in the quiet valley of Aravali, Pushkar is one of the oldest existing cities in India. It is centered around the sacred Pushkar Lake, which has 52 bathing ghats where pilgrims take holy dips. It is home to the rare 14th-century temple dedicated to Lord Brahma (the Creator), making it a massive pilgrimage destination and home of the legendary colorful Camel Fair.',
    category: 'Holy',
    image: 'https://i.ibb.co/DDvjYjKz/pushkar-2311800-1920.jpg',
    gallery: [
      'https://i.ibb.co/DDvjYjKz/pushkar-2311800-1920.jpg', // Pushkar Ghats lakeside
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80', // Camel Fair scene
      'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80', // Temple architecture details
      'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=800&q=80'  // Holy pathways
    ],
    keyAttractions: ['Sacred Pushkar Lake & Ghats', 'Jagatpita Brahma Temple', 'Savitri Temple Ropeway (Sunset view)', 'Pushkar Camel Fair Grounds', 'Varaha Temple', 'Local Desert Camps'],
    bestTimeToVisit: 'November (During the massive Pushkar Camel Fair) to March',
    recommendedDays: 1
  },
  {
    id: 'mountabu',
    name: 'Mount Abu',
    nickName: 'The Oasis in the Hills',
    tagline: 'An unexpected green hill station hiding spectacular ancient carved marble temples.',
    description: 'Standing as Rajasthan’s only hill station, Mount Abu is located on a high rocky plateau in the Aravali range surrounded by lush forest. It offers a cool, refreshing respite from the scorching heat of the surrounding desert plains. Beyond Nakki Lake and outdoor adventures, Mount Abu houses the world-famous Dilwara Jain Temples, renowned for their incredibly intricate marble carvings.',
    category: 'Nature',
    image: 'https://i.ibb.co/pjVz2Wfc/m-Mount-Abu-tv-destination-img-1-l-709-1065.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', // Nakki Lake boating sunset
      'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80', // Dilwara-style white marble carvings
      'https://i.ibb.co/pjVz2Wfc/m-Mount-Abu-tv-destination-img-1-l-709-1065.jpg', // Mountain hill station forest
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'  // Twilight lookout views
    ],
    keyAttractions: ['Dilwara Jain Temples (Delicate marble carvings)', 'Scenic Nakki Lake Boating', 'Toad Rock Lookout Point', 'Guru Shikhar (Highest peak in Rajasthan)', 'Mount Abu Wildlife Sanctuary', 'Sunset Point'],
    bestTimeToVisit: 'Year-round, but exceptionally lovely from July to October (monsoon) and November to February',
    recommendedDays: 2
  }
];

export const foodItems: FoodItem[] = [
  {
    id: 'dal-baati-churma',
    name: 'Dal Baati Churma',
    description: 'The signature dish of Rajasthani cuisine. It features hard, round wheat rolls called Baatis, baked over charcoal and heavily dipped in pure desi ghee, served with a spicy five-lentil Panchmel Dal and a sweet, coarsely ground wheat flour dessert called Churma.',
    type: 'veg',
    image: 'https://i.ibb.co/4n9TnXdG/dal-bati-churma.jpg',
    popularAt: 'Traditional Chokhi Dhani resorts, heritage Havelis, and local Bhojnalayas in Jaipur & Jodhpur.'
  },
  {
    id: 'gatte-ki-sabji',
    name: 'Gatte ki Sabji',
    description: 'A classic Rajasthani comfort food perfectly adapted to the dry desert climate where fresh vegetables are traditionally scarce. It consists of spiced gram flour (besan) cylindrical dumplings boiled in water, sliced, and cooked in a rich, tangy yogurt-based gravy flavored with spices and hing.',
    type: 'veg',
    image: 'https://i.ibb.co/nsf1yhng/How-to-make-Gatte-ki-Sabzi-Recipe-1-2025-05-9ff13d04bf09da4fac87c0cc607295c0-3x2.jpg',
    popularAt: 'Every home across Rajasthan; highly popular in local lunch menus in Jodhpur and Jaipur.'
  },
  {
    id: 'ker-sangri',
    name: 'Ker Sangri',
    description: 'An authentic desert specialty cooked with "Ker" (tangy small wild berries) and "Sangri" (long wild beans grown on the state tree, Khejri). These are dried, rehydrated, and stir-fried with mustard oil, raisins, whole red chillies, and local dry spices, producing a sour, tangy, and deeply earthy taste.',
    type: 'veg',
    image: 'https://i.ibb.co/qL6YsynD/Ker-Sangri-FB.jpg',
    popularAt: 'Traditional marriage feasts and authentic Marwari thalis, particularly in Jaisalmer and Bikaner.'
  },
  {
    id: 'mawa-kachori',
    name: 'Mawa Kachori',
    description: 'A decadent sweet delicacy created in Jodhpur. Unlike standard spicy kachoris, this version is stuffed with sweetened condensed milk solids (khoya/mawa), dry fruits (almonds and pistachios), deep-fried in pure ghee, and subsequently dunked in warm saffron-infused sugar syrup.',
    type: 'veg',
    image: 'https://i.ibb.co/mWdyJnq/Mawa-Kachori.jpg',
    popularAt: 'Rawat Mishthan Bhandar in Jaipur, and Jodhpur Sweet Home in Jodhpur.'
  }
];

export const culturalHighlights: CulturalHighlight[] = [
  {
    id: 'ghoomar',
    name: 'Ghoomar Dance',
    description: 'Recognized globally as a symbol of Rajasthani elegance, Ghoomar was developed by the Bhil tribe and later adopted by Rajasthani royalty. It involves groups of women in colorful swirling skirts ("Ghagras") spinning gracefully to traditional instruments, expressing joy and celebration.',
    category: 'Dance',
    image: 'https://i.ibb.co/L4S1TMg/jaipur.jpg'
  },
  {
    id: 'kathputli',
    name: 'Kathputli Puppetry',
    description: 'An ancient art form of string puppetry belonging to the Bhat community. Puppeteers use wooden puppets dressed in traditional attire to tell dramatic historical legends, romance of folk heroes, and deliver social educational messages with lively drumming and high-pitched songs.',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1562137569-22a466fe4669?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blue-pottery',
    name: 'Jaipur Blue Pottery',
    description: 'A world-famous glazed pottery craft of Jaipur. It is unique because it is made of Egyptian paste (quartz, raw glaze, sodium sulphate, and multani mitti) rather than clay. Decorated with intricate hand-painted floral or animal designs in cobalt blue and turquoise, it never cracks or leaks.',
    category: 'Craft',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kalbelia',
    name: 'Kalbelia Dance',
    description: 'A UNESCO-recognized folk dance performed by the snake-charmer tribe. Dancers wear stunning embroidered black outfits that mimic snake movements. They spin rapidly to the haunting notes of the "Been" instrument, showing extreme flexibility and breathtaking balance.',
    category: 'Dance',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80'
  }
];

export const festivals: Festival[] = [
  {
    id: 'pushkar-camel-fair',
    name: 'Pushkar Camel Fair',
    month: 'November (Kartik Purnima)',
    location: 'Pushkar, Ajmer District',
    description: 'One of the world’s most spectacular livestock festivals, drawing thousands of camel herders, traders, and international travelers. The desert town transforms into a vibrant carnival featuring camel beauty pageants, traditional folk concerts, cricket matches between locals and tourists, and holy dips in the lake.',
    highlights: ['Camel beauty contest & dance', 'Deepdan spiritual floating oil lamps at ghats', 'Traditional folk music and Kalbelia dances', 'Giant Ferris wheels and desert hot air ballooning'],
    image: 'https://i.ibb.co/whHd0Ct7/images-q-tbn-ANd9-Gc-SCz71-Sku-V6u-O8b-WCc5-Xp-PSFZD0-E20-GOX3l-V-x5vts-QGfzvot8bqn-CKzo-Yo-s-10.jpg'
  },
  {
    id: 'desert-festival',
    name: 'Desert Festival Jaisalmer',
    month: 'February (Magh Purnima)',
    location: 'Sam Sand Dunes, Jaisalmer',
    description: 'A grand celebration of desert folklore held amidst the picturesque Sam Sand Dunes. Over three days, the festival showcases camel polo, turban-tying speed contests, the famous "Longest Mustache" competition, and majestic military-style camel maneuvers by the Border Security Force under moonlight.',
    highlights: ['Moustache Competition', 'BSF Camel Tattoo Show', 'Mr. Desert Pageant', 'Folk concerts on open sand dunes with campfires'],
    image: 'https://i.ibb.co/7d4PxdgZ/images-q-tbn-ANd9-Gc-Rw-YYB0hx4-Boucik-L0zfvg7ub-IUMCdz0ha-Mk1xnia2h-Jovp-F7b6ras-QLd0-s-10.jpg'
  },
  {
    id: 'gangaur-festival',
    name: 'Gangaur Festival',
    month: 'March/April (Chaitra)',
    location: 'All over Rajasthan (especially Jaipur & Udaipur)',
    description: 'Dedicated to Goddess Gauri (Parvati), the goddess of marital abundance and companion to Lord Shiva. Women dress in gorgeous traditional red and green Bandhani sarees, carry clay idols on their heads in majestic royal processions accompanied by horses, camels, and traditional folk dancers.',
    highlights: ['Royal golden palanquin processions', 'Applying intricate Mehendi (henna) designs', 'Traditional songs sung by groups of girls', 'Delicacies like Ghevar offered as prasad'],
    image: 'https://i.ibb.co/RpySHwn4/images-q-tbn-ANd9-Gc-Q5s-Swk-Zd1yh-Yf1-Y60u-NI9-Fr-QIh-Ol-Sh2f-KV1u6-F2j-Lk-LCo-OISYH1tv7f-Ck-T-s-10.jpg'
  },
  {
    id: 'teej-festival',
    name: 'Teej Festival',
    month: 'July/August (Sawan)',
    location: 'Jaipur',
    description: 'Commemorates the reunion of Goddess Parvati with Lord Shiva, celebrating the arrival of the life-giving Indian monsoon. Swings decorated with seasonal marigolds are hung from banyan trees. The streets of Jaipur see massive, colorful processions featuring the Teej idol in a silver chariot.',
    highlights: ['Sawan swings adorned with flowers', 'Procession of royal palanquins and elephants', 'Wearing vibrant green leheriya sarees', 'Feasting on fresh, hot, honey-dripped Ghevar'],
    image: 'https://i.ibb.co/TDBRynhn/e6d292702fe633b9370cee7e1b728e08.jpg'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'When is the absolute best time to travel to Rajasthan?',
    answer: 'The ideal time is from October to March. Temperatures are pleasant (ranging from 10°C to 28°C), making it excellent for city walking tours, camel safaris, and exploring forts. April to June is extremely hot (often crossing 45°C), while July to September is monsoon season, which brings lush greenery, particularly beautiful in Udaipur and Mount Abu.'
  },
  {
    id: 'faq-2',
    question: 'How do I travel between cities like Jaipur, Udaipur, and Jaisalmer?',
    answer: 'Rajasthan has excellent transport connectivity. You can take the Indian Railways (highly recommended are luxury trains like Palace on Wheels, or standard express trains like Shatabdi and Intercity). Direct state-run RSRTC buses and luxury private AC coaches connect all major towns. For maximum comfort, you can hire a private tourist cab with a driver for your entire itinerary.'
  },
  {
    id: 'faq-3',
    question: 'Is Rajasthan safe for solo female travelers?',
    answer: 'Yes, Rajasthan is generally highly welcoming, hospitable, and safe for solo travelers. Tourism is a primary livelihood, so locals are helpful. However, standard travel precautions apply: dress modestly when visiting holy shrines, avoid walking alone in isolated desert pathways late at night, and hire only licensed government guides (easily verifiable via ID cards at fort ticket counters).'
  },
  {
    id: 'faq-4',
    question: 'What are the packing essentials for Rajasthan?',
    answer: 'During winters (Oct-March), pack lightweight cotton layers for daytime and warm woolen sweaters/light jackets for chilly desert nights. Essential accessories include sunglasses, sunscreen, a wide-brimmed hat, comfortable walking shoes (forts require extensive stair-climbing), and a scarf or shawl to cover your head when entering religious temples.'
  },
  {
    id: 'faq-5',
    question: 'How many days are recommended for a classic Rajasthan tour?',
    answer: 'A classic 7 to 9-day itinerary covers the Golden Triangle extension (Jaipur - Jodhpur - Udaipur). If you wish to experience the desert sand dunes of Jaisalmer, we recommend adding 2-3 more days, making it a 10 to 12-day complete tour.'
  }
];
