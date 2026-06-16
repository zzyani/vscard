document.addEventListener("DOMContentLoaded", () => {
  console.log("웹 명함 로드 완료");

  const image = document.querySelector(".profile-image");
  const emailLink = document.querySelector('a[href^="mailto:"]');
  const actionButtons = document.querySelectorAll(".action-button");

  // 프로필 이미지 확인
  image?.addEventListener("error", () => {
    console.error("me1.jpg 이미지를 찾을 수 없습니다.");
  });

  // 이메일 보내기 / 전화하기 버튼 Hover 효과
  actionButtons.forEach((button) => {
    button.style.transition =
      "transform 0.25s ease, box-shadow 0.25s ease";

    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-5px) scale(1.03)";
      button.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.12)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0) scale(1)";
      button.style.boxShadow = "none";
    });
  });

  // 이메일 클릭 시 클립보드 복사
  if (emailLink) {
    emailLink.addEventListener("click", async (event) => {
      event.preventDefault();

      const email =
        emailLink.textContent.trim() ||
        emailLink
          .getAttribute("href")
          .replace("mailto:", "")
          .trim();

      try {
        await navigator.clipboard.writeText(email);

        const originalText = emailLink.textContent;

        emailLink.textContent = "✓ 이메일 복사 완료";
        emailLink.style.pointerEvents = "none";

        setTimeout(() => {
          emailLink.textContent = originalText;
          emailLink.style.pointerEvents = "auto";
        }, 2000);

      } catch (error) {
        console.error("이메일 복사 실패:", error);
        alert("이메일 복사에 실패했습니다.");
      }
    });
  }
});