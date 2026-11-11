/**
 * Wedding Invitation Configuration File
 * Easily customize couple names, family details, event timings, venue, and audio.
 */
const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    name: "Mitesh",
    fullName: "Mitesh Upadhyay",
    parents: "Mr. Yogesh Bhai Upadhyay & Mrs. Urvashi Upadhyay",
    grandparents: ""
  },
  bride: {
    name: "Mrunal",
    fullName: "Mrunal Rahangdale",
    parents: "Mr. Ganesh Rahangdale & Mrs. Kamal Rahangdale",
    grandparents: ""
  },

  // Monogram & Hashtag
  monogram: "MM",
  hashtag: "#MrunalWedsMitesh",
  saveTheDateDisplay: "6th December",
  weddingDateDisplay: "4th – 6th December 2026",
  weddingDateISO: "2026-12-06T18:00:00+05:30", // For countdown timer

  // Host Details
  hosts: {
    families: "Upadhyay & Rahangdale Families",
    cordiallyInvitedBy: "Upadhyay & Rahangdale Families",
    message: "Join us as we celebrate love, laughter, and the beginning of forever beautiful together."
  },

  // Venue Details
  venue: {
    name: "Gopi Utsav Vatika",
    address: "Gopi Utsav Vatika, Khanpur Road, New Alkapuri, Ankodiya, Vadodara, Gujarat – 390023",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gopi%20Utsav%20Vatika%2C%20Khanpur%20Road%2C%20New%20Alkapuri%2C%20Ankodiya%2C%20Vadodara%2C%20Gujarat%20390023"
  },

  // Sanskrit Shloka & Spiritual Header
  spiritual: {
    ganeshaInvocation: "|| श्री गणेशाय नमः ||",
    satnamInvocation: "॥ सत्यनाम ॥",
    shlokaSanskrit: "मंगलम् भगवान विष्णुः मंगलम् गरुडध्वजः ।\nमंगलम् पुण्डरीकाक्षः मंगलाय तनो हरिः ॥",
    shlokaTranslation: "“May the auspicious Lord Vishnu, He who has Garuda as His emblem, and the lotus-eyed Lord, bring auspiciousness and blessings to all.”"
  },

  // Events Schedule
  events: [
    {
      id: "mehndi",
      title: "Mehndi Ceremony",
      tagline: "#MehndiHaiRachneWali",
      date: "Friday, 4th December 2026",
      time: "4:00 PM Onwards",
      venue: "46 – Swatantra Senani Nagar, In Police Chowki Lane, Samta, Vadodara – 390023.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=46%20Swatantra%20Senani%20Nagar%2C%20In%20Police%20Chowki%20Lane%2C%20Samta%2C%20Vadodara%20390023",
      subtext: "PLEASE JOIN US FOR AN AFTERNOON",
      description: "Filled with vibrant hues, joyful moments and the fragrant artistry of henna.",
      themeColor: "#15803D",
      accentBg: "linear-gradient(135deg, rgba(187, 247, 208, 0.35) 0%, rgba(134, 239, 172, 0.15) 100%)",
      image: "assets/img/mehndi.jpg",
      dressCode: {
        title: "Henna Hues",
        description: "Vibrant greens, emerald, sage, and mint with festive accents inspired by henna.",
        palette: ["#DCFCE7", "#86EFAC", "#22C55E", "#15803D", "#14532D"]
      }
    },
    {
      id: "sangeet",
      title: "Sangeet Celebration",
      tagline: "#YeShaamShandaar",
      date: "Saturday, 5th December 2026",
      time: "7:00 PM Onwards",
      venue: "Stellar Kitchen, Opp. Police Chowki, Sevasi, Behind Sears Tower, Vadodara, Gujarat – 391101.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Stellar%20Kitchen%2C%20Opp%20Police%20Chowki%2C%20Sevasi%2C%20Behind%20Sears%20Tower%2C%20Vadodara%2C%20Gujarat%20391101",
      subtext: "PLEASE JOIN US FOR AN EVENING",
      description: "Where melodies meet memories and hearts dance with unrestrained joy.",
      themeColor: "#4338CA",
      accentBg: "linear-gradient(135deg, rgba(199, 210, 254, 0.35) 0%, rgba(165, 180, 252, 0.15) 100%)",
      image: "assets/img/sangeet.jpg",
      dressCode: {
        title: "Glitz & Glam",
        description: "Elegant Indo-Western silhouettes, fusion fits, sparkles, navy, and midnight glam.",
        palette: ["#E0E7FF", "#818CF8", "#4338CA", "#312E81", "#F59E0B"]
      }
    },
    {
      id: "haldi",
      title: "Haldi Ceremony",
      tagline: "#SunMeetsSky",
      date: "Sunday, 6th December 2026",
      time: "10:00 AM (Morning)",
      subtext: "PLEASE JOIN US FOR A MORNING",
      description: "Filled with love, laughter and golden turmeric blessings.",
      themeColor: "#EAB308",
      accentBg: "linear-gradient(135deg, rgba(254, 240, 138, 0.35) 0%, rgba(253, 224, 71, 0.15) 100%)",
      image: "assets/img/haldi.jpg",
      dressCode: {
        title: "Sunshine Shades",
        description: "Comfortable festive wear in cheerful shades of yellow, mustard, and marigold.",
        palette: ["#FEF08A", "#FACC15", "#EAB308", "#CA8A04", "#FFFFFF"]
      }
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      tagline: "#MrunalWedsMitesh",
      date: "Sunday, 6th December 2026",
      time: "6:00 PM Onwards (Evening)",
      subtext: "PLEASE JOIN US FOR A SACRED CELEBRATION",
      description: "As two hearts, two families, and two journeys unite in sacred matrimony.",
      themeColor: "#831843",
      accentBg: "linear-gradient(135deg, rgba(251, 207, 232, 0.35) 0%, rgba(244, 114, 182, 0.15) 100%)",
      image: "assets/img/wedding.jpg",
      timeline: [
        { label: "Baraat", time: "6:00 PM", icon: "🎺" },
        { label: "Mangalashtak", time: "8:00 PM", icon: "🌸" },
        { label: "Sacred Rituals & Pheras", time: "9:00 PM", icon: "🔥" }
      ],
      dressCode: {
        title: "Royal Wedding Hues",
        description: "Timeless royal sarees, lehengas, sherwanis, and bandhgalas in regal maroon, ivory, and gold.",
        palette: ["#831843", "#9D174D", "#BE185D", "#D97706", "#FFFBEB"]
      }
    }
  ],

  // Audio Configuration
  audio: {
    // Relative path to background music
    src: "assets/audio/music.mp3",
    autoPlayOnOpen: true,
    volume: 0.7
  }
};

// Export for module/script usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WEDDING_CONFIG;
}
