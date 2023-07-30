"use client";
import { InView } from "react-intersection-observer";

const InViewWrapper = ({
  as: WrapperComponent,
  children,
  inViewStyles,
  outOfViewStyles,
  styles,
  rootMargin,
}) => {
  return (
    <InView rootMargin={rootMargin}>
      {({ inView, ref }) => {
        if (WrapperComponent)
          return (
            <WrapperComponent
              ref={ref}
              className={`${styles} ${inView ? inViewStyles : outOfViewStyles}`}
            >
              {children}
            </WrapperComponent>
          );
        return (
          <div
            ref={ref}
            className={`${styles} ${inView ? inViewStyles : outOfViewStyles}`}
          >
            {children}
          </div>
        );
      }}
    </InView>
  );
};

export default InViewWrapper;
