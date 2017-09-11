package Uebungen.Uebung4;

public class intersection {

        constructor(t, point, normal) {
            if(t){
                this.t = t;
            } else {
                this.t = Infinity;
            }
            this.point = point;
            this.normal = normal;
        }

        closerThan(other) {
            if(this.t < other.t) return true;
            else return false;
        }
    }

