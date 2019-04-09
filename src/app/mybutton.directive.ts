import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import {colors} from "./appcolors/mycolors"

@Directive({
  selector: 'my-button'
})
export class MybuttonDirective {

  constructor(private elem: ElementRef,private renderer :Renderer2 , private _color: colors ) { }

  @Input() color:string 
  @Input() background:string 
  @Input() fontSize:string  = "50px"
  @Input() width:string 


  ngOnInit(){

    if(this.color == "primary" )
    {
      this.color = this._color.pink
      this.background = this._color.blue

    } else  if(this.color == "warn" )
    {
      this.color = this._color.red
    }

    this.renderer.setStyle(this.elem.nativeElement, "color", this.color) 
    this.renderer.setStyle(this.elem.nativeElement, "fontSize", this.fontSize) 
    this.renderer.setStyle(this.elem.nativeElement, "background", this.background || '#ccc') 
    this.renderer.setStyle(this.elem.nativeElement, "padding", '10px 20px') 
    this.renderer.setStyle(this.elem.nativeElement, "width", this.width ) 


    this.renderer.addClass(this.elem.nativeElement, "buttton") 
    

  }

    @HostListener("mouseover")
    onMouseOver(){
      this.renderer.setStyle(this.elem.nativeElement, "color", this._color.lightMaroon) 
      this.renderer.setStyle(this.elem.nativeElement, "background", this._color.lightPurple)  
    }

    @HostListener("mouseleave")
    onMouseLeave(){
      this.renderer.setStyle(this.elem.nativeElement, "color", this.color)
      this.renderer.setStyle(this.elem.nativeElement, "background", this.background || '#ccc') 
    }
    @HostListener("click")
    clickMe(){
      this.renderer.setStyle(this.elem.nativeElement, "background", this._color.orange)  
    }



}
