import hoverLogo from "../../assets/logo2-mark.png";
import logo from "../../assets/logo2-white.png";
import "./header.css";

const navItems = [
  {
    label: "회사소개",
    href: "#company",
    children: ["기업개요", "CEO 인사말", "연혁", "오시는 길"],
  },
  {
    label: "사업실적",
    href: "#projects",
    children: ["주요실적", "건축사업", "토목사업", "플랜트"],
  },
  {
    label: "기술혁신",
    href: "#technology",
    children: ["기술역량", "인증현황", "연구개발"],
  },
  {
    label: "홍보센터",
    href: "#pr-center",
    children: ["공지사항", "보도자료", "홍보자료"],
  },
  {
    label: "인재채용",
    href: "#careers",
    children: ["인재상", "복리후생", "채용공고"],
  },
  {
    label: "ESG경영",
    href: "#esg",
    children: ["윤리경영", "안전보건", "사회공헌"],
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/" aria-label="홈으로 이동">
          <span className="site-header__logo-wrap">
            <img
              className="site-header__logo site-header__logo--default"
              src={logo}
              alt="TAEIL CNT"
            />
            <img
              className="site-header__logo site-header__logo--hover"
              src={hoverLogo}
              alt=""
              aria-hidden="true"
            />
          </span>
          <span className="site-header__brand-text" aria-label="태일씨앤티">
            <span className="site-header__brand-primary">태일</span>
            <span className="site-header__brand-secondary">씨앤티</span>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <div className="site-header__nav-item" key={item.href}>
              <a className="site-header__nav-link" href={item.href}>
                {item.label}
              </a>
              <ul className="site-header__submenu" aria-label={`${item.label} 하위 메뉴`}>
                {item.children.map((child) => (
                  <li key={child}>
                    <a href={item.href}>{child}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
