import { Color } from 'csstype';
import * as React from 'react';

export interface IrregularBoxProps extends React.DetailedHTMLProps < React.HTMLAttributes < HTMLDivElement >,
HTMLDivElement > {
    irregularityHeight: any;
}
export const IrregularBox = ({
    irregularityHeight,
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
            <RandomTriangle
                from={0.1}
                to={0.3}
                color={props.style && props.style.backgroundColor || 'black'}/>
        </svg>
        <div
            style={{
            backgroundColor: props.style && props.style.backgroundColor || 'black',
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
            <RandomTriangle
                from={0.1}
                to={0.3}
                color={props.style && props.style.backgroundColor || 'black'}/>
        </svg>
    </div>
);

const RandomLeftTriangle = ({from, to, color} : {
    from: number,
    to: number,
    color?: Color
}) => <polygon
    points={`0,1 1,1 0,${from + (to - from) * Math.random()}`}
    color={color}
    fill={color}/>;

const RandomRightTriangle = ({from, to, color} : {
    from: number,
    to: number,
    color?: Color
}) => <polygon
    points={`0,1 1,1 1,${from + (to - from) * Math.random()}`}
    color={color}
    fill={color}/>;

const RandomTriangle = (props : {
    from: number,
    to: number,
    color?: Color
}) => (Math.random() > 0.5
    ? RandomLeftTriangle
    : RandomRightTriangle)(props);
