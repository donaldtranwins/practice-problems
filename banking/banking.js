function BankSystem (){
    this.banks = {};
    this.deletedBanks = {};
    this.addBank = name => {
        this.banks[name] = new Bank(name, this);
    };
    this.removeBank = name => {
        this.deletedBanks[name] = this.banks[name];
        delete this.banks[name];
        console.log(`The bank ${this.deletedBanks[name]['name']} has been removed from the system`);
    };
    function Bank (name, system){
        this.name = name;
        this.system = system;
        this.accounts = {};
        this.deletedAccounts = {};
        this.incrementer = 1;
        this.holdings = null;
        this.addAccount = (name, initialDeposit) => {
            let id = this.incrementer++;
            this.accounts[id] = new Account(name, initialDeposit, this);
            console.log(`New Account #${id} with ${this.accounts[id].logFunds()} at ${this.name}`);
        };
        this.removeAccount = id => {
            this.deletedAccounts[id] = this.accounts[id]; //soft deleting
            delete this.accounts[id];
            console.log(`${this.deletedAccounts[id].name}'s account has been removed from ${this.name}`);
        };

        function Account (name, initialDeposit = 0, bank){
            this.name = name;
            this.bank = bank;
            this.funds = parseFloat(initialDeposit.toFixed(2)) || 0;
            this.addFunds = amount => {
                if (amount < 0){
                    console.warn("You're trying to add a negative amount to your account.  Do you want to remove funds instead?");
                } else {
                    this.funds += parseFloat(amount.toFixed(2));
                    console.log(this.logFunds(amount, 'added'));
                }
                return this.funds; //@returns total funds in the account
            };
            this.removeFunds = amount => {
                if (this.funds >= amount){
                    this.funds -= parseFloat(amount.toFixed(2));
                    console.log(this.logFunds(amount, 'removed'));
                    return amount; //@returns funds removed, not remaining
                }
                amount = this.funds || 0;
                this.funds = 0;
                console.log(this.logFunds(amount, 'removed'));
                return amount; //@returns funds removed, will be less than what they specified
            };
            this.transferBetweenAccounts = function(amount, id){
                const targetAcc = this.bank.accounts[id];
                const targetsOrigBalance = targetAcc.funds;
                const money = this.removeFunds(amount);
                this.bank.holdings = money;
                targetAcc.addFunds(this.bank.holdings);
                if (targetAcc.funds === targetsOrigBalance+this.bank.holdings){
                    console.log("Transaction successful!");
                } else {
                    console.log("Mismatch in funds transferred. Refunding values");
                    targetAcc.funds = targetsOrigBalance;
                    this.addFunds(money);
                    /**
                     * This part of the function (to validate if the funds are actually transferred correctly)
                     * is unnecessary in this example, because everything runs synchronously.  but in a real
                     * world situation, this function  would make a server request and some sort of asynchronous
                     * validation.  If the internet dies during that time or if the validation is unsuccessful,
                     * we wouldnt want the user to lose their money, nor the target person to gain extra money
                     *
                     * Thus, this two step-check allows for reversion of funds back to their original values.
                     */
                }
                this.bank.holdings = null;
            };
            this.transferBetweenBanks = function(amount, id) {
                //@TODO this is copy pasta of above.  modify it to do the thing
                const targetAcc = this.bank.accounts[id];
                const targetsOrigBalance = targetAcc.funds;
                const money = this.removeFunds(amount);
                this.bank.holdings = money;
                targetAcc.addFunds(this.bank.holdings);
                if (targetAcc.funds === targetsOrigBalance + this.bank.holdings) {
                    console.log("Transaction successful!");
                } else {
                    console.log("Mismatch in funds transferred. Refunding values");
                    targetAcc.funds = targetsOrigBalance;
                    this.addFunds(money);
                }
                this.bank.holdings = null;
            };
            this.logFunds = (amount, transaction) => {
                if (amount && transaction){
                    var extra = ` ($${amount} ${transaction})`;
                } else {
                    extra = '';
                }
                return `$${this.funds} in ${this.name}'s account${extra}`
            }
        }
    }
}


const sys = new BankSystem();
sys.addBank('boa');
sys.banks.boa.addAccount('dan',42);
sys.banks.boa.addAccount('eric');
sys.addBank('wells');
sys.banks.wells.addAccount('scott',1337);