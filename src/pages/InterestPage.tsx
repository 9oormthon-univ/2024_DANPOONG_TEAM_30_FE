import SimpleHeader from "@/components/common/Header/SimpleHeader";
import Container from "@/components/common/Layout/Container";

const InterestPage = () => {
  return (
    <div>
      <SimpleHeader title={""} />
      <Container>
        <div className="mt-[32px] font-bold text-2xl">
          <div className="mb-[10px]">관심있는 카테고리를</div>
          <div>알려주세요.</div>
        </div>
        <div className="mb-[15px] font-semibold text-lg">
          관심 기반으로 정책을 소개해드려요
        </div>
        <div className="mt-[49px] text-zinc-400">중복 가능</div>
        <div className="flex flex-row w-full justify-center items-center gap-8 mt-[10px]">
          <div className="w-[144px] h-[55px] border-2 border-zinc-200 text-lg font-semibold rounded-3xl p-3 text-center hover:bg-orange-200 hover:border-orange-500">
            금융
          </div>
          <div className="w-[144px] h-[55px] border-2 border-zinc-200 text-lg font-semibold rounded-3xl p-3 text-center hover:bg-orange-200 hover:border-orange-500">
            주거
          </div>
        </div>
        <div className="flex flex-row w-full justify-center items-center gap-8 mt-[10px]">
          <div className="w-[144px] h-[55px] border-2 border-zinc-200 text-lg font-semibold rounded-3xl p-3 text-center hover:bg-orange-200 hover:border-orange-500">
            취업
          </div>
          <div className="w-[144px] h-[55px] border-2 border-zinc-200 text-lg font-semibold rounded-3xl p-3 text-center hover:bg-orange-200 hover:border-orange-500">
            교육
          </div>
        </div>
        <div className="flex flex-row w-1/2 justify-center items-center ml-[10px] mt-[10px]">
          <div className="w-[144px] h-[55px] border-2 border-zinc-200 text-lg font-semibold rounded-3xl p-3 text-center hover:bg-orange-200 hover:border-orange-500">
            건강
          </div>
        </div>
        <button className="w-full h-[55px] rounded-xl p-[16px] mt-[210px] text-zinc-500 bg-zinc-300 hover:bg-orange-500 hover:text-black">
          완료
        </button>
      </Container>
    </div>
  );
};

export default InterestPage;
