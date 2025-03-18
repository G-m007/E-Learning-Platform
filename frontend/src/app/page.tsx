'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">E-Learning Platform</h1>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/login"
                className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
              >
                Login
              </Link>
              <Link 
                href="/register"
                className="px-6 py-2 text-sm font-medium text-indigo-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto pt-32 pb-16 px-4 sm:pt-40 sm:pb-24 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Future with</span>
              <span className="block text-indigo-400">Online Learning</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Access world-class education from anywhere. Learn from industry experts and join a global community of learners.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <div className="rounded-md shadow">
                <Link
                  href="/courses"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-black/20 backdrop-blur-lg py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mt-10 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: 'Expert Instructors',
                  description: 'Learn from industry professionals with years of experience.',
                  icon: '👨‍🏫'
                },
                {
                  title: 'Flexible Learning',
                  description: 'Study at your own pace, anywhere and anytime.',
                  icon: '⏰'
                },
                {
                  title: 'Interactive Content',
                  description: 'Engage with dynamic content and real-world projects.',
                  icon: '💻'
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`relative transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white text-2xl">
                      {feature.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-black/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by learners worldwide
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                { label: 'Active Students', value: '50K+' },
                { label: 'Courses', value: '1000+' },
                { label: 'Instructors', value: '200+' },
                { label: 'Success Rate', value: '95%' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <p className="text-5xl font-extrabold text-indigo-400">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 