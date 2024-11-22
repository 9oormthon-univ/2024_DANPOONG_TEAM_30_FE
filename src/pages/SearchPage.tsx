import SearchIcon from '@/assets/icons/map/search-icon.svg?react';
import SearchList from '@/components/Search/SearchList.tsx';
import { useState } from 'react';
import Container from '@/components/common/Layout/Container.tsx';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  return (
    <>
      <header
        className={
          'flex justify-between font-weightMedium py-[10px] px-[20px] border-b-[1px] border-gray30'
        }
      >
        <div className={'flex bg-white w-[90%] rounded-full  py-[5px]'}>
          <SearchIcon />
          <input
            className={'w-full pl-[10px] outline-none'}
            placeholder={'주거지 검색'}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <button
          className={'text-fontSmall'}
          onClick={() => {
            navigate(-1);
          }}
        >
          취소
        </button>
      </header>
      <Container>
        <SearchList
          value={value}
          listClickHandler={() => {
            console.log(value);
          }}
        />
      </Container>
    </>
  );
};

export default SearchPage;
