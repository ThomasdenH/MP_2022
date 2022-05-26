import { DeploymentsManager } from "hardhat-deploy/src/DeploymentsManager";
import { HardhatRuntimeEnvironment } from "hardhat/types";

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}: HardhatRuntimeEnvironment) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // the following will only deploy "GenericMetaTxProcessor" if the contract was never deployed or if the code changed since last deployment
  await deploy("Greeter", {
    from: deployer,
    // gas: 4000000,
    args: ["Greeting set from ./deploy/Greeter.ts"],
  });

    await deploy("Token", {
      from: deployer,
      args: ['TestToken', 'TST', 10000],
    });
};
