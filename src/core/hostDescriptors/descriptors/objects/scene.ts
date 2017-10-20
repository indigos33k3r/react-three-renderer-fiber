import {Object3D, Scene, WebGLRenderer} from "three";
import {IElement} from "../../common/RefWrapper";
import {IObject3DProps, default as Object3DDescriptorBase} from "../../common/object3DBase";

type SceneParents = Object3D | WebGLRenderer;

export type SceneElementProps = IThreeElementPropsBase<Scene> & IObject3DProps;

export type SceneElement = IElement<Scene, SceneElementProps>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      scene: SceneElementProps;
    }
  }
}

class SceneDescriptor extends Object3DDescriptorBase<IObject3DProps, Scene, SceneParents> {
  public createInstance(props: IObject3DProps) {
    return new Scene();
  }

  public addedToParent(instance: Scene, parentInstance: SceneParents): void {
    if (parentInstance instanceof WebGLRenderer) {
      // no-op
    } else {
      super.addedToParent(instance, parentInstance);
    }
  }
}

export default SceneDescriptor;
