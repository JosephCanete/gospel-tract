import { useState, useEffect } from "react";
import "./App.css";
import Dialog from "./Dialog";

function App() {
  const [dialog, setDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (dialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [dialog]);

  const { card, title } = {
    card: "bg-white/80  shadow-xl rounded-2xl p-8 max-w-md mx-auto gap-3 flex flex-col w-full text-left hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 backdrop-blur-sm",
    title: "text-xl font-semibold tracking-tight text-gray-900 ",
  };

  const moralLaw = [
    "No other gods before Me",
    "No idols",
    "Do not misuse God's name",
    "Keep the Sabbath holy",
    "Honor your father and mother",
    "Do not murder",
    "Do not commit adultery",
    "Do not steal",
    "Do not lie",
    "Do not covet",
  ];

  // Card data abstraction
  const cards = [
    {
      id: "who-is-god",
      content: (
        <>
          <h3 className={title}>Who is God?</h3>
          <span className="text-green-500 font-bold"> God is Holy</span>
          <p>
            <span className="font-bold">Genesis 1:1</span> In the beginning God
            created the heavens and the earth"
          </p>
          <p>
            <span className="font-bold">1 Peter 1:16 </span>for it is written:
            “Be holy, because I am holy.”
          </p>
        </>
      ),
      section: "main",
    },
    {
      id: "who-is-man",
      content: (
        <>
          <h3 className={title}>Who is Man?</h3>
          <span className="text-red-500 font-bold">Man is sinful 😩</span>
          <p>
            <span className="font-bold">Romans 3:23 </span>
            For everyone has sinned; and all fall short of God’s glorious
            standard.
          </p>
          <p>
            <span className="font-bold">Romans 6:23 </span>
            For the wages of sin is death, but the free gift of God is eternal
            life in Christ Jesus our Lord standard.
          </p>
        </>
      ),
      section: "bad",
    },
    {
      id: "moral-law",
      content: (
        <>
          <h3 className={title}>The Moral Law</h3>
          <ol className="list-decimal ml-4 gap-1">
            {moralLaw.map((law, index) => (
              <li key={index} className="list-decimal ml-4">
                {law}
              </li>
            ))}
          </ol>
        </>
      ),
      section: "bad",
    },
    {
      id: "who-is-jesus",
      content: (
        <>
          <h3 className={title}>Who is Jesus? What did He do?</h3>
          <span className="italic">
            "Jesus lived a perfect life. fully man, fully God. He died as
            attonement for our sins. And rose again after three days."
          </span>
          <p>
            <span className="font-bold">1 Corinthians 15:3-4 </span> For what I
            received I passed on to you as of first importance that Christ died
            for our sins according to the Scriptures 4 that he was buried, that
            he was raised on the third day according to the Scriptures,
          </p>
          <p>
            <span className="font-bold">1 Peter 3:18 </span>
            For Christ also suffered once for sins, the righteous for the
            unrighteous, to bring you to God. He was put to death in the body
            but made alive in the Spirit.
          </p>
        </>
      ),
      section: "good",
    },
    {
      id: "what-must-man-do",
      content: (
        <>
          <h3 className={title}>What must man do?</h3>
          <span className="italic">
            "Put our Faith in Jesus Christ. Grace alone Christ Alone"
          </span>
          <p>
            <span className="font-bold">1 Peter 3:18 </span>
            For God so loved the world that He gave his one and only Son, that
            whoever believes in him shall not{" "}
            <span className="font-bold">perish</span> but have eternal life.
          </p>
          <p>
            <span className="font-bold">Luke 13:5 </span> No, and I tell you
            again that unless you <span className="font-bold">repent</span>, you
            will perish, too.
          </p>
        </>
      ),
      section: "good",
    },
  ];

  // Section titles for grouping
  const sections = [
    { key: "main", title: null },
    { key: "bad", title: "Bad News 🥶" },
    { key: "good", title: "Good News 😇" },
  ];

  // Card click handler
  const handleOnClickCard = (id: string) => {
    const cardData = cards.find((c) => c.id === id);
    if (cardData) {
      setDialogContent(cardData.content);
      setDialog(true);
    }
  };

  return (
    <div className="min-h-screen px-4  py-12 flex flex-col gap-8 items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <h1 className="text-gray-900 text-4xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
        Gospel of Jesus Christ
      </h1>
      {sections.map((section) => (
        <div
          key={section.key}
          className="w-full flex flex-col items-center gap-6"
        >
          {section.title && (
            <h4 className="text-2xl font-bold text-gray-700 mb-2 tracking-wide uppercase letter-spacing-wider">
              {section.title}
            </h4>
          )}
          {cards
            .filter((c) => c.section === section.key)
            .map((c) => (
              <button
                tabIndex={-1}
                key={c.id}
                className={
                  card + " focus:outline-none focus:ring-2 focus:ring-blue-300"
                }
                onClick={() => handleOnClickCard(c.id)}
                style={{
                  boxShadow: "0 2px 24px 0 rgba(0,0,0,0.06)",
                }}
              >
                {c.content}
              </button>
            ))}
        </div>
      ))}
      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <div
          className={card + " cursor-default"}
          style={{ pointerEvents: "auto" }}
        >
          {dialogContent}
        </div>
      </Dialog>
    </div>
  );
}

export default App;
