class Vector {
  /**
   * Create a vector
   * @param  {number} x The x component
   * @param  {number} y The y component
   * @param  {number} z The z component
   * @param  {number} w The w component
   * @return {number}   The resulting vector
   */
   float x;
   float y;
   float z;


  public vector (x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }

  /**
   * Returns the x component of the vector
   * @return {number} The x component of the vector
   */
  get x() {
    return this.x;
  }

  /**
   * Returns the y component of the vector
   * @return {number} The y component of the vector
   */
  get y() {
    return this.y;
  }

  /**
   * Returns the z component of the vector
   * @return {number} The z component of the vector
   */
  get z() {
    return this.z;
  }

  /**
   * Returns the w component of the vector
   * @return {number} The w component of the vector
   */
  get w() {
    return this.w;
  }

  /**
   * Creates a new vector with the scalar/vector added
   * @param {(number|Vector)} other The scalar/vector to add
   */
  add(other, scalar) {
    this.x = x * scalar + other.x;
    this.y = y * scalar + other.y;
    this.z = z * scalar + other.z;
    return this;
  }

  /**
   * Creates a new vector with the scalar/vector subtracted
   * @param {(number|Vector)} other The scalar/vector to subtract
   */
  sub(other) {
    return new vector(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  /**
   * Creates a new vector with the scalar/vector piecewise multiplied
   * @param {(number|Vector)} other The scalar/vector to multiply
   */
  mul(other) {
    return new vector(this.x * other, this.y * other, this.z * other);
  }

  /**
   * Creates a new vector with the scalar/vector piecewise divided
   * @param {(number|Vector)} other The scalar/vector to divide
   */
  div(other) {
    other = 1f/other;
            return new vector(this.x * other, this.y * other, this.z * other);
  }

  /**
   * Dot product
   * @param {Vector} other The vector to calculate the dot product with
   */
  dot(other) {
   return (this.x * other.x + this.y * other.y + this.z * other.z);
  }


  /**
   * Cross product
   * @param {Vector} other The vector to calculate the cross product with
   */
  cross(other) {
    return cross(other, null);
  }

  /**
   * Returns an array representation of the vector
   * @return {Array} An array representation.
   */
  valueOf() {
    float[] floats;
    if (floats == null) {
                floats = new float[3];
            }
            floats[0] = this.x;
            floats[1] = this.y;
            floats[2] = this.z;
            return floats;
  }

  /**
   * Creates a new vector by normalising the vector
   * @return {Vector} A vector with length 1
   */
  normalised() {
    float length = length();
    //        if (length != 0) {
    //            return divide(length);
    //        }
    //
    //        return divide(1);
            float length = this.x * this.x + this.y * this.y + this.z * this.z;
            if (length != 1f && length != 0f){
                length = 1.0f / FastMath.sqrt(length);
                return new vector(this.x * length,this.y * length, this.z * length);
            }
            return clone();
  }

  /**
   * Compares the vector to another
   * @param  {Vector} other The vector to compare to.
   * @return {Boolean}       True if the vectors carry equal numbers. The fourth element may be both equivalent to undefined to still return true.
   */
  equals(other) {
    if (!(other instanceof vector)) { return false; }

            if (this == other) { return true; }

            vector comp = (vector) other;
            if (Float.compare(this.x,comp.x) != 0) return false;
            if (Float.compare(this.y,comp.y) != 0) return false;
            if (Float.compare(this.z,comp.z) != 0) return false;
            return true;
  }

  /**
   * Calculates the length of the vector
   * @return {number} Length of the vector
   */
  get length() {
    return FastMath.sqrt(lengthSquared());
  }

  public float lengthSquared() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
}
