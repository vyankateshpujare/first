function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize=()=>
    {
        if(this.ounces==8)
        {
            return "small";
        }
        else if(this.ounces==12)
        {
            return "medium";
        }
        else if(this.ounces==16)
        {
            return "large";
        }
    }
    this.toString=()=>
    {
        return `You have Ordered ${this.getSize()} ${this.roast} Coffee`
    }
    
    }

    let houseBlend = new Coffee("House Blend", 12);
    console.log(houseBlend.toString());
    let darkRoast = new Coffee("Dark Roast", 16);
    console.log(darkRoast.toString());