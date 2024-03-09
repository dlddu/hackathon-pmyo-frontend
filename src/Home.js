export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>일분만</p>
      <div
        style={{
          backgroundColor: "#D9D9D9",
          width: "fit-content",
        }}
      >
        <p>홍길동님</p>
        <p>이번 달</p>
        <p>원</p>
        <p>환급될 예정입니다!</p>
      </div>
      <div>
        <button>이전 현황 보기</button>
        <button>우리동 대시보드</button>
        <button>카메라</button>
        <button>내 정보</button>
      </div>
      <input type="file" accept="image/*" />
    </div>
  );
};
