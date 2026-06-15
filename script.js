document.addEventListener("DOMContentLoaded", () => {
  console.log("웹 명함 로드 완료");

  const image = document.querySelector(".profile-image");

  image?.addEventListener("error", () => {
    console.error("me1.jpg 이미지를 찾을 수 없습니다.");
  });
});