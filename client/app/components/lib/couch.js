const couchData = {
    2025: {
      cordinators: [
        {
          img: "/couch/christy.jpg",
          title: "Project Lead",
          name: "Christy Anthony",
        },
        {
          img: "/couch/feminiyi.jpg",
          title: "Chairman Board of Trusteeship Lead",
          name: "Femi Niyi",
        },
      ],
  
      teams: [
        {
          id: 1,
          university: "Nile University of Nigeria",
          teamName: "Neuronaut Robotics",
          projectLink:
            "https://drive.google.com/drive/folders/1hdV0lViHNPmYbRWd31f3nrJ1dzi080ZW?usp=sharing",
          description:
            "Autonomous Underwater Vehicles (AUVs) designed for subsea pipeline inspection, aiming to address the critical issue of corrosion and damage leading to oil and gas leaks.",
          category: "Robotics & AI",
          award: "1st Runner Up",
          image: "/couch/teamneuronaut.jpg",
          presentationImage: "/couch/teamneuronaut2.jpg",
        },
        {
          id: 2,
          university: "Kwara State University",
          teamName: "Team Green",
          projectLink:
            "https://drive.google.com/drive/folders/1Ro9iY9w-5PY6ptkK-y_iyJzarQW-Lhny",
          description:
            "SUNPOD is a portable solar-powered station designed to address Nigeria's significant energy deficit. It aims to provide affordable, clean, and off-grid electricity for lighting and device charging, benefiting rural homes, students, small businesses, and healthcare facilities.",
          category: "Clean Energy",
          image: "/couch/generalpic1.jpg",
        },
        {
          id: 3,
          university: "Federal University of Technology Akure",
          teamName: "Team CIRCLE",
          projectLink:
            "https://drive.google.com/drive/folders/1nLuBKfVVFjpAiB2IfzzcLImkq1EZ9KQS?usp=sharing",
          description:
            "An intelligent waste management system that combines mobile technology, IoT-enabled smart bins, and AI-driven waste sorting to address Nigeria's waste management challenges by making disposal easier, more rewarding, and data-driven for a cleaner environment and a circular economy.",
          category: "Waste Management",
          award: "2nd Runner Up - People's Choice",
          image: "/couch/teamcircle.jpg",
        },
        {
          id: 4,
          university: "Ahmadu Bello University",
          teamName: "Pup Industries",
          projectLink:
            "https://drive.google.com/drive/folders/1DWkOz9dL0TN6mai6Oc74OHnaIEns6xST",
          description:
            "Plastic to Paint (P2P) initiative, addresses the global issue of plastic waste, particularly in Nigeria, by transforming low-density polyethylene and polystyrene into eco-friendly, mosquito-repellent paint.",
          category: "Plastic Recycling",
          image: "/couch/teampupindustries.jpg",
        },
        {
          id: 5,
          university: "Federal University of Technology Minna",
          teamName: "Waste2light",
          projectLink:
            "https://drive.google.com/drive/folders/1nUybK8fOvjUQ3MhekmlCfiY5YeHCL2WF?usp=sharing",
          description:
            "Waste2Light is dedicated to transforming waste materials into sustainable energy solutions. Waste2Light focuses on empowering underserved communities by creating affordable, off-grid power systems from recycled resources, while also providing youth training in fabrication and clean energy. Beyond existing products, the company is developing innovative solutions like hybrid power systems for flood-prone areas and eco-charcoal briquettes from rice husks.",
          category: "Sustainable Energy",
          award: "2nd Runner Up",
          image: "/couch/teamwaste2light.jpg",
          presentationImage: "/couch/teamwaste2light2.jpg",
        },
        {
          id: 6,
          university: "Lagos State University",
          teamName: "ScrapLink",
          projectLink:
            "https://drive.google.com/drive/folders/13qVAYlt33FtDUi_ay7GZh6K3PGwdq2-t?usp=sharing",
          description:
            "ScrapLink is a digital marketplace designed to connect small-scale scrap metal sellers with qualified buyers, primarily targeting an underserved market in Lagos, Nigeria. It addresses inefficiencies in the scrap industry by leveraging AI for material classification and valuation, a dual-verification point system for transactions, and integrated logistics for transport.",
          category: "Digital Marketplace",
          award: "1st Runner Up - People's Choice",
          image: "/couch/teamscraplink.jpg",
        },
        {
          id: 7,
          university: "Adamawa State University",
          teamName: "ADSU FRESH AIR INNOVATORS",
          projectLink:
            "https://drive.google.com/drive/folders/1P2F-4g1RIjG7l4t2MSOeFSdriXZfU3oQ",
          description:
            "This project focuses on developing an eco-friendly lubricant grease from polyethylene waste, specifically addressing the environmental impact of plastics on human health and ecosystems. The process involves chemically converting shredded plastic waste into a synthetic oil, which is then blended with additives to create the lubricant.",
          category: "Green Chemistry",
          award: "People's Choice Winner",
          image: "/couch/teamabsufreshairinnovators.jpg",
          presentationImage: "/couch/teamabsufreshairinnovators2.jpg",
        },
        {
          id: 8,
          university: "Imo State University",
          teamName: "Team Imsu",
          projectLink:
            "https://drive.google.com/drive/folders/1F3Se_UGLhFDwXvxXEY3yDFD1xTtkorSg",
          description:
            "This project aims to transform palm oil waste into clean energy and biochar. This system addresses environmental issues like CO₂ emissions and provides solutions for rural communities lacking access to clean cooking fuel. The digester generates biochar for soil enhancement, biogas for heating, cooking, and electricity, and captures CO₂ for industrial sale or carbon credits.",
          category: "Biogas & Biochar",
          award: "Grand Winner 🏆",
          image: "/couch/teamimsu.jpg",
          presentationImage: "/couch/teamimsu2.jpg",
        },
        {
          id: 9,
          university: "Kaduna State University",
          teamName: "ReGenX",
          projectLink:
            "https://drive.google.com/drive/folders/1ictr5ssM2k97Sy8DPvepM9QDnTl4B74B?usp=drive_link",
          description:
            "Wrap2Grow is an initiative which focuses on developing a biodegradable packaging material designed to convert into biofertilizer after use.",
          category: "Biodegradable Materials",
          image: "/couch/generalpic2.jpg",
        },
        {
          id: 10,
          university: "Igbinedion University",
          teamName: "EcoCircular Labs",
          projectLink:
            "https://drive.google.com/drive/folders/1tB3skfPAMetbjnNILCW7LnUgwW3GkXYe",
          description:
            "EcoCircular focused on transforming palm oil waste into a sustainable biofertilizer in Nigeria, specifically the Okada region. The core problem addressed is the severe environmental degradation caused by the improper disposal of Empty Fruit Bunches (EFB) and Palm Oil Mill Effluent (POME), which pollutes soil and water and contributes to greenhouse gas emissions. The proposed solution involves anaerobic co-digestion of these waste products to create nutrient-rich, pelletized biofertilizer, offering an alternative to costly inorganic fertilizers.",
          category: "Biofertilizer",
          image: "/couch/generalpic3.jpg",
        },
      ],
  
      speakers: [
        {
          name: "Dr. Kingsley Tochukwu Udeh",
          title: "Minister for Innovation, Science and Technology, Nigeria",
          topic: "Empowering Youth Innovation for Sustainable Growth",
          image: "/couch/drkingsley.jpg",
          image2: "/couch/drkingsley2.jpg",
        },
        {
          name: "Prof. Sa'adatu Hassan Liman",
          title: "Vice Chancellor, Nasarawa State University",
          topic:
            "Circular Economy and Technology: Empowering University Innovation for Sustainable National Transformation",
          image: "/couch/profsaadatu.jpg",
        },
        {
          name: "Dr. Tope Kolade Fasua",
          title: "Special Adviser to the President on Economic Affairs",
          topic:
            "Empowering Youth Innovation: A Policy Framework for Sustainable Economic Growth",
          image: "/couch/drtopekaladefasua.jpg",
          image2: "/couch/drtopekaladefasua2.jpg",
        },
        {
          name: "Asha Falandan",
          title:
            "Acting Director, Skills Development and Entrepreneurship (National Universities Commission)",
          image: "/couch/ashafalandan.jpg",
        },
      ],
  
      mentors: [
        { name: "Engr. Funmi Jemisenia", image: "/couch/engrfummi.jpg" },
        { name: "Engr. Olawale", image: "/couch/engrolawale.jpg" },
        { name: "Engr. Chinyere Igbokwe", image: "/couch/engrchinyereigbkwe.jpg" },
      ],
  
      gallery: [
        { img: "/couch/teampupindustries.jpg", title: "Team imsu giving their presentation" },
        { img: "/couch/puppresenting.jpg", title: "Team PUP giving their presentation" },
        { img: "/couch/neuronaut.jpg", title: "Team Neuronaut giving their presentation" },
        { img: "/couch/absu.jpg", title: "Team Absu giving their presentation" },
        { img: "/couch/ecocircular.jpg", title: "Team EcoCircular labs giving their presentation" },
        { img: "/couch/teampupindustries.jpg", title: "Team imsu giving their presentation" },
      ],
    },
  
    2026: {
      teams: [],
      speakers: [],
      mentors: [],
      gallery: [],
    },
  };
  
  export default couchData;
  