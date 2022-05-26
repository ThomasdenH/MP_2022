import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import React, { useContext, useEffect, useState } from "react";
import { SignerContext } from "../hardhat/SymfoniContext";

interface Props {}

interface AccountInfo {
  name: string;
  balance: BigNumber;
}

export const AccountInfoDisplay: React.FC<Props> = () => {
  const [signer] = useContext(SignerContext);

  // Account info
  let [info, setInfo] = useState<AccountInfo | undefined>(undefined);

  const updateAccountInfo = async () => {
    if (signer !== undefined) {
      const [name, balance] = await Promise.all([
        signer.getAddress(),
        signer.getBalance(),
      ]);
      setInfo({ name, balance });
    }
  };

  // When mounting this component, start updating account info.
  useEffect(() => {
    const timer: number = setInterval(
      () => updateAccountInfo(),
      1000
    ) as any as number;
    return () => clearInterval(timer);
  });

  return info === undefined ? (
    <p
      style={{ border: "2px solid white", padding: "1em", textAlign: "center" }}
    >
      Loading account info...
    </p>
  ) : (
    <div
      style={{ border: "2px solid white", padding: "1em", textAlign: "center" }}
    >
      <p style={{ textAlign: "center" }}>{info.name}</p>
      <p style={{ textAlign: "center" }}>{`${formatUnits(
        info.balance
      )} ETH`}</p>
    </div>
  );
};
