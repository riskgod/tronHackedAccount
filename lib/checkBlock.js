const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = "81b5c819b3a5c80f45e4b"; //私钥 任意私钥
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer,privateKey);

const CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
const hackedAccount = "TYAy9bXUZ9Hf3VcBkdghfbuRScCcxRHkh1"; //被黑账户
const hackAccount = 'TSdqgavXHgwF19ssJP8CPnaqJbF5Lb1Nyv'


async function main() {
    const contract = await tronWeb.contract().at(CONTRACT)
    const fromResult = await contract.isBlackListed(hackedAccount).call();
    const toResult = await contract.isBlackListed(hackAccount).call();    
    console.log(hackedAccount, fromResult)
    console.log(hackAccount, toResult)
}

main()
