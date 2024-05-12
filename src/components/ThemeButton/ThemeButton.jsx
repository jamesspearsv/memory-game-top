import Moon from '../../assets/moon.svg';
import Sun from '../../assets/sun.svg';

export function ThemeButton({ isDarkTheme, setIsDarkTheme }) {
  return (
    <button
      className='button'
      id='theme-button'
      onClick={() => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: '1/1',
        color: 'var(--color)',
      }}
    >
      <img src={isDarkTheme ? Moon : Sun} alt='' />
    </button>
  );
}
