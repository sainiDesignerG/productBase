import React, { useState } from "react";
import {
  IconUser,
  IconShield,
  IconHistory,
  IconSettings,
  IconMail,
  IconPhone,
  IconMapPin,
  IconWorld,
  IconCamera,
  IconKey,
  IconDeviceMobile,
  IconActivity,
  IconEdit,
  IconTrash,
  IconCheck
} from "@tabler/icons-react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    bio: 'Product manager with 5+ years of experience in e-commerce and SaaS platforms.',
    company: 'ProductHub Inc.',
    location: 'Mumbai, India',
    website: 'https://johndoe.com'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Profile updated:', formData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change
    console.log('Password change:', passwordData);
  };

  const tabs = [
    { id: 'personal', name: 'Profile', icon: IconUser }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                JD
              </div>
              <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-600">Administrator</p>
              <p className="text-xs text-gray-500 mt-1">john@example.com</p>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-3" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Profile Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-3xl text-white font-bold">
                  JD
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h2>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <IconMail className="w-4 h-4 mr-2" />
                    <span>john@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IconUser className="w-4 h-4 mr-2" />
                    <span>Administrator</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] shadow-sm">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
