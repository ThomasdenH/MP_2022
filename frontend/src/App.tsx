import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Greeter } from "./components/Greeter";
import { BorrowFromVic } from "./components/BorrowFromVic";
import { VicsClaim } from "./components/VicsClaim";
import { Assignment1 } from "./components/Assignments/Assignment1";
import { Assignment2 } from "./components/Assignments/Assignment2";
import { Assignment3 } from "./components/Assignments/Assignment3";
import { Assignment4 } from "./components/Assignments/Assignment4";
import { Assignment5 } from "./components/Assignments/Assignment5";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true}>
          <div style={{ width: "75%" }}>
            <div>
              <p style={{ fontSize: "32px" }}>
                Yield : UI Technical Assessment
              </p>
            </div>

            <div className="section">
              <p>Briefing:</p>
              <p>
                This assessment requires you to create{" "}
                <a
                  style={{ color: "white" }}
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>{" "}
                elements that interact with the{" "}
                <a
                  style={{ color: "white" }}
                  href="https://ethereum.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ethereum
                </a>{" "}
                blockchain. We know that some of this may be new to you, and
                there are things here that you may not currently understand very
                well. That's ok. Part of the purpose of this technical
                assessment is to see how well you use <em>us</em> as a resource
                to help you get work done by asking us questions. Once complete,
                this single page app should connect with a local blockchain
                implementation, receive and send ETH, and interact with a
                predeployed{" "}
                <a
                  style={{ color: "white" }}
                  href="https://eips.ethereum.org/EIPS/eip-20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ERC20
                </a>{" "}
                contract, TST.
              </p>
              <p style={{ fontSize: "14px" }}>
                A{" "}
                <a
                  style={{ color: "white" }}
                  href="https://hardhat.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hardhat
                </a>{" "}
                implementation is 'pre-setup'. Run it in the background with
                with: <code> npx hardhat node --watch </code>.
              </p>
              <p style={{ fontSize: "14px" }}>
                Also, make sure you have{" "}
                <a
                  style={{ color: "white" }}
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Metamask
                </a>{" "}
                installed in your browser.
              </p>

              <div className="section">
                <BorrowFromVic />
              </div>

              <p style={{ fontSize: "14px" }}>
                If all is running fine at this point, the above button will
                short-circuit the system and credit the connected metamask
                account with <strong>1.5ETH</strong>. This should help you get
                going with the rest of the tasks.
              </p>
              <p style={{ fontSize: "14px" }}>
                HINT: Make sure metamask is connected to the 'custom RPC
                network' with port 31337.
              </p>
            </div>

            <ol>
              <div className="section">
                Working with ETH:
                <li>
                  <Assignment1 />
                </li>
                <li>
                  <Assignment2 />
                </li>
              </div>

              <div className="section">
                Working with ERC20 Tokens:
                <li>
                  <Assignment3 />
                </li>
                <li>
                  <Assignment4 />
                </li>
                <li>
                  <Assignment5 />
                </li>
                <li>
                  <p>Approve token transfers out of your account</p>

                  <p style={{ fontSize: "14px" }}>
                    <strong>Hey,... VIC IS MAD!!! </strong> She wants some of
                    her TST back. That's fine - it's not worth much anyway. Give
                    her permission to take as much as she wants from your
                    account ( best we give her access to the highest possible
                    amount: ethers.constants.MaxUint256 ).
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    HINT: The only help I can give you here is to checkout the
                    ERC20 token spec.
                  </p>

                  <VicsClaim />
                </li>
              </div>

              <div className="section">
                In your comfort zone:
                <p>
                  {" "}
                  This app is NOT particularily well made (and the storyline is
                  shoddy). Use whatever tools/packages you feel comfortable with
                  to shuffle things around, tidy things up, or show-off your
                  skills.{" "}
                </p>
                <li>
                  {" "}
                  <p>
                    {" "}
                    <strong>Optional:</strong> Make this page{" "}
                    <strong>nicer to look at</strong>{" "}
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    {" "}
                    <strong>Optional:</strong> Make this test{" "}
                    <strong> nicer to work with</strong> for the next potential
                    candidate
                  </p>
                </li>
              </div>
            </ol>

            <div className="section">
              <p>When you feel like you have done, submit a PR. </p>
              <p style={{ fontSize: "14px" }}>
                Thank you very much for taking this assessment. We appreciate
                your time, and welcome any feedback!
              </p>
            </div>

            <div className="section">
              <p style={{ fontSize: "14px" }}>
                Here is an extra example of a contract, for reference purposes:
              </p>
              <Greeter></Greeter>
            </div>
          </div>
        </Symfoni>
      </header>
    </div>
  );
}

export default App;
