import React from "react";
import { connect } from "react-redux";
import { RadioGroup } from "@headlessui/react";
import { setSelectedMultipleChoiceAnswer } from "../actions";

const MultipleChoice = ({
  setSelectedMultipleChoiceAnswer,
  selectedMultipleChoiceAnswer,
}) => {
  return (
    <div className="h-screen">
      {/* Container */}
      <div className="lg:px-48 container mx-auto px-5 h-full flex flex-col justify-center space-y-4">
        {/* Question flex */}
        <div className="flex space-x-4 h-72 xl:h-96">
          {/* Question */}
          <div className="flex-grow bg-platinum rounded-xl px-4 flex items-center justify-center relative shadow-md">
            <h4 className="text-6xl font-semibold text-richBlack">爱</h4>
            <p className="absolute -top-5 rounded-full border-2 border-blueCrayola text-white font-semibold p-2 bg-blueCrayola">
              1/4
            </p>
          </div>
          {/* Answers */}
          <RadioGroup
            className="w-72 xl:w-96 flex flex-col justify-around px-4"
            value={selectedMultipleChoiceAnswer}
            onChange={setSelectedMultipleChoiceAnswer}
          >
            <RadioGroup.Label className="hidden">Answer</RadioGroup.Label>
            <RadioGroup.Option value="a">
              {({ checked }) => (
                <div>
                  <button
                    className={`${
                      checked
                        ? "bg-verdigris bg-opacity-100 ring-verdigris ring-offset-4 ring-4 "
                        : "bg-blueCrayola bg-opacity-60 "
                    }w-full text-center py-3 text-white font-semibold rounded-full text-xl transition duration-150 transform hover:-translate-y-0.5`}
                  >
                    Option a
                  </button>
                </div>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="b">
              {({ checked }) => (
                <div>
                  <button
                    className={`${
                      checked
                        ? "bg-verdigris bg-opacity-100 ring-verdigris ring-offset-4 ring-4 "
                        : "bg-blueCrayola bg-opacity-60 "
                    }w-full text-center py-3 text-white bg-opacity-60 font-semibold rounded-full text-xl transition duration-150 transform hover:-translate-y-0.5`}
                  >
                    Option b
                  </button>
                </div>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="c">
              {({ checked }) => (
                <div>
                  <button
                    className={`${
                      checked
                        ? "bg-verdigris bg-opacity-100 ring-verdigris ring-offset-4 ring-4 "
                        : "bg-blueCrayola bg-opacity-60 "
                    }w-full text-center py-3 text-white bg-opacity-60 font-semibold rounded-full text-xl transition duration-150 transform hover:-translate-y-0.5`}
                  >
                    Option c
                  </button>
                </div>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="d">
              {({ checked }) => (
                <div>
                  <button
                    className={`${
                      checked
                        ? "bg-verdigris bg-opacity-100 ring-verdigris ring-offset-4 ring-4 "
                        : "bg-blueCrayola bg-opacity-60 "
                    }w-full text-center py-3 text-white bg-opacity-60 font-semibold rounded-full text-xl transition duration-150 transform hover:-translate-y-0.5`}
                  >
                    Option d
                  </button>
                </div>
              )}
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        {/* Buttons */}
        <div className="flex justify-center space-x-8 py-8">
          <div>
            <button className="py-3 bg-blueCrayola rounded-lg flex text-white font-bold text-xl items-center w-36 justify-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <p className="flex-grow">Previous</p>
            </button>
          </div>
          <div>
            <button className="py-3 bg-blueCrayola rounded-lg flex text-white font-bold text-xl items-center w-36 justify-center px-2">
              <p className="flex-grow">Next</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMultipleChoiceAnswer:
      state.multipleChoice.selectedMultipleChoiceAnswer,
  };
};

export default connect(mapStateToProps, { setSelectedMultipleChoiceAnswer })(
  MultipleChoice
);
