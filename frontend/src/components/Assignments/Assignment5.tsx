import React, { useContext, useState } from "react";
import { TokenContext } from "../../hardhat/SymfoniContext";

interface Props {}

export const Assignment5: React.FC<Props> = () => {
  const token = useContext(TokenContext);

  const [tokenAmount, setTokenAmount] = useState("0");
  const [destinationAccount, setDestinationAccount] = useState<string>('');

  const onPressButton = async () => {
      console.log('called');
    if (token.instance === undefined) {
        console.warn('Token instance is undefined')
        return;
    } else if (destinationAccount === undefined) {
        console.warn('destinationAccount is undefined')
        return;
    }
    const txn = await token.instance.transfer(destinationAccount, tokenAmount);
    await txn.wait();
    console.log('success!');
  };

  return (
    <>
      <p>
        Cover your tracks! Make this{" "}
        <button onClick={() => { onPressButton(); }}> button </button> transfer{" "}
        <input
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
        />{" "}
        of the Test token (TST) from your account to another account:
        <input
          value={destinationAccount}
          onChange={(e) => setDestinationAccount(e.target.value)}
        ></input>
        .
      </p>
      <p style={{ fontSize: "14px" }}>HINT: Use the 'tokenContext' here too!</p>
    </>
  );
};
