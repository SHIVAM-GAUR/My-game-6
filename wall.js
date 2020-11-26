class wall{
	constructor(x,y,w,h)
	{
		this.body = createSprite(x,y,w,h);
		this.body.shapeColor = "yellow";
		wallgroup.add(this.body);
	}


}