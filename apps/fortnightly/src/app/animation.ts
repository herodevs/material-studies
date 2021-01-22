import { trigger, animate, transition, style, query } from '@angular/animations'

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    // Set a default  style for enter and leave
    query(
      ':enter, :leave',
      [
        style({
          position: 'fixed',
          width: '100%',
          opacity: 0,
          transform: 'scale(0.8)',
          transition: 'all ease-in .4s',
          maxWidth: '1600px',
          margin: '0 auto'
        }),
      ],
      { optional: true }
    ),
    // Animate the new page in
    query(
      ':enter',
      [
        animate(
          '600ms ease-in',
          style({
            opacity: 1,
            transform: 'scale(1)',
            transition: 'all ease-in .4s',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
])
