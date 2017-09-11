class Vector {
  /**
   * Create a vector
   * @param  {number} x The x component
   * @param  {number} y The y component
   * @param  {number} z The z component
   * @param  {number} w The w component
   * @return {number}   The resulting vector
   */


  constructor (x, y, z, w) {

  this.data = [x,y,z,w];

  }

  /**
   * Returns the x component of the vector
   * @return {number} The x component of the vector
   */
  get x() {
    return this.data[0];
  }

  /**
   * Returns the y component of the vector
   * @return {number} The y component of the vector
   */
  get y() {
    return this.data[1];
  }

  /**
   * Returns the z component of the vector
   * @return {number} The z component of the vector
   */
  get z() {
    return this.data[2];
  }

  /**
   * Returns the w component of the vector
   * @return {number} The w component of the vector
   */
  get w() {
    return this.data[3];
  }

  /**
   * Creates a new vector with the scalar/vector added
   * @param {(number|Vector)} other The scalar/vector to add
   */
  add(other, scalar) {
    this.data[0] = data[0] * scalar + other.x;
    this.data[1] = data[1] * scalar + other.y;
    this.data[2] = data[2] * scalar + other.z;
    return this;
  }

  /**
   * Creates a new vector with the scalar/vector subtracted
   * @param {(number|Vector)} other The scalar/vector to subtract
   */
  sub(other) {
    return new Vector(this.data[0] - other.data[0], this.data[1] - other.data[1], this.data[2] - other.data[2], this.data[3] - other.data[3]);
  }

  /**
   * Creates a new vector with the scalar/vector piecewise multiplied
   * @param {(number|Vector)} other The scalar/vector to multiply
   */
  mul(other) {
    return new Vector(this.data[0] * other, this.data[1] * other, this.data[2] * other, this.data[3] * other);
  }

  /**
   * Creates a new vector with the scalar/vector piecewise divided
   * @param {(number|Vector)} other The scalar/vector to divide
   */
  div(other) {
    other = 1/other;
            return new Vector(this.data[0] * other, this.data[1] * other, this.data[2] * other, this.data[3] * other);
  }

  /**
   * Dot product
   * @param {Vector} other The vector to calculate the dot product with
   */
  dot(other) {
   return (this.data[0] * other.data[0] + this.data[1] * other.data[1] + this.data[2] * other.data[2]);
  }


  /**
   * Cross product
   * @param {Vector} other The vector to calculate the cross product with
   */
  cross(other) {
      Math.cross(other, other)

  }

  /**
   * Returns an array representation of the vector
   * @return {Array} An array representation.
   */
  valueOf() {
    floats = [];
    if (floats === null) {
                floats = new float[3];
            }
            floats[0] = this.data[0];
            floats[1] = this.data[1];
            floats[2] = this.data[2];
            return floats;
  }

  /**
   * Creates a new vector by normalising the vector
   * @return {Vector} A vector with length 1
   */
  normalised() {
    var length = length();
    //        if (length != 0) {
    //            return divide(length);
    //        }
    //
    //        return divide(1);
            var length = this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2];
            if (length != 1 && length != 0){
                length = 1.0 / Math.sqrt(length);
                return new Vector(this.data[0] * length,this.data[1] * length, this.data[2] * length, this.data[3] * length);
            }
            return clone();
  }

  /**
   * Compares the vector to another
   * @param  {Vector} other The vector to compare to.
   * @return {Boolean}       True if the vectors carry equal numbers. The fourth element may be both equivalent to undefined to still return true.
   */
  equals(other) {
    return (
          Math.abs(this.data[0] - other.data[0]) <= Number.EPSILON &&
          Math.abs(this.data[1] - other.data[1]) <= Number.EPSILON &&
          Math.abs(this.data[2] - other.data[2]) <= Number.EPSILON &&
          ((!this.data[3] && !other.data[3]) || Math.abs(this.data[3] - other.data[3]) <= Number.EPSILON)
        );
  }

  /**
   * Calculates the length of the vector
   * @return {number} Length of the vector
   */
  get length() {
    return Math.sqrt(lengthSquared());
  }

  public lengthSquared() {
    return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2];
  }
}
