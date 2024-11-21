import Header from "@/components/common/Header/index";
import Container from "@/components/common/Layout/Container";
import ProgramItem from "@/components/common/ProgramItem/ProgramItem";

const AllProgramPage: React.FC = () => {
  const a = [0, 0, 0];
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-row">
          <div className="font-semibold text-xl">레디님 분야별 맞춤 정책</div>
          <div className="w-[76px] h-[22px] bg-orange-200 rounded-sm text-xs text-center p-1 ml-auto">
            스크랩 보기
          </div>
        </div>
        <div className="flex flex-row w-full gap-3">
          <div className="w-[70px] h-[40px] text-zinc-400 hover:text-black border-zinc-300 hover:bg-orange-200 border hover:border-orange-500 rounded-3xl font-semibold text-md p-2 text-center">
            건강
          </div>
          <div className="w-[70px] h-[40px] text-zinc-400 hover:text-black border-zinc-300 hover:bg-orange-200 border hover:border-orange-500 rounded-3xl font-semibold text-md p-2 text-center">
            금융
          </div>
          <div className="w-[70px] h-[40px] text-zinc-400 hover:text-black border-zinc-300 hover:bg-orange-200 border hover:border-orange-500 rounded-3xl font-semibold text-md p-2 text-center">
            교육
          </div>
          <div className="w-[70px] h-[40px] text-zinc-400 hover:text-black border-zinc-300 hover:bg-orange-200 border hover:border-orange-500 rounded-3xl font-semibold text-md p-2 text-center">
            주거
          </div>
        </div>
        {a.map((item, i) => (
          <ProgramItem key={i} />
        ))}
      </Container>
    </>
  );
};

export default AllProgramPage;
