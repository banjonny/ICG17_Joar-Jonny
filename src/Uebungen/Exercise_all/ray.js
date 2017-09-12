class Ray {
    /**
     * Creates a new ray with origin and direction
     * @param  {Vector} origin    The origin of the Ray
     * @param  {Vector} direction The direction of the Ray
     */
    constructor(origin, direction) {
        this.origin = origin;
        this.direction = direction;
    }

    /**
     * Creates a ray from the camera through the image plane. The plane is located at (0, 0, -1) with x ∈ [-1,1] and y ∈ [-1, 1]
     * @param  {number} width  Width of the canvas
     * @param  {number} height Height of the canvas
     * @param  {number} xpos   x-position of pixel in canvas
     * @param  {number} ypos   y-position of pixel in canvas
     * @param  {Vector} camera Camera-position
     * @return {Ray}        The resulting Ray
     */
    static makeRay(width, height, xpos, ypos, camera) {
        var pos = new Vector(xpos/width*2-1, ypos/height*2-1, xpos, ypos);
        return new Ray(camera, pos.sub(camera).normalised());
    }
}
