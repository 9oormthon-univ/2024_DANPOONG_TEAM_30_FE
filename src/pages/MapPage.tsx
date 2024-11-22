import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import Footer from '@/components/common/Footer';
import { Link } from 'react-router-dom';
import SearchIcon from '@/assets/icons/map/search-icon.svg?react';
import { useEffect, useState } from 'react';

const MapPage = () => {
  const [positions, setPositions] = useState<{ lat: number; lng: number }[]>(
    []
  );
  useEffect(() => {
    setPositions(line());
  }, []);

  return (
    <>
      <header className='px-[24px] py-[8px] bg-[#F6F6F6] font-weightMedium'>
        <SearchBar />
        <div className={'mt-[20px] flex gap-[10px]'}>
          <FilterItem isCategory={true} content={'전월세'} isActive={false} />
          <FilterItem isCategory={true} content={'구조 면적'} isActive={true} />
        </div>
        <div className={'flex flex-col'}>
          <span className={'my-[20px] text-fontSmall'}>전용 면적</span>
          <div className={'flex justify-between'}>
            <FilterItem content={'전체'} isActive={false} />
            <FilterItem content={'10평대'} isActive={false} />
            <FilterItem content={'20평대'} isActive={false} />
            <FilterItem content={'30평대'} isActive={true} />
          </div>
          <button className={'bg-main h-[44px] my-[20px]'}>적용하기</button>
        </div>
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
            averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel={10} // 클러스터 할 최소 지도 레벨
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
                position={{
                  lat: pos.lat,
                  lng: pos.lng,
                }}
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
      className={
        'z-20 top-5 left-[5%] right-[5%] h-11 p-3 flex items-center justify-between bg-white rounded-full border-2 border-main'
      }
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
}: {
  isCategory?: boolean;
  isActive: boolean;
  content: string;
}) => {
  return (
    <button
      className={`${isCategory ? 'w-[80px] h-[30px] rounded-full' : 'w-[70px]'} h-[30px] border-[1px] ${isActive ? 'bg-sub1 border-main' : 'border-gray50'}
        ${!isCategory && !isActive && 'text-gray50'}
      `}
      onClick={() => {}}
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
