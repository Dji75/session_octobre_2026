import { Directive, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appMoveOnClick]',
  host: {
    '(mouseover)': 'move($event)',
    '[style.top]': 'top',
    '[style.left]': 'left',
    '[style.position]': '"absolute"'
  }
})
export class MoveOnClick {
  protected top = '';
  protected left = '';

  readonly disabled = input<boolean>()

  move(event?: MouseEvent): void {
    if (this.disabled()) {
      return;
    }

    const el = event?.currentTarget as HTMLElement;
    const width = el?.offsetWidth ?? 50;
    const height = el?.offsetHeight ?? 50;

    const maxX = Math.max(0, window.innerWidth - width);
    const maxY = Math.max(0, window.innerHeight - height);

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    this.left = `${randomX}px`;
    this.top = `${randomY}px`;
  }
}
