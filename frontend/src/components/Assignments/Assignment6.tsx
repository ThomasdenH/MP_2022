import { ethers, constants } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { vicMnemonic } from "../../Constants";
import { TokenContext } from "../../hardhat/SymfoniContext";
import { VicsClaim } from "../VicsClaim";

interface Props {}

export const Assignment6: React.FC<Props> = () => {
  const token = useContext(TokenContext);

  // Get Vics address by using the mnemonic, because why harcode it?
  const [vicsWallet, setVicsWallet] = useState<ethers.Wallet>();
  useEffect(() => {
    (async () => {
      const extProvider = new ethers.providers.JsonRpcProvider();
      setVicsWallet(
        ethers.Wallet.fromMnemonic(vicMnemonic).connect(extProvider)
      );
    })();
  }, []);

  const approve = async () => {
    if (token.instance === undefined) {
      console.warn("token instance is undefined");
      return;
    } else if (vicsWallet === undefined) {
      console.warn("vics wallet not loaded");
      return;
    }
    const vicsAddress = await vicsWallet.getAddress();

    const txn = await token.instance.approve(vicsAddress, constants.MaxUint256);
    await txn.wait();
  };

  return (
    <>
      <p>Approve token transfers out of your account</p>

      <button
        onClick={() => {
          approve();
        }}
      >
        {" Approve! "}
      </button>

      <p style={{ fontSize: "14px" }}>
        <strong>Hey,... VIC IS MAD!!! </strong> She wants some of her TST back.
        That's fine - it's not worth much anyway. Give her permission to take as
        much as she wants from your account ( best we give her access to the
        highest possible amount: ethers.constants.MaxUint256 ).
      </p>
      <p style={{ fontSize: "14px" }}>
        HINT: The only help I can give you here is to checkout the ERC20 token
        spec.
      </p>

      <VicsClaim />
    </>
  );
};
