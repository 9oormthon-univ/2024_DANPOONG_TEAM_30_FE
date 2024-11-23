import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@/assets/icons/map/search-icon.svg?react";
import RightIcon from "@/assets/icons/common/arrow-right-icon.svg?react";
import SimpleHeader from "@/components/common/Header/SimpleHeader.tsx";
import Container from "@/components/common/Layout/Container.tsx";
import Footer from "@/components/common/Footer";

interface ReselectorProps {
  cities?: Record<string, string[]>;
  onSelect?: (city: string, district: string) => void;
}

const defaultCities = {
  서울: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "금천구",
    "도봉구",
    "구로구",
    "광진구",
    "노원구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
  경기: [
    "성남시 분당구",
    "수원시",
    "용인시",
    "안양시",
    "안산시",
    "평택시",
    "시흥시",
    "김포시",
  ],
  인천: [
    "미추홀구",
    "계양구",
    "남동구",
    "동구",
    "부평구",
    "서구",
    "연수구",
    "중구",
  ],
  대전: ["유성구", "대덕구", "동구", "서구", "중구"],
  충남: ["천안시 서북구", "공주시", "보령시", "아산시", "서산시"],
  충북: ["청주시", "충주시", "제천시"],
  부산: [
    "해운대구",
    "강서구",
    "금정구",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
  ],
  울산: ["남구", "동구", "북구", "중구", "울주군"],
  강원: ["춘천시", "원주시", "강릉시", "동해시", "속초시", "삼척시"],
  세종: ["세종시"],
  경남: ["창원시", "진주시", "통영시", "사천시", "김해시"],
};

const Reselector: React.FC<ReselectorProps> = ({
  cities = defaultCities,
  onSelect = () => {},
}) => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showCityList, setShowCityList] = useState<boolean>(true);

  const handleCitySelect = (city: string, district: string) => {
    setSelectedCity(city);
    setSelectedDistrict(district);
    setShowCityList(false);
  };

  const handleCityClick = () => {
    setShowCityList(true);
  };

  const handleConfirm = () => {
    if (selectedCity && selectedDistrict) {
      console.log("Selected City:", selectedCity);
      console.log("Selected District:", selectedDistrict);
      onSelect(selectedCity, selectedDistrict);

      // URL에 한글이 들어가므로 encodeURIComponent로 인코딩
      const encodedCity = encodeURIComponent(selectedCity);
      const encodedDistrict = encodeURIComponent(selectedDistrict);

      // /map 페이지로 이동하면서 선택한 지역 정보를 쿼리 파라미터로 전달
      navigate(`/map?city=${encodedCity}&district=${encodedDistrict}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-center h-16 border-b">
        <h1 className="text-lg font-medium">지역 선택</h1>
      </header>

      <main className="flex-1">
        <div className="w-full max-w-md mx-auto">
          {/* Search Section */}
          <div className="p-4 border-b">
            <div className="flex gap-2">
              <div className="flex items-center flex-1 p-2 border rounded-md bg-gray-50">
                <button
                  onClick={handleCityClick}
                  className={`px-2 py-1 ${
                    selectedCity ? "text-[#FF8D52]" : ""
                  }`}
                >
                  {selectedCity || "시/도 선택"}
                </button>
                <RightIcon className="w-4 h-4 text-gray-400" />
                <button className="px-2 py-1 text-gray-400">
                  {selectedDistrict || "시/군/구 선택"}
                </button>
              </div>
              <button
                className="p-2 border rounded-md"
                onClick={() => navigate("/search")} // 추가된 부분
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* City Grid Section */}
          {showCityList && (
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                {Object.keys(cities).map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`p-3 text-center border rounded-md hover:bg-gray-50 ${
                      selectedCity === city
                        ? "border-[#FF8D52] text-[#FF8D52]"
                        : "border-gray-200"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* District Grid Section */}
          {selectedCity && !showCityList && (
            <div className="p-4 border-t">
              <div className="grid grid-cols-3 gap-4">
                {cities[selectedCity].map((district) => (
                  <button
                    key={district}
                    onClick={() => setSelectedDistrict(district)}
                    className={`p-3 text-center border rounded-md hover:bg-gray-50 ${
                      selectedDistrict === district
                        ? "border-[#FF8D52] text-[#FF8D52]"
                        : "border-gray-200"
                    }`}
                  >
                    {district}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Confirm Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={handleConfirm}
          disabled={!selectedCity || !selectedDistrict}
          className={`w-full py-4 text-white rounded-md ${
            selectedCity && selectedDistrict
              ? "bg-[#FF8D52] hover:bg-[#ff7c39]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          선택하기
        </button>
      </div>
    </div>
  );
};

export default Reselector;
