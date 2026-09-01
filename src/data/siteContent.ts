export interface Milestone {
  year: string;
  title: string;
  desc: string;
  image?: string;
}

export interface CommitteeMember {
  name: string;
  position: string;
  contact?: string;
}

export interface FestivalItem {
  name: string;
  description: string;
  image: string;
}

export interface CalendarEvent {
  date: string;
  title: string;
  description?: string;
}

export interface CulturalEventItem {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const siteContent = {
  brand: {
    name: "Ganesh Nagar Kali Bari",
    description:
      "Dedicated to preserving the rich spiritual and cultural heritage of Bengal while serving the community with devotion and compassion.",
    logoPlaceholder: "assets/KaliBari-logo.png",
  },

  contact: {
    phone: "+91 9015119547",
    email: "info@ganeshnagarkalibari.org",
    address: "D-158-A,Ganesh Nagar Pandav Nagar complex Delhi-110092",
    directionsUrl:
      "https://www.google.com/maps/dir/28.6190808,77.2830489/Ganesh+nagar+pandav+nagar,+E+block,+Ganesh+Nagar,+J78J%2BWX3,+Block+S,+Pandav+Nagar,Shivangi+House+no+E+-137+street+5,+92,+N+Pandav+Nagar,+near+Akshardham+Road,+Delhi,+New+Delhi,+Delhi+110092/@28.6202547,77.282024,20.44z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x390ce30006a28d37:0xe0cfe85c7760777d!2m2!1d77.282057!2d28.6203429!3e2?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    metro: "Akshardham Metro Station (5 min walk)",
    bus: "Ganesh Nagar Bus Stand (2 min walk)",
    landmark: "Near Hanuman Mandir",
  },

  bankDetails: {
    upiId: "ganeshnagarkalibari@upi",
    accountName: "Ganesh nagar kali bari",
    bankName: "Punjab National Bank ",
    accountNumber: "1518001100000050",
    ifsc: "PUNB0160300",
    branch: "Mayur Vihar Phase-1 Branch",
  },

  donationFormConfig: {
    formEndpointKey: "YOUR_DEV_TESTING_KEY_HERE",
  },

  history: {
    heading: "Our History Through Time",
    milestones: [
      {
        year: "1978",
        title: "Kali Bari Established",
        desc: "Foundational shrine constructed on donated land by the Ganesh Nagar local community.",
        image: "",
      },
      {
        year: "1980",
        title: "First Maha Shivaratri",
        desc: "First MahaShivratri Happened",
        image: "",
      },
      {
        year: "1988",
        title: "First Durga Puja",
        desc: "First community-wide Sharadotsav celebrated with marquee decorations.",
        image: "",
      },
      {
        year: "1990",
        title: "First Jagadhatri Puja",
        desc: "First community-wide Jagadhatri Puja celebrated with celebrations.",
        image: "",
      },
      {
        year: "1995",
        title: "First Basanti Puja",
        desc: "First community-wide Basanti Puja celebrated with celebrations.",
        image: "",
      },
      {
        year: "1998",
        title: "First Sarawati Puja",
        desc: "First community-wide Saraswati Puja celebrated with celebrations.",
        image: "",
      },
      {
        year: "2003",
        title: "Silver Jubliee",
        desc: " Grand Celebration for 25 years of Ganesh nagar Kali Bari Establishment.  ",
        image: "",
      },
      {
        year: "2014",
        title: "Main Mandir Expansion",
        desc: "Constructed the stone sanctum for Mandir with Multiple Floors and Ease of Services for Devotees. ",
        image: "",
      },
    ] as Milestone[],
  },

  management: {
    heading: "Office Bearers",
    committee: [
      {
        name: "Bishwanath sen",
        position: "President",
        contact: "+91 9711108681",
      },
      {
        name: "Khokan Jana",
        position: "Secretary",
        contact: "+91 9818906396",
      },
      {
        name: "Prabir Guchait",
        position: "Treasurer",
        contact: "+91 9811511763",
      },
      {
        name: "Suva pal",
        position: "Manager",
        contact: "+91 9015119547",
      },
    ] as CommitteeMember[],
  },

