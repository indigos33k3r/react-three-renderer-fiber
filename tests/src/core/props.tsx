import * as React from "react";
import {Object3D} from "three";
import ReactThreeRenderer from "../../../src/core/renderer/reactThreeRenderer";

describe("props", () => {
  const target = new Object3D();

  afterEach("cleanup", () => {
    ReactThreeRenderer.unmountComponentAtNode(target);
  });

  it("should be updated", (done) => {
    ReactThreeRenderer.render(<object3D
      name={"test-name"}
    />, target);

    ReactThreeRenderer.render(<object3D
      name={"updated-name"}
    />, target);

    done();
  });
});