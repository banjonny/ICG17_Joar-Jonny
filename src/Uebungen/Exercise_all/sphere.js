class Sphere {
  /**
   * Creates a new Sphere with center and radius
   * @param  {Vector} center The center of the Sphere
   * @param  {number} radius The radius of the Sphere
   */
  constructor(center, radius, color) {
    this.center = center;
    this.radius = radius;
    this.color = color;
  }

  /**
   * Calculates the intersection of the sphere with the given ray
   * @param  {Ray} ray The ray to intersect with
   * @return {Intersection}     The intersection if there is one, null if there is none
   */
  intersect(ray) {
    var x0 = ray.origin.sub(this.center); // if Sphere is in origin use ray.origin as x0
    var b = x0.dot(ray.direction);
    var c = x0.dot(x0) - this.radius * this.radius;
    if(b*b-c < 0)return null;
    else if(b*b-c == 0)return new Intersection(-b);
    else {
      var t = Math.min(-b+Math.sqrt(b*b-c), -b-Math.sqrt(b*b-c));
      var point = ray.origin.add(ray.direction.mul(t));
      return new Intersection(t, point, point.sub(this.center).normalised());
    }
  }
}
