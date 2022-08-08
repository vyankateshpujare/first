function Widget(partNo, size) {
     this.no = partNo;
     this.breed = size;
    }
function FormFactor(material, widget) {
    this.material = material;
    this.widget = widget;
    this.show=()=>
    {
        console.log("material : "+this.material);
        console.log("Widget : "+this.widget.no,this.widget.breed);
    }
}

    let widgetB = new Widget(101, "small");
    let widgetA = new Widget(100, "large");

    let formFactorB = new FormFactor("metal", widgetB);
    let formFactorA = new FormFactor("plastic", widgetA);
    formFactorB.show();
    formFactorA.show();