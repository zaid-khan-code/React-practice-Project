import React from "react";
import StudentCard from "../components/StudentCard";

const students = [
  {
    id: 1,
    name: "Zaid Esspl",
    rollNumber: "cs-2024-001",
    batch: "2024",
    favoriteLanguage: "JavaScript",
    theme: "dark",
  },
  {
    id: 2,
    name: "Jane Doe",
    rollNumber: "cs-2024-042",
    batch: "2024",
    favoriteLanguage: "Python",
    theme: "light",
  },
  {
    id: 3,
    name: "John Smith",
    rollNumber: "cs-2024-088",
    batch: "2025",
    favoriteLanguage: "C++",
    theme: "dark",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    rollNumber: "cs-2024-015",
    batch: "2024",
    favoriteLanguage: "Java",
    theme: "light",
  },
  {
    id: 5,
    name: "Michael Chen",
    rollNumber: "cs-2024-032",
    batch: "2024",
    favoriteLanguage: "Go",
    theme: "dark",
  },
  {
    id: 6,
    name: "Emily Davis",
    rollNumber: "cs-2025-007",
    batch: "2025",
    favoriteLanguage: "TypeScript",
    theme: "light",
  },
  {
    id: 7,
    name: "Ahmed Hassan",
    rollNumber: "cs-2024-056",
    batch: "2024",
    favoriteLanguage: "Rust",
    theme: "dark",
  },
  {
    id: 8,
    name: "Lisa Anderson",
    rollNumber: "cs-2025-043",
    batch: "2025",
    favoriteLanguage: "Python",
    theme: "light",
  },
  {
    id: 9,
    name: "David Wilson",
    rollNumber: "cs-2024-091",
    batch: "2024",
    favoriteLanguage: "JavaScript",
    theme: "dark",
  },
  {
    id: 10,
    name: "Olivia Martinez",
    rollNumber: "cs-2025-028",
    batch: "2025",
    favoriteLanguage: "C#",
    theme: "light",
  },
  {
    id: 11,
    name: "James Brown",
    rollNumber: "cs-2024-074",
    batch: "2024",
    favoriteLanguage: "Java",
    theme: "dark",
  },
  {
    id: 12,
    name: "Sophie Taylor",
    rollNumber: "cs-2024-019",
    batch: "2024",
    favoriteLanguage: "Ruby",
    theme: "light",
  },
  {
    id: 13,
    name: "Chris Lee",
    rollNumber: "cs-2025-061",
    batch: "2025",
    favoriteLanguage: "Go",
    theme: "dark",
  },
  {
    id: 14,
    name: "Maria Garcia",
    rollNumber: "cs-2024-045",
    batch: "2024",
    favoriteLanguage: "Python",
    theme: "light",
  },
  {
    id: 15,
    name: "Robert Jackson",
    rollNumber: "cs-2025-037",
    batch: "2025",
    favoriteLanguage: "C++",
    theme: "dark",
  },
  {
    id: 16,
    name: "Jessica White",
    rollNumber: "cs-2024-068",
    batch: "2024",
    favoriteLanguage: "TypeScript",
    theme: "light",
  },
  {
    id: 17,
    name: "Kevin Harris",
    rollNumber: "cs-2024-023",
    batch: "2024",
    favoriteLanguage: "JavaScript",
    theme: "dark",
  },
  {
    id: 18,
    name: "Rachel Martin",
    rollNumber: "cs-2025-052",
    batch: "2025",
    favoriteLanguage: "Rust",
    theme: "light",
  },
  {
    id: 19,
    name: "Daniel Thompson",
    rollNumber: "cs-2024-079",
    batch: "2024",
    favoriteLanguage: "Java",
    theme: "dark",
  },
  {
    id: 20,
    name: "Amanda Clark",
    rollNumber: "cs-2025-014",
    batch: "2025",
    favoriteLanguage: "Python",
    theme: "light",
  },
  {
    id: 21,
    name: "Thomas Rodriguez",
    rollNumber: "cs-2024-086",
    batch: "2024",
    favoriteLanguage: "Go",
    theme: "dark",
  },
];

const Card = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
        Student Directory
      </h1>

      <div className="flex flex-wrap justify-center">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            rollNumber={student.rollNumber}
            batch={student.batch}
            favoriteLanguage={student.favoriteLanguage}
            theme={student.theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
