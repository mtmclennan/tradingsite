import React, { useState } from "react";
import Link from "next/link";

const BetaTest = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <div className="beta-test__button-container">
        <Link href="/contact">Report Issue</Link>
        <button
          onClick={() => setShowDisclaimer((currentState) => !currentState)}
        >
          About Beta Testing
        </button>
      </div>
      {showDisclaimer && (
        <div className="beta-test-disclaimer">
          <p>
            <p>
              The calculators provided on this website are for informational
              purposes only and are not intended to be used as financial or
              investment advice. This tool is designed to assist users in
              estimating potential stock entry prices based on input data and
              assumptions provided.
            </p>
            <p>
              <br />
            </p>
            <p>
              It is essential to understand that stock trading involves inherent
              risks, and the calculated results are based on the information and
              assumptions provided by the user. The accuracy of the calculated
              entry prices may vary depending on the quality and completeness of
              the data provided.
            </p>
            <p>
              <br />
            </p>
            <p>
              The calculator has not undergone rigorous testing and should not
              be solely relied upon for making financial decisions. We strongly
              recommend consulting with a licensed financial advisor or
              professional before making any investment decisions.
            </p>
            <p>
              <br />
            </p>
            <p>
              Users are solely responsible for any financial consequences
              resulting from the use of this tool. The creators and operators of
              this website shall not be held liable for any losses or damages
              arising from the use of the calculator.
            </p>
            <p>
              <br />
            </p>
            <p>
              By using this calculator, you agree to the terms of this
              disclaimer and acknowledge that any decisions made based on the
              results are made at your own risk.
            </p>
          </p>
        </div>
      )}
    </>
  );
};

export default BetaTest;
