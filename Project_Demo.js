class User {
    /*
    This user class simulates the user as a combination of their 
    processing power and crypto wealth. 
    */
    constructor(index, processingPower, coins) {
        this.index=index;
        this.processingPower=processingPower;
        this.coins=coins;
    }
    changeBalance(num) {
        this.coins+=num;
    }
}
class Blockchain {
    /*
    This blockchain class is a simplified version intended to simulate
    the blockchain's management of ledger verification. 
    cm=consensus mechanism
    */
    constructor(cm, users) {
        this.cm=cm;
        this.miningReward=10;
        this.users=users;
        console.log("Using " + cm + " and a mining reward of " + this.miningReward);
    }
    verifyBlockchain() {
        /*
        Here, the process of ledger verification is simulated. 
        The simulation depends upon the user input of specific consensus mechanism.
        */
        if (this.cm==="Proof of Work") {
            let maxProcessingPower=0;
            let userID=0;
            for (let user of this.users) {
                if (user.processingPower>maxProcessingPower) {
                    maxProcessingPower=user.processingPower;
                    userID = user.index;
                }
            }
            this.users[userID-1].changeBalance(this.miningReward);
            console.log("\nA large amount of power is used. \nUser " + userID + " is rewarded because they have the highest processing power.\n");
        }
        else if (this.cm==="Proof of Stake") {
            let maxCoins=0;
            let userID=0;
            for (let user of this.users) {
                if (user.coins>maxCoins) {
                    maxCoins=user.coins;
                    userID = user.index;
                }
            }
            this.users[userID-1].changeBalance(this.miningReward);
            console.log("\nLittle power is used.\nUser " + userID + " is rewarded because they are able to stake the most coins.\n");
        }
        else if (this.cm==="Proof of Activity") {
            let maxCoins=0;
            let userID=0;
            for (let user of this.users) {
                if (user.coins>maxCoins) {
                    maxCoins=user.coins;
                    userID = user.index;
                }
            }
            this.users[userID-1].changeBalance(this.miningReward);
            console.log("\nPower is used but it is less vulnerable to attacks.\nUser " + userID + " is rewarded because they have the most coins, so they are allowed to verify the ledger.\n");
        }
        else if (this.cm==="Proof of History") {
            console.log("\nA historical record is kept adjacent to the blockchain, allowing the blockchain to be verified using a record of time.\nParrallel processing means there is less to process.\nByzantine fault tolerance also allows the ledger to be verified using staked coins like PoS.\nUses much less power than PoW.\n");
        }
        else if (this.cm==="Directed Acyclic Graph") {
            console.log("\nMultiple transactions can occur simultaneously, making this very efficient.\nNot much power is used. There is no mining. The ledger is verified by each node's references to other nodes.\nThere are no fees, so this is good for micropayments.\nHowever, it is less secure.\n");
        }
        else {
            console.log("Sorry, I don't know that consensus mechanism yet.");
        }
    }
    

}
/*
Demonstration code below to simulate the use of different consensus mechanisms. 
*/

const readline = require('readline').createInterface({
    //readline initialized to use user input
    input: process.stdin,
    output: process.stdout
});
//Initializes different users with different values of processing power and coins
user1 = new User(1, 50, 5);
user2 = new User(2, 100, 2);
user3 = new User(3, 5, 10);
user4 = new User(4, 5, 2);
console.log("\nThis demonstration will show the advantages and disadvantages of using different consensus mechanisms to verify the blockchain.\n\nIn actuality, transactions would be occurring (hence the need for verification)\nbut we will simply simulate the use of the consensus mechains.\nThis is a simplified version - in reality, a little more randomness is involved.\n\n\nWe are simulating 4 users:\n\nUser 1 has middling amounts of processing power and coins.\nUser 2 has lots of processing power but few coins.\nUser 3 has many coins but little processing power.\nUser 4 has little of either.\n");
readline.question('What consensus mechanism would you like to try? ', cm => {
    //User sets the consensus mechanism being tested
    myBlockchain=new Blockchain(cm, [user1, user2, user3, user4]);
    myBlockchain.verifyBlockchain();
    readline.close();
});