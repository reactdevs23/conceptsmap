import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ header, ideas, lineColor }) => {
  return (
    <div
      className={`min-h-screen flex py-10 items-center flex-col	 justify-center w-full ${classes.mainWrapper}`}
      style={{ background: "var(--mainBg)", "--lineColor": lineColor }}
    >
      <div
        className={classes.header}
        style={{
          "--color": header.headingColor,
          "--bg": header.background,
          "--border": header.border,
        }}
      >
        <h2 className={classes.heading}>{header.heading}</h2>
      </div>
      <div
        className={[classes.ideas, classes[`ideas${ideas.length}`]].join(" ")}
      >
        {ideas.map(({ mainIdea, secondaryIdea, example }, i) => (
          <div className={classes.ideaContainer}>
            <div
              className={[classes.mainIdea, classes.idea].join(" ")}
              style={{
                "--border": mainIdea.border,
                "--bg": mainIdea.background,
                "--boxBorder": mainIdea.boxBorder,
                "--boxBg": mainIdea.boxBackground,
              }}
            >
              <div
                className={classes.titleContainer}
                style={{
                  "--border": mainIdea.titleContainer.border,
                  "--bg": mainIdea.titleContainer.background,
                  "--color": mainIdea.titleContainer.titleColor,
                }}
              >
                <h4 className={classes.title}>
                  {mainIdea.titleContainer.title}
                </h4>
              </div>
              <p
                className={classes.info}
                style={{ "--color": mainIdea.infoColor }}
              >
                {mainIdea.info}
              </p>
            </div>{" "}
            <div
              className={[classes.secondaryIdea, classes.idea].join(" ")}
              style={{
                "--border": secondaryIdea.border,
                "--bg": secondaryIdea.background,
                "--boxBorder": secondaryIdea.boxBorder,
                "--boxBg": secondaryIdea.boxBackground,
              }}
            >
              <div
                className={classes.titleContainer}
                style={{
                  "--border": secondaryIdea.titleContainer.border,
                  "--bg": secondaryIdea.titleContainer.background,
                  "--color": secondaryIdea.titleContainer.titleColor,
                }}
              >
                <h4 className={classes.title}>
                  {secondaryIdea.titleContainer.title}
                </h4>
              </div>
              <p
                className={classes.info}
                style={{ "--color": secondaryIdea.infoColor }}
              >
                {secondaryIdea.info}
              </p>
            </div>{" "}
            <div
              className={[classes.example, classes.idea].join(" ")}
              style={{
                "--border": example.border,
                "--bg": example.background,
                "--boxBorder": example.boxBorder,
                "--boxBg": example.boxBackground,
              }}
            >
              <div
                className={classes.titleContainer}
                style={{
                  "--border": example.titleContainer.border,
                  "--bg": example.titleContainer.background,
                  "--color": example.titleContainer.titleColor,
                }}
              >
                <h4 className={classes.title}>
                  {example.titleContainer.title}
                </h4>
              </div>
              <p
                className={classes.info}
                style={{ "--color": example.infoColor }}
              >
                {example.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
