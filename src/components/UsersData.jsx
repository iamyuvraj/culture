import UsersCard from "./UsersCard";

const UsersData = () => {
  const sampleStats = [
    {
      value: 25350,
      label: "This month",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      value: 19200,
      label: "Last month",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-500",
    },
    {
      value: 124890,
      label: "This Year",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      value: 124890,
      label: "This Year",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
  ];

  const sampleCountries = [
    {
      name: "Brazil",
      value: 1290,
      trend: 2.9,
      dotColor: "bg-blue-500",
      code: "br",
    },
    {
      name: "Greenland",
      value: 2596,
      trend: -1.1,
      dotColor: "bg-blue-400",
      code: "gl",
    },
    {
      name: "Russia",
      value: 3710,
      trend: 0.8,
      dotColor: "bg-green-500",
      code: "ru",
    },
    {
      name: "India",
      value: 1116,
      trend: -10.06,
      dotColor: "bg-yellow-500",
      code: "in",
    },
    {
      name: "Canada",
      value: 12150,
      trend: 9.05,
      dotColor: "bg-pink-500",
      code: "ca",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto">
      <UsersCard stats={sampleStats} countries={sampleCountries} />
    </div>
  );
};

export default UsersData;
