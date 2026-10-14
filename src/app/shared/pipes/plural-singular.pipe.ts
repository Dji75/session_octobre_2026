import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralSingular',
})
export class PluralSingularPipe implements PipeTransform {

  transform(count: number, singularText: string, pluralText?: string): string {
    const pluralSuffix = count === 1 ? singularText : pluralText ?? `${singularText}s`
    return `${count} ${pluralSuffix}`;
  }
}
