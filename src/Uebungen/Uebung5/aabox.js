class AABox {

    /**
     * Creates an axis aligned box
     * @param  {Vector} minPoint Minimum Point
     * @param  {Vector} maxPoint Maximum Point
     * @param  {Vector} color    Describing the color of the cube
     */
    constructor(minPoint, maxPoint, color) {
        this.color = color;
    /*
      7----6
     /|   /|   6 = maxPoint
    3----2 |   0 = minPoint
    | 4--|-5
    |/   |/
    0----1
     */
        this.vertices = [
        new Vector(minPoint.x, maxPoint.y, minPoint.z, 1),
            new Vector(maxPoint.x, maxPoint.y, minPoint.z, 1),
            new Vector(maxPoint.x, minPoint.y, minPoint.z, 1),
            new Vector(minPoint.x, minPoint.y, minPoint.z, 1),
            new Vector(minPoint.x, maxPoint.y, maxPoint.z, 1),
            new Vector(maxPoint.x, maxPoint.y, maxPoint.z, 1),
            new Vector(maxPoint.x, minPoint.y, maxPoint.z, 1),
            new Vector(minPoint.x, minPoint.y, maxPoint.z, 1),

    ];
        this.indices = [
        0, 1, 2, 3,
            1, 5, 6, 2,
            4, 0, 3, 7,
            3, 2, 6, 7,
            5, 4, 7, 6,
            0, 4, 5, 1
    ];
    }

    /**
     * Calculates the intersection of the AAbox with the given ray
     * @param  {Ray} ray The ray to intersect with
     * @return {Intersection}     The intersection if there is one, null if there is none
     */
    intersect(ray) {
        // TODO
    }

}
