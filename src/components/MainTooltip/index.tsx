import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

const MainTooltip = styled(({ className, ...props }: TooltipProps) => (
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

export default MainTooltip;