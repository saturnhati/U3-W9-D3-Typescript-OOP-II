"use strict";
class LavoratoreAutonomo {
    constructor(reddito_annuo_lordo) {
        this.reddito_annuo_lordo = reddito_annuo_lordo;
        this.tasse_irpef = this.setTasseIrpef(this.reddito_annuo_lordo);
        this.tasse_inps = 33;
    }
    setTasseIrpef(reddito_annuo_lordo) {
        if (reddito_annuo_lordo < 15000) {
            return 23;
        }
        else if (reddito_annuo_lordo > 15000 && reddito_annuo_lordo < 28000) {
            return 25;
        }
        else if (reddito_annuo_lordo > 28000 && reddito_annuo_lordo < 50000) {
            return 35;
        }
        else {
            return 43;
        }
    }
    getTasseIrpef() {
        console.log(`Le tue tasse Irpef corrispondono al ${this.tasse_irpef}%`);
    }
    getTasseInps() {
        console.log(`Le tue tasse Inps corrispondono al ${this.tasse_inps}%`);
    }
    getUtileTasse() {
        console.log(`Le tue tasse totali corrispondono al ${this.tasse_inps + this.tasse_irpef}%`);
    }
    getRedditoAnnuoNetto() {
        let tasse_su_reddito = this.reddito_annuo_lordo * ((this.tasse_inps + this.tasse_irpef) / 100);
        let reddito_annuo_netto = this.reddito_annuo_lordo - tasse_su_reddito;
        console.log(`Il tuo reddito annuo netto è di ${reddito_annuo_netto}`);
    }
}
class Fotografo extends LavoratoreAutonomo {
    constructor(reddito_annuo_lordo) {
        super(reddito_annuo_lordo);
        this.codredd = 1;
    }
}
class Programmatore extends LavoratoreAutonomo {
    constructor(reddito_annuo_lordo) {
        super(reddito_annuo_lordo);
        this.codredd = 2;
    }
}
class Postproducer extends LavoratoreAutonomo {
    constructor(reddito_annuo_lordo) {
        super(reddito_annuo_lordo);
        this.codredd = 3;
    }
}
// PROGRAMMATORE
console.log("PROGRAMMATORE");
let prog1 = new Programmatore(30000);
prog1.getTasseIrpef();
prog1.getTasseInps();
prog1.getUtileTasse();
prog1.getRedditoAnnuoNetto();
// POSTPRODUCER
console.log("POSTPRODUCER");
let post1 = new Postproducer(45000);
post1.getTasseIrpef();
post1.getTasseInps();
post1.getUtileTasse();
post1.getRedditoAnnuoNetto();
// FOTOGRAFO
console.log("FOTOGRAFO");
let foto1 = new Postproducer(14000);
foto1.getTasseIrpef();
foto1.getTasseInps();
foto1.getUtileTasse();
foto1.getRedditoAnnuoNetto();
