import "./styles.css";
import { menu } from "./menuConfig";
import logo from "./logo.png";

const Section = ({ sectionData }) => {
  const { caption, positions } = sectionData;
  return (
    <>
      <h3>{caption}</h3>
      {positions.map(({ name, price, price2, list }, i) => (
        <dip key={i} className="menu_position">
          <p className="positionName">{name}</p>
          <dip>
            <p className="price">{price}</p>
            {price2 && <p className="price">{price2}</p>}
          </dip>
        </dip>
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
  <div className="menu">
    <img src={logo} alt="yey" className="logo" />
    <h1>THE KITCHEN N°5</h1>
    <Section sectionData={menu.rolles} />
    <Section sectionData={menu.californias} />
    <Section sectionData={menu.filadelfias} />
    <Section sectionData={menu.dragons} />
    <Section sectionData={menu.bakedrolles} />
    <Section sectionData={menu.sets} />
    <Section sectionData={menu.fri} />
    <Section sectionData={menu.hotDog} />
    <List sectionData={menu.list} />
    <List sectionData={menu.box2} />
    <List sectionData={menu.sauce} />
    <Section sectionData={menu.alchogol} />
    <Section sectionData={menu.noAlchog} />
  </div>
);

export default App;
