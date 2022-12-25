export const HAPPY_CLICKED = 'happy';
export const SAD_CLICKED = 'sad';

export const happyclicked = (count: number) => ({
  type: HAPPY_CLICKED,
  payload: count,
});

export const sadclicked = (count: number) => ({
  type: SAD_CLICKED,
  payload: count,
});
