import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-west-1_G44ZkOfk1",
    ClientId: "4roo15vlp40etfog5ol35dk2gu"
}

export default new CognitoUserPool(poolData);