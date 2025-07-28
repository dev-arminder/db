import keytar from 'keytar';

const SERVICE = '0xDB'; 
const ACCOUNT = 'masterPassword';

async function savePassword(masterPassword: string){
    await keytar.setPassword(SERVICE, ACCOUNT, masterPassword);
}

export {
    savePassword
}