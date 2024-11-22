import SimpleHeader from '@/components/common/Header/SimpleHeader.tsx';
import Container from '@/components/common/Layout/Container.tsx';

const MapResultListPage = () => {
  const a = [0, 0, 0, 0, 0, 0];
  return (
    <>
      <SimpleHeader title={'매물'} />
      <Container>
        <ul className={'flex flex-col gap-[15px] mt-[20px]'}>
          {a.map((_, index) => (
            <Item
              key={index}
              title={'1000/55'}
              address={'천안시 동남구 안서동'}
              info={'13m 3층'}
              year={'2020'}
            />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default MapResultListPage;

const Item = ({
  title,
  info,
  address,
  year,
}: {
  title: string;
  info: string;
  address: string;
  year: string;
}) => {
  return (
    <li className={'bg-gray1 px-[20px] py-[12px] rounded-[10px]'}>
      <p>월세 {title}</p>
      <span className={'text-fontSmall text-[#4E505B]'}>{info}</span>
      <div
        className={
          'flex justify-between items-center text-fontSmall text-[#4E505B]'
        }
      >
        <span>{address}</span>
        <div
          className={
            'w-[135px] h-[30px] leading-[30px] text-center text-fontSmall bg-gray30 rounded-full border-[1px] border-gray50'
          }
        >
          {year}년 거래 완료
        </div>
      </div>
    </li>
  );
};
