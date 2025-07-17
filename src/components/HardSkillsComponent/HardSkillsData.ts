import htmlLogo from "../../assets/logos/logo_html.png";
import cssLogo from "../../assets/logos/logo_css.png";
import jsLogo from "../../assets/logos/logo_js.png";
import tsLogo from "../../assets/logos/logo_ts.png";

import nextLogo from "../../assets/logos/logo_next.png";
import reactLogo from "../../assets/logos/logo_react.png";
import tanstackqueryLogo from "../../assets/logos/logo_tanstackquery.png";
import swrLogo from "../../assets/logos/logo_swr.png";
import reduxLogo from "../../assets/logos/logo_redux.png";
import zustandLogo from "../../assets/logos/logo_zustand.png";
import tailwindLogo from "../../assets/logos/logo_tailwind.png";
import styledComponentLogo from "../../assets/logos/logo_styledcomponent.png";
import muiLogo from "../../assets/logos/logo_mui.png";
import framerLogo from "../../assets/logos/logo_framermotion.png";
import reactRouterLogo from "../../assets/logos/logo_reactrouterdom.png";
import firebaseLogo from "../../assets/logos/logo_firebase.png";

import psLogo from "../../assets/logos/logo_photoshop.png";
import illustLogo from "../../assets/logos/logo_illustrator.png";
import figmaLogo from "../../assets/logos/logo_figma.png";
import zbrushLogo from "../../assets/logos/logo_zbrush.png";

import githubLogo from "../../assets/logos/logo_github.png";
import slackLogo from "../../assets/logos/logo_slack.png";
import netlifyLogo from "../../assets/logos/logo_netlify.png";
import vercelLogo from "../../assets/logos/logo_vercel.png";

