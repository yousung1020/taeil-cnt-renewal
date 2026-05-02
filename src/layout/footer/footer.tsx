import logo from "../../assets/logo2-white.png";
import "./footer.css";

const footerLinks = [
  { label: "회사소개", href: "#company" },
  { label: "개인정보처리방침", href: "#privacy" },
  { label: "이메일무단수집거부", href: "#no-spam" },
];

const familySites = [
  { label: "태일 인트라넷", href: "http://intranet.taeilcnt.co.kr" },
  { label: "태일 NAS", href: "http://mail.taeilcnt.co.kr:5000" },
  { label: "태일 원격지원", href: "http://remote.taeilcnt.co.kr/" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <address className="site-footer__address">
            서울시 금천구 가산디지털2로 101(가산동 549-1)
            <br />
            한라원앤원타워 B동 17층 1701호
            <br />
            <span>TEL 070-8897-0761</span>
            <span>FAX 02-2101-2141</span>
            <br />
            <span>COPYRIGHT (c) BY TAEILCNT, ALL RIGHTS RESERVED.</span>
          </address>

          <nav className="site-footer__menu" aria-label="푸터 메뉴">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <details className="site-footer__family">
            <summary>관련사이트</summary>
            <ul>
              {familySites.map((site) => (
                <li key={site.href}>
                  <a href={site.href} target="_blank" rel="noreferrer">
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <a className="site-footer__brand" href="/" aria-label="태일씨앤티 홈">
            <img src={logo} alt="TAEIL CNT" />
            <span>태일씨앤티</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
