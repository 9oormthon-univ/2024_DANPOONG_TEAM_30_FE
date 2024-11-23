import React, { useState } from 'react';
import ChevronDownIcon from "@/assets/icons/map/chevron-down.svg?react";

const CitySelector = ({ onSelectionChange }: { onSelectionChange: (city: string, district: string) => void }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [isDistrictOpen, setIsDistrictOpen] = useState(false);

  const cities = {
    '서울': ['강남구', '강동구', '강북구', '강서구', '관악구', '금천구', '도봉구', '구로구', '광진구', '노원구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    '경기': ['성남시 분당구', '수원시', '용인시', '안양시', '안산시', '평택시', '시흥시', '김포시'],
    '인천': ['미추홀구', '계양구', '남동구', '동구', '부평구', '서구', '연수구', '중구'],
    '대전': ['유성구', '대덕구', '동구', '서구', '중구'],
    '충남': ['천안시 서북구', '공주시', '보령시', '아산시', '서산시'],
    '충북': ['청주시', '충주시', '제천시'],
    '부산': ['해운대구', '강서구', '금정구', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구'],
    '울산': ['남구', '동구', '북구', '중구', '울주군'],
    '강원': ['춘천시', '원주시', '강릉시', '동해시', '속초시', '삼척시'],
    '세종': ['세종시'],
    '경남': ['창원시', '진주시', '통영시', '사천시', '김해시']
  };

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setSelectedDistrict('');
    setIsCityOpen(false);  // Close the city dropdown
    onSelectionChange(city, ''); // Reset district when city changes
  };

  const handleDistrictClick = (district: string) => {
    setSelectedDistrict(district);
    setIsDistrictOpen(false);  // Close the district dropdown after selection
    onSelectionChange(selectedCity, district); // Update city and district selection
  };

  // Button background color
  const getButtonBackgroundColor = (type: 'city' | 'district') => {
    if (type === 'city') {
      return selectedCity && selectedDistrict ? 'bg-[#fecea8]' : 'bg-gray-100 hover:bg-gray-200';
    }
    return selectedDistrict ? 'bg-[#fecea8]' : 'bg-gray-100 hover:bg-gray-200';
  };

  return (
    <div className="flex gap-4">
      {/* City Dropdown */}
      <div className="relative w-64">
        <button
          onClick={() => setIsCityOpen(!isCityOpen)}
          className={`w-full px-4 py-3 text-left focus:outline-none transition-colors duration-200 ${getButtonBackgroundColor('city')}`}
        >
          <div className="flex items-center justify-between">
            <span>{selectedCity || '시/도 선택'}</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
          </div>
        </button>
        {isCityOpen && (
          <div className="absolute z-10 w-full mt-1 overflow-y-auto bg-white shadow-lg max-h-80">
            {Object.keys(cities).map((city) => (
              <button
                key={city}
                onClick={() => handleCityClick(city)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-100 ${selectedCity === city ? 'bg-orange-50' : ''}`}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* District Dropdown */}
      <div className="relative w-64">
        <button
          onClick={() => setIsDistrictOpen(!isDistrictOpen)}
          className={`w-full px-4 py-3 text-left focus:outline-none transition-colors duration-200 ${getButtonBackgroundColor('district')} ${!selectedCity && 'opacity-50 cursor-not-allowed'}`}
          disabled={!selectedCity}
        >
          <div className="flex items-center justify-between">
            <span>{selectedDistrict || '시/구/군 선택'}</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
          </div>
        </button>
        {isDistrictOpen && selectedCity && (
          <div className="absolute z-10 w-full mt-1 overflow-y-auto bg-white shadow-lg max-h-80">
            {cities[selectedCity as keyof typeof cities].map((district) => (
              <button
                key={district}
                onClick={() => handleDistrictClick(district)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-100 ${selectedDistrict === district ? 'bg-orange-50' : ''}`}
              >
                {district}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CitySelector;
