class DocumentValidator{
    validate(){
        this.collectDocuments();
        this.validateInformation();
        this.approveOrReject();
    }

    collectDocuments(){
        console.log("Coletando documentos necessários...");
    }

    validateInformation(){
        throw new Error("O método validateInformation() deve ser implementado pela subclasse.");
    }

    approveOrReject(){
        console.log("Aprovando ou rejeitando a solicitação...");
    }
}

class IndividualValidator extends DocumentValidator{
    validateInformation(){
        console.log("Validando informações de uma pessoa física...");
    }
}

class CompanyValidator extends DocumentValidator{
    validateInformation(){
        console.log("Validando informações de uma empresa...");
    }
}

class FreelancerValidator extends DocumentValidator {
    validateInformation(){
        console.log("Validando informações de um autônomo...");
    }
}

const individualValidator = new IndividualValidator();
individualValidator.validate();

const companyValidator = new CompanyValidator();
companyValidator.validate();

const freelancerValidator = new FreelancerValidator();
freelancerValidator.validate();