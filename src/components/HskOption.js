import React from "react";

import { RadioGroup } from "@headlessui/react";

const HskOption = ({ value, title, content, isOdd, pandaImage }) => {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <button
          className={`
                  ${
                    checked
                      ? "ring-4 ring-blueCrayola ring-offset-2 bg-blueCrayola bg-opacity-20 "
                      : ""
                  }
                  ${isOdd ? "flex " : "flex flex-row-reverse "}
                  border-2 rounded my-4`}
        >
          <div className="flex-grow p-4">
            <h3 className="text-center text-lg font-semibold pb-2">{title}</h3>
            <p className="text-justify">{content}</p>
          </div>
          <div
            className={`bg-${pandaImage} h-48 w-72 bg-cover flex-shrink-0`}
          ></div>
        </button>
      )}
    </RadioGroup.Option>
  );
};

export default HskOption;
