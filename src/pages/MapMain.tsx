import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Container from "@/components/common/Layout/Container";
import CityDistrictSelector from "@/pages/CitySelector";
import AlertCircleIcon from "@/assets/icons/map/altercircle.svg?react";

const MapMain = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Update the city and district selections
  const handleSelectionChange = (city: string, district: string) => {
    setSelectedCity(city);
    setSelectedDistrict(district);
  };

  // Navigate to the map page
  const handleNextClick = () => {
    if (selectedCity && selectedDistrict) {
      navigate('/map');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="mt-8 text-2xl font-bold">주거 희망 지역 선택</div>
        <div className="mb-10 text-lg font-semibold">
          LH 전세 자금 지원 프로그램을 알려드려요.
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full mx-auto">
          <div className="mb-6">
            <CityDistrictSelector onSelectionChange={handleSelectionChange} />
          </div>

          <div className="p-4 mb-6 bg-white border rounded-lg">
            <h2 className="mb-2 font-bold">LH 소년소녀가정 전세 자금 지원</h2>
            <p className="mb-4 text-sm text-gray-600">
              해당 프로그램은 85m² 이하의 전세 매물에 대해서 전세 자금 지원
            </p>
            <div className="flex-1 w-full mx-auto">
              <img
                src="src/assets/icons/map/Support_Content.png"
                alt="지원 내용 이미지"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Support Conditions */}
          <div className="mb-20">
            <h3 className="mb-3 font-bold">지원 대상 주택 조건</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-orange-400 flex-shrink-0 mt-0.5">
                  <AlertCircleIcon />
                </span>
                <span>
                  지원 준비청년은 특혜가 준재,{" "}
                  <span className="text-orange-400">22세까지 무이자 지원</span>
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-orange-400 flex-shrink-0 mt-0.5">
                  <AlertCircleIcon />
                </span>
                <span>
                  전세임대주택 거주 5년 이내의 경우{" "}
                  <span className="text-orange-400">100% 재지원</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextClick}
            disabled={!selectedCity || !selectedDistrict} // Ensure both city and district are selected
            className={`w-full py-3 font-medium text-white rounded-lg ${
              selectedCity && selectedDistrict ? 'bg-orange-400' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            다음
          </button>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default MapMain;
