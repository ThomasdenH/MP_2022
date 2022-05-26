import { BigNumber } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { SignerContext, TokenContext } from "../../hardhat/SymfoniContext";

interface Props {}

export const Assignment4: React.FC<Props> = () => {
  const [signer] = useContext(SignerContext);
  const token = useContext(TokenContext);

  useEffect(() => {
    const timer = setInterval(() => loadTstBalance(), 1000);
    return () => clearInterval(timer);
  });

  const [tokenBalance, setTokenBalance] = useState<BigNumber | undefined>();
  const loadTstBalance = async () => {
    if (token.instance === undefined) {
      console.warn("token is undefined");
      return;
    } else if (signer === undefined) {
      console.warn("signer is undefined");
      return;
    }
    const address = await signer.getAddress();
    const balance = await token.instance.balanceOf(address);
    setTokenBalance(balance);
  };

  return (
    <>
      <div>
        <p> Showoff your stolen TST token balance: </p>
      </div>
      <div
        style={{
          alignContent: "flex-end",
          border: "2px solid white",
        }}
      >
        {`${tokenBalance} TST`}
      </div>

      <p style={{ fontSize: "14px" }}>
        HINT: This one should be easy after the last. You should use the
        'tokenContext' here ( which has wrapped all the ERC20 functionality ).
      </p>
    </>
  );
};
