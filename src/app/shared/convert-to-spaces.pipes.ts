

import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name: 'ConvertToSpaces'
})

export class ConvertToSpacepipes implements PipeTransform{
    transform(value:string ,character:string):string{
        return value.replace(character, ' ');

    }

}