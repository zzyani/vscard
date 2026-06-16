document.addEventListener("DOMContentLoaded", () => {
  console.log("웹 명함 로드 완료");

  const image = document.querySelector(".profile-image");
  const card = document.querySelector(".card");
  const emailLink = document.querySelector('a[href^="mailto:"]');

  image?.addEventListener("error", () => {
    console.error("me1.jpg 이미지를 찾을 수 없습니다.");
  });

  if (card) {
    card.style.transition = "transform 0.25s ease, box-shadow 0.25s ease";

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 34px 90px rgba(0, 0, 0, 0.14)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "var(--shadow)";
    });
  }

  if (emailLink) {
    emailLink.addEventListener("click", async (event) => {
      event.preventDefault();

      const email =
        emailLink.textContent.trim() ||
        emailLink.getAttribute("href").replace("mailto:", "").trim();

      try {
        await navigator.clipboard.writeText(email);
        alert("이메일이 클립보드에 복사되었습니다.");
      } catch (error) {
        console.error("이메일 복사 실패:", error);
        alert("이메일 복사에 실패했습니다. 직접 복사해주세요.");
      }
    });
  }
});