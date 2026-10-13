import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseover)': 'onHover()',
    '(mouseleave)': 'onLeave()',
    '[style.backgroundColor]': 'backgroundColor()',
  },
})
export class Highlight {
  #isHovered = false;
  #randomColor = '';

  // @HostListener('mouseover')
  onHover(): void {
    this.#isHovered = true;
    this.#randomColor = this.#getRandomColor();
  }

  // @HostListener('mouseleave')
  onLeave(): void {
    this.#isHovered = false;
  }

  // @HostBinding('style.backgroundColor')
  backgroundColor() {
    return this.#isHovered ? this.#randomColor : 'unset';
  }

  #getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
  }
}
