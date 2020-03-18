const account = {
    name: 'Alex',
    income: [],
    source: [],
    addincome: function(description, amount){
        this.income.push(amount);
        this.source.push(description);
    },  
    calculate: function(){
        return(this.income.reduce((a, b) => a+b))
    },
    getsummary: function(){
        console.log(`${this.name} is  earning ${this.calculate()}`)
    }

}
account.addincome('TTTT', 240);
account.addincome('SSSS', 240);
account.getsummary();
