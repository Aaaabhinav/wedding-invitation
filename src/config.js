/**
 * Wedding Invitation Configuration File
 * Easily customize couple names, family details, event timings, venue, and audio.
 */
const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    name: "Swapnil",
    fullName: "Swapnil Gudimalla",
    parents: "Mr. Srinivas Gudimalla & Mrs. Sunitha Gudimalla",
    grandparents: "Late Mr. Ramulu & Mrs. Gouru Bai"
  },
  bride: {
    name: "Ritu",
    fullName: "Ritu Pathak",
    parents: "Mr. Manoj Kumar Pathak & Mrs. Bachchi Devi",
    grandparents: "Mr. Shovakant Pathak & Late Mrs. Prabha Devi"
  },

  // Monogram & Hashtag
  monogram: "SR",
  hashtag: "#SwituKiWedding",
  weddingDateDisplay: "5th – 6th July 2026",
  weddingDateISO: "2026-07-06T18:00:00+05:30", // For countdown timer

  // Host Details
  hosts: {
    families: "Gudimalla & Pathak Families",
    cordiallyInvitedBy: "Abhishek Gudimalla",
    message: "Join us as we celebrate love, laughter, and the beginning of forever beautiful together."
  },

  // Venue Details
  venue: {
    name: "The Pod Retreat",
    address: "Harshaguda, Shamshabad, Hyderabad, Telangana",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Pod+Retreat+Harshaguda+Hyderabad"
  },

  // Sanskrit Shloka & Spiritual Header
  spiritual: {
    ganeshaInvocation: "|| श्री गणेशाय नमः ||",
    shlokaSanskrit: "मंगलम् भगवान विष्णुः मंगलम् गरुडध्वजः ।\nमंगलम् पुण्डरीकाक्षः मंगलाय तनो हरिः ॥",
    shlokaTranslation: "“May the auspicious Lord Vishnu, He who has Garuda as His emblem, and the lotus-eyed Lord, bring auspiciousness and blessings to all.”"
  },

  // Events Schedule
  events: [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      tagline: "#SunMeetsSky",
      date: "Sunday, 5th July 2026",
      time: "10:00 AM Onwards",
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
      id: "mehndi",
      title: "Mehndi Ceremony",
      tagline: "#MehndiHaiRachneWali",
      date: "Sunday, 5th July 2026",
      time: "2:00 PM Onwards",
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
      date: "Sunday, 5th July 2026",
      time: "8:00 PM Onwards",
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
      id: "wedding",
      title: "Wedding Ceremony",
      tagline: "#SwituKiWedding",
      date: "Monday, 6th July 2026",
      time: "Evening Onwards",
      subtext: "PLEASE JOIN US FOR A SACRED CELEBRATION",
      description: "As two hearts, two families, and two journeys unite in sacred matrimony.",
      themeColor: "#831843",
      accentBg: "linear-gradient(135deg, rgba(251, 207, 232, 0.35) 0%, rgba(244, 114, 182, 0.15) 100%)",
      image: "assets/img/wedding.jpg",
      timeline: [
        { label: "Baraat", time: "6:00 PM", icon: "🎺" },
        { label: "Varmala", time: "8:00 PM", icon: "🌸" },
        { label: "Sacred Rituals & Pheras", time: "11:00 PM", icon: "🔥" }
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
