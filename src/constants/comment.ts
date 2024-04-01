import type { Comment } from '@/models/comment.interface.ts'

const Comments: Comment[] = [
  {
    id: 0,
    title:
      '“A real sense of community, nurtured”\
		',
    comment:
      'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
    rating: 5,
    name: 'Olga',
    place: 'Weave Studios – Kai Tak',
    pathImage: '/src/assets/images/comments/comment-3.jpg'
  },
  {
    id: 1,
    title:
      '“The facilities are superb. Clean, slick, bright.”\
			',
    comment:
      'A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
    rating: 5,
    name: 'Thomas',
    place: 'Weave Studios – Olympic',
    pathImage: '/src/assets/images/comments/comment-2.jpg'
  },
  {
    id: 2,
    title:
      '“A real sense of community, nurtured”\
			',
    comment:
      'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
    rating: 5,
    name: 'Eliot',
    place: 'Weave Studios – Kai Tak',
    pathImage: '/src/assets/images/comments/comment-1.jpg'
  }
]
export default Comments
