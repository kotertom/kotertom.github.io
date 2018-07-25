import {Color} from 'csstype';
import * as React from 'react';

export interface IrregularBoxProps extends React.DetailedHTMLProps < React.HTMLAttributes < HTMLDivElement >,
HTMLDivElement > {
    irregularityHeight: any;
    innerClassName: string;
}
export const IrregularBox = ({
    irregularityHeight,
    innerClassName,
    ...props
} : IrregularBoxProps) => (
    <div {...props}>
        <svg
            viewBox="0 0 1 1"
            width="100%"
            height={irregularityHeight}
            preserveAspectRatio="none"
            style={{
            marginBottom: '-1px'
        }}>
            <RandomTriangle from={0.1} to={0.3} className={innerClassName}/>
        </svg>
        <div className={innerClassName} style={{
            width: '100%'
        }}>
            {props.children}
        </div>
        <svg
            viewBox="0 0 1 1"
            width="100%"
            height={irregularityHeight}
            style={{
            transform: 'scaleY(-1)'
        }}
            preserveAspectRatio="none">
            <RandomTriangle from={0.1} to={0.3} className={innerClassName}/>
        </svg>
    </div>
);

type RandomTriangleProps = {
    from: number,
    to: number
} & React.SVGProps<SVGPolygonElement>;

const RandomLeftTriangle = ({
    from,
    to,
    ...props
} : RandomTriangleProps) => <polygon points={`0,1 1,1 0,${from + (to - from) * Math.random()}`} {...props}/>;

const RandomRightTriangle = ({
    from,
    to,
    ...props
} : RandomTriangleProps) => <polygon points={`0,1 1,1 1,${from + (to - from) * Math.random()}`} {...props}/>;

const RandomTriangle = (props : RandomTriangleProps) => (Math.random() > 0.5
    ? RandomLeftTriangle
    : RandomRightTriangle)(props);
