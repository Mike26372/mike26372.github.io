import svgStyles from '../SvgStyles.css';

const LanguageSVG = props => {
  let svgStyle = `pure-u-1 ${svgStyles.small}`;

  return (
    <div className={svgStyle}>
      <svg
        height="100%"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: '1.41421'
        }}
        width="100%"
        version="1.1"
        viewBox="0 0 800 800"
        xmlSpace="preserve"
      >
        <text
          style={{
            fontFamily: "'ArialMT', 'Arial', sans-serif",
            fontSize: '553.327px'
          }}
          x="0px"
          y="539.547px"
        >
          &lt;/&gt;
        </text>
      </svg>
    </div>
  );
};

export default LanguageSVG;
