import { Directive, ElementRef, SimpleChanges, Input, OnChanges } from '@angular/core';

/**
 * @test
 */
@Directive({
  selector: '[utRenderImage]'
})
export class RenderImageDirective implements OnChanges {

  @Input() utRenderImage: File;
  
  constructor(private element: ElementRef) {
    // element.nativeElement.OnChanges((event => {
      
    // }))
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log([this.utRenderImage, changes]);
    // if (!this.utRenderImage.type.match(/image-*/)) {
    //   return;
    // }
    // const reader = new FileReader();
    // reader.onload = this.renderComplete.bind(this);
    // reader.readAsDataURL(this.utRenderImage);
  }

  renderComplete(e) {
    const reader = e.target;
    this.element.nativeElement.src = reader.result;
  }
}
