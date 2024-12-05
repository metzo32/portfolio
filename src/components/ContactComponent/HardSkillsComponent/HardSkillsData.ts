import htmlLogo from "../../../assets/logos/logo_html.png"
import cssLogo from "../../../assets/logos/logo_css.png"
import jsLogo from "../../../assets/logos/logo_js.png"
import tsLogo from "../../../assets/logos/logo_ts.png"

import reactLogo from "../../../assets/logos/logo_react.png"
import reduxLogo from "../../../assets/logos/logo_redux.png"
import tailwindLogo from "../../../assets/logos/logo_tailwind.png"
import styledComponentLogo from "../../../assets/logos/logo_styledcomponent.png"
import framerLogo from "../../../assets/logos/logo_framermotion.png"
import reactRouterLogo from "../../../assets/logos/logo_reactrouterdom.png"
import firebaseLogo from "../../../assets/logos/logo_firebase.png"

import psLogo from "../../../assets/logos/logo_photoshop.png"
import illustLogo from "../../../assets/logos/logo_illustrator.png"
import figmaLogo from "../../../assets/logos/logo_figma.png"
import zbrushLogo from "../../../assets/logos/logo_zbrush.png"

import githubLogo from "../../../assets/logos/logo_github.png"
import slackLogo from "../../../assets/logos/logo_slack.png"
import netlifyLogo from "../../../assets/logos/logo_netlify.png"





const hardSkillsData = [{
    category: "Language",
    cards: [
        { logo: htmlLogo, title: "HTML5", text: "웹 표준을 준수하고, 시멘틱 마크업을 통해 검색 엔진 최적화(SEO)를 할 수 있습니다." },
        { logo: cssLogo, title: "CSS", text: "CSS만을 사용하여 레이아웃 구성 및 스타일링을 할 수 있습니다." },
        { logo: jsLogo, title: "Javascript", text: "ES6+ 문법을 활용하여 비동기 처리가 가능하고, 가독성 높은 코드를 작성할 수 있습니다." },
        { logo: tsLogo, title: "Typescript", text: "타입 활용을 통해 정적 타입 검사와 코드 안정성을 확보하며, 프로젝트의 유지보수성을 높일 수 있습니다." },
    ],
  },
  {
    category: "Frontend",
    cards: [
        { logo: reactLogo, title: "React", text: "컴포넌트 기반의 UI 설계. SPA 웹 애플리케이션 제작. 상태관리와 비동기 처리 가능." },
        { logo: reactLogo, title: "React Native", text: "Expo를 활용한 프로토타이핑. 그외..." },
        { logo: reduxLogo, title: "Redux", text: "복잡한 상태 관리를 효율적으로 구현하고, Prop drilling 보완 가능." },
        { logo: tailwindLogo, title: "Tailwind", text: "유틸리티 클래스를 활용하여 보다 빠른 스타일링 가능. 커스텀 속성 확장을 통해 일관된 스타일링 가능" },
        { logo: styledComponentLogo, title: "Styled Component", text: "유틸리티 클래스를 활용하여 보다 빠른 스타일링 가능. 커스텀 속성 확장을 통해 일관된 스타일링 가능" },
        { logo: framerLogo, title: "Framer Motion", text: "유틸리티 클래스를 활용하여 보다 빠른 스타일링 가능. 커스텀 속성 확장을 통해 일관된 스타일링 가능" },
        { logo: reactRouterLogo, title: "React-Router-Dom v6", text: "SPA 프로젝트의 라우팅 기능 구현" },
        { logo: firebaseLogo, title: "Firebase", text: "Firebase Authentication을 통한 사용자 인증 및 세션 유지 가능." },
    ],
  },
  {
    category: "Design",
    cards: [
        { logo: psLogo, title: "Photoshop", text: "이미지 보정 및 생성 이미지 프롬프팅, 그 외 다방면 활용이 가능합니다." },
        { logo: illustLogo, title: "Illustrator", text: "벡터 기반의 이미지 제작 및 수정이 가능합니다." },
        { logo: figmaLogo, title: "Figma", text: "디자인 협업툴을 능숙하게 활용할 수 있습니다." },
        { logo: zbrushLogo, title: "Various 3D Tools", text: "최적화된 3D 오브젝트 스컬핑과 매핑, 리깅과 애니메이팅을 할 수 있습니다." },
    ],
  },
  {
    category: "ETC",
    cards: [
        { logo: githubLogo, title: "Github", text: "깃헙" },
        { logo: slackLogo, title: "Slack", text: "설명" },
        { logo: netlifyLogo, title: "Netlify", text: "설명" },
    ],
  },
]

export default hardSkillsData;