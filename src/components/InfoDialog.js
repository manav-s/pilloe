import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const InfoDialog = ({ open, onClose }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 backdrop-blur-sm" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-3/4 max-w-xl p-6 my-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Information
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Welcome to the Pilloe app. This application uses
                  state-of-the-art AI to help interpret your dreams. We
                  understand that dreams can be filled with vivid and sometimes
                  confusing imagery, making it difficult to discern their true
                  meaning. Our AI aims to provide insights that can guide your
                  understanding.
                  <br /> <br />
                  Write a description of your dream in the provided text box.
                  Try to capture as much detail as possible, including your
                  emotions, the sequence of events, the people and things you
                  encountered, and any unique or distinct elements that stood
                  out.
                  <br /> <br />
                  Our AI will then analyze your description and provide an
                  interpretation. The interpretation is based on common
                  symbolism found in dreams, cultural references, and the AI's
                  understanding of language and context. Remember, all
                  interpretations are speculative and should not be considered
                  definitive explanations of your dream. They're meant to offer
                  potential insights that may help you think about your dream in
                  new ways. Privacy: Your privacy is important to us. The dream
                  descriptions you input are not stored or shared.
                  <br /> <br />
                  Lastly, remember that you are the best interpreter of your
                  dreams. Our AI provides interpretations based on common
                  understandings of symbols and themes, but your personal
                  context and experiences are crucial in understanding your
                  dreams. Use the interpretations provided as a starting point,
                  and don't hesitate to explore further or consult a
                  professional if you're deeply interested in dream analysis.
                  <br /> <br />
                </p>
                <a
                  href="https://github.com/manav-s/pilloe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to view the code on GitHub
                </a>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default InfoDialog;
