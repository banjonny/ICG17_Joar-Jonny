class Sphere {
  /**
   * Creates a new Sphere with center and radius
   * @param  {Vector} center The center of the Sphere
   * @param  {number} radius The radius of the Sphere
   */

  public point center;
  public double radius;

  public sphere(center, radius) {
    this.center = center;
    this.radius = radius;

  }

  /**
   * Calculates the intersection of the sphere with the given ray
   * @param  {Ray} ray The ray to intersect with
   * @return {number}     The t for the intersection closest to the ray origin. Null if there is no intersection.
   */
  intersect(ray) {
    vector tmp;
        double A,B,C,d,t1,t2,t;

        tmp = Vector.subtract(ray.Origin, Centre);
        A = ray.Direction.squarednorm();
        B = Vector.dot(tmp, ray.Direction);
        C = tmp.squarednorm() - (Radius*Radius);


        if((d=((B*B)-(A*C))) < 0.0) return -1.0; // -1.0 is "false" value

        d = Math.sqrt(d);
        t = (-B-d)/A;
        return t;
  }
}
