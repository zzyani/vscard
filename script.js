document.addEventListener("DOMContentLoaded", () => {
  console.log("웹 명함 로드 완료");

  const image = document.querySelector(".profile-image");
  const emailText = document.querySelector("#emailText");
  const copyEmailButton = document.querySelector("#copyEmailButton");

  const hoverButtons = document.querySelectorAll(
    ".action-button, .github-button"
  );

  image?.addEventListener("error", () => {
    console.error("me1.jpg 이미지를 찾을 수 없습니다.");
  });

  hoverButtons.forEach((button) => {
    button.style.transition =
      "transform 0.25s ease, box-shadow 0.25s ease";

    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-5px) scale(1.03)";
      button.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0) scale(1)";
      button.style.boxShadow = "none";
    });
  });

  if (copyEmailButton && emailText) {
    copyEmailButton.addEventListener("click", async () => {
      const email = emailText.textContent.trim();
      const originalText = copyEmailButton.textContent;

      try {
        await navigator.clipboard.writeText(email);

        copyEmailButton.textContent = "✓ 이메일 복사 완료";

        setTimeout(() => {
          copyEmailButton.textContent = originalText;
        }, 2000);

      } catch (error) {
        console.error("이메일 복사 실패:", error);
        alert("이메일 복사에 실패했습니다.");
      }
    });
  }
});