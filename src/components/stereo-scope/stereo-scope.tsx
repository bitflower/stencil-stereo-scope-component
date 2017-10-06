import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'stereo-scope',
  styleUrl: 'stereo-scope.scss'
})
export class StereoScope {

  @State() speed: number = 11;
  @State() showImage: number = 0;

  speedHalf: number = Math.floor(this.speed / 2);
  i: number = 0;

  @Prop() showSpeedRange: string = 'false';
  @Prop() imageOne: string;
  @Prop() imageTwo: string;

  render() {
    return (
      <div>
        {this.showSpeedRange==='true' ? 
          <input 
            id="speed" 
            type="range" 
            value="15" 
            max="20" 
            min="2" 
            step="1" 
            onChange={(event: UIEvent) => this.speedChanged(event)} />:''
        }
        {this.showImage===0
          ? <img src={this.imageOne} />
          : <img src={this.imageTwo} />
        }
      </div>
    );
  }

  componentWillLoad() {
    // console.log('The component is about to be rendered');

    // this.preloadImage();
    // this.animateMe();
  }

  componentDidLoad() {
    // console.log('The component has been rendered');
    this.animateMe();
  }

  componentWillUpdate() {
    // console.log('The component will update');
  }

  /**
   * The component finished updating.
   *
   * Called after componentWillUpdate
   */
  componentDidUpdate() {
    // console.log('The component did update');
  }

  /**
   * The component did unload and the element will be destroyed.
   */
  componentDidUnload() {
    // console.log('The view has been removed from the DOM');
  }


  loadImage(url) {
    return new Promise(resolve => { let i = new Image(); i.onload = ()=>{resolve(i)}; i.src=url; });
  }

  speedChanged(e: UIEvent) {

     let speedRange: HTMLInputElement = e.target as HTMLInputElement;

      // console.info("speedChanged", e);
      this.speed = parseInt(speedRange.value);
      this.speedHalf = Math.floor(this.speed / 2);
      this.i = 0;

  }

  animateMe() {

      // console.log('animateMe');

      // var i1 = {};
      // var i2 = {};

      let that = this;

      var i = 0;
      function animate() {

// console.log('animate');

         i += 1;

        if (i <= that.speedHalf) {
          that.showImage = 1;
        } else {
          that.showImage = 0;
        }

        if (i > that.speedHalf) {
          that.showImage = 1;
        } else {
          that.showImage = 0;
        }

        if (i >= that.speed) {
          i = 0;
        }

        window.requestAnimationFrame(animate);
      }

      animate();

  }

}
