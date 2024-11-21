const Footer = () => {
  return (
    <footer className="w-full relative mx-auto h-fit min-w-[360px] bg-zinc-50 py-12 text-zinc-500">
      <section className="max-w-screen-xl px-5 pb-0 pr-10 sm:px-10 lg:px-24 text-xs sm:text-sm md:text-base">
        <h3 className="mb-2 text-sm sm:text-base font-bold">NextMiniMarket</h3>
        <p className="text-left">
          회사명: NextMiniMarket / 대표자: 박희연 / 주소: 대한민국
          <br />
          이메일: heeyun86622@naver.com <br />
          홈페이지:
          <a
            className="underline transition-all hover:text-zinc-800"
            href="/privacy-policy"
          >
            rarebeef.co.kr
          </a>
          <br />본 웹사이트는 실제가 아닌 개인 학습용으로 제작된 웹사이트이며
          등록된 제품은 본 웹사이트에서 판매되는 제품이 아닙니다.
          <br />© 2024. NextMiniMarket All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
