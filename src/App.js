import "./styles.css";
import { menu } from "./menuConfig";
import logo from "./logo.png";
import phoneIco from "./phoneIco.png";
import instaIco from "./instaIco.webp";

const Section = ({ sectionData, isBox }) => {
  const { caption, positions } = sectionData;
  return (
    <>
      <h3>{caption}</h3>
      {positions.map(({ name, price, price2 }, i, arr) => (
        <div
          key={i}
          className={`menu_position ${
            isBox
              ? i + 1 !== arr.length
                ? "underlineBox"
                : ""
              : arr.length !== 1
              ? "underline"
              : ""
          }`}
        >
          <div className="positionNameBox">
            <p className="positionName">{name}</p>
          </div>
          <div>
            <p className="price">{price}</p>
            {price2 && <p className="price">{price2}</p>}
          </div>
        </div>
      ))}
    </>
  );
};

const List = ({ sectionData }) => {
  const { caption, positions } = sectionData;
  return (
    <>
      <h3>{caption}</h3>
      <ul>
        {positions.map(({ listItem }, i) => (
          <li key={i}>
            <p>{listItem}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

const App = () => (
  <div className="app">
    <div className="menu">
      <img src={logo} alt="yey" className="logo" />
      <h1>THE KITCHEN N°5</h1>
      <Section sectionData={menu.alchogol} />
      <Section sectionData={menu.noAlchog} />
      <Section sectionData={menu.rolles} />
      <Section sectionData={menu.californias} />
      <Section sectionData={menu.philadelphias} />
      <Section sectionData={menu.dragons} />
      <Section sectionData={menu.maki} />
      <Section sectionData={menu.bakedrolles} />
      <div className="emptySpace"></div>
      <Section sectionData={menu.addons} />
      <div className="anotation">
        *Соєвий соус, прибори, імбир, васабі - входять у вартість замовлення.
      </div>
      <Section sectionData={menu.set1} />
      <Section sectionData={menu.set2} />
      <Section sectionData={menu.set3} />
      <Section sectionData={menu.set4} />
      <Section sectionData={menu.set5} />
      <Section sectionData={menu.fri} />
      <Section sectionData={menu.hotDog} />
      <Section sectionData={menu.box} isBox />
      <List sectionData={menu.sauce} />
    </div>
    <div className="footer">
      <div>
        <a href="tel:+380974591259">
          <img src={phoneIco} alt="yey" className="ico phoneIco" />
          097-459-12-59
        </a>
      </div>
      <div>
        <a
          href={"https://www.instagram.com/thekitchen5_chayka/"}
          target="_blank"
          rel="noreferrer"
        >
          <img src={instaIco} alt="yey" className="ico instaIco" />
          thekitchen5_chayka
        </a>
      </div>
    </div>
  </div>
);

export default App;
