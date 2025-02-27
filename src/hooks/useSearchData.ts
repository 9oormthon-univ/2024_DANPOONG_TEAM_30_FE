import { useState } from 'react';
import { SearchPlace } from '@/types';
import { getSearchList } from '@/api/kakaoApi.ts';

const useSearchData = () => {
  const [searchListsData, setSearchListsData] = useState<SearchPlace[]>([]);
//  const centerLocation = localStorage.getItem('Location') ;



  const searchFunc = async (query: string) => {
    const result = await getSearchList(
      query,
      '',
      ''
    );

    setSearchListsData([...result.documents]);
  };

  return { searchListsData, searchFunc };
};

export default useSearchData;
