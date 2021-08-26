import React from "react";
import { connect } from "react-redux";
import { RadioGroup } from "@headlessui/react";
import { setSelectedTempHsk, setSelectedHsk } from "../actions";

import HskOption from "./HskOption";

const UserSettings = ({
  selectedTempHsk,
  setSelectedTempHsk,
  setSelectedHsk,
}) => {
  return (
    <div>
      {/* Container */}
      <div className="lg:px-48 container mx-auto px-5 pt-24 pb-8">
        {/* HSK Section */}
        <div className="">
          {/* HSK cards */}
          <div>
            <RadioGroup value={selectedTempHsk} onChange={setSelectedTempHsk}>
              <div>
                <RadioGroup.Label>
                  <h2 className="text-center text-2xl pb-8">
                    Choose your HSK Level
                  </h2>
                </RadioGroup.Label>
              </div>
              <HskOption
                value="hsk1"
                title="HSK 1"
                content="This test is intended for students who have studied the
                        chinese language for 1 semester, at least 2 or 3 hours
                        every week. To succeed students must master 150 commonly
                        used words and basic grammar patterns."
                pandaImage="first-panda"
                isOdd={true}
              />
              <HskOption
                value="hsk2"
                title="HSK 2"
                content="This test is intended for students who have studied the
                        chinese language for 2 semesters, at least 2 or 3 hours
                        every week. To succeed students must master 300 commonly
                        used words and basic grammar patterns."
                pandaImage="second-panda"
                isOdd={false}
              />
              <HskOption
                value="hsk3"
                title="HSK 3"
                content="This test is intended for students who have studied the
                        chinese language for 3 semesters, at least 2 or 3 hours
                        every week. To succeed students must master 600 commonly
                        used words and related grammar patterns."
                pandaImage="third-panda"
                isOdd={true}
              />
              <HskOption
                value="hsk4"
                title="HSK 4"
                content="This test is intended for students who have studied the
                        chinese language for 4 semesters, at least 2 or 3 hours
                        every week. To succeed students must master 1200
                        commonly used words and related grammar patterns."
                pandaImage="fourth-panda"
                isOdd={false}
              />
              <HskOption
                value="hsk5"
                title="HSK 5"
                content="This test is intended for students who have studied the
                        chinese language for more than 2 years, at least 2 or 3
                        hours every week. To succeed students must master 2500
                        commonly used words and related grammar patterns."
                pandaImage="fifth-panda"
                isOdd={true}
              />
              <HskOption
                value="hsk6"
                title="HSK 6"
                content="This test is intended for students who have studied the
                        chinese language for more than 3 years, at least 2 or 3
                        hours every week. To succeed students must master 5000
                        commonly used words and related grammar patterns."
                pandaImage="sixth-panda"
                isOdd={false}
              />
            </RadioGroup>
            <div className="my-8 text-center">
              <button
                onClick={() => setSelectedHsk(selectedTempHsk)}
                className="py-4 px-8 text-xl font-semibold bg-blueCrayola rounded text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedTempHsk: state.hsk.selectedTempHsk };
};

export default connect(mapStateToProps, {
  setSelectedTempHsk,
  setSelectedHsk,
})(UserSettings);
