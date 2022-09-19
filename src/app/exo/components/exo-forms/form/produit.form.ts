import { AbstractControl, AbstractControlOptions, ValidationErrors, Validators as v } from "@angular/forms";
import { CustomValidator as cv } from "../validators";

export const PRODUIT_FORM = {
    nom: [, [v.required, v.minLength(5), v.maxLength(20)]],
    marque: [, [v.required, v.minLength(5), v.maxLength(20)]],
    prix: [10, [v.required, v.min(0)]],
    categorie: [ 'alimentaire', [v.required] ],
    desc: [],
    peremption: [, [cv.future]]
}

export const PRODUIT_FORM_OPTS: AbstractControlOptions = {
    validators: [peremptionSiAlimentaire]
}

function peremptionSiAlimentaire ( control: AbstractControl ): ValidationErrors | null{

    if( control.value.categorie == 'alimentaire' && !control.value.peremption )
        return { peremption: 'required si alimentaire' }

    return null;

}
