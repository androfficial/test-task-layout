import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface IMainTooltip {
  children: string;
  title: string;
}

export const MainTooltip = ({ children }: IMainTooltip) => {
  const [isOverflowed, setIsOverflow] = useState(false);
  const textElementRef = useRef<HTMLDivElement>(null);

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip} `]: {
      fontFamily: 'inherit',
      fontSize: '16px',
      lineHeight: '162%',
      fontWeight: '400',
      maxWidth: '285px',
      textAlign: 'center',
      paddingLeft: '16px',
      paddingRight: '16px',
      backgroundColor: '#232f34',
      color: '#fff',
    },
    [`& .${tooltipClasses.arrow} `]: {
      color: '#232F34',
    },
    [`& .${tooltipClasses.tooltipPlacementBottom} `]: {
      marginTop: '6px !important',
    },
  }));

  useEffect(() => {
    if (textElementRef.current) {
      setIsOverflow(
        textElementRef.current.scrollWidth > textElementRef.current.clientWidth
      );
    }
  }, []);

  return (
    <CustomTooltip
      title={children}
      disableHoverListener={!isOverflowed}
      disableFocusListener={!isOverflowed}
      placement='bottom'
      arrow
    >
      <div
        ref={textElementRef}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {children}
      </div>
    </CustomTooltip>
  );
};
