import React, { useState, useEffect } from "react";
import { SubSubtitle, Subtitle, Title } from "./Know.styles";
import { useTransition, animated } from "react-spring";

interface Props {
start:number,
scend:number,
subString?:string,
delay:number,
description?:string,
}

export const ListItem = ({ subString, description, start, delay, scend }: Props) => {
    const x =
    [
        {
            fig: start,
            op: {
                range: [
                    0.75,
                    1,
                ],
                output: [
                    0,
                    1,
                ],
            },
            trans: {
                range: [
                    0.75,
                    1,
                ],
                output: [
                    -40,
                    0,
                ],
                extrapolate: "clamp",
            },
        },
        {
            fig: scend,
            op: {
                range: [
                    0.25,
                    0.5,
                ],
                output: [
                    0,
                    1,
                ],
            },
            trans: {
                range: [
                    0.25,
                    0.5,
                ],
                output: [
                    -40,
                    0,
                ],
                extrapolate: "clamp",
            },
        },

    ];
      const [items, setItems] = useState(x);
      const transitions = useTransition(items, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 100 + delay * 100,
        config: { frequency: 1 },
    });
      useEffect(() => {
        if (items.length === 0) {
          setTimeout(() => {
            setItems(x);
          }, 200);
        }
      }, [items]);
    return (
        <div className="p-2">

<div style={{ display: "flex" }}>
      {transitions(({ opacity }, item) => (
        <animated.div
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to((item.trans) as any)
              .to(y => `translate3d(0,${y}px,0)`),
          }}>
          <Title >{item.fig}</Title>
        </animated.div>
      ))}
    </div>
        <Subtitle>{subString}</Subtitle>
        <SubSubtitle>{description}</SubSubtitle>
      </div>
    );
};
