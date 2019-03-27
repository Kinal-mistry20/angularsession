import { Component, OnInit } from '@angular/core';
import{myAnimation, keyframe, fadeAnimation, slideToggle, queryAnimation, queryCustomAnimation,lightroom } from "../animations"

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [myAnimation, keyframe, fadeAnimation, slideToggle, queryAnimation, queryCustomAnimation,lightroom ]
})
export class AnimationComponent implements OnInit {

  constructor() { }
  items = ['seo', 'ppc', 'smo', 'design']
  status: boolean = true
  keyFrameStatus: boolean = true
  fadeState : boolean = true
  slideState: string = "slideDown"
  switchState: string = "on" 
  ngOnInit() {
  }


  clickMe()
  {
    this.status = !this.status;
  }

  keyFrameAnimation()
  {
    this.keyFrameStatus = !this.keyFrameStatus;
  }

  fadeAnimation()
  {
   // this.fadeState = this.fadeState == 'fadeOut' ? 'fadeIn' : 'fadeOut' 
   this.fadeState = !this.fadeState  
  }

  slideAnimation(){
    this.slideState = this.slideState == 'slideDown' ? 'slideUp' : 'slideDown'
  }

  removeItem(){
    this.items.pop();
  }
  lightRoomAnimation(){
    this.switchState = this.switchState == 'on' ? 'off' : 'on'
  }
  
  fadeAnimationStart(){
    console.log('Yes, Animation Start')
  }

  fadeAnimationDone(){
    console.log('Yes, Animation Done')
  }

  
}
