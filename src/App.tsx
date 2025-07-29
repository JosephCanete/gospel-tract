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

  const { card, title, verseRef, highlight } = {
    card: "bg-white shadow-xl rounded-2xl p-5 sm:p-6 w-full max-w-sm mx-auto gap-4 flex flex-col text-left hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border-l-4 border-blue-500 backdrop-blur-sm",
    title:
      "text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-3",
    verseRef: "text-xs font-bold text-blue-700 mb-2 uppercase tracking-wider",
    highlight: "text-sm sm:text-base font-normal text-gray-800 leading-relaxed",
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
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 sm:p-5 rounded-r-xl mb-4 sm:mb-5 shadow-inner">
            <span className="text-green-800 font-black text-xl sm:text-2xl">
              God is Holy
            </span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>Genesis 1:1</p>
              <p className={highlight}>
                "In the beginning God created the heavens and the earth"
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>1 Peter 1:16</p>
              <p className={highlight}>
                "for it is written: 'Be holy, because I am holy.'"
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-xl mb-4 sm:mb-5 shadow-inner">
              <p className="text-blue-900 font-bold text-lg sm:text-xl italic leading-relaxed">
                "Jesus commands, Be Holy"
              </p>
            </div>
          </div>
        </>
      ),
      section: "main",
    },
    {
      id: "who-is-man",
      content: (
        <>
          <h3 className={title}>Who is Man?</h3>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 p-4 sm:p-5 rounded-r-xl mb-4 sm:mb-5 shadow-inner">
            <span className="text-red-800 font-black text-xl sm:text-2xl">
              Man is sinful 😔
            </span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>Romans 3:23</p>
              <p className={highlight}>
                "For everyone has sinned; and all fall short of God's glorious
                standard."
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>Romans 6:23</p>
              <p className={highlight}>
                "For the wages of sin is death, but the free gift of God is
                eternal life in Christ Jesus our Lord."
              </p>
            </div>
          </div>
        </>
      ),
      section: "bad",
    },
    {
      id: "moral-law",
      content: (
        <>
          <h3 className={title}>The Moral Law</h3>
          <p className="text-gray-600 mb-4 sm:mb-5 italic text-base sm:text-lg">
            The Ten Commandments reveal God's perfect standard:
          </p>
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-4 sm:p-5 rounded-xl shadow-inner">
            <ol className="grid grid-cols-1 gap-2 sm:gap-3 text-gray-800">
              {moralLaw.map((law, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 sm:mr-4 flex-shrink-0 mt-0.5 shadow-md">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-xs sm:text-sm leading-relaxed">
                    {law}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </>
      ),
      section: "bad",
    },
    {
      id: "who-is-jesus",
      content: (
        <>
          <h3 className={title}>Who is Jesus? What did He do?</h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 sm:p-5 rounded-r-xl mb-4 sm:mb-5 shadow-inner">
            <p className="text-blue-900 font-bold text-lg sm:text-xl italic leading-relaxed">
              "Jesus lived a perfect life, fully man, fully God. He died as
              atonement for our sins and rose again after three days."
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>1 Corinthians 15:3-4</p>
              <p className={highlight}>
                "For what I received I passed on to you as of first importance:
                that Christ died for our sins according to the Scriptures, that
                he was buried, that he was raised on the third day according to
                the Scriptures"
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>1 Peter 3:18</p>
              <p className={highlight}>
                "For Christ also suffered once for sins, the righteous for the
                unrighteous, to bring you to God. He was put to death in the
                body but made alive in the Spirit."
              </p>
            </div>
          </div>
        </>
      ),
      section: "good",
    },
    {
      id: "what-must-man-do",
      content: (
        <>
          <h3 className={title}>What must man do?</h3>
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-4 sm:p-5 rounded-r-xl mb-4 sm:mb-5 shadow-inner">
            <p className="text-yellow-900 font-bold text-lg sm:text-xl italic leading-relaxed">
              "Put our Faith in Jesus Christ. Grace alone, Christ alone"
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>John 3:16</p>
              <p className={highlight}>
                "For God so loved the world that He gave his one and only Son,
                that whoever believes in him shall not{" "}
                <span className="font-bold text-red-700 bg-red-100 px-1 rounded">
                  perish
                </span>{" "}
                but have eternal life."
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
              <p className={verseRef}>Luke 13:5</p>
              <p className={highlight}>
                "No, and I tell you again that unless you{" "}
                <span className="font-bold text-blue-700 bg-blue-100 px-1 rounded">
                  repent
                </span>
                , you will perish, too."
              </p>
            </div>
          </div>
        </>
      ),
      section: "good",
    },
  ];

  // Section titles for grouping
  const sections = [
    { key: "main", title: null },
    { key: "bad", title: "The Problem 🚨" },
    { key: "good", title: "The Solution ✝️" },
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
    <div className="min-h-screen px-3 sm:px-4 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8 items-center justify-start bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="text-center mb-4 sm:mb-6 w-full">
        <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl sm:rounded-3xl p-4 border border-blue-100 max-w-xl sm:max-w-2xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
              ✝️
            </div>
            <h1 className="text-xl font-black tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              The Gospel
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-700 font-medium mb-3 sm:mb-4">
              The Good News of Jesus Christ
            </p>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {sections.map((section) => (
        <div
          key={section.key}
          className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl flex flex-col items-center gap-6 sm:gap-8"
        >
          {section.title && (
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 tracking-wide">
                {section.title}
              </h2>
              <div className="w-12 sm:w-16 md:w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
            </div>
          )}

          <div className="flex flex-col items-center gap-6 w-full ">
            {cards
              .filter((c) => c.section === section.key)
              .map((c) => (
                <button
                  key={c.id}
                  className={`${card} focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:rotate-0 sm:hover:rotate-1`}
                  onClick={() => handleOnClickCard(c.id)}
                >
                  {c.content}
                </button>
              ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-6 sm:mt-8 md:mt-16 text-center w-full">
        <div className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-xl max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto">
          <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            📖
          </div>
          <p className="text-gray-700 italic text-sm sm:text-base md:text-xl leading-relaxed mb-3 sm:mb-4">
            "For I am not ashamed of the gospel, for it is the power of God for
            salvation to everyone who believes"
          </p>
          <p className="text-xs sm:text-sm text-blue-700 font-bold tracking-wider uppercase">
            Romans 1:16
          </p>
        </div>
      </div>

      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <div
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 max-w-xs sm:max-w-2xl md:max-w-3xl mx-4 cursor-default shadow-2xl border border-gray-100"
          style={{ pointerEvents: "auto" }}
        >
          <div className="mb-5 sm:mb-6 md:mb-8">{dialogContent}</div>
          <div className="flex justify-end gap-3 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200">
            <button
              onClick={() => setDialog(false)}
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
