import Star from "./Star.jsx";
import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}

const starContainerStyle = {
  display: 'flex',
}

const StarRating = ({ 
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) => {

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTemRating] = useState(0);

  const handleRating = rating => {
    setRating(rating)
    onSetRating(rating)
  }

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color,
    fontSize: `${size / 1.5}px`
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRating}, (_, i) => (
          <Star 
            key={i} 
            full={tempRating ? tempRating >= i+1 : rating >= i + 1} 
            onRate={() => handleRating(i+1)}
            onHoverIn={() => setTemRating(i + 1)}
            onHoverOut={() => setTemRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};