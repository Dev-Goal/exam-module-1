class Mobie{
    constructor(id, phonename, company, price) {
        this.id = id;
        this.phonename = phonename;
        this.company = company;
        this.price = price;
    }
    getID(){
        return this.id;
    }
    setID(id){
        this.id = id;
    }
    getPhoneName(){
        return this.phonename;
    }
    setPhoneName(phonename){
        this.phonename = phonename;
    }
    getCompany(){
        return this.company;
    }
    setCompany(company){
        this.company = company;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price = price;
    }
    toString(id, phonename, company, price){
        this.id = id;
        this.phonename = phonename;
        this.company = company;
        this.price = price;
    }
}
