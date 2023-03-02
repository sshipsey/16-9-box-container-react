import { style } from '@vanilla-extract/css';

export const backdrop = style({
  boxSizing: 'border-box',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  padding: '3rem',
  top: 0,
  left: 0,
  zIndex: 1,
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const card = style({
  maxWidth: '1152px',
  width: '100%',
  height: '100%',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  background: 'lightgray',
  overflow: 'hidden'
});

export const inner = style({
  background: '#9d71ab',
  aspectRatio: '16 / 9',
  position: 'relative',
  fontSize: '2rem',
  fontFamily: 'sans-serif',
  display: 'flex'
});

export const video = style({
  color: '#000000',
  height: '100%',
  width: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const tall = style({
  height: 'auto',
  maxHeight: '100%',
  width: '100%'
});

export const wide = style({
  height: '100%',
  width: 'auto',
  maxWidth: '100%'
})