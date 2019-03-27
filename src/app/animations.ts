import { trigger, transition, style, animate, keyframes, state, query, stagger, group} from '@angular/animations';

export const myAnimation = trigger('myAnimation', [
    transition(':enter', [ 
      style({ 
        opacity: 0,
        background: 'red',
        transform: 'translateX(-30px) translateY(-30px)'
      }),
      animate ('1s ease-in')
     ]),
     transition(':leave',[
       animate('1s', style({
         background:'blue',
         transform: 'translateX(100px) translateY(100px)',
         opacity: 0
       }))
     ])
  ])

  export const keyframe =  trigger('keyframe',[
    transition(':enter', [ 
      style({transform: 'translateX(-100%)'}),
      animate ('1s ease-in', keyframes([
        style({ opacity:0, transform: 'translateX(0px)', offset: 0}),
        style({ opacity:1, transform: 'translateX(30px)', offset: 0.5}),
        style({ opacity:1, transform: 'translateX(0px)', offset: 1}),
      
      ]))
     ]),
     transition(':leave',[
       animate('1s', keyframes([
        style({ opacity:1, transform: 'translateX(0px)', offset: 0}),
        style({ opacity:1, transform: 'translateX(-30px)', offset: 0.5}),
        style({ opacity:0, transform: 'translateX(100%)', offset: 1}),
      ]) 
       )
     ])
  ])

  export const fadeAnimation =  trigger('fadeAnimation', [
    state('fadeIn', style({ opacity:1})),
    state('fadeOut', style({ opacity:0})),

    transition('fadeIn <=> fadeOut', [ animate('1s')] ),
 

  ])

  export const slideToggle =  trigger('slideToggle', [
    state('slideUp', style({ opacity:0, height:0})),
    state('slideDown', style({ opacity:1, height: '*'})),

    transition('slideUp <=> slideDown', [ animate('.5s')] ),

  ])

  export const queryAnimation =  trigger('queryAnimation', [
    transition('* => *', [
    
    query(':enter', style({ opacity:0, transform:'translateX(-30px)' }), {optional:true}),
    query(':enter', stagger('.5s', animate('.5s', keyframes([
      style({ opacity:0, transform:'translateX(0px)', offset: 0 }),
      style({ opacity:1, transform:'translateX(30px)', offset: 0.5 }),
      style({ opacity:1, transform:'translateX(0px)', offset: 1 })
    ]) ) ), {optional:true}),

    query(':leave', stagger('.5s', animate('.5s',  style({ opacity:0, transform:'translateX(100%)'}) ) ), {optional:true}),

  ])] )
  
  export const queryCustomAnimation = trigger('queryCustomAnimation', [
    transition('* => *', [
    
    query('.animate', style({ opacity:0, transform:'translateX(-30px)' }) ),
    query('.animate', stagger('.5s', animate('.5s', keyframes([
      style({ opacity:0, transform:'translateY(0px)', offset: 0 }),
      style({ opacity:1, transform:'translateY(30px)', offset: 0.5 }),
      style({ opacity:1, transform:'translateY(0px)', offset: 1 })
    ]) ) ))


  ])] )

  export const lightroom = trigger('lightroom', [
    state('on', style({ background:"white" })),
    state('off', style({ background:"black" })),
    
    transition('on => off', group([
      animate('4s', style({ background:"red"})),
      animate('4s', style({ transform:'rotateY(360deg)',})),
      animate('4s', style({ color:'yellow',})),
    ]) ),


    transition('off => on', group([
      animate('4s', style({ background:"blue"})),
      animate('4s', style({ transform:'rotateX(360deg)',})),
      animate('4s', style({ color:'cyan',})),
    ]) )

  ])

