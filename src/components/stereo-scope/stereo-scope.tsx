import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'stereo-scope',
  styleUrl: 'stereo-scope.scss'
})
export class StereoScope {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