  // Expanded Festivals list matching layout requirements
  festivals: [
    {
      name: "Durga Puja",
      description:
        "The autumnal celebration of the Mother Goddess's victory over evil. Five days of intricate artistry, rhythmic dhaak beats, and joyous cultural gatherings.",
      image: "/assets/idols/dg.jpeg",
    },
    {
      name: "Kali Puja ",
      description:
        "Our premier annual festival, invoking the divine mother Kali on the new moon night of Kartik. A night of profound devotion, luminous offerings, and community unity.",
      image: "/assets/idols/kali-4.jpeg",
    },
    {
      name: "Saraswati Puja",
      description:
        "Honoring the Goddess of Knowledge, Music, and Art. A vibrant spring festival especially revered by students and artists.",
      image: "/assets/idols/saraswati.jpeg",
    },
    {
      name: "Maha Shivaratri",
      description:
        "The Great Night of Shiva. Devotees observe strict fasting and night-long vigils, offering Bilva leaves and holy water.",
      image: "/assets/idols/shiva.jpeg",
    },
    {
      name: "Annapurna Puja",
      description:
        "Celebrating the Goddess of Food and Nourishment. Reliving the tradition of distributing cooked anna bhog to hundreds of devotees.",
      image: "/assets/idols/anna.jpeg",
    },
    {
      name: "Lakshmi Puja",
      description:
        "Observed on Kojagari Purnima. Families and devotees join in prayers for prosperity, peace, and offerings of customized sweets.",
      image: "/assets/idols/lx.jpeg",
    },
    {
      name: "Jagadhatri Puja",
      description:
        "Reverential worship of Goddess Jagadhatri, the protector of the world. Features gorgeous pandal installations and traditional arati.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAw1VFUORIpykp840YbbfQi7ztHoOK7Pgf2LTYi9uBmM60dYT1LKE7HYdlpZjDKVvEiFMmvA694X8qBq-lixlUnboKXbSC2zUPoppu8gAwICmlmZ_XLmlcH--7Fi23HYXJ1BRabJvKEPtdEhydVn0S2BBWyCld6KmvNMw12-FlDHJZ8EvrjF0NsN7b-QfJ-SIZ9bZSMjBS-UkNZS6EDjgvNLZawq_9QK_RKvCimWui6dL4ReAw6ox8c",
    },
    {
      name: "Janmashtami",
      description:
        "Celebrating the birth of Lord Krishna. The temple hall echoes with continuous prayers, devotional chants, and swinging of Bal Gopal.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAw1VFUORIpykp840YbbfQi7ztHoOK7Pgf2LTYi9uBmM60dYT1LKE7HYdlpZjDKVvEiFMmvA694X8qBq-lixlUnboKXbSC2zUPoppu8gAwICmlmZ_XLmlcH--7Fi23HYXJ1BRabJvKEPtdEhydVn0S2BBWyCld6KmvNMw12-FlDHJZ8EvrjF0NsN7b-QfJ-SIZ9bZSMjBS-UkNZS6EDjgvNLZawq_9QK_RKvCimWui6dL4ReAw6ox8c",
    },
    {
      name: "Bipattarini Puja",
      description:
        "Dedicated to Goddess Bipattarini, who relieves obstacles. Devotees tie sacred red threads representing protection.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAw1VFUORIpykp840YbbfQi7ztHoOK7Pgf2LTYi9uBmM60dYT1LKE7HYdlpZjDKVvEiFMmvA694X8qBq-lixlUnboKXbSC2zUPoppu8gAwICmlmZ_XLmlcH--7Fi23HYXJ1BRabJvKEPtdEhydVn0S2BBWyCld6KmvNMw12-FlDHJZ8EvrjF0NsN7b-QfJ-SIZ9bZSMjBS-UkNZS6EDjgvNLZawq_9QK_RKvCimWui6dL4ReAw6ox8c",
    },
    {
      name: "Neel Shasthi",
      description:
        "Prayers offered to Lord Shiva for the health and longevity of children. Devotees light lamps near the Shiva Lingam in the evening.",
      image: "/assets/idols/shiva.jpeg",
    },
    {
      name: "Basanti Puja",
      description:
        "Dedicated to Goddess Basanti. Features gorgeous pandal installations and traditional arati.",
      image: "/assets/idols/bs-2.jpeg",
    },
  ] as FestivalItem[],

