import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {

    static future(control: AbstractControl): ValidationErrors | null {
        if( control.value && new Date( control.value ) <= new Date() )
            return { future: true }
    
        return null;
    }

}