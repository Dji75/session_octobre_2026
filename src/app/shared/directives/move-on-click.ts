import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appMoveOnClick]',
  host: {
    '(mouseover)': 'move($event)',
    '[style.top]': 'top',
    '[style.left]': 'left',
    '[style.position]': '"absolute"',
  }
})
export class MoveOnClick {
  protected top = '';
  protected left = '';

  move(event?: MouseEvent): void {
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
