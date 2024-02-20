import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Poppins', sans-serif",
    titleFontFamily: "'Ovo', serif",
    mainBg: "#fff",
    lineColor: "#000",
    header: {
      heading: "Concept Map",
      headingColor: "#000",
      border: "3px solid #000",
      background: "#fff",
    },
    ideas: [
      {
        mainIdea: {
          titleContainer: {
            title: "Main Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#B4F0FF",
        },
        secondaryIdea: {
          titleContainer: {
            title: "Secondary Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#B4F0FF",
        },
        example: {
          titleContainer: {
            title: "Example",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#B4F0FF",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#B4F0FF",
        },
      },
      {
        mainIdea: {
          titleContainer: {
            title: "Main Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#F8CFF0",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#F8CFF0",
        },
        secondaryIdea: {
          titleContainer: {
            title: "Secondary Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#F8CFF0",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#F8CFF0",
        },
        example: {
          titleContainer: {
            title: "Example",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#F8CFF0",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#F8CFF0",
        },
      },
      {
        mainIdea: {
          titleContainer: {
            title: "Main Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#FFF496",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#FFF496",
        },
        secondaryIdea: {
          titleContainer: {
            title: "Secondary Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#FFF496",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#FFF496",
        },
        example: {
          titleContainer: {
            title: "Example",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#FFF496",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#FFF496",
        },
      },
      {
        mainIdea: {
          titleContainer: {
            title: "Main Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#F8CFF0",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#F8CFF0",
        },
        secondaryIdea: {
          titleContainer: {
            title: "Secondary Idea",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#F8CFF0",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#F8CFF0",
        },
        example: {
          titleContainer: {
            title: "Example",
            titleColor: "#000",
            border: "3px solid #000",
            background: "#F8CFF0",
          },
          info: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          infoColor: "#000",
          border: "3px solid #000",
          background: "#fff",
          boxBorder: "3px solid #000",
          boxBackground: "#F8CFF0",
        },
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--fontFamily": allData.titleFontFamily,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
