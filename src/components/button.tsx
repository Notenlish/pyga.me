import React from 'react';

interface ButtonProps {
  text: string;
  fontSize: string;
  link: string;
}

export default class Button extends React.Component<ButtonProps, any> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.link}>
        <div className="ml-0 mr-2 rounded-md bg-lime-700 p-3 font-bold duration-500 hover:bg-lime-900">
          <div className={`${this.props.fontSize}`}>{this.props.text}</div>
        </div>
      </a>
    );
  }
}
