import { Review } from '../types/types';

export const reviews: Review[] = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the uniquelightness of Amsterdam.',
    'date': '2010-08-08T14:13:56.569Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/avatar-max.jpg',
      'id': 4,
      'isPro': false,
      'name': 'Max',
    },
  },
  {
    'comment': 'Lorem must be gone!!!',
    'date': '2019-05-08T14:13:56.569Z',
    'id': 2,
    'rating': 2,
    'user': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 3,
      'isPro': false,
      'name': 'Angelina',
    },
  },
];
