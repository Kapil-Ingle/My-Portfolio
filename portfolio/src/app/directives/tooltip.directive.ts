import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input('appTooltip') tooltipText = '';

  private tooltipEl!: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  @HostListener('focus')
  show(): void {
    if (!this.tooltipText) return;

    this.tooltipEl = this.renderer.createElement('span');
    this.tooltipEl.innerText = this.tooltipText;

    this.renderer.addClass(this.tooltipEl, 'app-tooltip');
    this.renderer.appendChild(document.body, this.tooltipEl);

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipEl.getBoundingClientRect();

    const top =
      hostPos.top - tooltipPos.height - 8 + window.scrollY;
    const left =
      hostPos.left +
      hostPos.width / 2 -
      tooltipPos.width / 2 +
      window.scrollX;

    this.renderer.setStyle(this.tooltipEl, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${left}px`);
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  hide(): void {
    if (this.tooltipEl) {
      this.renderer.removeChild(document.body, this.tooltipEl);
    }
  }

}
