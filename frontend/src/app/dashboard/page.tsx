'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '../services/authService';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  category: string;
  price: number;
  rating: number;
  studentsEnrolled: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress?: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'enrolled' | 'explore'>('enrolled');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait',
    role: 'Student',
    enrolledCourses: 5,
    completedCourses: 3
  });

  const categories = [
    'All',
    'Programming',
    'Design',
    'Business',
    'Marketing',
    'Music',
    'Photography'
  ];

  const mockCourses: Course[] = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn full-stack web development from scratch. Covers HTML, CSS, JavaScript, React, Node.js, and more.",
      instructor: "Dr. Angela Yu",
      thumbnail: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg",
      category: "Programming",
      price: 99.99,
      rating: 4.8,
      studentsEnrolled: 150000,
      duration: "63h 30m",
      level: "Beginner",
      progress: 45
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      description: "Master the art of user interface and user experience design. Learn Figma, design principles, and more.",
      instructor: "Sarah Wilson",
      thumbnail: "https://www.creative-tim.com/blog/content/images/2022/07/UX-design-courses.jpg",
      category: "Design",
      price: 89.99,
      rating: 4.7,
      studentsEnrolled: 75000,
      duration: "42h 15m",
      level: "Intermediate",
      progress: 72
    },
    // Add more mock courses...
  ];

  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [exploreCourses, setExploreCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    
    // Simulate API calls
    setEnrolledCourses(mockCourses.slice(0, 3));
    setExploreCourses(mockCourses);
  }, []);

  const filteredCourses = exploreCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">EduTech Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {isDarkMode ? '🌙' : '☀️'}
              </button>
              
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src={userProfile.avatar}
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover border-2 border-blue-500 transition-transform duration-300 hover:scale-110"
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileOpen && (
                  <div 
                    className={`absolute right-0 mt-2 w-72 rounded-xl shadow-lg py-1 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-white'
                    } ring-1 ring-black ring-opacity-5 transform transition-all duration-300 origin-top-right`}
                  >
                    <div className="px-4 py-3">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={userProfile.avatar}
                          alt="Profile"
                          className="h-16 w-16 rounded-full object-cover border-2 border-blue-500"
                        />
                        <div>
                          <div className="font-medium text-lg">{userProfile.name}</div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                            {userProfile.email}
                          </div>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                            isDarkMode ? 'bg-blue-600' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {userProfile.role}
                          </span>
                        </div>
                      </div>

                      <div className={`grid grid-cols-2 gap-2 py-2 mb-3 border-t border-b ${
                        isDarkMode ? 'border-gray-700' : 'border-gray-200'
                      }`}>
                        <div className="text-center">
                          <div className="text-lg font-semibold">{userProfile.enrolledCourses}</div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Enrolled
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold">{userProfile.completedCourses}</div>
                          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Completed
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <button
                          onClick={() => router.push('/profile')}
                          className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                            isDarkMode 
                              ? 'hover:bg-gray-700' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          👤 View Profile
                        </button>
                        <button
                          onClick={() => router.push('/settings')}
                          className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                            isDarkMode 
                              ? 'hover:bg-gray-700' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          ⚙️ Settings
                        </button>
                        <button
                          onClick={() => {
                            authService.logout();
                            router.push('/login');
                          }}
                          className={`w-full text-left px-4 py-2 text-sm rounded-lg text-red-500 transition-colors duration-200 ${
                            isDarkMode 
                              ? 'hover:bg-gray-700' 
                              : 'hover:bg-gray-100'
                          }`}
                        >
                          🚪 Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('enrolled')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'enrolled'
                ? isDarkMode 
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            My Courses
          </button>
          <button
            onClick={() => setActiveTab('explore')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'explore'
                ? isDarkMode 
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : isDarkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Explore Courses
          </button>
        </div>

        {/* Search and Filter (for Explore tab) */}
        {activeTab === 'explore' && (
          <div className="mb-6 space-y-4">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode 
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-900'
              } border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? isDarkMode 
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'enrolled' ? enrolledCourses : filteredCourses).map((course, index) => (
            <div
              key={course.id}
              className={`rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    {course.level}
                  </span>
                </div>
                <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {course.description}
                </p>
                <div className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <p>Instructor: {course.instructor}</p>
                  <p>Duration: {course.duration}</p>
                  <p>Students: {course.studentsEnrolled.toLocaleString()}</p>
                </div>
                {course.progress !== undefined && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className="h-full rounded-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                )}
                <button
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    course.progress !== undefined
                      ? isDarkMode 
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-blue-500 hover:bg-blue-600'
                      : isDarkMode
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-green-500 hover:bg-green-600'
                  } text-white`}
                >
                  {course.progress !== undefined ? 'Continue Learning' : 'Enroll Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}