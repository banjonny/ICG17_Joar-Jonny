class AnimationNode {
    constructor(groupNode) {
        this.groupNode = groupNode;
        this.active = true;
    }

    toggleActive() {
        this.active = !this.active;
    }

}

class RotationNode extends AnimationNode {
    constructor(groupNode, axis) {
        super(groupNode);
        this.angle = 0;
        this.axis = axis;
    }

    simulate(deltaT) {
        // change the matrix of the attached
        // group node to reflect a rotation
        // TODO
    }

}