  calendar: {
    year: 2026,
    events: [
      {
        date: "01 January",
        title: "New Year Puja",
        description:
          "Special morning prayers and community distribution of prasad.",
      },
      {
        date: "24 January",
        title: "Saraswati Puja (Vasant Panchami)",
        description:
          "Celebration of learning and arts. Special arrangements for students' hate-khori.",
      },
      {
        date: "26 January",
        title: "Republic Day",
        description:
          "Morning flag hoisting ceremony followed by a cultural program.",
      },
      {
        date: "15 March",
        title: "Maha Shivaratri",
        description:
          "Night-long prayer vigil, rudrabhishekam, and devotional chanting.",
      },
      {
        date: "29 March",
        title: "Dol Purnima (Holi)",
        description:
          "Colors festival and special prayers in the mandir courtyard.",
      },
      {
        date: "15 April",
        title: "Poila Baisakh (Bengali New Year)",
        description:
          "Traditional celebrations, business ledger blessing (hal khata), and evening aarti.",
      },
      {
        date: "16 - 21 October",
        title: "Durga Puja 2026",
        description:
          "Grand annual festival from Sasthi to Dashami. Daily pushpanjali, sandhi puja, and evening programs.",
      },
      {
        date: "26 October",
        title: "Lakshmi Puja",
        description:
          "Evening prayers dedicated to Goddess Lakshmi seeking peace and prosperity.",
      },
      {
        date: "08 November",
        title: "Kali Puja & Diwali",
        description:
          "Midnight worship of Maa Kali, illumination of deepams, and fireworks display.",
      },
    ] as CalendarEvent[],
  },

  templeTimings: {
    darshan: {
      morning: "6:00 AM – 11:00 AM",
      evening: "5:00 PM – 9:00 PM",
    },
    summer: {
      months: "March – September",
      schedule: [
        { label: "Daily Puja", time: "7:00 AM" },
        { label: "Bhog & Arati", time: "12:00 PM" },
        { label: "Afternoon Break", time: "12:30 PM – 5:00 PM" },
        { label: "Evening Arati", time: "7:00 PM – 8:00 PM" },
        { label: "Temple Closes", time: "10:00 PM" },
      ],
    },
    winter: {
      months: "November – March",
      schedule: [
        { label: "Daily Puja", time: "8:30 AM" },
        { label: "Bhog & Arati", time: "11:20 AM – 11:50 AM" },
        { label: "Afternoon Break", time: "1:00 PM – 4:30 PM" },
        { label: "Evening Arati", time: "6:00 PM – 7:00 PM" },
        { label: "Temple Closes", time: "9:00 PM" },
      ],
    },
  },

  pujaOfferings: [
    {
      name: "Daily Puja",
      price: "₹251",
      description:
        "Includes daily morning pushpanjali and offering of sweets in your name.",
    },
    {
      name: "Special Sankalp",
      price: "₹501",
      description:
        "Special prayer performed on birth anniversaries, weddings, or specific occasions.",
    },
    {
      name: "Bhog Offering",
      price: "₹1,101",
      description:
        "Full noon Bhog (Anna Bhog) offered to Maa Kali, distributed as prasad.",
    },
  ],

