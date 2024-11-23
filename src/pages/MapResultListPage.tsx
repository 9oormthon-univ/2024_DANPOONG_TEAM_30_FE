import SimpleHeader from '@/components/common/Header/SimpleHeader.tsx';
import Container from '@/components/common/Layout/Container.tsx';

const MapResultListPage = () => {
  const a = [0, 0, 0, 0, 0, 0];
  return (
    <>
      <SimpleHeader title={'매물'} />
      <Container>
        <ul className={'flex flex-col gap-[15px] my-[20px]'}>
          {a.map((_, index) => (
            <Item
              key={index}
              title={'1000/55'}
              address={'천안시 동남구 안서동'}
              houseType={'13m 3층'}
              size={'18/18.1 m^2'}
              direction={'북동향'}
              floor={'B1/2층'}
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
  address,
  houseType,
  size,
  direction,
  floor,
}: {
  title: string;
  address: string;
  houseType: string;
  size: string;
  direction: string;
  floor: string;
}) => {
  return (
    <li className={'bg-gray1 px-[20px] py-[12px] rounded-[10px]'}>
      <p className={'text-fontMedium text-main font-weightSemiBold'}>
        월세 {title}
      </p>
      <p className={'text-[#4E505B] font-weightSemiBold  mb-[6px]'}>
        {address}
      </p>
      <div
        className={
          'flex justify-between items-center text-fontSmall text-[#4E505B] mb-[4px]'
        }
      >
        <div className={'w-1/2'}>주택형태: {houseType}</div>
        <div className={'w-1/2'}>해당층/전체층: {floor}</div>
      </div>
      <div
        className={
          'flex justify-between items-center text-fontSmall text-[#4E505B]'
        }
      >
        <div className={'w-1/2'}>전용/공급: {size}</div>
        <div className={'w-1/2'}>방향: {direction}</div>
      </div>
    </li>
  );
};
