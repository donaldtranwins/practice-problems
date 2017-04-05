function BankSystem (){
    this.banks = {};
    this.addBank = name => {
        this.banks[name] = new Bank(name);
    };
    this.removeBank = name => {
        let empty = {};
        console.log(`The entire ${this.banks[name]['name']} bank has been removed from the system`);
        this.banks[name] = empty;
        delete this.banks[name];
    };
    function Bank (name){
        this.name = name;
        this.accounts = [null];
        this.incrementer = 1;
        this.addAccount = (name,initialDeposit) => {
            let acc = new Account(name,initialDeposit);
            this.accounts.push(acc);
            let id = this.accounts.length-1;
            this.accounts[id].id = id;
            console.log(`New Account #${id} with ${acc.logFunds()} at ${this.name}`);
        };
        this.removeAccount = id => {
            let empty = {};
            this.accounts[id] = empty;
            let removed = this.accounts.splice(id,1);
            console.log(`${removed.name}'s account has been removed from ${this.name}`);
        };

        function Account (name, initialDeposit){
            this.name = name;
            if (!initialDeposit)
                initialDeposit = 0;
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
            this.transferBetweenAccounts = function(value, from, to){
                let money = from.removeFunds(value);
                to.addFunds(money);
            };
            this.transferBetweenBanks = function(){

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