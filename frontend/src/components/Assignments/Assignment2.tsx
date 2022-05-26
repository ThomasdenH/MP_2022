import { parseEther } from "ethers/lib/utils";
import React, { useContext, useState } from "react";
import { SignerContext } from "../../hardhat/SymfoniContext";

export const Assignment2 = () => {
  const [signer] = useContext(SignerContext);

  // Assignment 2:
  const [ethSendDestination, setEthSendDestination] = useState("");

  const onSendEth = async () => {
    if (signer === undefined) {
      console.log("signer is undefined");
      return;
    }

    // Send ether
    await signer.sendTransaction({
        to: ethSendDestination,
        value: parseEther('1.25')
    });
  };

  return (
    <>
      <p>
        Make this
        <button onClick={() => onSendEth()}>{" Button "}</button>
        send <strong>1.25 </strong> Eth (or a variable amount) from your
        connected account to another address:
        <input
          value={ethSendDestination}
          onChange={(e) => setEthSendDestination(e.target.value)}
        />
        .
      </p>
      <p style={{ fontSize: "14px" }}>
        (It might be a good idea to pay Vic back?! )
      </p>

      <p style={{ fontSize: "14px" }}>
        HINT: all the account info/functions you need for these first two tasks
        are in the <em>signerContext </em>( It might also be easier to break
        each task out into a new component).
      </p>
    </>
  );
};
