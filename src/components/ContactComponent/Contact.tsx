export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-content">
          <div className="bg-orange-700 absolute w-full h-full top-0 right-1/2 transform -translate-x-1/2"></div>
          <div className="contact-title">
            <h3>연락처 제목</h3>
            <p>2024</p>
          </div>
          <div className="contact-text">
            <h4 className="text-tertiary">무언가 설명</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              asperiores, ratione omnis vel unde obcaecati placeat rem
              voluptates labore cum.
            </p>
            <h4>또다른 설명</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores
          </p>
            <button className="button-strong">메일 보내기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
