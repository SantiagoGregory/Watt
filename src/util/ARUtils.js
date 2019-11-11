import { APP_NAME } from "./constants";

import Arweave from "arweave/web";
// const key = await arweave.wallets.generate();

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
})

export function handleLogin(key) {
    arweave.wallets.jwkToAddress(key).then(address => {
        localStorage.setItem('key', JSON.stringify(key));
        localStorage.setItem('address', address);
    })
}

export function logout() { // TODO
    console.log("LOGGING OUT")
}