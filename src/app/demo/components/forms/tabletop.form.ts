import { AbstractControl, AbstractControlOptions, ValidationErrors, Validators } from "@angular/forms";

export const TABLETOP_FORM = {
    'nom': ['nom de base', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    'editeur': [ , [Validators.required] ],
    'categorie': [ 'deckbuilding', [Validators.required] ],
    'prix': [ 0, [Validators.required, Validators.min(0)] ]
}


export const TABLETOP_FORM_OPTS: AbstractControlOptions = {
    validators: [validatePrice],
    // asyncValidators: [],
    // updateOn: 'change'
}


function validatePrice(form: AbstractControl): ValidationErrors | null {

    if( 
        (form.value.prix <= 50 && form.value.categorie != '4X') || 
        (form.value.prix <= 60 && form.value.categorie == '4X')
    )
        return null;
    else
        return {
            'prix-valid': 'Le prix doit être inférieur à 50 ou à 60 si c\'est un 4X'
        };

}


