
// Refer to https://developer.mozilla.org/de/docs/Web/API/WebGL_API/Tutorial/Hinzuf%C3%BCgen_von_2D_Inhalten_in_einen_WebGL-Kontext
    class Shader {
    constructor(gl, vsId, fsId) {
        var fragmentShader = this.getShader(gl, fsId);
        var vertexShader = this.getShader(gl, vsId);

        // Create the shader program
        this.shaderProgram = gl.createProgram();
        gl.attachShader(this.shaderProgram, vertexShader);
        gl.attachShader(this.shaderProgram, fragmentShader);
        gl.linkProgram(this.shaderProgram);

        // If creating the shader program failed, alert
        if (!gl.getProgramParameter(this.shaderProgram, gl.LINK_STATUS)) {
            alert("Unable to initialize the shader program: " + gl.getProgramInfoLog(shader));
        }

        gl.useProgram(this.shaderProgram);
        this.gl = gl;
    }

    /**
     * Returns the attribute location of a variable in the shader program
     * @param  {string} name The name of the variable
     * @return {}      The variable's location
     */
    getAttributeLocation(name) {
        const attr = gl.getAttribLocation(this.shaderProgram, name);
        gl.enableVertexAttribArray(attr);
        return attr;
    }

    getShader(gl, id) {
        var shaderScript = document.getElementById(id);

        // Didn't find an element with the specified ID; abort.
        if (!shaderScript) {
            return null;
        }

        // Walk through the source element's children, building the
        // shader source string.
        var theSource = "";
        var currentChild = shaderScript.firstChild;

        while (currentChild) {
            if (currentChild.nodeType == 3) {
                theSource += currentChild.textContent;
            }
            currentChild = currentChild.nextSibling;
        }

        // Now figure out what type of shader script we have,
        // based on its MIME type.
        var shader;

        if (shaderScript.type == "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else if (shaderScript.type == "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else {
            return null;  // Unknown shader type
        }

        // Send the source to the shader object
        gl.shaderSource(shader, theSource);
        // Compile the shader program
        gl.compileShader(shader);

        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
    }

    /**
     * Returns an object that can be used to set a matrix on the GPU
     * @param  {string} name The name of the uniform to set
     * @return {UniformMatrix}      The resulting object
     */
    getUniformMatrix(name) {
        return new UniformMatrix(this.gl,
            this.gl.getUniformLocation(this.shaderProgram, name)
        );
    }
}

class UniformMatrix {
    constructor(gl, position) {
        this.gl = gl;
        this.position = position;
    }

    /**
     * Sends the given matrix to the GPU
     * @param {Matrix} matrix The matrix to send
     */
    set(matrix) {
        this.gl.uniformMatrix4fv(
            this.position,
            false,
            matrix.data);
    }

}
