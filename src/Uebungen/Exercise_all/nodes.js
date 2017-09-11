class Node {
    /**
     * Accepts a visitor according to the visitor pattern
     * @param  {visitor} visitor The visitor
     */
    accept(visitor)  {
    }
}

class GroupNode extends Node {
    /**
     * Constructor
     * @param  {Matrix} mat A matrix describing the node's transformation
     */
    constructor(mat) {
        super();
        this.matrix = mat;
        // TODO
    }

    /**
     * Accepts a visitor according to the visitor pattern
     * @param  {visitor} visitor The visitor
     */
    accept(visitor)  {
        // TODO
    }

    /**
     * Adds a child node
     * @param {Node} childNode The child node to add
     */
    add(childNode) {
        // TODO
    }
}

class SphereNode extends Node {
    /**
     * Creates a new Sphere with center and radius
     * @param  {Vector} center The center of the Sphere
     * @param  {number} radius The radius of the Sphere
     */
    constructor(center, radius, color) {
        super();
        this.center = center;
        this.radius = radius;
        this.color = color;
    }

    /**
     * Accepts a visitor according to the visitor pattern
     * @param  {visitor} visitor The visitor
     */
    accept(visitor) {
        // TODO
    }
}
