import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.mundo-geo.es/uploads/s1/95/21/08/6/se-ha-estudiado-el-gen-naranja-entre-la-variante-gatuna_1_1000x575.jpeg"
        alt=""
      />
    </div>
  );
}
