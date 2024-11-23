import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import Footer from '@/components/common/Footer';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import SearchIcon from '@/assets/icons/map/search-icon.svg?react';
import ChevronDownIcon from "@/assets/icons/map/chevron-down.svg?react";
import { useEffect, useState } from 'react';


const MapPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [positions, setPositions] = useState<{ lat: number; lng: number }[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<{city: string; district: string} | null>(null);
  const [activeFilter, setActiveFilter] = useState<'price' | 'area'>('area');
  const [selectedArea, setSelectedArea] = useState<string>('전체');
  const [isAreaExpanded, setIsAreaExpanded] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(9000);
  const [inputPrice, setInputPrice] = useState<string>("9000");

  useEffect(() => {
    setPositions(line());
    
    const city = searchParams.get('city');
    const district = searchParams.get('district');
    
    if (city && district) {
      setSelectedRegion({
        city: decodeURIComponent(city),
        district: decodeURIComponent(district)
      });
    }
  }, [searchParams]);

  useEffect(() => {
    setInputPrice((priceRange / 10).toString());
  }, []);

  const handleRegionClick = () => {
    navigate('/map/reselect');
  };

  const handleAreaSelect = (area: string) => {
    setSelectedArea(area);
    setIsAreaExpanded(false);
  };

  const handleFilterSelect = (filter: 'price' | 'area') => {
    setActiveFilter(filter);
    if (filter === 'area') {
      setIsAreaExpanded(false);
    }
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    
    if (value === '') {
      setInputPrice('');
      setPriceRange(0);
      return;
    }
    
    const numValue = parseInt(value);
    setInputPrice(value);
    setPriceRange(numValue * 10);
  };

  const handlePriceBlur = () => {
    const numValue = parseInt(inputPrice || '0');
    // if (numValue < 700) {
    //   setInputPrice('700');
    //   setPriceRange(7000);
    // } else if (numValue > 1200) {
    //   setInputPrice('1200');
    //   setPriceRange(12000);
    // }
  };

  const toggleAreaExpand = () => {
    setIsAreaExpanded(!isAreaExpanded);
  };

  return (
    <>
      <header className='px-[24px] py-[8px] font-weightMedium'>
        <button 
          onClick={handleRegionClick}
          className="flex items-center w-full py-2 mt-[50px] left"
        >
          <span className="text-lg font-medium">
            {selectedRegion ? `${selectedRegion.city} ${selectedRegion.district}` : '지역 선택'}
          </span>
          <ChevronDownIcon/>
        </button>
        
        <div className='mt-[5px] mb-[5px] flex gap-[10px]'>
          <FilterItem 
            isCategory={true} 
            content='금액' 
            isActive={activeFilter === 'price'}
            onClick={() => handleFilterSelect('price')} 
          />
          <FilterItem 
            isCategory={true} 
            content='구조 면적' 
            isActive={activeFilter === 'area'}
            onClick={() => handleFilterSelect('area')} 
          />
        </div>

        {activeFilter === 'area' && (
          <div className='flex flex-col'>
            <span className='my-[20px] text-fontSmall'>전용 면적</span>
            <div className='relative'>
              <button
                onClick={toggleAreaExpand}
                className='w-full h-[40px] mb-[24px] rounded-[20px] border border-gray-300 flex items-center justify-center text-sm'
              >
                {selectedArea}
              </button>
              
              {isAreaExpanded && (
                <div className='absolute top-[44px] left-0 w-full  bg-white border border-gray-300 rounded-[12px] shadow-lg z-10'>
                  {['전체', '10평대', '20평대', '30평대'].map((area) => (
                    <button
                      key={area}
                      onClick={() => handleAreaSelect(area)}
                      className={`w-full h-[40px] text-sm  hover:bg-[#FFF4EE] ${
                        selectedArea === area ? 'bg-[#FFF4EE] text-[#FF8D52]' : ''
                      } ${area === '전체' ? 'rounded-t-[12px]' : ''} 
                      ${area === '30평대' ? 'rounded-b-[12px]' : ''}`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeFilter === 'price' && (
          <div className='flex flex-col'>
            <span className='my-[20px] text-fontSmall'>가격 범위</span>
            <div className='relative'>
              <div className='relative w-full'>
                <input
                  type="text"
                  value={inputPrice}
                  onChange={handlePriceInput}
                  onBlur={handlePriceBlur}
                  className="w-full h-[40px] rounded-[20px] border border-gray-300 text-center pr-[52px] font-medium focus:outline-none focus:border-[#FF8D52]"
                  placeholder="금액 입력"
                />
                <span className="absolute right-[20px] top-1/2 transform -translate-y-1/2 text-gray-500">
                  만원 이하
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400">7000 ~ 1,200만원</span>
              </div>
            </div>
          </div>
        )}

        <button 
          className='bg-[#FF8D52] text-white h-[44px] my-[10px] w-full rounded-[22px] hover:bg-[#ff7c39]'
          onClick={() => {/* 필터 적용 로직 */}}
        >
          적용하기
        </button>
      </header>

      <div className='h-full'>
        <Map
          center={{
            lat: 37.5115735,
            lng: 127.0868931,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          level={8}
        >
          <MarkerClusterer
            averageCenter={true}
            minLevel={10}
          >
            {positions.map((pos) => (
              <MapMarker
                image={{
                  src: '/marker-icon.svg',
                  size: {
                    width: 26,
                    height: 32,
                  },
                }}
                key={`${pos.lat}-${pos.lng}`}
                position={pos}
              />
            ))}
          </MarkerClusterer>
        </Map>
      </div>
      <Footer />
    </>
  );
};

export default MapPage;

const SearchBar = () => {
  return (
    <Link
      to='/search'
      className='z-20 top-5 left-[5%] right-[5%] h-11 p-3 flex items-center justify-between bg-white rounded-full border-2 border-[#FF8D52]'
    >
      <SearchIcon />
      <div className='w-[90%] text-fontSmall border-none rounded-lg text-gray50 text-left ml-[10px]'>
        주거지 검색
      </div>
    </Link>
  );
};

const FilterItem = ({
  isCategory,
  isActive,
  content,
  onClick,
}: {
  isCategory?: boolean;
  isActive: boolean;
  content: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`${isCategory ? 'w-[80px] h-[30px] rounded-full' : 'w-[70px]'} h-[30px] border-[1px] ${
        isActive ? 'bg-[#FFF4EE] border-[#FF8D52] text-[#FF8D52]' : 'border-gray50'
      }
        ${!isCategory && !isActive && 'text-gray50'}
      `}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

const line = () => {
  return [
    { order: 11, station: '잠실새내', code: [37.5115735, 127.0868931] },
    { order: 23, station: '종합운동장', code: [37.5110588, 127.0737908] },
    { order: 1456, station: '삼성', code: [37.5088803, 127.0631076] },
    { order: 71, station: '선릉', code: [37.504585, 127.0492805] },
    { order: 1341, station: '역삼', code: [37.5006431, 127.0363764] },
    { order: 65, station: '강남', code: [37.4979526, 127.0276241] },
    { order: 333, station: '교대', code: [37.4939732, 127.0146391] },
    { order: 575, station: '방배', code: [37.4814955, 126.9976669] },
    { order: 3, station: '사당', code: [37.4765793, 126.981596] },
    { order: 578, station: '신대방', code: [37.4875672, 126.9133456] },
    {
      order: 976,
      station: '구로디지털단지구로디지털단지',
      code: [37.485266, 126.901401],
    },
    {
      order: 1343,
      station: '신도림',
      code: [37.5088099, 126.8912061],
    },
    { order: 2345, station: '문래', code: [37.517933, 126.89476] },
    { station: '두정역두정역역역역', code: [36.833791, 127.148905] },
  ].map((item) => ({ lat: item.code[0], lng: item.code[1] }));
};