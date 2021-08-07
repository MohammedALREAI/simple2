import React from "react";

interface IState{
count:number
}

interface IProps{
    title:string,
    value:number
}
export class Simple extends React.Component<IProps, IState> {
    state = { count: 0 };
    increment = (amt: number) => {
        this.setState((state) => ({
          count: state.count + amt,
        }));
      };

    render() {
        return (
            <div onClick={() => this.increment(this.props.value)}>
              {this.props.title} {this.state.count}
            </div>
          );
    }
}
