/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import { StereoScope as StereoScope } from './components/stereo-scope/stereo-scope';

interface HTMLStereoScopeElement extends StereoScope, HTMLElement {
}
declare var HTMLStereoScopeElement: {
  prototype: HTMLStereoScopeElement;
  new (): HTMLStereoScopeElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "stereo-scope": HTMLStereoScopeElement;
  }
  interface ElementTagNameMap {
      "stereo-scope": HTMLStereoScopeElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "stereo-scope": JSXElements.StereoScopeAttributes;
      }
  }
  namespace JSXElements {
      export interface StereoScopeAttributes extends HTMLAttributes {
        
          first?: any,
          last?: any,
          showSpeedRange?: any,
          imageOne?: any,
          imageTwo?: any
      }
  }
}

