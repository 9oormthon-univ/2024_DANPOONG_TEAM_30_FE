import { useEffect } from 'react';
import useSearchData from '@/hooks/useSearchData.ts';
import SearchListItem from '@/components/Search/SearchListItem.tsx';

const SearchList = ({
  value,
  listClickHandler,
}: {
  value: string;
  listClickHandler: (lat: number, lng: number) => void;
}) => {
  const { searchListsData, searchFunc } = useSearchData();

  useEffect(() => {
    if (value.length > 0) {
      searchFunc(value);
    }
  }, [value]);

  return (
    <ul className={'overflow-y-auto'}>
      {value &&
        searchListsData.map((item) => (
          <SearchListItem
            key={item.id}
            inputValue={value}
            placeName={item.place_name}
            address={item.road_address_name || item.address_name}
            clickHandler={() => {
              listClickHandler(Number(item.y), Number(item.x));
            }}
          />
        ))}
    </ul>
  );
};

export default SearchList;
