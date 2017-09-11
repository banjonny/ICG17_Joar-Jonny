class Matrix {
    /**
     * Constructor of the matrix. Expects an array in row-major layout. Saves the data as column major internally.
     * @param  {Array.<Number>} mat Matrix values row major
     * @return {[type]}     [description]
     */
    constructor(mat){
        this.data = new Float32Array(16);
        for(var row = 0; row < 4; row++) {
            for(var col = 0; col < 4; col++) {
                this.data[row*4+col] = mat[col*4+row];
            }
        }
    }

    /**
     * Returns the value of the matrix at position row, col
     * @param  {Number} row The value's row
     * @param  {Number} col The value's column
     * @return {Number}     The requested value
     */
    getVal(row, col) {
        return this.data[col*4+row];
    }

    /**
     * Sets the value of the matrix at position row, col
     * @param {Number} row The value's row
     * @param {Number} val The value to set to
     * @param {Number} col The value's column
     */
    setVal(row, col, val) {
        this.data[col*4+row] = val;
    }

    /**
     * Returns a matrix that represents a translation
     * @param  {Vector} translation The translation vector that shall be expressed by the matrix
     * @return {Matrix}             The resulting translation matrix
     */
    static translation(translation) {
        // TODO
    }

    /**
     * Returns a matrix that represents a rotation. The rotation axis is either the x, y or z axis (either x, y, z is 1).
     * @param  {Vector} axis  The axis to rotate around
     * @param  {Number} angle The angle to rotate
     * @return {Matrix}       The resulting rotation matrix
     */
    static rotation(axis, angle) {
        // TODO
    }

    /**
     * Returns a matrix that represents a scaling
     * @param  {Vector} scale The amount to scale in each direction
     * @return {Matrix}       The resulting scaling matrix
     */
    static scaling(scale) {
        // TODO
    }

    /**
     * Constructs a lookat matrix
     * @param  {Vector} eye    The position of the viewer
     * @param  {Vector} center The position to look at
     * @param  {Vector} up     The up direction
     * @return {Matrix}        The resulting lookat matrix
     */
    static lookat(eye, center, up) {
        // TODO
    }

    /**
     * Constructs a new matrix that represents a projection normalisation transformation
     * @param  {Number} left   Camera-space left value of lower near point
     * @param  {Number} right  Camera-space right value of upper right far point
     * @param  {Number} bottom Camera-space bottom value of lower lower near point
     * @param  {Number} top    Camera-space top value of upper right far point
     * @param  {Number} near   Camera-space near value of lower lower near point
     * @param  {Number} far    Camera-space far value of upper right far point
     * @return {Matrix}        The rotation matrix
     */
    static frustrum(left, right, bottom, top, near, far) {
        // TODO
    }

    /**
     * Constructs a new matrix that represents a projection normalisation transformation.
     * @param  {Number} fovy   Field of view in y-direction
     * @param  {Number} aspect Aspect ratio between width and height
     * @param  {Number} near   Camera-space distance to near plane
     * @param  {Number} far    Camera-space distance to far plane
     * @return {Matrix}        The resulting matrix
     */
    static perspective(fovy, aspect, near, far) {
        // TODO
    }

    /**
     * Returns the identity matrix
     * @return {Matrix} A new identity matrix
     */
    static identity() {
        return new Matrix([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    /**
     * Matrix multiplication
     * @param  {Matrix|Vector} other The matrix or vector to multiplicate with
     * @return {Matrix|Vector}       The result of the multiplication this*other
     */
    mul(other) {
        if(other instanceof Matrix) {
            // TODO
        } else { // other is vector
            // TODO
        }
    }

    /**
     * Returns the transpose of this matrix
     * @return {Matrix} A new matrix that is the transposed of this
     */
    transpose() {
        // TODO
    }

    /**
     * Debug print to console
     */
    print() {
        for(var row = 0; row < 4; row++) {
            console.log("> " + this.getVal(row, 0) +
                "\t" + this.getVal(row, 1) +
                "\t" + this.getVal(row, 2) +
                "\t" + this.getVal(row, 3)
            );
        }
    }
}
