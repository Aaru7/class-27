class slingshot {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:100,
            stiffness:0.1
        }
        this.Slingshot=Constraint.create(options)
        World.add(world,this.Slingshot)
    }
    display(){
        var pointA=this.Slingshot.bodyA.position
        var pointB=this.Slingshot.bodyB.position
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
    
}
 