class Visitor {
    visitGroupNode(node) {
    }

    visitSphereNode(node) {
    }
}

class RayVisitor extends Visitor{
    constructor(rootNode) {
        super();
        this.root = rootNode;
        // TODO
    }

    intersect(ray) {
        this.ray = ray;
        this.minIntersection = new Intersection();
        this.minObj = null;
        this.root.accept(this);
        if(this.minObj){
            // Optional: Introduce lighting
            //return new Vector(0, 0, 0, 1);
            return this.minObj.color;
        }
    }

    visitGroupNode(node) {
        // TODO
    }

    visitSphereNode(node) {
        var mat = Matrix.identity();
        // TODO
        var x0 = this.ray.origin.sub(mat.mul(node.center)); // if Sphere is in origin use ray.origin as x0
        var b = x0.dot(this.ray.direction);
        var c = x0.dot(x0) - node.radius * node.radius;
        var intersection;
        if(b*b-c < 0)return;
        else if(b*b-c == 0){
            intersection = new Intersection(-b);
        } else {
            var t = Math.min(-b+Math.sqrt(b*b-c), -b-Math.sqrt(b*b-c));
            var point = this.ray.origin.add(this.ray.direction.mul(t));
            intersection = new Intersection(t, point, point.sub(mat.mul(node.center)).normalised());
        }
        if(intersection.closerThan(this.minIntersection)) {
            this.minIntersection = intersection;
            this.minObj = node;
        }
    }
}
