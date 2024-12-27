import React from "react";
import Card1 from "../components/Card1";
import { FaWallet } from "react-icons/fa"; // Already used for wallet
import { FaBook } from "react-icons/fa"; // Represents Library
import { GiStoneTablet } from "react-icons/gi"; // Represents Anthropological Survey of India
import { GiModernCity } from "react-icons/gi"; // Represents National Gallery of Modern Arts
import { FaLandmark } from "react-icons/fa"; // Represents National Museum
import BarGraph from "../components/BarGraph";
import RecentActivities from "../components/RecentActivities";
import SocialMediaDashboard from "../components/SocialMediaDashboard";
import UsersData from "../components/UsersData";

const Home = () => {
  const data = [
    { department: "Anthropological Survey of India", ongoing: 30, planned: 50 },
    { department: "Central Reference Library", ongoing: 20, planned: 40 },
    { department: "National Gallery of Modern Arts", ongoing: 60, planned: 70 },
    { department: "National Museum", ongoing: 40, planned: 60 },
    { department: "National Monument Authority", ongoing: 50, planned: 80 },
  ];

  const activities = [
    {
      color: "bg-blue-500",
      description: "Update of calendar events &",
      link: "/events",
      linkText: "Added new events in next week.",
      time: "4:45PM",
    },
    {
      color: "bg-blue-400",
      description: "New theme for Spruko Website completed",
      subText: "Lorem ipsum, dolor sit amet.",
      time: "3 hrs",
    },
    {
      color: "bg-green-500",
      description: "Created a",
      link: "/tasks",
      linkText: "New Task",
      time: "22 hrs",
    },
    {
      color: "bg-red-500",
      description: "New member",
      link: "/profile/andreas",
      linkText: "@andreas guerrero",
      subText: "added today to AI Summit.",
      time: "Today",
    },
    {
      color: "bg-yellow-500",
      description: "32 New people joined summit.",
      time: "22 hrs",
    },
    {
      color: "bg-pink-500",
      description: "Neon Tarly added",
      link: "/profile/robert-bright",
      linkText: "Robert Bright",
      subText: "to AI summit project.",
      time: "2 hrs",
    },
    {
      color: "bg-green-500",
      description: "Replied to new support request",
      time: "4 hrs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Card1
          title="Anthropological Survey of India"
          earning="$98,450"
          ongoing={15}
          planned={10}
          completed={13}
          departmentIcon={GiStoneTablet}
        />
        <Card1
          title="Central Reference Library"
          earning="$98,450"
          ongoing={15}
          planned={10}
          completed={13}
          departmentIcon={FaBook}
        />
        <Card1
          title="National Gallery of Modern Arts"
          earning="$98,450"
          ongoing={15}
          planned={10}
          completed={13}
          departmentIcon={GiModernCity}
        />
        <Card1
          title="National Museum"
          earning="$98,450"
          ongoing={15}
          planned={10}
          completed={13}
          departmentIcon={FaLandmark}
        />
        <Card1
          title="National Monument Authority"
          earning="$98,450"
          ongoing={15}
          planned={10}
          completed={13}
          departmentIcon={FaWallet}
        />
      </div>

      {/* Bar Graph and Recent Activities Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Make BarGraph take 2/3 of the space */}
        <div className="lg:col-span-2">
          <BarGraph data={data} />
        </div>
        {/* Keep RecentActivities in 1/3 of the space */}
        <div>
          <RecentActivities activities={activities} />
        </div>
      </div>
      {/* SocialMediaCards Component */}
      <div className="mt-8">
        <SocialMediaDashboard />
      </div>
      <div className="max-w-8xl mx-auto p-6">
        <UsersData/>
      </div>
    </div>
  );
};

export default Home;
