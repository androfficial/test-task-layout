// import { styled, Tooltip, tooltipClasses } from '@mui/material';
// import { useEffect, useRef, useState } from 'react';

// const OverflowTip = ({ children }) => {
//   const [isOverflowed, setIsOverflow] = useState(false);
//   const textElementRef = useRef<HTMLElement>();

//   useEffect(() => {
//     setIsOverflow(
//       textElementRef.current.scrollWidth > textElementRef.current.clientWidth
//     );
//   }, []);

//   return (
//     <Tooltip title={children} disableHoverListener={!isOverflowed}>
//       <div
//         ref={textElementRef}
//         style={{
//           whiteSpace: 'nowrap',
//           overflow: 'hidden',
//           textOverflow: 'ellipsis',
//         }}
//       >
//         {children}
//       </div>
//     </Tooltip>
//   );
// };

// export default OverflowTip;

// // const mainTooltip = styled(Tooltip)({
// //   [`& .${tooltipClasses.tooltip} `]: {
// //     fontFamily: 'inherit',
// //     fontSize: '16px',
// //     lineHeight: '162%',
// //     fontWeight: '400',
// //     maxWidth: '285px',
// //     paddingLeft: '16px',
// //     paddingRight: '16px',
// //     backgroundColor: '#232f34',
// //     color: '#fff',
// //   },
// //   [`& .${tooltipClasses.arrow} `]: {
// //     color: '#232F34',
// //   },
// //   [`& .${tooltipClasses.tooltipPlacementBottom} `]: {
// //     marginTop: '6px !important',
// //   },
// // });
