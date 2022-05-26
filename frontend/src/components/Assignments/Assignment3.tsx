import { BigNumber, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { TokenContext, SignerContext } from "../../hardhat/SymfoniContext";

interface Props {}

export const Assignment3: React.FC<Props> = () => {
  const [vicsWallet, setVicsWallet] = useState<ethers.Wallet>();

  const token = useContext(TokenContext);
  const [signer] = useContext(SignerContext);

  const [amountToSteal, setAmountToSteal] = useState<string>("0");

  useEffect(() => {
    (async () => {
      const extProvider = new ethers.providers.JsonRpcProvider();
      setVicsWallet(
        ethers.Wallet.fromMnemonic(
          "test test test test test test test test test test test junk"
        ).connect(extProvider)
      );
    })();
  }, []);

  const stealTst = async () => {
    if (token.instance === undefined) {
      console.warn("token is undefined");
      return;
    } else if (signer === undefined) {
      console.warn("signer is undefined");
      return;
    } else if (vicsWallet === undefined) {
      console.warn("vics wallet is undefined");
      return;
    }

    let connectedToken = token.instance.connect(vicsWallet);

    console.log(
      `Vics balance: ${await connectedToken.balanceOf(
        await vicsWallet.getAddress()
      )}`
    );

    const amountToStealNumber = BigNumber.from(amountToSteal);
    const ownAddress = await signer.getAddress();
    const gasLimit = await connectedToken.estimateGas.transfer(
      ownAddress,
      amountToStealNumber
    );
    const txn = await connectedToken.transfer(ownAddress, amountToStealNumber, {
      gasLimit: gasLimit.mul(2),
    });
    await txn.wait();

    console.log(
      `New balance: ${await connectedToken.balanceOf(
        await signer.getAddress()
      )}`
    );
  };

  return (
    <>
      <div>
        <p> Get some TST (Test Tokens) </p>
      </div>
      <div>
        <p style={{ fontSize: "14px" }}>
          <strong>
            I know a someone who has loads,... <span role="img" aria-label='dolphin'>🦈</span> !{" "}
          </strong>
        </p>
        <p style={{ fontSize: "14px" }}>
          Vic's account holds a lot of TST. Help yourself to it - she left her
          key under the mat.
        </p>
        <input
          placeholder="amount to steal"
          value={amountToSteal}
          onChange={(e) => setAmountToSteal(e.target.value)}
        />{" "}
        <button onClick={() => stealTst()}> Steal TST!</button>
        <p style={{ fontSize: "14px" }}>
          HINT: If you need some more help here, have a look at the
          'BorrowFromVic' and 'VicsClaim' components ... there are certainly
          enought hints in those to accomplish the task!!
        </p>
      </div>
    </>
  );
};
