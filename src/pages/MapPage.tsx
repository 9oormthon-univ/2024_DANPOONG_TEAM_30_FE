import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Footer from '@/components/common/Footer';
import { Link } from 'react-router-dom';
import SearchIcon from '@/assets/icons/map/search-icon.svg?react';

const MapPage = () => {
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
          center={{ lat: 33.5563, lng: 126.79581 }}
          style={{ width: '100%', height: '100%' }}
        >
          <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
            <div style={{ color: '#000' }}>Hello World!</div>
          </MapMarker>
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
