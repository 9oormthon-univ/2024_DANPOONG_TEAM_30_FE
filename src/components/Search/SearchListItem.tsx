const SearchListItem = ({
  inputValue,
  placeName,
  address,
  clickHandler,
}: {
  inputValue: string;
  placeName: string;
  address: string;
  clickHandler: () => void;
}) => {
  return (
    <li
      className={'border-b-[1px] border-[#C4C4C4] py-[10px]'}
      onClick={clickHandler}
    >
      <SetPlaceName placeName={placeName} inputValue={inputValue} />
      <p className={'text-fontSemiMicro'}>{address}</p>
    </li>
  );
};

export default SearchListItem;

const SetPlaceName = ({
  placeName,
  inputValue,
}: {
  placeName: string;
  inputValue: string;
}) => {
  const highlightWord = () => {
    const regex = new RegExp(`(${inputValue})`, 'gi');
    const parts = placeName.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className={'text-main'}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <p className={'font-weightMedium text-fontSmall'}>{highlightWord()}</p>
  );
};