const hardSkillsData = [
  {
    category: "Language",
    cards: [
      {
        logo: htmlLogo,
        alt: "HTML로고",
        title: "HTML5",
        text: "웹 표준과 웹 접근성을 고려한 코드를 작성할 수 있고, 시멘틱 마크업을 통해 검색 엔진 최적화(SEO)를 할 수 있습니다.",
      },
      {
        logo: cssLogo,
        alt: "CSS로고",
        title: "CSS",
        text: "선택자와 우선순위에 대한 이해를 갖추었고, CSS만을 사용하여 레이아웃 구성 및 스타일링을 할 수 있습니다.",
      },
      {
        logo: jsLogo,
        alt: "JS로고",
        title: "Javascript",
        text: "ES6+ 문법을 활용하여 비동기 처리가 가능하고, 가독성 높은 코드를 작성할 수 있습니다.",
      },
      {
        logo: tsLogo,
        alt: "TS로고",
        title: "Typescript",
        text: "타입 활용을 통해 정적 타입 검사와 코드 안정성을 확보하며, 프로젝트의 유지보수성을 높일 수 있습니다.",
      },
    ],
  },
  {
    category: "Frontend",
    cards: [
      {
        logo: nextLogo,
        alt: "Next로고",
        title: "Next.js",
        text: "SSR, ISR 동적 라우팅을 구현하고 API Routes를 활용할 수 있으며, SEO 최적화를 할 수 있습니다.",
      },
      {
        logo: reactLogo,
        alt: "React로고",
        title: "React",
        text: "컴포넌트 기반의 UI를 설계하고, SPA 웹 애플리케이션을 제작할 수 있습니다.",
      },
      {
        logo: reactLogo,
        alt: "React로고",
        title: "React Native",
        text: "React Native와 Expo를 통해 빠르게 iOS와 Android 앱 프로토타이핑을 해보았습니다.",
      },
      {
        logo: tanstackqueryLogo,
        alt: "TanstackQuery로고",
        title: "Tanstack Query",
        text: "캐싱, 쿼리 무효화, 옵티미스틱 업데이트 등을 활용해 비동기 데이터와 UI 상태를 효과적으로 관리한 경험이 있습니다.",
      },
      {
        logo: swrLogo,
        alt: "SWR로고",
        title: "SWR",
        text: "데이터를 빠르고 효율적으로 가져오기 위해 캐싱, 리페칭 등 최적화된 데이터 패칭이 가능합니다",
      },
      {
        logo: reduxLogo,
        alt: "Redux로고",
        title: "Redux",
        text: "복잡한 상태를 효율적으로 구현하고, Prop drilling 보완이 가능합니다.",
      },
      {
        logo: zustandLogo,
        alt: "Zustand로고",
        title: "Zustand",
        text: "전역 상태를 관리하여 리렌더링을 최소화할 수 있습니다.",
      },
      {
        logo: tailwindLogo,
        alt: "Tailwind로고",
        title: "Tailwind",
        text: "유틸리티 클래스를 활용하여 보다 빠르게 스타일링 하고, 커스텀 속성 확장을 통해 일관된 스타일링을 합니다.",
      },
      {
        logo: styledComponentLogo,
        alt: "ST로고",
        title: "Styled Component",
        text: "컴포넌트 단위로 스타일을 캡슐화하고, props 기반으로 스타일을 동적으로 변경할 수 있습니다.",
      },
        {
        logo: muiLogo,
        alt: "MUI로고",
        title: "MUI Material UI",
        text: "디자인 프리셋을 유연하게 활용하고, 추가 커스터마이징으로 빠르게 컴포넌트 단위의 UI를 제작할 수 있습니다.",
      },
      {
        logo: framerLogo,
        alt: "FM로고",
        title: "Framer Motion",
        text: "컴포넌트에 다양한 반응형 애니메이션을 적용하고, 애니메이션 상태를 관리할 수 있습니다.",
      },
      {
        logo: reactRouterLogo,
        alt: "RRD로고",
        title: "React-Router-Dom v6",
        text: "SPA 프로젝트의 라우팅 기능을 구현할 수 있습니다.",
      },
      {
        logo: firebaseLogo,
        alt: "Firebase로고",
        title: "Firebase",
        text: "Firebase Authentication을 통한 사용자 인증 및 세션 유지 기능을 사용한 경험이 있습니다.",
      },
    ],
  },
  {
    category: "Design",
    cards: [
      {
        logo: psLogo,
        alt: "PS로고",
        title: "Photoshop",
        text: "이미지 보정 및 생성 이미지 프롬프팅, 그 외 다방면 활용에 능숙합니다.",
      },
      {
        logo: illustLogo,
        alt: "Illustrator로고",
        title: "Illustrator",
        text: "벡터 기반의 이미지 제작 및 수정이 가능합니다.",
      },
      {
        logo: figmaLogo,
        alt: "Figma로고",
        title: "Figma",
        text: "디자인 관련 협업 과정에서 능숙하게 활용할 수 있습니다.",
      },
      {
        logo: zbrushLogo,
        alt: "Zbrush로고",
        title: "Various 3D Tools",
        text: "3D 오브젝트 스컬핑과 최적화된 매핑, 리깅과 애니메이팅을 할 수 있습니다.",
      },
    ],
  },
  {
    category: "ETC",
    cards: [
      {
        logo: githubLogo,
        alt: "Github로고",
        title: "Github",
        text: "버전 관리를 통해 코드 변경 사항 및 오류를 추적할 수 있고, 브랜치를 활용해 효율적인 작업이 가능합니다.",
      },
      {
        logo: vercelLogo,
        alt: "Vercel로고",
        title: "Vercel",
        text: "Next.js 기반의 프로젝트를 배포할 수 있고, 푸시 내역과 연동하여 지속적인 통합 및 배포(CI/CD) 프로세스를 갖추었습니다.",
      },
      {
        logo: netlifyLogo,
        alt: "Netlify로고",
        title: "Netlify",
        text: "HTTPS 인증서를 통해 사용자에게 안정적으로 커스텀 도메인을 배포했습니다.",
      },
      {
        logo: slackLogo,
        alt: "Slack로고",
        title: "Slack",
        text: "스레드에 대한 이해가 있고, 팀 커뮤니케이션 도구로 활용할 수 있습니다.",
      },
    ],
  },
];

export default hardSkillsData;
