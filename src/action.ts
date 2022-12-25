export const HAPPY_CLICKED = 'happy';
export const SAD_CLICKED = 'sad';

export const happyclicked = (count: number, when: Date) => ({
  type: HAPPY_CLICKED,
  payload: { count, when },
});

export const sadclicked = (count: number, when: Date) => ({
  type: SAD_CLICKED,
  payload: { count, when },
});