  // Welfare list keeping only Medical Camps and Tree Plantation
  welfareInitiatives: [
    {
      category: "Healthcare",
      title: "Free Medical Camps",
      description:
        "Regular health check-ups, eye clinics, and blood donation drives organized in collaboration with local hospitals to serve the underprivileged.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJy36-bCwUtvAYwQDZ7EuJCqIchRU4nSdwucQJtEGDZTb6eHApqnP32dlxD-ZpmAADJti-4ZGHKld5qM5EFU4QbBoQBIZKP9hyOt5puP4wGjpZJkkzp6ZXakjyIUiPl9Usvw6iDBI5E-Ri-CnGnprTc8JvDDegOkzNWCh-GJMLuuV5nO0Oi6ZxkOCA1ckgswr6TmtoI0cGK4aYIDITR0Oc9paK1hbDUVVe7sJOwu-FgElJXNhN5yEf",
    },
    {
      category: "Environment",
      title: "Tree Plantation",
      description:
        "Annual drives to increase green cover around the Mandir premises and local neighborhoods.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZs9vhOXmS1yc_91JWwgAHj8Q2lOLRiDQ0Zb_SpM26izF4BEwspUMqHoibG7o-mrrZ6M52X_I_Ax-5WTBfD5HYN_QbYEvta3stqlQl8tjp9GAtgVbqN0JXEhN8qnO2EFrVzrEbHJ8S3kkRzzN2Bgnh1FkZyxYjM-6TPHlNUDEAyWRc_gP8BNxlGQeJvRb9RkttdDV3YvCKnWms9XgvocRVwC1nPWXHs1RhUn7T4YecfdvVlTKHJ-kA",
    },
  ],

  // Expanded list of cultural events with image placeholders
  culturalEvents: [
    {
      title: "Rabindra Jayanti",
      date: "09 May",
      description:
        "Celebrating the birth anniversary of Gurudev Rabindranath Tagore with devotional songs, recitations, and Rabindra Nritya performances by students.",
      image: "/assets/gallery/rabin.jpg",
    },
    {
      title: "Independence Day",
      date: "15 August",
      description:
        "National flag hoisting in the temple compound, followed by patriotic songs and a short history assembly by the youth committee.",
      image: "/assets/gallery/ind2.jpg",
    },
    {
      title: "Republic Day",
      date: "26 January",
      description:
        "Morning flag hoisting ceremony and a patriotic parade representation by children, ending with sweet distribution.",
      image: "/assets/gallery/ind.jpg",
    },
    {
      title: "BIJOY Sammilani",
      date: "October (Post-Dashami)",
      description:
        "Traditional gathering celebrating Vijayadashami with distribution of sweets, pronam exchange, and a cultural stage show.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBkwCP06ZHnNT44txiEbWIzzut-axS_vGHIOu2eeF80VP4Hh0yzbrr2uTXXt4V4_FPqDHDGgvK2Bf52zALCNLCXDvKbRF8fdmUShrzFtJvl2AXHN6MM82bX2TlDxhfDONgkVHoqcIe-3IGHJfcORKqIJ8mmwfocIAkPPj5DywwouFjkCXptX-_cpV2CLyxic9ngTMLIyHVVoOzdr_VZVL7HhrRIOuqxo9jZM47E0afwIoRtSykPh660",
    },
    {
      title: "Drawing Competitions",
      date: "Various Dates",
      description:
        "Sit-and-draw competitions for different age groups organized in the community hall during major festivals.",
      image: "/assets/gallery/draw.jpg",
    },
    {
      title: "Classical Dance & Music Performances",
      date: "Festival Evenings",
      description:
        "Evening concerts showcasing vocal classical renditions, sitar compositions, and Kathak/Bharatnatyam dance recitals.",
      image: "/assets/gallery/cd2.jpg",
    },
  ],
};
