const Theme = ({ title, explain }: { title: string; explain: string }) => {
  return (
    <div className={'mb-[34px] flex flex-col items-center'}>
      <h3 className={'font-weightBold text-fontLarge mb-[12px]'}>{title}</h3>
      <p className={'text-fontSmall text-[#4E505B]'}>{explain}</p>
    </div>
  );
};

export default Theme;
