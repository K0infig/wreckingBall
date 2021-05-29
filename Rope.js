class Rope{
    constructor(bodyA, pointB){

        var options ={
            bodyA:bodyA,
            pointB: pointB,
            length:350,
            stiffness:1
        }

        this.pointB = pointB

        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }


    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push()
        stroke("silver");
        strokeWeight(3);
        line(pointA.x,pointA.y, pointB.x, pointB.y);
        pop();
    }

}