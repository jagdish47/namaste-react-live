import { useState } from "react";

const Section = ({ title, desc, isVisible, setVisible }) => {
  // const [isVisible, setVisible] = useState(true);

  return (
    <div className="border-2 my-2">
      <h3 className="font-bold text-xl">{title}</h3>

      {isVisible ? (
        <button className="border-2 px-4 " onClick={() => setVisible(false)}>
          Hide
        </button>
      ) : (
        <button className="border-2 px-4 ml-2" onClick={() => setVisible(true)}>
          Show
        </button>
      )}

      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("contact");

  return (
    <>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

      <Section
        title={"About"}
        desc={
          "Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on.."
        }
        isVisible={visibleSection === "about"}
        setVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"Contact-us"}
        desc={
          "If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs."
        }
        isVisible={visibleSection === "contact"}
        setVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"Careers"}
        desc={
          "If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs."
        }
        isVisible={visibleSection === "career"}
        setVisible={() => setVisibleSection("about")}
      />
    </>
  );
};

export default Instamart;
