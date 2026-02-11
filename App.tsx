import { useState } from "react";
import "./styles.css";

const phrases = [
  "Não",
  "Tens a certeza?",
  "Mesmo?",
  "Vá lá Con",
  "Pff não me faças isto",
  "Vou ficar chateado",
  "Estas a partir me o coração ;_;",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [YesPressed, setYesPressed] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState<{ top: string | undefined; left: string | undefined; }>(
    { top: undefined, left: undefined }
  );
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  const moveButton = () => {
    const buttonWidth = 100;
    const buttonHeight = 50;
    const maxX = Math.max(0, window.innerWidth - buttonWidth);
    const maxY = Math.max(0, window.innerHeight - buttonHeight);
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    setNoButtonPos({ top: `${y}px`, left: `${x}px` });
  };

  return (
    <div className="Valentine-container">
      {YesPressed ? (
        <>
          <img alt="Bears kissing" src="https://tenor.com/view/thank-you-gif-11092575278240837627.gif" />
          <div className="text">Yayy!!!!❤️❤️❤️</div>
        </>
      ) : (
        <>
          <img alt="Bear with hearts" src="https://tenor.com/view/rohit2008-roseday-gif-11435024731802863024.gif" />
          <div>Will you be my valentine?</div>
          <div className="button-container">
            <button className="yesButton" style={{ fontSize: `${yesButtonSize}px` }} onClick={() => setYesPressed(true)}>
              Yes
            </button>
            <button
              onMouseMove={moveButton}
              onClick={handleNoClick}
              className="noButton"
              style={
                noButtonPos.top
                  ? { position: "absolute", top: noButtonPos.top, left: noButtonPos.left }
                  : {}
              }
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;