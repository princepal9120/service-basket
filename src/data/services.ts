import { Service } from "@/types/pos";

export const services: Service[] = [
  {
    id: "1",
    name: "Personal Training Session",
    description: "One-on-one fitness training with a certified instructor",
    price: 75.00,
    category: "Fitness",
    duration: "60 min"
  },
  {
    id: "2",
    name: "Yoga Class",
    description: "Group yoga session for all skill levels",
    price: 25.00,
    category: "Wellness",
    duration: "45 min"
  },
  {
    id: "3",
    name: "Massage Therapy",
    description: "Relaxing full-body massage",
    price: 90.00,
    category: "Spa",
    duration: "60 min"
  },
  {
    id: "4",
    name: "Nutrition Consultation",
    description: "Personalized nutrition planning and advice",
    price: 120.00,
    category: "Health",
    duration: "90 min"
  },
  {
    id: "5",
    name: "Group Fitness Class",
    description: "High-energy group workout session",
    price: 20.00,
    category: "Fitness",
    duration: "45 min"
  },
  {
    id: "6",
    name: "Meditation Workshop",
    description: "Guided meditation and mindfulness practice",
    price: 40.00,
    category: "Wellness",
    duration: "30 min"
  }
];