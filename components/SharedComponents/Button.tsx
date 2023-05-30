import React from 'react';

export type ButtonTypeI = 'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'DARK' | 'LINK';
export type ButtonSizeT = 'xs' | 'sm' | 'md' | 'lg' | 'fit';
export type ButtonPropsI = {
  label?: string;
  type?: ButtonTypeI;
  disabled?: boolean;
  className?: string;
  size?: ButtonSizeT;
  fullWidth?: boolean; //to make width of button full.Will not work for size="fit"
  loading?: boolean;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, ...restProps: any) => void;

  ref?: any;
  noRing?: boolean;
};

type ButtonEntityT = {
  button: string;
  icon: string;
};
const getDefaultStyle: Record<ButtonTypeI, ButtonEntityT> = {
  SECONDARY: {
    button: ` tracking-tight bg-white outline-1 outline outline-gray-500 outline-offset-[-1px] text-gray-900 active:bg-gray-300 shadow-depth1 hover:bg-gray-200 transition duration-150 active:ring-0 active:ring-offset-0 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`,
    icon: `text-gray-600`,
  },
  SUCCESS: {
    button: ` tracking-tight bg-green-500 text-white outline-0 hover:bg-green-700 active:bg-green-900 shadow-CTA transition duration-150 active:ring-0 active:ring-offset-0 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`,
    icon: `text-white`,
  },
  DANGER: {
    button: ` tracking-tight bg-red-600 text-white outline-0 hover:bg-red-700 active:bg-red-900 shadow-CTA transition duration-150 active:ring-0 active:ring-offset-0 focus:ring-2 focus:ring-red-400 focus:ring-offset-2`,
    icon: `text-white`,
  },
  LINK: {
    button: ` tracking-tight text-blue-600 outline-0 hover:text-blue-800 active:text-blue-900 hover:underline hover:underline-offset-4 hover:decoration-2 transition duration-150 active:ring-0 active:ring-offset-0 `,
    icon: `text-blue-600`,
  },
  DARK: {
    button: ` tracking-tight text-white outline-0 bg-gray-700 hover:bg-gray-800 active:bg-gray-900 shadow-CTA transition duration-150 active:ring-0 active:ring-offset-0 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1`,
    icon: `text-white`,
  },
  PRIMARY: {
    button: `tracking-tight bg-blue-500 outline-0 text-white hover:bg-blue-700 active:bg-blue-900 shadow-CTA transition duration-150 active:ring-0 active:ring-offset-0 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`,
    icon: `text-white`,
  },
};

const getDefaultSize: Record<ButtonSizeT, ButtonEntityT> = {
  xs: { button: `p-1.5 px-2.5`, icon: ` h-4 w-4` },
  sm: { button: `py-2 px-3`, icon: ` h-5 w-5 ` },
  md: { button: `py-2.5 px-4`, icon: ` h-6 w-6 ` },
  lg: { button: `py-3 px-5`, icon: ` h-8 w-8 ` },
  fit: { button: `h-fit w-fit p-1.5 px-2`, icon: ` h-4 w-4 ` },
};

// eslint-disable-next-line react/display-name
export const Button: React.FC<ButtonPropsI> = React.memo(
  React.forwardRef((props, ref?: any) => {
    const {
      label,
      loading,
      id,
      fullWidth,
      disabled,
      className,
      size = 'fit',
      type = 'PRIMARY',

      noRing,
      onClick,
    } = props;

    return (
      <button
        type={'button'}
        ref={ref}
        onClick={onClick}
        disabled={disabled || loading}
        id={id || 'Button'}
        className={` ${noRing ? '!focus:ring-0 !ring-0' : ''} ${disabled || loading ? 'cursor-not-allowed' : ''} ${
          label && type !== 'LINK' ? getDefaultSize[size]?.button : 'p-1'
        } ${fullWidth ? 'w-full' : ''}  flex space-x-1  items-center justify-center min-w-fit rounded   ${
          getDefaultStyle[type]?.button || getDefaultStyle['PRIMARY'].button
        }  ${className || ''} `}>
        {loading ? (
          <span className={`${!label ? 'm-1.5' : ''} h-6 w-6`}>
            <LoaderSvg type={type} />
          </span>
        ) : null}

        {label && <p className="w-fit text-inherit tracking-wide capitalize">{label}</p>}
      </button>
    );
  }),
);

type LoaderSvgPropsT = { type: ButtonTypeI; className?: string; height?: string; width?: string };
export const LoaderSvg = (props: LoaderSvgPropsT) => {
  return (
    <svg
      className={`${props?.className || ''} animate-spin ${props?.height || 'h-full'}  ${props?.width || 'w-full'}  ${
        props.type == 'SECONDARY' ? 'text-gray-800' : 'text-white'
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
};
