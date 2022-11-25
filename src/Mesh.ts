import { mat4, mat3 } from 'gl-matrix'
import { Object3D } from './Object3D'
import { Geometry } from './Geometry'
import { Material } from './Material'

/**
 * Which primitive mode to render with.
 */
export type Mode = 'triangles' | 'points' | 'lines'

/**
 * Constructs a mesh object. Describes an object with geometry and material.
 */
export class Mesh extends Object3D {
  /**
   * World space transforms relative to the active camera.
   */
  readonly modelViewMatrix = mat4.create()
  /**
   * Normalized directional transforms. Useful for physics or lighting.
   */
  readonly normalMatrix = mat3.create()
  /**
   * Which {@link Mode} to render with. Default is `triangles`.
   */
  public mode: Mode = 'triangles'
  /**
   * The number of instances to render of this mesh. Default is `1`.
   */
  public instances = 1

  constructor(
    /**
     * A {@link Geometry} object describing the mesh's volume.
     */
    public geometry: Geometry = new Geometry(),
    /**
     * A {@link Material} object describing the mesh's visual behavior.
     */
    public material: Material = new Material(),
  ) {
    super()
  }
}
