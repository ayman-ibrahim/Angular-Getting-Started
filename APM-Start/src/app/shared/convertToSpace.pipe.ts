
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'convertToSpace'
})

export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, char: string): string {
        return value.replace(char, ' ');
    }
}