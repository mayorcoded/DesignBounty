const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

class Ipfs{

    static async addDataToIpfs(data){
        const buffer = await Buffer.from(JSON.stringify(data));

        const ipfsHash = await ipfs.add(buffer);
        return ipfsHash[0].hash;
    }

    static async updateDataOnIpfs(data){
        const buffer = await Buffer.from(JSON.stringify(data));

        await ipfs.files.write('/my-design-bounty/bounties.json',buffer,{create:true}, (err, ipfsData) => {
            console.log(err, ipfsData);
        });
    };
}


export default Ipfs;