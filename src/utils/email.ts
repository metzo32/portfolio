export const sendEmail = () => {
    const email = atob("c2V5ZW9uLm1ldHpAZ21haWwuY29t"); // Base64로 인코딩
    window.location.href = `mailto:${email}`;
  };
  