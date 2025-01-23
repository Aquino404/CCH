class Sandwich{
    constructor(){
        this.bread = "";
        this.protein = "";
        this.vegetables = [];
        this.sauces = [];
    }

    describe(){
        return `Sanduíche com pão ${this.bread}, proteína ${this.protein}, vegetais ${this.vegetables.join(", ")}, e molhos ${this.sauces.join(", ")}.`;
    }
}

class SandwichBuilder{
    constructor(){
        this.sandwich = new Sandwich();
    }

    setBread(bread){}
    setProtein(protein){}
    addVegetable(vegetable){}
    addSauce(sauce){}
    getSandwich(){
        return this.sandwich;
    }
}

class VeggieSandwichBuilder extends SandwichBuilder{
    setBread(bread){
        this.sandwich.bread = bread;
    }

    setProtein(protein){
        this.sandwich.protein = protein;
    }

    addVegetable(vegetable){
        this.sandwich.vegetables.push(vegetable);
    }

    addSauce(sauce){
        this.sandwich.sauces.push(sauce);
    }
}

class SandwichDirector{
    constructor(builder){
        this.builder = builder;
    }

    constructVeggieSandwich(){
        this.builder.setBread("integral");
        this.builder.setProtein("tofu");
        this.builder.addVegetable("alface");
        this.builder.addVegetable("tomate");
        this.builder.addSauce("maionese vegana");
    }
}

const builder = new VeggieSandwichBuilder();
const director = new SandwichDirector(builder);

director.constructVeggieSandwich();
const sandwich = builder.getSandwich();

console.log(sandwich.describe());